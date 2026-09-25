@echo off
title Deploy to Vercel
color 0F
echo ======================================================================
echo             DEPLOY SASANK'S PORTFOLIO TO VERCEL
echo ======================================================================
echo.
echo Choose your preferred deployment method:
echo.
echo [1] Direct CLI Deploy (Runs 'npx vercel' - deploys directly from this folder)
echo [2] GitHub + Vercel Dashboard (Connect GitHub repo at vercel.com/new)
echo.
set /p CHOICE="Enter choice (1 or 2): "

if "%CHOICE%"=="1" (
    echo.
    echo Running Vercel CLI...
    echo If this is your first time, it will prompt you to log in with GitHub/Email.
    echo For all prompts, you can simply press ENTER to accept the defaults!
    echo.
    call npx vercel
    echo.
    echo To deploy to production with your permanent URL, run:
    echo   npx vercel --prod
    echo.
    pause
    exit /b
)

if "%CHOICE%"=="2" (
    echo.
    echo Opening Vercel New Project page in your browser...
    start https://vercel.com/new
    echo.
    echo ======================================================================
    echo STEPS TO DEPLOY:
    echo 1. Sign in to Vercel using your GitHub account (sasankpotharaju66).
    echo 2. If you pushed this code to a GitHub repo (e.g. 'portfolio'), click
    echo    "Import" next to it.
    echo 3. Framework Preset: Leave as "Other".
    echo 4. Root Directory: Leave as "./".
    echo 5. Click "Deploy"!
    echo.
    echo Your site will be live at a custom vercel.app domain in 15 seconds!
    echo ======================================================================
    echo.
    pause
    exit /b
)

echo Invalid choice. Exiting.
pause
