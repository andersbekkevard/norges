// ============================================================
//  PPR FORECAST DATA
//
//  EDIT YOUR ESTIMATES HERE.
//  Format: { "Q1_25": value, "Q2_25": value, ... }
//  Quarters: Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dec
// ============================================================

// ===================
//  YOUR ESTIMATES (edit these)
// ===================

const FORECAST = {
  styringsrente: {
    Q1_26: 4.00,  Q2_26: 3.92,  Q3_26: 3.83,  Q4_26: 3.71,
    Q1_27: 3.57,  Q2_27: 3.45,  Q3_27: 3.37,  Q4_27: 3.31,
    Q1_28: 3.26,  Q2_28: 3.24,  Q3_28: 3.22,  Q4_28: 3.20,
  },
  produksjonsgap: {
    Q1_26: -0.15,  Q2_26: -0.18,  Q3_26: -0.26,  Q4_26: -0.35,
    Q1_27: -0.43,  Q2_27: -0.46,  Q3_27: -0.45,  Q4_27: -0.39,
    Q1_28: -0.34,  Q2_28: -0.29,  Q3_28: -0.25,  Q4_28: -0.21,
  },
  kpi: {
    Q1_26: 2.38,  Q2_26: 2.33,  Q3_26: 2.22,  Q4_26: 2.49,
    Q1_27: 2.44,  Q2_27: 2.71,  Q3_27: 2.76,  Q4_27: 2.35,
    Q1_28: 2.29,  Q2_28: 2.23,  Q3_28: 2.19,  Q4_28: 2.15,
  },
  kpiJae: {
    Q1_26: 2.74,  Q2_26: 2.84,  Q3_26: 2.78,  Q4_26: 2.62,
    Q1_27: 2.56,  Q2_27: 2.47,  Q3_27: 2.40,  Q4_27: 2.35,
    Q1_28: 2.29,  Q2_28: 2.23,  Q3_28: 2.19,  Q4_28: 2.15,
  },
};

// ===================
//  PREVIOUS PPR ESTIMATES (for comparison dotted line)
//  Source: PPR 3/25 figure dataset (data-mpr-3-25.xlsx)
// ===================

const PREVIOUS = {
  styringsrente: {
    Q1_26: 4.00,  Q2_26: 3.92,  Q3_26: 3.85,  Q4_26: 3.74,
    Q1_27: 3.61,  Q2_27: 3.50,  Q3_27: 3.41,  Q4_27: 3.34,
    Q1_28: 3.30,  Q2_28: 3.27,  Q3_28: 3.24,  Q4_28: 3.21,
  },
  produksjonsgap: {
    Q1_26:  0.02,  Q2_26: -0.02,  Q3_26: -0.08,  Q4_26: -0.15,
    Q1_27: -0.21,  Q2_27: -0.26,  Q3_27: -0.28,  Q4_27: -0.26,
    Q1_28: -0.24,  Q2_28: -0.22,  Q3_28: -0.20,  Q4_28: -0.18,
  },
  kpi: {
    Q1_26: 1.86,  Q2_26: 2.17,  Q3_26: 2.13,  Q4_26: 2.61,
    Q1_27: 2.64,  Q2_27: 2.51,  Q3_27: 2.48,  Q4_27: 2.19,
    Q1_28: 2.13,  Q2_28: 2.09,  Q3_28: 2.07,  Q4_28: 2.06,
  },
  kpiJae: {
    Q1_26: 2.85,  Q2_26: 2.96,  Q3_26: 2.89,  Q4_26: 2.66,
    Q1_27: 2.49,  Q2_27: 2.36,  Q3_27: 2.26,  Q4_27: 2.19,
    Q1_28: 2.13,  Q2_28: 2.09,  Q3_28: 2.08,  Q4_28: 2.06,
  },
};

// ============================================================
//  HISTORICAL DATA
//
//  Source: Norges Bank official PPR figure datasets (xlsx)
//  Downloaded from norges-bank.no, extracted to ppr_data/ppr_series.csv
//  Historical values from PPR 4/25 dataset (latest vintage).
//  See SOURCES.md for full audit trail.
// ============================================================

