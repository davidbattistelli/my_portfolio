# Script helper per aggiungere Git al PATH temporaneamente
# Usa questo script prima di usare Git in ogni nuova sessione PowerShell

$env:Path += ";D:\Program Files\Git\bin;D:\Program Files\Git\cmd"

Write-Host "Git aggiunto al PATH per questa sessione" -ForegroundColor Green
Write-Host ""
Write-Host "Ora puoi usare i comandi Git:" -ForegroundColor Yellow
Write-Host "  git --version" -ForegroundColor Gray
Write-Host "  git add ." -ForegroundColor Gray
Write-Host "  git commit -m 'messaggio'" -ForegroundColor Gray
Write-Host "  git push" -ForegroundColor Gray
Write-Host ""
Write-Host "Per renderlo permanente, vedi: AGGIUNGI_GIT_AL_PATH.md" -ForegroundColor Cyan

