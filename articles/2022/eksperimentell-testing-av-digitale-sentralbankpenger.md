# Eksperimentell testing av digitale sentralbankpenger

**Dato:** torsdag 12. mai 2022  
**Forfatter(e):** Peder Østbye  
**Kilde:** https://www.norges-bank.no/bankplassen/arkiv/2022/eksperimentell-testing-av-digitale-sentralbankpenger/

---

*Norges Bankutreder om digitale sentralbankpenger (DSP) bør innføres. Prosjektet er nå i en fase der vi blant annet driver eksperimentell testing. Dette blogginnlegget handler om hvordan testingen foregår.*

Det overordnede formålet med Norges Banks utredning er å vurdere om DSP er nødvendig for å sikre at betalingssystemet i norske kroner er sikkert, effektivt og attraktivt for den norske befolkningen. Bakteppet er Norges Banks mandat ettersentralbanklovenom å opprettholde stabil pengeverdi og fremme finansiell stabilitet og et sikkert og effektivt betalingssystem.

Utredningen har så langt identifisert at hensyn til beredskap, konkurranse og behovet for å være føre-var kan tale for at DSP innføres i Norge. I dag har kontanter en viktig rolle i beredskapen i betalingssystemet og har også bidratt til konkurranse for betalingsløsninger ved at de er et alternativ til bankkontopenger. Kontantbruken er imidlertid fallende. Det kan føre til at de ikke fylle sine funksjoner like godt som før. DSP kan supplere kontantene ved å ivareta beredskap og fremme konkurranse. Videre kan DSP bidra til å bevare nasjonal styring og kontroll, og at det fortsatt er attraktivt og sikkert å betale i norske kroner i en situasjon der mye infrastruktur kontrolleres av utenlandske aktører, og nye private pengealternativer som kryptovalutaer og «stablecoins» (kryptovalutaer som tilstreber stabil verdi) kommer til. DSP kan også bidra til at norske kroner og det norske betalingssystemet tilbyr egenskaper som nye pengealternativer kan tilby.

Med disse formålene som utgangspunkt har Norges Bank definert en rekke egenskaper som norske DSP må eller bør ha. Disse er nærmere beskrevet iNorges Bank Memo 1/2021. Der har vi også analysert teknologiske løsninger.

Den eksperimentelle testingen vi nå er i gang med og som vil vare fram til sommeren 2023, vil gi ytterligere informasjon når vi skal validere om ulike teknologier kan fremme de egenskapene vi er ute etter. Samtidig vil testingen synliggjøre økonomiske og regulatoriske forhold knyttet til teknologiene. Den eksperimentelle testingen er viktig for å kunne vurdere om arbeidet med DSP bør videreføres, og hvilken teknologi som i så fall er mest aktuell for videre testing. I den eksperimentelle testingen benyttes det ikke ekte penger i reelle betalingssituasjoner.

I valideringsarbeidet er Norges Bank i dialog med en rekke aktører, myndigheter og andre sentralbanker. Vi redegjør også for arbeidet på mange konferanser og seminarer.

## Metode i den eksperimentelle testingen

I Norges Bank Memo 1/2021 ble det anbefalt å teste flere teknologier for å lære om egenskapene ved forskjellige teknologier. En teknologi som det ble uttrykt særlig behov for å teste, var tokenbasert teknologi. Den har noen fellestrekk med teknologien som brukes i kryptovalutaer/blokkjeder, og som bygger videre på innovasjoner i kryptografi og desentraliserte systemer gjennom flere tiår. Denne teknologien har potensial til å replisere viktige egenskaper ved kontanter og samtidig gjøre det mulig å benytte sentralbankpenger til elektronisk handel. Samtidig kan digitale tokenbaserte penger tilby innovativ funksjonalitet som for eksempel programmerbarhet som blant annet innebærer at det kan programmeres forhåndsdefinerte betingelser knyttet til gjennomføring av betalinger. Det er imidlertid usikkerhet knyttet til tokenbasert teknologi, og det er behov for mer kunnskap. Derfor har denne teknologien fått særlig oppmerksomhet i den pågående eksperimentelle testingen

