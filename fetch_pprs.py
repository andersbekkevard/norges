import requests
from bs4 import BeautifulSoup
from pathlib import Path
import re
import time

BASE_URL = "https://www.norges-bank.no"
PPRS_DIR = Path("pprs")

# All 12 reports: landing page paths (from listing page)
REPORTS = [
    # 2023
    {"slug": "ppr-12023", "year": "2023", "number": "1", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2023/ppr-12023/"},
    {"slug": "ppr-22023", "year": "2023", "number": "2", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2023/ppr-22023/"},
    {"slug": "ppr-32023", "year": "2023", "number": "3", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2023/ppr-32023/"},
    {"slug": "ppr-42023", "year": "2023", "number": "4", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2023/ppr-42023/"},
    # 2024
    {"slug": "ppr-12024", "year": "2024", "number": "1", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2024/ppr-12024/"},
    {"slug": "ppr-22024", "year": "2024", "number": "2", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2024/ppr-22024/"},
    {"slug": "ppr-32024", "year": "2024", "number": "3", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2024/ppr-32024/"},
    {"slug": "ppr-42024", "year": "2024", "number": "4", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2024/ppr-42024/"},
    # 2025
    {"slug": "ppr-12025", "year": "2025", "number": "1", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2025/ppr-12025/"},
    {"slug": "ppr-22025", "year": "2025", "number": "2", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2025/ppr-22025/"},
    {"slug": "ppr-32025", "year": "2025", "number": "3", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2025/pengepolitisk-rapport-32025/"},
    {"slug": "ppr-42025", "year": "2025", "number": "4", "path": "/aktuelt/publikasjoner/Pengepolitisk-rapport/2025/ppr-42025/"},
]

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Mozilla/5.0 (research project)"})


def find_nettrapport_url(landing_path: str) -> str | None:
    """Visit the report landing page and find the nettrapport link."""
    url = BASE_URL + landing_path
    print(f"  Checking landing page: {url}")
    resp = SESSION.get(url, timeout=30)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    # Look for link containing "nettrapport" or "nettformat"
    for a in soup.find_all("a", href=True):
        href = a["href"]
        text = a.get_text(strip=True).lower()
        if "nettrapport" in href or "nettformat" in text:
            if href.startswith("/"):
                return BASE_URL + href
            return href

    # Fallback: construct the nettrapport URL from the landing path
    slug = landing_path.rstrip("/").split("/")[-1]
    fallback = BASE_URL + landing_path + f"nettrapport-{slug}/"
    print(f"  No nettrapport link found, trying fallback: {fallback}")
    return fallback


def extract_report_content(url: str) -> str:
    """Fetch the nettrapport page and extract structured text content."""
    resp = SESSION.get(url, timeout=60)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    # Remove unwanted elements
    for tag in soup.select("nav, header, footer, aside, script, style, .cookie-consent, .breadcrumb, .share-buttons"):
        tag.decompose()

    # Try to find the main content area
    main = soup.select_one("main") or soup.select_one(".content") or soup.select_one("article") or soup

    parts = []
    for el in main.descendants:
        if el.name in ("h1", "h2", "h3", "h4"):
            text = el.get_text(strip=True)
            if text:
                level = int(el.name[1])
                parts.append(f"\n{'#' * level} {text}\n")
        elif el.name == "p":
            text = el.get_text(strip=True)
            if text:
                parts.append(f"\n{text}\n")
        elif el.name == "li":
            text = el.get_text(strip=True)
            if text:
                parts.append(f"- {text}")
        elif el.name == "figcaption":
            text = el.get_text(strip=True)
            if text:
                parts.append(f"\n*{text}*\n")
        elif el.name == "blockquote":
            text = el.get_text(strip=True)
            if text:
                parts.append(f"\n> {text}\n")
        elif el.name == "table":
            # Extract table as simple text
            rows = el.find_all("tr")
            for row in rows:
                cells = [td.get_text(strip=True) for td in row.find_all(["th", "td"])]
                if any(cells):
                    parts.append("| " + " | ".join(cells) + " |")

    body = "\n".join(parts)
    # Clean up excessive whitespace
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def save_report(year: str, number: str, content: str, source_url: str) -> Path:
    """Save report as markdown."""
    year_dir = PPRS_DIR / year
    year_dir.mkdir(parents=True, exist_ok=True)

    filename = f"ppr-{number}-{year}.md"
    filepath = year_dir / filename

    md = f"# Pengepolitisk rapport {number}/{year}\n\n"
    md += f"**Kilde:** {source_url}\n"
    md += "\n---\n\n"
    md += content + "\n"

    filepath.write_text(md, encoding="utf-8")
    return filepath


def main():
    PPRS_DIR.mkdir(exist_ok=True)

    for i, report in enumerate(REPORTS, 1):
        label = f"PPR {report['number']}/{report['year']}"
        print(f"\n[{i}/{len(REPORTS)}] {label}")

        try:
            nettrapport_url = find_nettrapport_url(report["path"])
            if not nettrapport_url:
                print(f"  SKIP: Could not find nettrapport URL")
                continue

            print(f"  Fetching nettrapport: {nettrapport_url}")
            content = extract_report_content(nettrapport_url)

            if len(content) < 500:
                print(f"  WARNING: Very little content extracted ({len(content)} chars)")

            path = save_report(report["year"], report["number"], content, nettrapport_url)
            print(f"  Saved to {path} ({len(content)} chars)")

        except requests.HTTPError as e:
            print(f"  ERROR (HTTP): {e}")
        except Exception as e:
            print(f"  ERROR: {e}")

        time.sleep(1)

    print(f"\nDone! Reports saved to {PPRS_DIR}/")


if __name__ == "__main__":
    main()
