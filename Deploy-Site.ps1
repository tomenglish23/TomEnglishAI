# Deploy-Site.ps1
# Full deploy for TomEnglishAI React site
# Builds the app, mirrors build → docs, commits & pushes, then opens the site

Write-Host "Starting deploy..."

# 1) Build React
Write-Host "Running npm build..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "npm build failed. Stopping."
    exit 1
}

# 2) Mirror build → docs
Write-Host "Copying build → docs..."
robocopy .\build .\docs /MIR /NFL /NDL /NJH /NJS /NC /NS

if ($LASTEXITCODE -ge 8) {
    Write-Host "Robocopy reported a failure. Stopping."
    exit 1
}

# 3) Confirm CNAME exists
$CNAMEPath = ".\docs\CNAME"
if (-not (Test-Path $CNAMEPath)) {
    Write-Host "CNAME missing. Creating..."
    "www.tomenglishai.com" | Out-File -NoNewline $CNAMEPath
}

# 4) Stage docs
Write-Host "Staging docs folder..."
git add docs

# 5) Commit
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$commitMsg = "deploy site $timestamp"
Write-Host "Committing: $commitMsg"
git commit -m $commitMsg

if ($LASTEXITCODE -ne 0) {
    Write-Host "Git commit failed. Stopping."
    exit 1
}

# 6) Push
Write-Host "Pushing to origin/main..."
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "Git push failed. Stopping."
    exit 1
}

Write-Host "Deploy complete. Opening site..."

# 7) Open site in default browser
Start-Process "https://www.tomenglishai.com"


Write-Host "Deploy complete."

# How to run:
# cd C:\B\React\TomEnglishAI
# .\Deploy-Site.ps1

# You tweak src, run that script, wait for GitHub to build, refresh the site & you are done.