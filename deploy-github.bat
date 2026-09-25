@echo off
title Deploy Portfolio to GitHub Pages
color 0B
echo ======================================================================
echo           SASANK POTHARAJU PORTFOLIO - GITHUB PAGES DEPLOYER
echo ======================================================================
echo.
echo Checking Git installation...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not found in your command prompt PATH.
    echo Please install Git from https://git-scm.com/ or use the 10-second
    echo drag-and-drop deployment via Netlify (run open-netlify-drop.bat).
    echo.
    pause
    exit /b
)

echo [OK] Git is available.
echo.
echo [1/4] Initializing git repository and staging files...
if not exist .git (
    git init
)
git add .
git commit -m "Deploy Sasank Potharaju Portfolio SPA"
git branch -M main

echo.
echo [2/4] GitHub Repository Setup
echo ----------------------------------------------------------------------
echo If you haven't created a repository on GitHub yet:
echo 1. Open: https://github.com/new
echo 2. Name your repo: portfolio (or sasankpotharaju66.github.io)
echo 3. Choose Public, and leave "Initialize with README" UNCHECKED.
echo 4. Click "Create repository".
echo ----------------------------------------------------------------------
echo.
set /p REPO_URL="Enter your GitHub repository URL (e.g. https://github.com/sasankpotharaju66/portfolio.git): "

if "%REPO_URL%"=="" (
    echo [INFO] No URL entered. Repository initialized locally on 'main' branch.
    echo When you're ready, run this file again to push.
    echo.
    pause
    exit /b
)

echo.
echo [3/4] Linking remote repository and pushing...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [NOTE] If git push asked for credentials or failed, you can run:
    echo   git push -f origin main
    echo or ensure you are signed in with your GitHub Personal Access Token.
) else (
    echo.
    echo ======================================================================
    echo [4/4] SUCCESS! Code pushed to GitHub.
    echo.
    echo Final step to enable your live website URL:
    echo 1. Open your repository on GitHub.
    echo 2. Go to: Settings -^> Pages (on the left sidebar).
    echo 3. Under 'Build and deployment', set Source to: Deploy from a branch.
    echo 4. Select branch: 'main' and folder: '/ (root)', then click Save.
    echo.
    echo Your portfolio will be live at:
    echo https://sasankpotharaju66.github.io/portfolio/
    echo ======================================================================
)
echo.
pause
