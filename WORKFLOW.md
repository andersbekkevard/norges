# Workflow: Cloning Norges Bank's Writing Style with LLM Prompts

How this project went from an empty repo to a set of prompts that can rewrite
arbitrary text in the style of Norges Bank's Pengepolitisk rapport (PPR).

---

## Phase 1: Build the Corpus

**Goal:** Get all the raw text we need to study the target style.

### 1.1 Scrape Bankplassen blog articles

Bankplassen is Norges Bank's staff blog — less formal than the PPR but useful for
understanding institutional vocabulary and recurring topics.

- Wrote `main.py`: paginated scraper using `requests` + `BeautifulSoup`
- Fetched 74 articles from the "Finansiell stabilitet" category (2018–2026)
- Saved as markdown in `articles/`, organized by year
- Each file has frontmatter (date, authors, source URL) + body text

### 1.2 Scrape Pengepolitisk rapport (PPR)

The PPR is the primary target — 4 reports per year, each ~30k–40k tokens.

- Wrote `fetch_pprs.py`: visits each report's landing page, finds the
  "nettrapport" link (the full web version), and extracts structured text
- Fetched 12 reports (2023–2025) into `pprs/`, organized by year
- URL pattern: `norges-bank.no/.../ppr-{N}{YYYY}/nettrapport-ppr-{N}{YYYY}/`
  (with some slug variation, so the script discovers links rather than guessing)
- Output: headings, paragraphs, figure captions, tables — all in markdown

### 1.3 Build a glossary

Created `begreper.md` — a terminology reference covering housing market actors,
investment concepts, bank risk measures, and household economics. Used when
writing prompts to ensure correct domain vocabulary.

---

## Phase 2: Analyze the Style

Before writing any prompts, we studied the 12 PPR reports to identify what makes
the writing distinctive. Key observations:

**Structure of "Pengepolitiske vurderinger" (the opening section):**
- Always 5 subsections in a fixed order: international economy → domestic economy
  → labor market/prices → policy decision → outlook/risks
- Opening paragraph states the rate decision immediately, then summarizes
- Subsection 5 has a rigid internal structure: mandate statement → assessment →
  for/against → weighing → decision → forward guidance → symmetric risk scenarios

**Language patterns:**
- Heavy use of hedging vocabulary, organized by category (probability,
  approximation, attribution, temporal, comparison, scope)
- Key rule: hedge forecasts, not facts. Historical data is stated directly;
  outlook gets qualified
- Argumentation follows: assessment → evidence → counterargument ("På den annen
  side") → conditional outlook
- ~70/30 active/passive ratio
- Specific verb preferences (e.g., "tilta" not "øke kraftig", "avta" not "bli
  lavere")
- Formatting conventions: "prosent" not "%", Norwegian decimal comma,
  "tolvmånedersvekst" as one word

**Structural change in 2025:** The opening section was renamed from
"Pengepolitiske vurderinger" (with subsection headings) to "Komiteens
vurderinger" (flat narrative). The prompts target the 2023–2024 format.

---

## Phase 3: Write the Prompts

We decomposed the problem into three independent axes, then built one prompt
per axis. This avoids a single monolithic prompt and lets users compose them.

### Design conventions (shared across all prompts)

- **XML-structured** with semantic tags (`<role>`, `<examples>`, `<instructions>`, etc.)
- **Cross-lingual prompting (XLT):** meta-instructions in English (stronger
  instruction-following), examples and output in Norwegian (preserves
  target-language quality)
- **Model-agnostic** — no model-specific features
- Every example is a DO/DON'T pair with a `<why>` tag explaining the reasoning
- Authentic PPR passages used as reference anchors
- `{{PASTE_SOURCE_TEXT_HERE}}` placeholder for input

### 3.1 `style-mirror.md` — All-in-one rewrite

**Purpose:** Rewrites both language and structure in one pass. The general-purpose
option.

| Component | Contents |
|-----------|----------|
| `<role>` | Senior economist/editorial writer at Norges Bank |
| `<style-guide>` | Voice, hedging, sentence structure, argumentation pattern, vocabulary avoidance list |
| `<examples>` | 5 DO/DON'T pairs (growth, assessment, labor, risk, headings) |
| `<reference-passages>` | 5 authentic PPR excerpts (2024–2025) |
| `<formatting-rules>` | Typographic conventions |
| `<instructions>` | 7-step execution process |

~5,100 words.

### 3.2 `structure-ppr-vurderinger.md` — Structure only

**Purpose:** Reorganizes any source text into the exact 5-subsection blueprint of
"Pengepolitiske vurderinger." Does not rewrite prose — combine with
`language-rewrite.md` for that.

| Component | Contents |
|-----------|----------|
| `<role>` | Senior editor for the opening section |
| `<structural-blueprint>` | ASCII architecture diagram + numbered content sequences per subsection |
| `<topic-sentence-rules>` | 4 rules for topic sentences |
| `<examples>` | 3 DO/DON'T pairs (balanced assessment, opening paragraph, symmetric risks) |
| `<reference-section>` | Complete PPR 3/2024 "Pengepolitiske vurderinger" as ground truth |
| `<instructions>` | 7-step process; structure is non-negotiable |

~6,400 words.

### 3.3 `language-rewrite.md` — Language only

**Purpose:** Transforms sentence-level language (hedging, verbs, connectors, tone)
while preserving the input's structure exactly. Headings, paragraph order, and
organization stay untouched.

| Component | Contents |
|-----------|----------|
| `<role>` | Language editor; structural preservation stated as CRITICAL CONSTRAINT |
| `<language-rules>` | 9 subsections: sentence openings, construction, verb preferences, hedging system, causal connectors, temporal expressions, comparisons, attribution, tone |
| `<formatting-rules>` | Shared typographic conventions |
| `<examples>` | 4 DO/DON'T pairs with granular `<why>` annotations |
| `<instructions>` | 6-step process ending with structure verification |

~6,800 words. The most technically dense prompt — includes hedging density
targets (2–4 per outlook paragraph) and active/passive ratio targets (70/30).

---

## How to Use

**Quick rewrite:** Use `style-mirror.md` alone — paste source text into the
`<input>` tag.

**Maximum fidelity:**
1. Run source text through `structure-ppr-vurderinger.md` first (gets the
   organization right)
2. Run the output through `language-rewrite.md` (gets the prose right)

**Partial transforms:** Use `language-rewrite.md` alone if the structure is
already correct, or `structure-ppr-vurderinger.md` alone if the language is fine
but the organization needs work.

---

## Repo Structure

```
norges/
├── pprs/                  # 12 PPR reports (2023–2025), 4 per year
│   ├── 2023/
│   ├── 2024/
│   └── 2025/
├── articles/              # 74 Bankplassen blog articles (2018–2026)
├── prompts/               # The three rewrite prompts
│   ├── style-mirror.md
│   ├── structure-ppr-vurderinger.md
│   └── language-rewrite.md
├── scratch/               # Working notes and drafts
├── begreper.md            # Domain glossary
├── main.py                # Bankplassen article scraper
├── fetch_pprs.py          # PPR report scraper
└── CLAUDE.md              # Project instructions for Claude Code
```
