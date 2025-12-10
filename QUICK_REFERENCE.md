# Quick Reference Card

Quick commands and information for the portfolio project.

## 🚀 Start Commands

```bash
# Frontend (Port 3000)
npm run dev

# Backend (Port 5000)
cd server
npm run dev

# Or with nodemon
npm start
```

## 📦 Installation Commands

```bash
# Install all dependencies
npm install
cd server && npm install && cd ..

# Install frontend only
npm install

# Install backend only
cd server && npm install
```

## 🔧 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

### Backend (server/.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
FRONTEND_URL=http://localhost:3000
```

## 📁 Key Files to Customize

| File | What to Change |
|------|---------------|
| `src/components/Hero.jsx` | Name, titles, bio |
| `src/components/About.jsx` | Personal info, stats |
| `src/components/Skills.jsx` | Skills list, levels |
| `src/components/Projects.jsx` | Project data |
| `src/components/Contact.jsx` | Contact details |
| `tailwind.config.js` | Colors, theme |
| `index.html` | Meta tags, title |

## 🎨 Color Codes

```js
// Neon Colors
blue: '#00d9ff'
purple: '#a855f7'
pink: '#ec4899'
green: '#10b981'

// Dark Colors
dark: '#0a0a0a'
dark-lighter: '#111111'
dark-card: '#1a1a1a'
dark-border: '#262626'
```

## 📊 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact` | Submit form |
| GET | `/api/contact` | Get all (admin) |
| GET | `/api/contact/:id` | Get one (admin) |
| PATCH | `/api/contact/:id/status` | Update status |
| GET | `/api/health` | Health check |

## 🗂️ Project Structure

```
portfolio/
├── src/components/     # React components
├── server/            # Backend code
├── public/            # Static files
├── .env               # Frontend env
├── server/.env        # Backend env
└── README.md          # Documentation
```

## 🔄 Common Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Clear cache
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Check for updates
npm outdated

# Update packages
npm update

# Kill port processes
lsof -i :3000
lsof -i :5000
kill -9 <PID>
```

## 📚 Component IDs

For smooth scrolling:

```
#hero       - Hero section
#about      - About section
#skills     - Skills section
#projects   - Projects section
#contact    - Contact section
```

## 🎯 Navigation Links

```jsx
{ name: 'Home', to: 'hero', icon: Home }
{ name: 'About', to: 'about', icon: User }
{ name: 'Skills', to: 'skills', icon: Award }
{ name: 'Projects', to: 'projects', icon: Briefcase }
{ name: 'Contact', to: 'contact', icon: Mail }
```

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication
2. Go to: Google Account → Security → 2-Step Verification
3. Click: App Passwords
4. Generate password for "Mail"
5. Use 16-character code in `EMAIL_PASS`

## 🔒 Contact Form Fields

```js
{
  name: string,      // required, max 100
  email: string,     // required, validated
  phone: string,     // optional, max 20
  message: string    // required, max 1000
}
```

## 🎨 Animation Types

- **Loading**: Rotating icons, progress bar
- **Scroll**: Fade-in, slide-up on scroll
- **Hover**: Scale, glow, color change
- **Typing**: Dynamic text in hero
- **Smooth Scroll**: Between sections
- **Particles**: Floating code symbols

## 📱 Responsive Breakpoints

```js
sm: '640px'   // Small devices
md: '768px'   // Medium devices
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large
```

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB error | Start MongoDB: `mongod` |
| Email not sending | Check Gmail app password |
| Port in use | Kill process: `kill -9 <PID>` |
| Module not found | Run: `npm install` |
| Build fails | Clear cache, reinstall |

## 📦 Main Libraries

**Frontend:**
- React, Vite, Tailwind CSS
- Framer Motion, Axios
- React Scroll, Type Animation

**Backend:**
- Express, MongoDB, Mongoose
- Nodemailer, CORS, Dotenv

## 🌐 URLs

- **Frontend Dev**: http://localhost:3000
- **Backend Dev**: http://localhost:5000
- **API Health**: http://localhost:5000/api/health

## 📝 Quick Edits

### Change Name
`src/components/Hero.jsx` → Line 48

### Change Email
`src/components/Contact.jsx` → Line 17
`server/.env` → EMAIL_TO

### Change Colors
`tailwind.config.js` → Line 15-20

### Change Skills
`src/components/Skills.jsx` → Line 26-48

### Change Projects
`src/components/Projects.jsx` → Line 14-75

## 🎯 Stats to Update

**About Section:**
- Projects completed
- Happy clients
- Cups of coffee
- Awards won

**Skills Section:**
- Years experience
- Technologies mastered
- Projects built

## 🔗 Social Links

Update in:
1. `src/components/Hero.jsx` (line ~86)
2. `src/components/Footer.jsx` (line ~17)

## 📄 Documentation Files

- **README.md** - Complete guide
- **INSTALLATION.md** - Setup guide
- **CUSTOMIZATION_GUIDE.md** - How to customize
- **PROJECT_SUMMARY.md** - Project overview
- **LIBRARIES_TO_INSTALL.md** - Package list
- **QUICK_REFERENCE.md** - This file

## 💡 Pro Tips

1. **Test locally** before deploying
2. **Backup** before major changes
3. **Use .env** for sensitive data
4. **Optimize images** before adding
5. **Test on mobile** devices
6. **Check console** for errors
7. **Read error messages** carefully
8. **Git commit** often

## 🚨 Before Deployment

- [ ] Update all personal information
- [ ] Replace dummy data
- [ ] Add real project images
- [ ] Test contact form
- [ ] Verify email notifications
- [ ] Check MongoDB connection
- [ ] Update meta tags
- [ ] Test responsive design
- [ ] Optimize images
- [ ] Run production build
- [ ] Test production preview
- [ ] Update environment URLs

## 📞 Getting Help

1. Check error in console
2. Review documentation
3. Verify environment variables
4. Test each component separately
5. Check network tab (browser)
6. Review server logs
7. Consult library documentation

---

**Keep this file handy for quick reference!**

Print or bookmark for easy access. 📌
