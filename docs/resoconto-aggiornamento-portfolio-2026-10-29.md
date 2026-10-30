# Aggiornamento locale del portfolio — 29 ottobre 2026

Il lavoro iniziale riguarda le tre schede già presenti: magistrale/Swiss Plasma Center–EPFL, tesi triennale TRUST e tirocinio PVT in Svezia. Tutti i materiali del sito sono salvati nella cartella sorgente del portfolio. Le modifiche di questa fase restano locali: non sono state inviate a GitHub né pubblicate.

## Documenti inseriti

I PDF si trovano in `public/documents/`. Le pagine del sito li richiamano attraverso il percorso di base previsto per GitHub Pages, così i collegamenti funzionano anche sotto `/my_portfolio/`.

| Documento nel sito | Versione originale scelta | Data della versione | Pagine | Preparazione |
| --- | --- | --- | ---: | --- |
| Tesi magistrale | `Thesis_David_Battistelli.pdf`, confrontato con `Thesis_David_Battistelli.docx` | Word 15/10/2026, ore 10:27; PDF 15/10/2026, ore 11:06 | 79 | Copia identica del PDF originale. È successivo alla v1.19 del 05/10 presente nella cartella CV. |
| Presentazione magistrale | `PPT_David_Battistelli.pptx` | 19/10/2026, ore 16:52 | 25 | Nuova esportazione delle slide in PDF. Non sono state incluse le pagine delle note del relatore. |
| Tesi triennale | `David Battistelli.pdf`, confrontato con `David Battistelli - Tesi Triennale_v17.4.docx` | Word 25/11/2024, ore 15:56; PDF 25/11/2024, ore 16:00 | 29 | Copia identica del PDF esportato dopo la v17.4. Escluso il PDF v17 più vecchio. |
| Poster triennale | `Battistelli Poster Triennale.pdf` | PDF creato il 26/11/2024 | 1 | Copia identica. La data interna del PDF è successiva alle due copie PowerPoint del 25/11/2024; la data di modifica del file nel 2026 deriva dalla copia successiva. |
| Report PVT | `PVT_Thermal_Model_Report.pdf`, esportazione Word aggiornata da David | Word 29/10/2026, ore 18:42; PDF 29/10/2026, ore 18:43 | 11 | Copia identica dell’ultima esportazione Microsoft Word. Sorgente modificabile conservato in `docs/sources/PVT_Thermal_Model_Report.docx`; 33 formule e 94 valori numerici verificati. |
| Sviluppo prodotto — estrattore | `Virtual Prototyping_David Battistelli_Simone Notazio_Vincenzo Rapposelli.pdf`, archivio Virtual Prototyping | Data del file nell’archivio: 24/01/2026 | 33 | Copia identica della relazione di gruppo; controlli tecnici delle tabelle ancora da completare prima della pubblicazione. |
| CV | `David_Battistelli_CV_formattato.docx` | 29/10/2026, ore 09:54 | 1 | Nuovo PDF dal Word formattato aggiornato. Non è stato usato il vecchio PDF del CV. |

Gli orari sono indicati nel fuso Europe/Rome. La selezione si basa sul confronto tra nomi, revisioni, contenuti, metadati interni e date di esportazione; non soltanto sulla data di copia del file. Per le tesi è stato confrontato anche il testo dei Word con quello dei PDF.

Il CV e la presentazione magistrale sono stati esportati con LibreOffice già installato, usando un profilo temporaneo separato. Il report PVT è stato revisionato direttamente dal nuovo PDF indicato da David, con una copia distinta dall’originale. Sono state controllate visivamente le pagine del CV, la presentazione e tutte le nove pagine del report. I documenti originali non sono stati riscritti.

Il file `docs/documenti-provenienza.json` registra per ogni documento la sorgente, la data, il metodo di preparazione, il numero di pagine e le impronte SHA-256. Le tre copie di PDF esistenti hanno la stessa impronta degli originali; per i PDF esportati sono registrate separatamente le impronte della sorgente Office e del risultato.

## Modifiche al sito

- Aggiunti pulsanti visibili in apertura delle schede: presentazione e tesi per la magistrale, poster e tesi per la triennale, report tecnico per il PVT.
- Aggiunto in homepage il pulsante **Download CV (PDF)**, collegato alla versione aggiornata di una pagina.
- Identificata chiaramente la prima scheda come **Master’s Thesis**, mantenendo in evidenza **Swiss Plasma Center–EPFL**.
- Sostituite le fotografie generiche con figure tratte dai documenti effettivamente collegati: configurazioni di equilibrio dalla slide 7 della magistrale, poster finale della triennale e rete delle resistenze termiche riprodotta come Figura 1 del report PVT ricostruito.
- Inserite le figure anche nelle pagine di dettaglio, con didascalia della provenienza.
- Reso più scuro lo sfondo dei titoli per migliorare la lettura, soprattutto su telefono.
- Ridotte le ripetizioni tra introduzione, attività e risultati, usando le sezioni **Overview**, **Method & Contribution** e **Results & Deliverables**.
- Mantenuti gli indirizzi delle tre schede e l'impostazione grafica generale.

