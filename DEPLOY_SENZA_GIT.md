# 🚀 Deploy Senza Git (Metodo Semplice)

Se non vuoi installare Git, puoi usare il metodo **drag & drop** su Vercel o Netlify.

## Metodo Vercel (Drag & Drop)

### Passo 1: Build del Progetto

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
$env:Path += ";C:\Program Files\nodejs"
npm run build
```

Questo crea la cartella `dist` con tutti i file pronti.

### Passo 2: Deploy su Vercel

1. Vai su **https://vercel.com** e crea un account (gratuito)
2. Nel dashboard, clicca **"Add New Project"**
3. Vai nella scheda **"Import"** oppure cerca **"Deploy manually"**
4. Se non c'è l'opzione drag & drop, procedi così:
   - Installa **Vercel CLI**:
     ```powershell
     npm install -g vercel
     ```
   - Nella cartella `portfolio`, esegui:
     ```powershell
     vercel
     ```
   - Segui le istruzioni interattive
   - Quando chiede "Set up and deploy", scegli **Yes**
   - Quando chiede la cartella, scrivi: **dist**

### Passo 3: Fatto!

Vercel ti darà un URL tipo `https://portfolio-xxxxx.vercel.app`

---

## Metodo Netlify (Drag & Drop - PIÙ SEMPLICE)

### Passo 1: Build del Progetto

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
$env:Path += ";C:\Program Files\nodejs"
npm run build
```

### Passo 2: Deploy su Netlify (Drag & Drop)

1. Vai su **https://netlify.com** e crea un account (gratuito)
2. Nel dashboard, cerca **"Sites"** → **"Add new site"**
3. Clicca **"Deploy manually"** o **"Drag and drop"**
4. **Trascina la cartella `dist`** nella pagina di Netlify
5. Aspetta che finisca il caricamento (30-60 secondi)
6. ✅ **Fatto!** Il tuo sito sarà online!

Netlify ti darà un URL tipo `https://random-name-12345.netlify.app`

---

## 🎯 Quale Scegliere?

- **Netlify Drag & Drop**: Più semplice, niente comandi da imparare
- **Vercel CLI**: Leggermente più complesso ma molto veloce

**Raccomandazione**: Usa **Netlify** con il metodo drag & drop se non vuoi installare Git!

---

## 📝 Note Importanti

- La cartella `dist` contiene tutti i file del sito
- Puoi modificare il sito in locale e rifare `npm run build` quando vuoi
- Per aggiornare il sito online, ripeti il processo di drag & drop

