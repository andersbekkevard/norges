# PPR Forecast Charts

Generates Norges Bank PPR-style charts (2x2 grid: Styringsrente, Produksjonsgap, KPI, KPI-JAE).

## Quick start

```bash
cd graphs/
python3 -m http.server 8787
# open http://localhost:8787
```

## Editing forecasts

Open `data.js`. Your estimates are at the top in the `FORECAST` object:

```js
const FORECAST = {
  styringsrente: {
    Q1_25: 4.50,  Q2_25: 4.25,  Q3_25: 4.00,  Q4_25: 3.75,
    Q1_26: 3.50,  Q2_26: 3.40,  Q3_26: 3.35,  Q4_26: 3.30,
    Q1_27: 3.25,  Q2_27: 3.20,  Q3_27: 3.15,  Q4_27: 3.10,
  },
  // ... produksjonsgap, kpi, kpiJae
};
```

Key format: `Q{quarter}_{year_last_two_digits}` — e.g. `Q3_26` = Q3 2026.

Edit values, save, refresh browser.

## File structure

| File | What to edit |
|------|-------------|
| `data.js` | **All data.** `FORECAST` (your estimates), `PREVIOUS` (comparison line), `HISTORICAL` (solid line) |
| `index.html` | Chart styling, layout, colors |
| `highcharts.js` | Highcharts library (don't edit) |
| `exporting.js` | Export module (don't edit) |

## Sections in data.js

1. **`FORECAST`** — Your estimates (dashed blue line). Edit this.
2. **`PREVIOUS`** — Previous PPR estimates (dotted orange line). Update when comparing against a different PPR.
3. **`HISTORICAL`** — Actual observed values (solid blue line). Official Norges Bank data from PPR figure datasets + SSB.

## Data sources

- **Historical**: Norges Bank PPR 4/25 figure dataset (`data-mpr425-eng.xlsx`), cross-verified against SSB
- **Forecast**: Initialized with PPR 4/25 projections — replace with your estimates
- **Previous**: PPR 3/25 projections

See `SOURCES.md` for full audit trail with exact line numbers and API endpoints.
