# ✅ Soluzione al Problema Git

## Il Problema

Ogni volta che apri una **nuova sessione PowerShell**, Git non è riconosciuto perché non è nel PATH permanente del sistema.

## 🎯 Soluzione Rapida (Ogni Volta)

Prima di usare Git, esegui questo comando:

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
$env:Path += ";D:\Program Files\Git\bin;D:\Program Files\Git\cmd"
```

Oppure usa lo script helper:

```powershell
cd "C:\Users\David\iCloudDrive\Desktop\David\Projects\Portfolio site\portfolio"
.\usagit.ps1
```

Poi puoi usare Git normalmente:
```powershell
git add .
git commit -m "messaggio"
git push
```

## 🔧 Soluzione Permanente (Fallo Una Volta)

Per non doverlo rifare ogni volta, aggiungi Git al PATH permanentemente.

### Metodo Veloce (PowerShell come Amministratore)

1. Apri PowerShell **come Amministratore** (clic destro → "Esegui come amministratore")
2. Esegui questo comando:

```powershell
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path", "Machine") + ";D:\Program Files\Git\bin;D:\Program Files\Git\cmd",
    "Machine"
)
```

3. **Chiudi e riapri PowerShell** (non serve riavviare il computer)
4. Verifica: `git --version` dovrebbe funzionare subito

### Metodo Grafico (Più Semplice)

1. Premi `Win + R`
2. Digita: `sysdm.cpl` → Invio
3. Scheda **"Avanzate"**
4. Clicca **"Variabili d'ambiente"**
5. In **"Variabili di sistema"**, trova **"Path"** → **"Modifica"**
6. Clicca **"Nuovo"** e aggiungi: `D:\Program Files\Git\bin`
7. Clicca **"Nuovo"** di nuovo e aggiungi: `D:\Program Files\Git\cmd`
8. **OK** su tutte le finestre
9. **Chiudi e riapri PowerShell**

Dopo questo, Git funzionerà in tutte le nuove sessioni PowerShell!

---

## 📝 Note

- **Soluzione rapida**: Funziona solo per la sessione corrente
- **Soluzione permanente**: Funziona sempre, ma devi farla una volta

**Raccomandazione**: Usa la soluzione permanente così non devi pensarci più! 🎯

