# Libraries to Install Locally

This document lists all the npm packages you need to install to run this portfolio project.

## 🎯 Quick Install Commands

### Install Everything at Once

```bash
# 1. Install frontend dependencies (from root directory)
npm install react react-dom react-icons react-scroll react-type-animation framer-motion lucide-react axios

# 2. Install frontend dev dependencies
npm install -D @types/react @types/react-dom @vitejs/plugin-react autoprefixer postcss tailwindcss vite

# 3. Install backend dependencies (from server directory)
cd server
npm install express mongoose cors dotenv nodemailer express-validator

# 4. Install backend dev dependencies
npm install -D nodemon

cd ..
```

## 📦 Frontend Dependencies

### Production Dependencies

Run from root directory:
```bash
npm install <package-name>
```

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.2.0 | Core React library |
| `react-dom` | ^18.2.0 | React DOM rendering |
| `react-icons` | ^4.12.0 | Popular icon library |
| `react-scroll` | ^1.9.0 | Smooth scrolling functionality |
| `react-type-animation` | ^3.2.0 | Typing animation effects |
| `framer-motion` | ^10.16.16 | Animation library |
| `lucide-react` | ^0.294.0 | Beautiful icon set |
| `axios` | ^1.6.2 | HTTP client for API calls |

**Install command:**
```bash
npm install react react-dom react-icons react-scroll react-type-animation framer-motion lucide-react axios
```

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@types/react` | ^18.2.43 | TypeScript types for React |
| `@types/react-dom` | ^18.2.17 | TypeScript types for React DOM |
| `@vitejs/plugin-react` | ^4.2.1 | Vite plugin for React |
| `autoprefixer` | ^10.4.16 | PostCSS plugin for vendor prefixes |
| `postcss` | ^8.4.32 | CSS transformation tool |
| `tailwindcss` | ^3.3.6 | Utility-first CSS framework |
| `vite` | ^5.0.8 | Fast build tool and dev server |

**Install command:**
```bash
npm install -D @types/react @types/react-dom @vitejs/plugin-react autoprefixer postcss tailwindcss vite
```

## 🔧 Backend Dependencies

### Production Dependencies

Run from `server` directory:
```bash
cd server
npm install <package-name>
```

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^4.18.2 | Web application framework |
| `mongoose` | ^8.0.3 | MongoDB object modeling |
| `cors` | ^2.8.5 | Cross-Origin Resource Sharing |
| `dotenv` | ^16.3.1 | Environment variable management |
| `nodemailer` | ^6.9.7 | Email sending functionality |
| `express-validator` | ^7.0.1 | Request validation middleware |

**Install command:**
```bash
cd server
npm install express mongoose cors dotenv nodemailer express-validator
```

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `nodemon` | ^3.0.2 | Auto-restart server on file changes |

**Install command:**
```bash
cd server
npm install -D nodemon
```

## 📋 Complete package.json Files

### Frontend package.json
```json
{
  "name": "himangshu-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "cd server && node server.js",
    "server:dev": "cd server && nodemon server.js"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-scroll": "^1.9.0",
    "react-type-animation": "^3.2.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.294.0",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```

### Backend package.json
```json
{
  "name": "portfolio-server",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "nodemailer": "^6.9.7",
    "express-validator": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

## 🔍 Library Details

### React Ecosystem
- **React 18** - Latest version with concurrent features
- **React DOM** - Renders React components to the DOM
- **React Icons** - Includes Font Awesome, Material Design, etc.
- **React Scroll** - Smooth scrolling animations for navigation
- **React Type Animation** - Typewriter effect animations

### Animation & UI
- **Framer Motion** - Production-ready animation library
  - Used for: page transitions, scroll animations, hover effects
  - Provides: motion components, animation variants, gestures
- **Lucide React** - Modern icon library
  - Beautiful, consistent icons
  - Tree-shakeable for smaller bundles

### HTTP & Data
- **Axios** - Promise-based HTTP client
  - Easier than fetch API
  - Automatic JSON transformation
  - Request/response interceptors

### Styling
- **Tailwind CSS** - Utility-first CSS framework
  - Fast development
  - Small production bundle
  - Customizable design system
- **PostCSS** - CSS transformation tool
- **Autoprefixer** - Adds vendor prefixes automatically

### Build Tools
- **Vite** - Next-generation build tool
  - Lightning fast HMR (Hot Module Replacement)
  - Optimized production builds
  - Native ES modules support

### Backend
- **Express** - Minimal web framework
- **Mongoose** - Elegant MongoDB ODM
  - Schema validation
  - Middleware support
  - Query building
- **CORS** - Enable cross-origin requests
- **Dotenv** - Load environment variables
- **Nodemailer** - Send emails
  - SMTP support
  - HTML emails
  - Attachments
- **Express Validator** - Validation middleware
  - Chain validators
  - Custom validators
  - Sanitization

### Development Tools
- **Nodemon** - Auto-restart Node.js server
  - Watches for file changes
  - Improves development workflow

## ⚙️ Configuration Files

These libraries require configuration files (already created):

### Vite Configuration
- **File**: `vite.config.js`
- **Purpose**: Configure Vite build tool

### Tailwind Configuration
- **File**: `tailwind.config.js`
- **Purpose**: Customize Tailwind CSS

### PostCSS Configuration
- **File**: `postcss.config.js`
- **Purpose**: Configure PostCSS plugins

## 🚀 Installation Workflow

### Step-by-Step Installation

1. **Clone/Download Project**
```bash
cd your-project-directory
```

2. **Install Frontend Dependencies**
```bash
npm install
```
This will install all dependencies listed in `package.json`

3. **Install Backend Dependencies**
```bash
cd server
npm install
cd ..
```

4. **Verify Installation**
```bash
# Check frontend
npm list --depth=0

# Check backend
cd server
npm list --depth=0
cd ..
```

5. **Run the Project**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
npm run dev
```

## 🔧 Troubleshooting

### If Installation Fails

**Clear cache and reinstall:**
```bash
# Frontend
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Backend
cd server
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
cd ..
```

### Version Conflicts

If you encounter version conflicts:
```bash
npm install --legacy-peer-deps
```

### Node Version Issues

This project requires Node.js v16 or higher:
```bash
# Check your Node version
node --version

# If needed, update Node.js
# Using nvm:
nvm install 18
nvm use 18
```

## 📦 Optional Libraries

### For Future Enhancements

```bash
# React Router (for multiple pages)
npm install react-router-dom

# Redux (state management)
npm install @reduxjs/toolkit react-redux

# Form handling
npm install react-hook-form

# Date handling
npm install date-fns

# Charts
npm install recharts

# Testing
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## 📊 Total Package Count

- **Frontend Production**: 8 packages
- **Frontend Development**: 7 packages
- **Backend Production**: 6 packages
- **Backend Development**: 1 package

**Total**: 22 packages

## 💾 Disk Space

Approximate space requirements:
- `node_modules` (frontend): ~300-400 MB
- `node_modules` (backend): ~50-100 MB
- **Total**: ~400-500 MB

## 🔄 Updating Packages

To update all packages to their latest versions:

```bash
# Frontend
npm update

# Backend
cd server
npm update
cd ..
```

To check for outdated packages:
```bash
npm outdated
```

## ✅ Verification Checklist

After installation, verify:
- [ ] All frontend packages installed
- [ ] All backend packages installed
- [ ] No vulnerability warnings
- [ ] `npm run dev` works (frontend)
- [ ] `npm run dev` works (backend)
- [ ] Website loads at localhost:3000
- [ ] API responds at localhost:5000

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Express Documentation](https://expressjs.com)
- [Mongoose Documentation](https://mongoosejs.com)

---

**Last Updated**: December 2024

If you have any issues with installation, refer to the README.md or INSTALLATION.md files.
