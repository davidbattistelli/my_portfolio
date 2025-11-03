# 📤 Caricare il Portfolio su GitHub

Git è configurato! Ecco come caricare il codice su GitHub.

## Passo 1: Aggiungi tutti i file

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
$env:Path += ";D:\Program Files\Git\bin;D:\Program Files\Git\cmd"

# Aggiungi tutti i file
git add .
```

## Passo 2: Crea il primo commit

```powershell
git commit -m "Initial commit - Portfolio website"
```

## Passo 3: Crea un repository su GitHub

1. Vai su [github.com](https://github.com) e accedi (o crea account se non ce l'hai)
2. Clicca sul **"+"** in alto a destra → **"New repository"**
3. Nome: `portfolio` (o qualsiasi nome che preferisci)
4. Scegli **"Private"** (solo tu puoi vederlo) o **"Public"** (chiunque può vederlo)
5. **NON** spuntare "Add a README file" (lo hai già)
6. **NON** spuntare "Add .gitignore" (lo hai già)
7. Clicca **"Create repository"**

## Passo 4: Collega il repository locale a GitHub

GitHub ti mostrerà le istruzioni. Usa queste (sostituisci `TUO_USERNAME` con il tuo username GitHub):

```powershell
# Collega il repository remoto
git remote add origin https://github.com/TUO_USERNAME/portfolio.git

# Cambia il branch a main (se necessario)
git branch -M main

# Carica il codice su GitHub
git push -u origin main
```

GitHub ti chiederà di autenticarti. Puoi:
- **Opzione A**: Usare un Personal Access Token (consigliato)
- **Opzione B**: Usare GitHub Desktop (più semplice)

### Se GitHub chiede autenticazione:

1. Vai su GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Clicca **"Generate new token (classic)"**
3. Dai un nome (es: "Portfolio Deploy")
4. Seleziona le autorizzazioni: **repo** (tutte le opzioni repo)
5. Clicca **"Generate token"**
6. **COPIA IL TOKEN** (lo vedrai solo una volta!)
7. Quando `git push` ti chiede la password, incolla il token invece della password

## Passo 5: Verifica

Vai su `https://github.com/TUO_USERNAME/portfolio` - dovresti vedere tutti i file!

---

## 🚀 Prossimo Passo: Deploy su Vercel

Una volta che il codice è su GitHub:

1. Vai su [vercel.com](https://vercel.com) e accedi con GitHub
2. Clicca **"Add New Project"**
3. Seleziona il repository `portfolio`
4. Clicca **"Deploy"**
5. ✅ Fatto! Il sito sarà online in 1-2 minuti

---

## 💡 Note

- **Ogni volta che modifichi il sito**, per aggiornarlo online:
  ```powershell
  git add .
  git commit -m "Descrizione delle modifiche"
  git push
  ```
  Vercel aggiornerà automaticamente il sito!

- Per rendere Git permanente nel PATH, vedi `AGGIUNGI_GIT_AL_PATH.md`

