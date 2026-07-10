@echo off
setlocal

set "ROOT=%~dp0"
set "PORT=4173"
set "PYTHON_EXE="

if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" (
  set "PYTHON_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
)

if "%PYTHON_EXE%"=="" (
  where python >nul 2>nul
  if not errorlevel 1 set "PYTHON_EXE=python"
)

if "%PYTHON_EXE%"=="" (
  where py >nul 2>nul
  if not errorlevel 1 set "PYTHON_EXE=py"
)

if "%PYTHON_EXE%"=="" (
  echo Nao encontrei Python neste computador.
  echo Rode pnpm install e pnpm run dev, ou instale Python para abrir o build local.
  pause
  exit /b 1
)

if not exist "%ROOT%dist\index.html" (
  echo A pasta dist ainda nao existe.
  echo Rode pnpm run build antes de abrir a landing local.
  pause
  exit /b 1
)

start "ARGO Landing Page" /min "%PYTHON_EXE%" -m http.server %PORT% --bind 127.0.0.1 --directory "%ROOT%dist"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:%PORT%/"

endlocal