const HISTORICAL = {
  styringsrente: {
    Q1_19: 0.78,  Q2_19: 1.03,  Q3_19: 1.28,  Q4_19: 1.50,
    Q1_20: 1.34,  Q2_20: 0.10,  Q3_20: 0.00,  Q4_20: 0.00,
    Q1_21: 0.00,  Q2_21: 0.00,  Q3_21: 0.02,  Q4_21: 0.29,
    Q1_22: 0.52,  Q2_22: 0.79,  Q3_22: 1.53,  Q4_22: 2.45,
    Q1_23: 2.77,  Q2_23: 3.20,  Q3_23: 3.89,  Q4_23: 4.30,
    Q1_24: 4.50,  Q2_24: 4.50,  Q3_24: 4.50,  Q4_24: 4.50,
    Q1_25: 4.50,  Q2_25: 4.47,  Q3_25: 4.22,  Q4_25: 4.00,
  },

  produksjonsgap: {
    Q1_19:  0.40,  Q2_19:  0.55,  Q3_19:  0.62,  Q4_19:  0.59,
    Q1_20: -1.10,  Q2_20: -5.20,  Q3_20: -1.80,  Q4_20: -1.90,
    Q1_21: -2.10,  Q2_21: -1.20,  Q3_21:  0.18,  Q4_21:  1.40,
    Q1_22:  1.80,  Q2_22:  2.00,  Q3_22:  1.89,  Q4_22:  1.70,
    Q1_23:  1.29,  Q2_23:  0.80,  Q3_23:  0.56,  Q4_23:  0.33,
    Q1_24:  0.25,  Q2_24:  0.14,  Q3_24:  0.04,  Q4_24:  0.05,
    Q1_25:  0.05,  Q2_25: -0.02,  Q3_25: -0.09,  Q4_25: -0.12,
  },

  kpi: {
    Q1_19: 2.99,  Q2_19: 2.47,  Q3_19: 1.62,  Q4_19: 1.62,
    Q1_20: 1.15,  Q2_20: 1.16,  Q3_20: 1.53,  Q4_20: 1.30,
    Q1_21: 2.99,  Q2_21: 2.79,  Q3_21: 3.49,  Q4_21: 4.64,
    Q1_22: 3.88,  Q2_22: 5.73,  Q3_22: 6.78,  Q4_22: 6.64,
    Q1_23: 6.65,  Q2_23: 6.38,  Q3_23: 4.59,  Q4_23: 4.55,
    Q1_24: 4.35,  Q2_24: 3.03,  Q3_24: 2.85,  Q4_24: 2.41,
    Q1_25: 2.79,  Q2_25: 2.80,  Q3_25: 3.50,  Q4_25: 3.01,
  },

  kpiJae: {
    Q1_19: 2.50,  Q2_19: 2.39,  Q3_19: 2.10,  Q4_19: 1.96,
    Q1_20: 2.41,  Q2_20: 2.95,  Q3_20: 3.47,  Q4_20: 3.14,
    Q1_21: 2.69,  Q2_21: 1.58,  Q3_21: 1.13,  Q4_21: 1.36,
    Q1_22: 1.85,  Q2_22: 3.27,  Q3_22: 4.84,  Q4_22: 5.78,
    Q1_23: 6.23,  Q2_23: 6.67,  Q3_23: 6.04,  Q4_23: 5.76,
    Q1_24: 4.89,  Q2_24: 3.93,  Q3_24: 3.22,  Q4_24: 2.82,
    Q1_25: 3.19,  Q2_25: 2.98,  Q3_25: 3.09,  Q4_25: 3.12,
  },
};


// ============================================================
//  CONVERTER — turns the readable objects above into
//  [[year_decimal, value]] arrays for Highcharts
// ============================================================

const Q_TO_DECIMAL = { Q1: 0.0, Q2: 0.25, Q3: 0.5, Q4: 0.75 };

function toSeries(obj) {
  return Object.entries(obj)
    .map(([key, val]) => {
      const [q, yr] = key.split('_');
      const year = 2000 + parseInt(yr);
      return [year + Q_TO_DECIMAL[q], val];
    })
    .sort((a, b) => a[0] - b[0]);
}

// Exported for use by index.html
const DATA = {
  styringsrente: {
    actual:   toSeries(HISTORICAL.styringsrente),
    forecast: toSeries(FORECAST.styringsrente),
    previous: toSeries(PREVIOUS.styringsrente),
  },
  produksjonsgap: {
    actual:   toSeries(HISTORICAL.produksjonsgap),
    forecast: toSeries(FORECAST.produksjonsgap),
    previous: toSeries(PREVIOUS.produksjonsgap),
  },
  kpi: {
    actual:   toSeries(HISTORICAL.kpi),
    forecast: toSeries(FORECAST.kpi),
    previous: toSeries(PREVIOUS.kpi),
  },
  kpiJae: {
    actual:   toSeries(HISTORICAL.kpiJae),
    forecast: toSeries(FORECAST.kpiJae),
    previous: toSeries(PREVIOUS.kpiJae),
  },
};