Testingen så langt er inndelt i tre arbeidsstrømmer illustrert ved figuren under.

Hver arbeidsstrøm genererer en rekke test-caser som kan brukes til å validere teknologiske løsninger mot egenskapene som DSP må ha. Testmetodene varierer avhengig av hva som skal testes. I noen tilfeller må det bygges prototyper for å kunne teste hvordan teknologien virker i drift. I andre tilfeller kan modellering og simulering være mer effektivt.

Testingen innebærer at Norges Bank både finansierer utviklingsprosjekter og samarbeider med alliansepartnere som ønsker og har kapasitet til å delta i testingen. Slike partnere kan være banker og andre betalingsaktører, herunder fintech-selskaper. Tekniske sandkasser og «hackatons» kan legge til rette for at et mangfold av aktører og at andre interessenter kan delta i testingen.

## Fokus på åpen kildekode

I arbeidet med eksperimentell testing har banken valgt å i hovedsak benytte teknologi basert pååpen kildekode. Dette har flere grunner. Mye av teknologien bak og rundt kryptovalutaer og tokenbaserte løsninger er basert på åpen kildekode og det finnes mange utviklingsmiljøer.

Åpen kildekode gir også frihet til å gjennomføre testing uten å være avhengig av tilgang til enkeltaktørers proprietære teknologier. Det gjør samarbeidet med leverandører og alliansepartnere enklere og mer fleksibelt. Videre er det utviklet en rekke tilgjengelige matematiske modeller og simuleringsverktøy som kan supplere testingen.

Selv om ikke åpen kildekode nødvendigvis vil bli valgt for en endelig løsning for DSP, kan man lære mye gjennom åpen kildekode. Som en parallell kan det vises til at mange lærer programmering gjennom åpen kildekodeverktøy som Python, som er overførbart til mer proprietære programmeringsverktøy som Matlab.

## Ethereum-teknologi

Den første arbeidsstrømmen er å utvikle en prototypeinfrastruktur basert på Ethereum-teknologi, dvs. teknologien som brukes i kryptovalutasystemet Ethereum. Formålet med denne arbeidsstrømmen er å etablere en prototype for en kjerneinfrastruktur for utstedelse, distribusjon og destruksjon av DSP som banker og andre aktører kan knytte seg til for eksperimentell testing. Prototypen skal benyttes til å teste en rekke av de viktige egenskapene for DSP.

Penger er representert ved en såkaltERC-20-token. Dette innebærer at penger er representert som balanser på registeradresser representert ved kryptografiske koder («kontoer»).  Betalingssystemet er implementert i et testnettverk av noder som benytter programvarenHyperledger Besu. Dette er et privat nettverk i motsetning til nettverket i kryptovalutasystemet Ethereum. Dette legger også til rette for den programmeringsfunksjonaliteten som tilbys på Ethereum (gjennom«Ethereum Virtual Machine»-EVM).

Teknologien er basert på åpen kildekode, og det er utviklet mye komplementær programvare (også basert på åpen kildekode) som for eksempel digitale lommebøker («wallets»), personvernløsninger, analyseverktøy og systemer for regulatorisk etterlevelse. Mange såkalte «stablecoins» og infrastrukturer innen blokkjedeteknologi har valgt å basere seg på blant annet ERC-20 og Ethereums programmeringsspråk, slik at teknologien er velutprøvd. Det er derfor en rask utvikling av ulike infrastrukturer som kan kombineres med Ethereum-teknologi. Hyperledger Besu og ERC-20-token benyttes også av andre sentralbanker og BIS Innovation Hub i testing av DSP.

