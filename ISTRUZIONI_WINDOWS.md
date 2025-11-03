# 🪟 Guida Rapida per Windows

## ⚡ Avvio Rapido (3 passi)

### 1️⃣ Installa Node.js
- Vai su **https://nodejs.org**
- Scarica **Node.js 20 LTS** (Windows Installer .msi)
- Esegui l'installer (seleziona "Add to PATH")
- **Riavvia il terminale**

### 2️⃣ Verifica l'installazione
Apri PowerShell o Prompt dei Comandi e digita:
```powershell
node --version
npm --version
```
Dovresti vedere le versioni installate.

### 3️⃣ Avvia il progetto

**Opzione A - Script automatico (PowerShell):**
```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
.\avvia.ps1
```

**Opzione B - Script automatico (Prompt dei Comandi):**
```cmd
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
avvia.bat
```

**Opzione C - Manuale:**
```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
npm install
npm run dev
```

## 🌐 Apri il sito

Una volta avviato, il sito sarà disponibile su:
**http://localhost:5173**

Apri il browser e vai a quell'indirizzo!

## ❓ Problemi Comuni

### "node non è riconosciuto"
- Node.js non è installato o non è nel PATH
- Riavvia il terminale dopo l'installazione
- Verifica che "Add to PATH" sia stato selezionato durante l'installazione

### "npm install fallisce"
- Assicurati di essere nella cartella `portfolio`
- Verifica la connessione internet
- Prova: `npm cache clean --force` e poi `npm install`

### "Porta già in uso"
- Un altro processo sta usando la porta 5173
- Chiudi altri server di sviluppo
- Oppure modifica la porta in `vite.config.ts`

## 🛠️ Comandi Utili

```powershell
# Installare dipendenze
npm install

# Avviare server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview del build
npm run preview

# Controllo errori nel codice
npm run lint
```

## 📝 Note

- Il progetto è completamente cross-platform, funziona identicamente su Windows, Linux e Mac
- Le dipendenze vengono installate automaticamente quando esegui `npm install`
- Il server di sviluppo si ricarica automaticamente quando modifichi i file

