# 🚀 Guida al Deploy del Portfolio

Questa guida ti spiega come pubblicare il tuo portfolio online per condividerlo.

## 📋 Prerequisiti

1. **Account Vercel/Netlify** (gratuito) - per ospitare il sito
2. **Git** (opzionale) - solo se vuoi deploy automatico via GitHub
   - Se non hai Git, usa il metodo drag & drop su Netlify (vedi sezione sotto)

---

## 🚀 METODO PIÙ SEMPLICE: Netlify Drag & Drop (Senza Git)

**Se non vuoi installare Git**, questo è il metodo più semplice:

1. **Build del progetto**:
   ```powershell
   cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
   $env:Path += ";C:\Program Files\nodejs"
   npm run build
   ```

2. **Deploy su Netlify**:
   - Vai su [netlify.com](https://netlify.com) e crea account gratuito
   - Dashboard → **"Sites"** → **"Add new site"** → **"Deploy manually"**
   - **Trascina la cartella `dist`** nella pagina
   - ✅ Fatto! Il sito sarà online in 30 secondi

Vedi `DEPLOY_SENZA_GIT.md` per dettagli completi.

---

## 🎯 Opzione 1: Vercel con GitHub (Deploy Automatico)

Vercel è perfetto per progetti React/Vite e offre deploy automatici.

### Passo 1: Crea un repository GitHub

1. Vai su [github.com](https://github.com) e crea un account se non ce l'hai
2. Clicca su **"New repository"**
3. Nome: `portfolio` (o qualsiasi nome che preferisci)
4. Scegli **"Private"** o **"Public"** (come preferisci)
5. **NON** spuntare "Add README" (lo hai già)
6. Clicca **"Create repository"**

### Passo 2: Carica il codice su GitHub

Apri PowerShell nella cartella del progetto e esegui:

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"

# Se è la prima volta, inizializza Git
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit - Portfolio website"

# Collega al repository GitHub (sostituisci USERNAME con il tuo username GitHub)
git remote add origin https://github.com/USERNAME/portfolio.git

# Carica il codice
git branch -M main
git push -u origin main
```

### Passo 3: Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca **"Sign Up"** e accedi con GitHub
3. Clicca **"Add New Project"**
4. Seleziona il repository `portfolio` che hai appena creato
5. Vercel rileverà automaticamente le impostazioni:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clicca **"Deploy"**
7. Attendi 1-2 minuti
8. ✅ **Fatto!** Il tuo sito sarà disponibile su `https://portfolio-xxxxx.vercel.app`

### Vantaggi Vercel:
- ✅ Deploy automatico ad ogni push su GitHub
- ✅ URL gratuito (es: `portfolio.vercel.app`)
- ✅ SSL gratuito (HTTPS)
- ✅ Aggiornamenti automatici
- ✅ Molto veloce

---

## 🎯 Opzione 2: Netlify

Netlify è un'alternativa altrettanto valida.

### Passo 1: Stesso procedimento GitHub (vedi sopra)

### Passo 2: Deploy su Netlify

1. Vai su [netlify.com](https://netlify.com)
2. Clicca **"Sign up"** e accedi con GitHub
3. Clicca **"Add new site"** → **"Import an existing project"**
4. Seleziona il repository `portfolio`
5. Impostazioni:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clicca **"Deploy site"**
7. ✅ **Fatto!** Il tuo sito sarà disponibile su `https://portfolio-xxxxx.netlify.app`

---

## 🎯 Opzione 3: GitHub Pages (Alternativa)

### Passo 1: Build del progetto

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
$env:Path += ";C:\Program Files\nodejs"
npm run build
```

### Passo 2: Configura Vite per GitHub Pages

Modifica `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Cambia 'portfolio' con il nome del tuo repository
})
```

### Passo 3: Configura GitHub Actions

Crea la cartella `.github/workflows` e il file `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Passo 4: Abilita GitHub Pages

1. Vai sul tuo repository GitHub
2. **Settings** → **Pages**
3. **Source**: `GitHub Actions`
4. ✅ Fatto!

---

## 🧪 Test Locale del Build

Prima di pubblicare, testa il build localmente:

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
$env:Path += ";C:\Program Files\nodejs"

# Build del progetto
npm run build

# Preview del build (simula il sito pubblicato)
npm run preview
```

Apri `http://localhost:4173` per vedere come apparirà online.

---

## 🔧 Personalizzazione del Dominio

### Vercel
1. Vai su **Settings** → **Domains**
2. Aggiungi il tuo dominio personalizzato (es: `davidbattistelli.com`)
3. Segui le istruzioni per configurare il DNS

### Netlify
1. Vai su **Site settings** → **Domain management**
2. Clicca **Add custom domain**
3. Segui le istruzioni per configurare il DNS

---

## 📝 Checklist Pre-Deploy

Prima di pubblicare, verifica:

- [ ] Tutti i link social sono corretti
- [ ] Email di contatto è corretta
- [ ] Informazioni personali sono aggiornate
- [ ] Tutti i progetti hanno descrizioni complete
- [ ] Il build funziona senza errori (`npm run build`)
- [ ] Il preview funziona correttamente (`npm run preview`)

---

## 🎨 Prossimi Passi

Dopo il deploy:

1. **Condividi l'URL** con chi vuoi
2. **Aggiungi l'URL** al tuo CV/LinkedIn
3. **Monitora le visite** (se disponibile nella piattaforma)
4. **Aggiorna regolarmente** il contenuto

---

## ❓ Problemi Comuni

### "Build failed"
- Verifica che tutti i file siano committati su GitHub
- Controlla gli errori nel log di build sulla piattaforma

### "Sito non si aggiorna"
- Su Vercel/Netlify: fai un nuovo push su GitHub
- Su GitHub Pages: aspetta qualche minuto per il deploy

### "404 Error"
- Verifica che il `base` in `vite.config.ts` corrisponda al nome del repository
- Su Vercel/Netlify: controlla le impostazioni di build

---

**Buon deploy! 🚀**