Det norske fintech-selskapetNahmiifikk etter en anbudskonkurranse i oppgave å utvikle en prototypeinfrastruktur basert på denne teknologien.  Prototypen skal legge til rette for at Norges Bank kan utstede, distribuere og destruere DSP. Vi planlegger ytterligere utviklingsprosjekter basert på samme teknologi. Teknologien vil være særlig relevant for samarbeid med alliansepartnere (herunder banker) og som basis for en sandkasse. Planen er at prototypeinfrastrukturen skal tilgjengeliggjøres som åpen kildekode – forhåpentligvis i løpet av sommeren 2022. Det vil tilrettelegge for at alliansepartnere og publikum mer bredt kan delta i testingen.

## OpenCBDC/ Project Hamilton

OpenCBDC/Project Hamiltoner et samarbeid mellom den amerikanske sentralbankens avdeling i Boston (Boston FED) ogMIT Digital currency initiative. Dette er et prosjekt som skal gå gjennom flere faser. I en første fase har de testet kapasiteten til noen alternative infrastrukturer. I denne løsningen har penger en litt annen representasjon enn i Ethereum-teknologien omtalt over. Verdien er representert ved registerenheter som eieren disponere ved hjelp av kryptografiske koder som følger en gyldig transaksjonskjede (såkalt unspent transaction output – UTXO) fra opprinnelig utstedelse. Denne måten å representere verdi på benyttes i ulike Bitcoin-varianter og i flere andre kryptovalutaer. Det er fordeler og ulemper med de to metodene å representere verdi på, men det går an å kombinere disse teknologiene med ulike broer mellom systemene, slik at man kan utnytte det beste fra begge to. Det kan også være aktuelt å teste slike broer.

Det amerikanske prosjektet er utviklet som åpen kildekode som er tilgjengeliggjort for testing. Flere sentralbanker har knyttet seg til seg dette prosjektet. Testing av programvare utviklet i «Project Hamilton» vil også inngå som en arbeidsstrøm i Norges Banks eksperimentelle testing. Siden teknologien er lite utviklet, og har en akademisk karakter, kan den særlig egne seg for samarbeid med akademiske institusjoner.

## Hyllevareleverandører

Mange aktører har utviklet helt eller delvis ferdige løsninger som kan brukes for DSP. Mange av disse har vært testet i piloter hos andre sentralbanker, ofte i samarbeid medBIS Innovation Hubog noen av disse er brukt i løsninger som er i faktisk bruk. Noen av løsningene er basert på Ethereum-teknologi, andre er basert på varianter av «UTXO», mens noen har utviklet helt egne teknologier. Løsningene har ulike innslag av proprietær teknologi. Noen er helt basert på åpen kildekode, noen er i hovedsak proprietære, mens andre benytter åpen kildekode med innslag av proprietær teknologi.

Som en del av den eksperimentelle testingen vil teknologien til noen hyllevareleverandører bli testet på overordnet nivå. Da vil vi få innsikt i teknologien, hvordan løsningene fungerer ende-til-ende og teknologiene kan «benchmarkes» mot programvaren vi har fått utviklet. De vil blant annet kunne tjene som en referanseramme for de andre teknologiene som testes. Det er imidlertid ikke aktuelt å basere samarbeid med alliansepartnere, sandkasser og «hackatons» i den eksperimentelle testingen på proprietær teknologi.

## Oppsummering

Norges Bank er godt i gang med den eksperimentelle tekniske testingen. Utgangspunkt for testingen er programvare med åpen kildekode. Det er ikke et signal om at teknologien for en eventuell norsk variant av DSP vil være basert på åpen kildekode, men det er et godt utgangspunkt for å lære mest mulig i samarbeid med utviklere og alliansepartnere. Vår ambisjon er at den eksperimentelle testingen vil engasjere både aktører og publikum mer bredt, og bidra til at Norges Bank også i fremtiden kan utføre sitt samfunnsoppdrag på en god måte.

Bankplassen er en fagblogg av ansatte i Norges Bank. Synspunktene som uttrykkes her representerer forfatternes syn og kan ikke nødvendigvis tillegges Norges Bank. Har du spørsmål eller innspill, kontakt oss gjerne på bankplassen@norges-bank.no.