## Verifiche eseguite

- Controllo TypeScript, compilazione di produzione e lint: superati.
- Sei PDF leggibili, non cifrati e con conteggio delle pagine verificato.
- Impronte degli originali controllate prima e dopo la preparazione: invariati.
- Copie dei tre PDF già disponibili: identiche agli originali.
- Controllo nel browser a larghezze di 1440, 390 e 320 pixel: collegamenti ai sei PDF funzionanti, download del CV riuscito, figure caricate, apertura delle tre schede e margini verificati, nessun errore di esecuzione rilevato.
- Revisione indipendente delle modifiche: nessun problema sostanziale rilevato.

## Ricostruzione del report PVT in Word — versione 2

Su richiesta di David il report è stato ricostruito dal PDF finale `Final Report.pdf` in un Word interamente modificabile, poi esportato in PDF. Questa versione sostituisce nel sito la precedente revisione effettuata sulle posizioni fisse del PDF.

La nuova impaginazione comprende undici pagine, trentatré formule native Word e un’appendice con tutti i novantaquattro valori della fonte. Sono state applicate le indicazioni editoriali della tesi: inglese accademico e discorsivo, gerarchia dei titoli, definizione delle quantità, distinzione tra dati imposti e risultati, didascalie, numerazione e controllo del documento renderizzato. La tipografia usa Calibri 11 con titoli gerarchici e tabelle coerenti.

Sono state corrette etichette dimensionali chiaramente errate senza modificare i valori numerici: conducibilità, resistenza per unità di area, calore specifico e coefficiente radiativo. Le ambiguità del modello relative a viscosità, U₂, densità dell’acqua e temperatura elettrica imposta sono raccolte nella sezione sui limiti. I risultati non sono stati ricalcolati e non viene attribuita al lavoro una validazione sperimentale.

Word, PDF e note di revisione sono salvati come nuove versioni nella cartella MG/Report; il PDF originale e la precedente revisione sono conservati. Il PDF del sito è aggiornato in locale. Tutte le pagine sono state controllate e la revisione indipendente finale non ha rilevato problemi sostanziali.

## Ultimo aggiornamento dei file PVT — ore 18:43

Il PDF ora collegato nel sito è la copia identica di `PVT_Thermal_Model_Report.pdf`, esportato da David con Microsoft Word il 29/10/2026 alle 18:43 dopo le correzioni all’allineamento delle formule. Sostituisce l’esportazione precedente nello stesso percorso `public/documents/pvt-thermal-analysis-report.pdf`, mantenendo valido il pulsante Technical report.

Il Word aggiornato delle 18:42 è conservato in `docs/sources/PVT_Thermal_Model_Report.docx`. Il PDF contiene undici pagine e tutti i novantaquattro valori numerici; il Word conserva trentatré formule native. Entrambe le copie sono identiche ai file forniti da David. Le date e le impronte dei due file sono registrate nel documento di provenienza. Questo aggiornamento riguarda soltanto i materiali PVT.

## Nuova scheda — sviluppo di prodotto da zero

Aggiunta soltanto la scheda **Product Development: From Concept to Virtual Prototype**, basata sul progetto accademico di Virtual Prototyping dell’estrattore di oli essenziali. David ha confermato di aver curato tutte le fasi: design, analisi termiche e meccaniche e valutazione del ciclo di vita. La pagina evidenzia questo percorso completo di sviluppo, mantenendo il contesto di gruppo e il risultato come prototipo virtuale.

La scheda comprende requisiti e concept, CAD e materiali, modelli termici MATLAB, simulazioni ANSYS e LCA preliminare con SOLIDWORKS Sustainability. La valutazione ambientale resta definita preliminare perché la relazione non modella l’energia durante l’uso. Non vengono attribuite al progetto prove sperimentali, certificazioni o produzione industriale.

Il PDF originale di trentatré pagine è copiato senza modifiche in `public/documents/essential-oil-extractor-report.pdf`. L’immagine `public/images/projects/product-development-workflow.svg` collega le quattro fasi alla reale immagine CAD della Figura 2 del report. Il PDF è conservato come documento originale del progetto; restano da verificare prima della pubblicazione le tabelle tecniche già segnalate, in particolare proprietà dei materiali e fattori di sicurezza.

New Colosseum e gli altri progetti restano rinviati. Le tre schede precedenti e i relativi documenti sono conservati. Tutto è salvato in locale, senza push o pubblicazione.

## Stato e materiali rinviati

Questa fase resta locale e consultabile nell'anteprima. È stato aggiunto soltanto il progetto di sviluppo prodotto descritto sopra; le applicazioni messe in pausa restano escluse. Non sono stati modificati i Word o i PowerPoint originali. Per la pubblicazione si attende la conclusione della revisione insieme a David.
