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

echo [3/4] Committing updates...
git commit -m "Configure live Formspree endpoint mgavlbbz for contact form"

git branch -M main

echo [4/4] Connecting to https://github.com/sasankpotharaju66/portfolio.git...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sasankpotharaju66/portfolio.git

echo.
echo Pushing code to GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [NOTE] Push returned non-zero code. Trying push with force flag...
    git push -u origin main --force
)

if %errorlevel% equ 0 (
    echo.
    echo ======================================================================
    echo [SUCCESS] Fixes successfully pushed to GitHub!
    echo Vercel will automatically re-deploy your site in ~10 seconds.
    echo Check your live site: https://sasank-portfolio-v2.vercel.app
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
