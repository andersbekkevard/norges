# Data Sources & Audit Trail

Every data point in `data.js` is traceable to an official Norges Bank or SSB source.

## Primary Source: Norges Bank PPR Figure Datasets

Norges Bank publishes quarterly data underlying each PPR's charts as downloadable xlsx files.
These are the **authoritative source** for all 4 series at quarterly resolution.

### Downloaded files (in `../ppr_data/`)

| File | PPR | URL |
|------|-----|-----|
| `tallsett-ppr-4-24.xlsx` | PPR 4/24 | `norges-bank.no/contentassets/d5ec881d66e04f6bb66d98c0359061d7/tallsett-til-figurer-ppr-4-24.xlsx` |
| `tallsett-ppr-1-25.xlsx` | PPR 1/25 | `norges-bank.no/contentassets/43b34866438f42188c87cae82de77b1a/tallsett-ppr-1-25.xlsx` |
| `data-mpr-2-25.xlsx` | PPR 2/25 | `norges-bank.no/contentassets/5a0246e76ce74764b599d570f5be2086/data-mpr--2-25.xlsx` |
| `data-mpr-3-25.xlsx` | PPR 3/25 | `norges-bank.no/contentassets/fc03fffcebcc444ea932a86a7ccefcbf/data-mpr-3-25.xlsx` |
| `data-mpr425-eng.xlsx` | PPR 4/25 | `norges-bank.no/contentassets/30c238dbcbca4a1d9e7ed1ef86dd591f/data-mpr425-eng2.xlsx` |

All extracted to `../ppr_data/ppr_series.csv` (264 rows, 2015Q1–2028Q4).

## HISTORICAL object — PPR 4/25 dataset

All values from `PPR 4/25` rows in `ppr_series.csv`. This is the latest vintage of
Norges Bank's quarterly estimates (history + near-term).

### Styringsrente
Quarterly average policy rate (%). Matches Norges Bank's own smoothed representation
of the rate path (accounts for intra-quarter rate changes).

| Quarter | Value | CSV row (PPR 4/25) |
|---------|-------|-------------------|
| Q1 2019 | 0.78 | 2019-03-31 |
| Q2 2019 | 1.03 | 2019-06-30 |
| Q3 2019 | 1.28 | 2019-09-30 |
| Q4 2019 | 1.50 | 2019-12-31 |
| Q1 2020 | 1.34 | 2020-03-31 |
| Q2 2020 | 0.10 | 2020-06-30 |
| Q3 2020 | 0.00 | 2020-09-30 |
| Q4 2020 | 0.00 | 2020-12-31 |
| Q1 2021 | 0.00 | 2021-03-31 |
| Q2 2021 | 0.00 | 2021-06-30 |
| Q3 2021 | 0.02 | 2021-09-30 |
| Q4 2021 | 0.29 | 2021-12-31 |
| Q1 2022 | 0.52 | 2022-03-31 |
| Q2 2022 | 0.79 | 2022-06-30 |
| Q3 2022 | 1.53 | 2022-09-30 |
| Q4 2022 | 2.45 | 2022-12-31 |
| Q1 2023 | 2.77 | 2023-03-31 |
| Q2 2023 | 3.20 | 2023-06-30 |
| Q3 2023 | 3.89 | 2023-09-30 |
| Q4 2023 | 4.30 | 2023-12-31 |
| Q1 2024 | 4.50 | 2024-03-31 |
| Q2 2024 | 4.50 | 2024-06-30 |
| Q3 2024 | 4.50 | 2024-09-30 |
| Q4 2024 | 4.50 | 2024-12-31 |
| Q1 2025 | 4.50 | 2025-03-31 |
| Q2 2025 | 4.47 | 2025-06-30 |
| Q3 2025 | 4.22 | 2025-09-30 |
| Q4 2025 | 4.00 | 2025-12-31 |

### Produksjonsgap
Output gap for mainland Norway (% of potential GDP). Norges Bank model estimate.

| Quarter | Value | CSV row (PPR 4/25) |
|---------|-------|-------------------|
| Q1 2019 | 0.40 | 2019-03-31 |
| Q2 2019 | 0.55 | 2019-06-30 |
| Q3 2019 | 0.62 | 2019-09-30 |
| Q4 2019 | 0.59 | 2019-12-31 |
| Q1 2020 | -1.10 | 2020-03-31 |
| Q2 2020 | -5.20 | 2020-06-30 |
| Q3 2020 | -1.80 | 2020-09-30 |
| Q4 2020 | -1.90 | 2020-12-31 |
| Q1 2021 | -2.10 | 2021-03-31 |
| Q2 2021 | -1.20 | 2021-06-30 |
| Q3 2021 | 0.18 | 2021-09-30 |
| Q4 2021 | 1.40 | 2021-12-31 |
| Q1 2022 | 1.80 | 2022-03-31 |
| Q2 2022 | 2.00 | 2022-06-30 |
| Q3 2022 | 1.89 | 2022-09-30 |
| Q4 2022 | 1.70 | 2022-12-31 |
| Q1 2023 | 1.29 | 2023-03-31 |
| Q2 2023 | 0.80 | 2023-06-30 |
| Q3 2023 | 0.56 | 2023-09-30 |
| Q4 2023 | 0.33 | 2023-12-31 |
| Q1 2024 | 0.25 | 2024-03-31 |
| Q2 2024 | 0.14 | 2024-06-30 |
| Q3 2024 | 0.04 | 2024-09-30 |
| Q4 2024 | 0.05 | 2024-12-31 |
| Q1 2025 | 0.05 | 2025-03-31 |
| Q2 2025 | -0.02 | 2025-06-30 |
| Q3 2025 | -0.09 | 2025-09-30 |
| Q4 2025 | -0.12 | 2025-12-31 |

