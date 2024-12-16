param (
    [string]$action,
    [string]$target
)

function Install-Dependencies {
    if ($target -eq "all" -or $target -eq "f") {
        Write-Host "Instalando dependencias para el Frontend..."
        Set-Location -Path .\frontend
        npm install
        Set-Location -Path ..
    }

    if ($target -eq "all" -or $target -eq "b") {
        Write-Host "Instalando dependencias para el Backend..."
        Set-Location -Path .\backend
        npm install
        Set-Location -Path ..
    }
}

function Run-Servers {
    if ($target -eq "all" -or $target -eq "f") {
        Write-Host "Corriendo servidor de Frontend..."
        Start-Process "npm" -ArgumentList "run","start" -WorkingDirectory ".\frontend"
    }

    if ($target -eq "all" -or $target -eq "b") {
        Write-Host "Corriendo servidor de Backend..."
        Start-Process "npm" -ArgumentList "run","start:dev" -WorkingDirectory ".\backend"
    }
}

function Build-Projects {
    if ($target -eq "all" -or $target -eq "f") {
        Write-Host "Construyendo proyecto Frontend..."
        Set-Location -Path .\frontend
        npm run build
        Set-Location -Path ..
    }

    if ($target -eq "all" -or $target -eq "b") {
        Write-Host "Construyendo proyecto Backend..."
        Set-Location -Path .\backend
        npm run build
        Set-Location -Path ..
    }
}

switch ($action) {
    "i" {
        Install-Dependencies
        break
    }
    "run" {
        Run-Servers
        break
    }
    "build" {
        Build-Projects
        break
    }
    default {
        Write-Host "Uso: script.ps1 {i|run|build} {all|f|b}"
    }
}
