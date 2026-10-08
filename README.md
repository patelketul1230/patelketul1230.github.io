# Ketul Patel's Portfolio

A personal portfolio website built with React.js showcasing DevOps and cloud engineering expertise.

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- Git installed

### Installation
```bash
git clone https://github.com/patelketul1230/patelketul1230.github.io.git
cd patelketul1230.github.io
npm install
```

### Running the App
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production
```bash
npm run build
```

## 🌐 Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions:

1. Push your changes to the `master` branch:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin master
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your website to:
   ```
   https://ketul.us/ (also accessible at https://patelketul1230.github.io/)
   ```

## 📝 Customization

To personalize this portfolio for your own use:

### Main Files to Edit:
- **`src/components/Home/Home.jsx`** - Update name and social links
- **`src/components/Home/Home2.jsx`** - Update introduction text
- **`src/components/About/AboutCard.jsx`** - Update about section
- **`src/components/About/Techstack.jsx`** - Update tech stack
- **`src/components/Footer.jsx`** - Update footer and social links
- **`src/components/Navbar.jsx`** - Update navigation links
- **`index.html`** - Update page title and meta tags
- **`src/Assets/`** - Replace images and logos

### Key Sections:
- **Home**: Name, title, social links
- **About**: Personal bio and background
- **Tech Stack**: Technologies and tools
- **Resume**: Update PDF in `src/Assets/`
- **Projects**: Currently shows "Coming Soon"

## 🛠 Technologies Used

- React.js
- Vite
- React Bootstrap
- CSS3
- React Router
- React Icons

## 📄 License

This project is open source. Feel free to fork and modify for your own portfolio.
