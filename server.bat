@echo off
set ARG1=%1
set ARG2=%2

if "%ARG1%"=="i" (
    if "%ARG2%"=="all" (
        echo Instalando dependencias para Frontend...
        cd ./frontend
        npm install
        cd ..
        echo Instalando dependencias para Backend...
        cd ./backend
        npm install
        cd ..
    ) else if "%ARG2%"=="f" (
        echo Instalando dependencias para Frontend...
        cd ./frontend
        npm install
        cd ..
    ) else if "%ARG2%"=="b" (
        echo Instalando dependencias para Backend...
        cd ./backend
        npm install
        cd ..
    )
)

if "%ARG1%"=="run" (
    if "%ARG2%"=="all" (
        start cmd /k "cd ./frontend && npm run dev"
        start cmd /k "cd ./backend && npm run start:dev"
    ) else if "%ARG2%"=="f" (
        start cmd /k "cd ./frontend && npm run dev"
    ) else if "%ARG2%"=="b" (
        start cmd /k "cd ./backend && npm run start:dev"
    )
)

if "%ARG1%"=="build" (
    if "%ARG2%"=="all" (
        echo Construyendo proyecto Frontend...
        cd ./frontend
        npm run build
        cd ..
        echo Construyendo proyecto Backend...
        cd ./fackend
        npm run build
        cd ..
    ) else if "%ARG2%"=="f" (
        echo Construyendo proyecto Frontend...
        cd ./frontend
        npm run build
        cd ..
    ) else if "%ARG2%"=="b" (
        echo Construyendo proyecto Backend...
        cd ./backend
        npm run build
        cd ..
    )
)

if "%ARG1%"=="" (
    echo Uso: script.bat {i|run|build} {all|f|b}
)
