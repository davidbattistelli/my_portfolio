@echo off
REM Script di avvio per Windows (Prompt dei Comandi)
REM Verifica Node.js e avvia il progetto

echo === Portfolio Site - Script di Avvio ===

REM Verifica se Node.js e' installato
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRORE] Node.js NON trovato!
    echo.
    echo INSTALLAZIONE NECESSARIA:
    echo 1. Scarica Node.js 20 LTS da: https://nodejs.org
    echo 2. Esegui l'installer (.msi)
    echo 3. Riavvia il terminale dopo l'installazione
    echo 4. Riesegui questo script
    pause
    exit /b 1
)

REM Verifica la versione di Node.js
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js installato: %NODE_VERSION%

REM Verifica se npm e' disponibile
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRORE] npm NON trovato!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] npm installato: %NPM_VERSION%

echo.
echo === Installazione dipendenze ===

REM Verifica se node_modules esiste
if not exist "node_modules" (
    echo Installazione dipendenze in corso...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERRORE] Errore durante l'installazione delle dipendenze
        pause
        exit /b 1
    )
) else (
    echo [OK] Dipendenze gia' installate
)

echo.
echo === Avvio server di sviluppo ===
echo Il sito sara' disponibile su: http://localhost:5173
echo Premi Ctrl+C per fermare il server
echo.

call npm run dev

pause

