# Portfolio Website

Portfolio personale moderno e responsive creato con React, TypeScript e Tailwind CSS.

## 🚀 Tecnologie

- **React 18** - Libreria UI
- **TypeScript** - Type safety
- **Vite** - Build tool veloce
- **Tailwind CSS** - Styling utility-first
- **React Icons** - Icone

## 📦 Requisiti

- **Node.js** >= 18.0.0 (consigliato 20 LTS)
- **npm** >= 9.0.0

### 🪟 Installazione su Windows

1. **Scarica Node.js 20 LTS** da [nodejs.org](https://nodejs.org) (versione Windows Installer .msi)
2. **Esegui l'installer** e segui le istruzioni (assicurati che l'opzione "Add to PATH" sia selezionata)
3. **Riavvia il terminale** dopo l'installazione
4. **Verifica l'installazione** aprendo PowerShell e digitando:
   ```powershell
   node --version
   npm --version
   ```

**Alternativa con nvm-windows** (per gestire più versioni):
- Scarica [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
- Dopo l'installazione:
  ```powershell
  nvm install 20
  nvm use 20
  ```

### 🐧 Installazione su Linux/Mac

Se non hai Node.js installato o hai una versione vecchia, installa [nvm](https://github.com/nvm-sh/nvm) e usa:

```bash
# Installa nvm (se non già installato)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Carica nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Installa e usa Node.js 20
nvm install 20
nvm use 20
```

Il progetto include un file `.nvmrc` che specifica la versione di Node.js richiesta.

## 📦 Installazione

### 🪟 Su Windows (Metodo Veloce)

**Opzione 1: Usa lo script automatico**
```powershell
# Apri PowerShell nella cartella del progetto
.\avvia.ps1
```

Lo script verificherà automaticamente Node.js, installerà le dipendenze e avvierà il server.

**Opzione 2: Comandi manuali**
```powershell
# Se usi nvm-windows, assicurati di aver selezionato la versione corretta
nvm use 20

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### 🐧 Su Linux/Mac

```bash
# Se usi nvm, assicurati di aver caricato nvm e usato la versione corretta
nvm use

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### 🛠️ Comandi disponibili

```bash
# Build per produzione
npm run build

# Preview del build
npm run preview

# Lint del codice
npm run lint
```

## 🎨 Caratteristiche

- ✅ Design moderno e fluido
- ✅ Completamente responsive
- ✅ Animazioni smooth
- ✅ Sezioni: Hero, About, Skills, Projects, Contact
- ✅ Form di contatto funzionale
- ✅ Ottimizzato per SEO
- ✅ Best practices React/TypeScript
- ✅ Accessibilità (a11y)

## 📝 Personalizzazione

Prima di pubblicare, assicurati di personalizzare:

1. **Informazioni personali**: Modifica i componenti con i tuoi dati reali
2. **Progetti**: Aggiorna `src/components/Projects.tsx` con i tuoi progetti
3. **Skills**: Personalizza `src/components/Skills.tsx`
4. **Link social**: Aggiorna tutti i link social nei componenti
5. **Email/Contatti**: Sostituisci gli indirizzi placeholder

## 🚀 Deploy

Il sito può essere deployato su:
- **Vercel** (consigliato per progetti React)
- **Netlify**
- **GitHub Pages**
- Qualsiasi servizio di hosting statico

```bash
npm run build
# La cartella `dist` contiene i file pronti per il deploy
```

## 📄 Licenza

MIT

