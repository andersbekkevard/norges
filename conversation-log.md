# Conversation Log: Building the PPR Prompts

The actual prompts I gave Claude Code to go from an empty `pprs/` folder to three
finished prompt files. This was a single session on ~Feb 10 2026.

---

## Message 1 — Set the frame

> i denne mappen har du eksempler på alle pengepolitiske rapporter fra norges bank
> de siste 3 årene. din oppgave er å lage prompts og konstruere kontekst til llmer
> for å speile skrivemåten til norges bank. jeg tenker da både på språk (orlyd,
> 'vibe', ordbruk, struktur) men også på overordnet struktur, som "akademisk
> skriving: svar, deretter begrunn alle parametre, god drøfting for og imot" samt
> struktur med overskrifter: en overskrift per avsnitt (ofte). din output skal være:
>
> - for hver oppgave jeg gir deg, konstruer en .md fil med kontekst jeg kan gi til en llm
> - den skal være xml-formatert, med passelige xml tags. bruk også md formatering.
>   følg prompting best practice fra vertex-ai docs, claude docs etc
> - den skal inneholde både eksempler (tilstrekkelig eksempelavsnitt slik at llmen
>   får god kontekst, men at vi ikke ødelegger kontekstvinduet)
> - konkrete eksempler: (DO, og DONT)
> - instruksjoner, altså "du skal skrive på _____ og ____ måte" etc.
>
> er formatet forstått? svar med ditt inntrykk, før jeg videre gir deg en konkret
> promptoppgave

**What this did:** Established the entire project scope — Claude now understood it
should read the PPR corpus, analyze the writing style, and produce reusable prompt
files as output. Also set the format: XML-structured, with DO/DON'T examples,
model-agnostic.

---

## Message 2 — Confirm readiness

> har du noen spørsmål

**What this did:** Claude asked clarifying questions about target model, language
for meta-instructions, and scope. This led to the design decisions locked in
Message 3.

---

## Message 3 — Lock design decisions

> 1. modellagnostisk
> 2. eksempler på norsk, metainstruksjoner på engelsk
> 3. ja — klar?

*(Also included a pasted reference passage from XLT research on cross-lingual
prompting — content no longer in cache.)*

**What this did:** Locked three critical design decisions that shaped all subsequent
prompts: (1) no model-specific features, (2) the XLT pattern (English instructions,
Norwegian examples/output), (3) green light to proceed.

---

## Message 4 — First prompt: `style-mirror.md`

> skriv en generell "språkmirror"-prompt. altså: hensikten er at jeg skal kunne gi
> llmen en tekst, og den prompten, og teksten skal bli gjenskrevet i norges bank stil

**What this did:** Produced `prompts/style-mirror.md` — the all-in-one rewrite
prompt. Claude spawned subagents to read the 12 PPR files in parallel, analyzing
both structure and language patterns, then synthesized a ~5,100-word prompt.

### Subagent work triggered by this message

**Subagent 1 — Structural analysis (2023 + early 2024):**
Read "Pengepolitiske vurderinger" from PPR 1–4/2023 and PPR 1–2/2024. Found the
consistent 5-subsection pattern: international → financial conditions → domestic →
inflation → policy decision. Every opening sentence announces the rate decision;
every closing sentence gives forward guidance.

**Subagent 2 — Deep linguistic analysis:**
Read sentence-level patterns across 2023–2025 PPRs. Found: subject-first nominal
openings ("Prisveksten har..."), 20–35 word analytical sentences, ~70/30
active/passive split, heavy hedging via modal verbs and adverbs, pervasive
nominalized abstractions ("veksten i", "utviklingen i").

---

## Message 5 — Second prompt: `structure-ppr-vurderinger.md`

> videre: for lesing av filene og store "parsing-oppgaver" husk på å bruk subagents
> med billigere modeller (sonnet/haiku). og: når jeg gir deg i oppgave å lage flere
> prompts så må du ikke starte på scratch, du kan lene deg på eksisterende, for
> eksempel om det er noe overlapp.
>
> neste oppgave blir: lag en prompt som skriver om en tekst til å speile strukturen
> til pengepolitiske rapporter, spesielt de første sidene (...) altså under
> "pengepolitiske vurderinger". denne skal altså ikke være så rettet mot ordbruk, men
> skal kunne gjenskape nøyaktig den samme strukturen som i de "pengepolitisk
> vurderinger" delene av teksten: altså vurdering, et avsnitt per faktor, konklusjon,
> med topic sentences etc etc. dette promptet skal matche strukturen i teksten perfekt

*(Also included a pasted example of the target structure — content no longer in
cache.)*

**What this did:** Produced `prompts/structure-ppr-vurderinger.md` — the
structure-only prompt. Also set two process rules: (1) use cheap subagents for
file reading, (2) reuse components from the first prompt rather than starting
from scratch.

### Subagent work triggered by this message

**Subagent 3 — Structural analysis (late 2024 + 2025):**
Read PPR 3–4/2024 and PPR 1–4/2025. Key discovery: the section was renamed from
"Pengepolitiske vurderinger" (with ### subsection headings) to "Komiteens
vurderinger" (flat narrative, no subsections) between PPR 4/2024 and PPR 1/2025.
This informed the prompt's focus on the 2023–2024 format.

---

## Message 6 — Document the project

> write a CLAUDE.md explaining the task at hand, and the source material and what we
> are doing

**What this did:** Produced `CLAUDE.md` — project instructions for Claude Code,
so future sessions would understand the project context without re-explanation.

---

## Message 7 — Third prompt: `language-rewrite.md`

> lage en ny promptinginstruksjon, som kunn fikser språket til en tekst. altså ikke
> struktur, men setningsoppbyggning, ordvalg, tone osv

**What this did:** Produced `prompts/language-rewrite.md` — the language-only
prompt. This is the complement to `structure-ppr-vurderinger.md`: it transforms
prose style while preserving structure exactly. At ~6,800 words, it's the most
technically dense prompt, with hedging density targets and active/passive ratio
specifications.

---

## The Pattern

Seven messages. Three prompts. The workflow was:

1. **Frame** (msg 1–3): Define the task, format, and design constraints
2. **Build iteratively** (msg 4, 5, 7): One prompt per message, each building on
   the last. Subagents handle the corpus analysis; the main agent synthesizes.
3. **Document** (msg 6): Capture project context for future sessions

Each prompt message followed the same implicit contract: I describe *what* the
prompt should do and *what axis* it covers (style vs. structure vs. language), and
Claude handles the corpus analysis, pattern extraction, example selection, and
prompt construction autonomously.
