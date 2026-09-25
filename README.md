# Sasank Potharaju — Software Engineer & Java Full Stack Developer Portfolio

A modern, fast, lightweight, and responsive Single Page Application (SPA) portfolio website built with semantic HTML5, modern CSS3 (Custom Properties & Glassmorphism), and vanilla ES6 JavaScript.

---

## ✨ Features

- **Personalized & Accurate**: Built precisely based on your resume, showcasing your education (Malla Reddy University, Narayana, Kennedy High School), featured full-stack projects (*CivicSense AI*, *RideSafe*, *Student Information Management System*), certifications, and tech stack.
- **Theme Switcher**: Instant Dark Mode and Light Mode toggle with automatic system preference detection and `localStorage` persistence.
- **Dynamic Typewriter**: Hero section typewriter animation highlighting your core competencies.
- **Interactive Code Terminal Card**: Hero visual reflecting your Java full-stack developer identity.
- **Resume Modal & Print to PDF**: In-browser resume viewer with a one-click **"Print PDF"** button configured with dedicated `@media print` styles for clean physical or PDF export.
- **Interactive Contact Section**:
  - One-click **Copy to Clipboard** for your email (`sasankpotharaju06@gmail.com`) and phone (`+91 9493915522`) with toast notifications.
  - Interactive message form that prepares pre-filled emails.
- **100% Mobile Friendly**: Responsive hamburger menu drawer, touch-friendly tap targets, and fluid grid layouts.
- **Zero Dependencies**: Pure HTML/CSS/JS without heavy build tools or npm packages. Lightning-fast load times.

---

## 🚀 How to Run Locally

You can run this portfolio immediately:

1. **Direct Browser Open**:
   - Simply double-click `index.html` to open it in Chrome, Edge, Firefox, or any modern browser.

2. **Using VS Code Live Server (Optional)**:
   - If you have the *Live Server* extension installed in VS Code, right-click `index.html` and select **"Open with Live Server"**.

3. **Using Python Local Server**:
   ```bash
   python -m http.server 3000
   ```
   Then open `http://localhost:3000` in your browser.

---

## 🌐 How to Deploy to Vercel

### Method A: Direct CLI (Fastest)
1. Double-click `deploy-vercel.bat` and choose option **1**, or open your terminal in this folder and run:
   ```bash
   npx vercel
   ```
2. Log in with your GitHub or email when prompted.
3. Accept the defaults by pressing `Enter`.
4. Deploy to production:
   ```bash
   npx vercel --prod
   ```

### Method B: GitHub + Vercel Dashboard (Continuous Deployment)
1. Push this project to GitHub (or use `deploy-github.bat`).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Connect your GitHub account and click **Import** next to your `portfolio` repository.
4. Keep the Framework Preset as **Other** and Root Directory as `./`.
5. Click **Deploy**. Vercel will give you a live `https://<your-project>.vercel.app` domain with free SSL!

---

## 📁 File Structure

```
Portfolio/
├── index.html          # Semantic single-page application structure & resume modal
├── style.css           # Responsive styling, dark/light themes, animations & print styles
├── script.js           # Interactive features (typewriter, theme toggle, drawer, modal, toast)
├── vercel.json         # Vercel production routing & security headers config
├── deploy-vercel.bat   # Interactive 1-click Vercel deploy script
├── deploy-github.bat   # 1-click GitHub Pages deployment script
├── open-netlify-drop.bat # Instant drag-and-drop launcher
└── README.md           # Documentation and deployment guide
```
