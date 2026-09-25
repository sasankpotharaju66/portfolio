@echo off
title Push Portfolio to GitHub
color 0B
echo ======================================================================
echo           PUSHING SASANK'S PORTFOLIO TO GITHUB
echo           Repository: https://github.com/sasankpotharaju66/portfolio.git
echo ======================================================================
echo.

:: Check if git is available
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not detected in your PATH.
    echo Please make sure Git is installed or open Git Bash in this folder.
    pause
    exit /b
)

:: Initialize git repository if not already initialized
if not exist .git (
    echo [1/4] Initializing Git repository...
    git init
) else (
    echo [1/4] Git repository already initialized.
)

echo [2/4] Staging all files...
git add .

echo [3/4] Committing portfolio files...
git commit -m "Deploy Sasank Potharaju Portfolio SPA to Vercel"

git branch -M main

echo [4/4] Connecting to https://github.com/sasankpotharaju66/portfolio.git...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sasankpotharaju66/portfolio.git

echo.
echo Pushing code to GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [NOTE] Push returned non-zero code. Trying push with force flag in case remote was initialized with files...
    git push -u origin main --force
)

if %errorlevel% equ 0 (
    echo.
    echo ======================================================================
    echo [SUCCESS] Code successfully pushed to GitHub!
    echo Check it here: https://github.com/sasankpotharaju66/portfolio
    echo.
    echo Final step: 
    echo 1. Go to: https://vercel.com/new
    echo 2. Click "Import" next to 'portfolio'
    echo 3. Click "Deploy"
    echo ======================================================================
) else (
    echo.
    echo ======================================================================
    echo [ACTION NEEDED] GitHub Authentication required.
    echo Please sign in if Git Credential Manager prompted you in the browser.
    echo ======================================================================
)

echo.
pause
