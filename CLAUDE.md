# Norges Bank PPR Prompt Engineering

## Project Purpose

Build a set of reusable LLM prompts that can transform arbitrary text into the style and
structure of Norges Bank's **Pengepolitisk rapport** (Monetary Policy Report, PPR).

## Source Material

- **`pprs/`** — 12 complete PPR reports scraped from norges-bank.no, covering 2023–2025
  (4 per year). These are `.md` files organized by year.
- Reports contain: "Pengepolitiske vurderinger" / "Komiteens vurderinger" (opening
  assessment), chapter sections on international economy, domestic economy, inflation,
  labor market, forecasts, and risk analysis.
- **Structural change in 2025:** The opening section was renamed from "Pengepolitiske
  vurderinger" (with ### subsection headings) to "Komiteens vurderinger" (flat narrative,
  no subsections). The prompts currently focus on the 2023–2024 format with subsections.

## Output: Prompt Files

Located in **`prompts/`**:

| File | Purpose |
|------|---------|
| `style-mirror.md` | **Combined style+structure prompt.** Rewrites any text to match Norges Bank prose style and general PPR organization. Good all-purpose prompt. |
| `structure-ppr-vurderinger.md` | **Structure-only prompt.** Reorganizes text into the exact 5-subsection blueprint of the "Pengepolitiske vurderinger" opening section. Focuses on organizational blueprint, not prose. |
| `language-rewrite.md` | **Language-only prompt.** Transforms sentence construction, word choice, tone, hedging, and register to match PPR prose — WITHOUT changing the text's structure. Preserves headings, paragraph order, and organization exactly. |

## Prompt Design Conventions

- **XML-structured** with semantic tags (`<role>`, `<style-guide>`, `<examples>`, etc.)
- **Meta-instructions in English**, examples and output in Norwegian (based on XLT
  research — English activates stronger instruction-following, Norwegian preserves
  target-language quality)
- **Model-agnostic** — no model-specific features
- Each prompt contains: role definition, detailed rules, DO/DON'T example pairs with
  `<why>` explanations, authentic reference passages from the PPRs, and step-by-step
  instructions
- Prompts can be combined (e.g., use both style-mirror and structure prompts together)

## Working Notes

- When creating new prompts, lean on existing ones — reuse `<style-guide>`, `<formatting-rules>`,
  and `<reference-passages>` rather than duplicating.
- Use subagents (sonnet/haiku) for large parsing tasks across the 12 report files.
- The PPR files are large (30k–40k tokens each). Read targeted sections rather than
  full files.

## Related Files

- `../fetch_pprs.py` — Script for scraping PPR reports from norges-bank.no
- `../main.py` — Main entry point
- `../TASKS.md` — Project task tracking
