# graphs2

`graphs2/` is the safe playground for generalizing the original `graphs/` project without
touching the working version.

It keeps the current Norges Bank 2x2 forecast panel as a preset, but turns the app into a
small chart studio:

- load presets
- paste or upload CSV / TSV
- map columns into chart + series + period + value
- generate a reusable JSON chart spec
- tweak titles, axes, legend labels, plot lines, and series styles
- render monthly, quarterly, yearly, dated, or numeric x-axes

## Important local-asset note

Highcharts is loaded from the local `highcharts.js` and `exporting.js` files in this folder.
That is intentional. `code.highcharts.com` was blocked behind Cloudflare, so this app does not
depend on that CDN.

## Quick start

```bash
cd graphs2
python3 -m http.server 8787
# open http://localhost:8787
```

## Main workflow

1. Load the default preset if you want the current Norges Bank PPR dashboard.
2. Paste or upload CSV if you want to start from raw data.
3. Click `Inspect CSV`, confirm the column mapping, then click `Build spec`.
4. Fine-tune the generated JSON in the spec editor if needed.
5. Use the Highcharts export menu in each chart to save PNG, SVG, or PDF output.

## JSON spec shape

The built-in editor works with a chart spec like this:

```json
{
  "meta": {
    "title": "Forsiktig normalisering av styringsrenten",
    "footnote": "1"
  },
  "layout": {
    "columns": 2,
    "chartHeight": 320
  },
  "charts": [
    {
      "title": "KPI. Firekvartalersvekst. Prosent",
      "resolution": "quarter",
      "xAxis": {
        "min": "2019-Q1",
        "max": "2028-Q1",
        "tickInterval": 2
      },
      "yAxis": {
        "min": 0,
        "max": 8,
        "tickInterval": 2,
        "plotLines": [
          {
            "value": 2,
            "color": "#FE3731",
            "width": 1.5,
            "label": { "text": "Inflasjonsmål" }
          }
        ]
      },
      "series": [
        {
          "name": "Historisk",
          "styleId": "historical",
          "values": {
            "2024-Q1": 4.0,
            "2024-Q2": 3.2
          }
        }
      ]
    }
  ]
}
```

## Supported resolutions

- `quarter`
- `month`
- `year`
- `date`
- `numeric`

Accepted period examples:

- quarter: `2025-Q1`, `Q1_25`, `2025Q1`
- month: `2025-01`, `2025/01`
- year: `2025`
- date: `2025-03-25`
- numeric: `1`, `2.5`, `10`

## CSV expectations

The importer is flexible, but the smoothest format is:

```csv
chart,series,period,value
KPI,Historisk,2024-Q1,4.0
KPI,Historisk,2024-Q2,3.2
KPI,Anslag,2025-Q1,2.7
KPI,Anslag,2025-Q2,3.0
```

`chart` and `series` are optional. If you omit them, graphs2 will build a single chart with a
single series, and you can rename it in the JSON editor afterward.
