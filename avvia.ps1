# Script di avvio per Windows
# Verifica Node.js e avvia il progetto

Write-Host "=== Portfolio Site - Script di Avvio ===" -ForegroundColor Cyan

# Aggiungi Node.js al PATH se non è già presente
$nodePaths = @(
    "C:\Program Files\nodejs",
    "C:\Program Files (x86)\nodejs",
    "$env:LOCALAPPDATA\Programs\nodejs"
)

foreach ($path in $nodePaths) {
    if (Test-Path "$path\node.exe") {
        if ($env:Path -notlike "*$path*") {
            $env:Path += ";$path"
            Write-Host "Node.js aggiunto al PATH: $path" -ForegroundColor Gray
        }
        break
    }
}

# Aggiungi Git al PATH se non è già presente
$gitPaths = @(
    "D:\Program Files\Git\bin",
    "D:\Program Files\Git\cmd",
    "C:\Program Files\Git\bin",
    "C:\Program Files\Git\cmd"
)

foreach ($path in $gitPaths) {
    if (Test-Path "$path\git.exe") {
        if ($env:Path -notlike "*$path*") {
            $env:Path += ";$path"
            Write-Host "Git aggiunto al PATH: $path" -ForegroundColor Gray
        }
        break
    }
}

# Verifica se Node.js è installato
try {
    $nodeVersion = node --version 2>$null
    Write-Host "✓ Node.js installato: $nodeVersion" -ForegroundColor Green
    
    # Verifica la versione (richiede >= 18)
    $majorVersion = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
    if ($majorVersion -lt 18) {
        Write-Host "⚠ ATTENZIONE: Node.js versione $majorVersion non è sufficiente. Richiesta versione >= 18" -ForegroundColor Yellow
        Write-Host "Scarica Node.js 20 LTS da: https://nodejs.org" -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host "✗ Node.js NON trovato!" -ForegroundColor Red
    Write-Host ""
    Write-Host "INSTALLAZIONE NECESSARIA:" -ForegroundColor Yellow
    Write-Host "1. Scarica Node.js 20 LTS da: https://nodejs.org" -ForegroundColor White
    Write-Host "2. Esegui l'installer (.msi)" -ForegroundColor White
    Write-Host "3. Riavvia il terminale dopo l'installazione" -ForegroundColor White
    Write-Host "4. Riesegui questo script" -ForegroundColor White
    exit 1
}

# Verifica se npm è disponibile
try {
    $npmVersion = npm --version 2>$null
    Write-Host "✓ npm installato: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm NON trovato!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Installazione dipendenze ===" -ForegroundColor Cyan

# Verifica se node_modules esiste e se vite è installato correttamente
$needInstall = $false
if (-Not (Test-Path "node_modules")) {
    $needInstall = $true
    Write-Host "Cartella node_modules non trovata" -ForegroundColor Yellow
} elseif (-Not (Test-Path "node_modules\.bin\vite.cmd")) {
    $needInstall = $true
    Write-Host "Dipendenze incomplete o installate su sistema diverso (Linux?)" -ForegroundColor Yellow
    Write-Host "Reinstallazione necessaria per Windows..." -ForegroundColor Yellow
}

if ($needInstall) {
    Write-Host "Installazione dipendenze in corso..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Errore durante l'installazione delle dipendenze" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Dipendenze installate correttamente" -ForegroundColor Green
} else {
    Write-Host "✓ Dipendenze già installate" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Avvio server di sviluppo ===" -ForegroundColor Cyan
Write-Host "Il sito sara' disponibile su: http://localhost:5173" -ForegroundColor Yellow
Write-Host "Premi Ctrl+C per fermare il server" -ForegroundColor Gray
Write-Host ""

npm run dev