### KPI & KPI-JAE (firekvartalersvekst, %)
Four-quarter growth rates from the PPR figure dataset. Cross-verified against SSB:
- KPI: SSB table 03013, `Tolvmanedersendring`, `TOTAL`
- KPI-JAE: SSB table 14706, `Tolvmanedersendring`, `KPI-JAE`

(SSB values use last-month-of-quarter; PPR values are Norges Bank's quarterly representation.
Minor differences of 0.1-0.2pp exist due to different aggregation methods.)

## FORECAST object — PPR 4/25 projections

The current forecast (dashed blue line) is initialized with the PPR 4/25 quarterly
projections from 2026 Q1 onward. **Edit these values for your competition estimates.**

Source: PPR 4/25 rows in `ppr_series.csv`, dates 2026-03-31 through 2028-12-31.

## PREVIOUS object — PPR 3/25 projections

The comparison forecast (dotted orange line) uses PPR 3/25 projections.

Source: PPR 3/25 rows in `ppr_series.csv`, dates 2026-03-31 through 2028-12-31.

## Cross-verification

KPI and KPI-JAE historical data was cross-verified against SSB API:
- SSB API endpoint: `https://data.ssb.no/api/v0/no/table/03013` (KPI)
- SSB API endpoint: `https://data.ssb.no/api/v0/no/table/14706` (KPI-JAE)
- PPR Tabell 2a monthly actuals in each PPR report (see below)

### PPR Tabell 2a cross-references (monthly actuals)

| Period | KPI | KPI-JAE | PPR file | Line |
|--------|-----|---------|----------|------|
| des 2022 | 5.9 | 5.8 | ppr-1-2023.md | 1582 |
| jan-feb 2023 | 7.0/6.3 | 6.4/5.9 | ppr-1-2023.md | 1582 |
| mar-mai 2023 | 6.5/6.4/6.7 | 6.2/6.3/6.7 | ppr-2-2023.md | 1352 |
| jun-aug 2023 | 6.4/5.4/4.8 | 7.0/6.4/6.3 | ppr-3-2023.md | 1420 |
| sep-nov 2023 | 3.3/4.0/4.8 | 5.7/6.0/5.8 | ppr-4-2023.md | 1175 |
| des 2023-feb 2024 | 4.8/4.7/4.5 | 5.5/5.3/4.9 | ppr-1-2024.md | 1726 |
| mar-mai 2024 | 3.9/3.6/3.0 | 4.5/4.4/4.1 | ppr-2-2024.md | 1532 |
| jun-aug 2024 | 2.6/2.8/2.6 | 3.4/3.3/3.2 | ppr-3-2024.md | 1220 |
| sep-nov 2024 | 3.0/2.6/2.4 | 3.1/2.7/3.0 | ppr-4-2024.md | 1239 |
| des 2024-feb 2025 | 2.2/2.3/3.6 | 2.7/2.8/3.4 | ppr-1-2025.md | 988 |
| mar-mai 2025 | 2.6/2.5/3.0 | 3.4/3.0/2.8 | ppr-2-2025.md | 925 |
| jun-aug 2025 | 3.0/3.3/3.5 | 3.1/3.1/3.1 | ppr-3-2025.md | 785 |
| sep-nov 2025 | 3.6/3.1/3.0 | 3.0/3.4/3.0 | ppr-4-2025.md | 1110 |

## Styringsrente rate decisions (cross-reference)

Source: https://www.norges-bank.no/en/topics/Monetary-policy/Policy-rate/Key-policy-rate-Monetary-policy-meetings-and-changes-in-the-policy-rate/

Key dates:
- 2019: 0.75→1.00 (Mar), 1.25 (Jun), 1.50 (Sep)
- 2020: 1.00 (Mar 13), 0.25 (Mar 20), 0.00 (May 7)
- 2021: 0.25 (Sep 23), 0.50 (Dec 16)
- 2022: 0.75 (Mar), 1.25 (Jun), 1.75 (Aug), 2.25 (Sep), 2.50 (Nov), 2.75 (Dec)
- 2023: 3.00 (Mar), 3.25 (May), 3.75 (Jun), 4.25 (Sep), 4.50 (Dec)
- 2024: Hold at 4.50 all year
- 2025: Hold Q1, 4.25 (Jun), 4.00 (Sep), Hold Q4
