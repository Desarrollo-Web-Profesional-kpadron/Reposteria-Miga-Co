@echo off
REM Script para iniciar ambos servidores fácilmente

echo.
echo ============================================
echo   MIGA-CO | INICIO RÁPIDO
echo ============================================
echo.

REM Verificar si los directorios existen
if not exist "Backend" (
    echo ERROR: Carpeta Backend no encontrada
    pause
    exit /b 1
)

if not exist "Miga-CoFront" (
    echo ERROR: Carpeta Miga-CoFront no encontrada
    pause
    exit /b 1
)

echo [1/2] Iniciando Backend en puerto 3000...
start "Backend Server" cmd /k "cd Backend && npm run dev"
timeout /t 3 /nobreak

echo [2/2] Iniciando Frontend en puerto 5174...
start "Frontend Dev Server" cmd /k "cd Miga-CoFront && npm run dev"
timeout /t 2 /nobreak

echo.
echo ============================================
echo   ✅ AMBOS SERVIDORES INICIADOS
echo ============================================
echo.
echo 🔗 Accede a la aplicación en:
echo    → Frontend: http://localhost:5174
echo    → Backend API: http://localhost:3000/api
echo.
echo 📖 Para acceder al catálogo:
echo    → http://localhost:5174/productos
echo.
echo ⚠️  Asegúrate que MongoDB esté corriendo
echo.
pause
