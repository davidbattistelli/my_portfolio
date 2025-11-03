# 🔧 Aggiungere Git al PATH Permanentemente

Git è installato ma non è nel PATH di sistema. Ecco come aggiungerlo permanentemente.

## Metodo 1: Via Interfaccia Grafica (Consigliato)

1. Premi `Win + R` e digita: `sysdm.cpl` → premi Invio
2. Vai nella scheda **"Avanzate"**
3. Clicca **"Variabili d'ambiente"**
4. Nella sezione **"Variabili di sistema"**, trova **"Path"** e clicca **"Modifica"**
5. Clicca **"Nuovo"**
6. Aggiungi: `D:\Program Files\Git\bin`
7. Clicca **"Nuovo"** di nuovo
8. Aggiungi: `D:\Program Files\Git\cmd`
9. Clicca **"OK"** su tutte le finestre
10. **Chiudi e riapri PowerShell** per applicare le modifiche

## Metodo 2: Via PowerShell (Come Amministratore)

Apri PowerShell **come Amministratore** (clic destro → Esegui come amministratore) e esegui:

```powershell
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path", "Machine") + ";D:\Program Files\Git\bin;D:\Program Files\Git\cmd",
    "Machine"
)
```

Poi chiudi e riapri PowerShell.

## Verifica

Dopo aver riavviato PowerShell, verifica che funzioni:

```powershell
git --version
```

Dovresti vedere `git version 2.51.2.windows.1` (o simile).

---

**Nota**: Per questa sessione, Git funziona già grazie al fix temporaneo che abbiamo fatto. Per renderlo permanente, usa uno dei metodi sopra.

