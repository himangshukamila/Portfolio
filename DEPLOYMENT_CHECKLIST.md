# Deployment Checklist

Use this checklist before deploying your portfolio to production.

## ✅ Pre-Deployment Checklist

### 1. Content Updates
- [ ] Replace "Himangshu Kamila" with your name (all files)
- [ ] Update bio and personal description
- [ ] Add real profile photo
- [ ] Update statistics (projects, clients, etc.)
- [ ] Add your real skills and proficiency levels
- [ ] Replace dummy projects with real projects
- [ ] Add actual project screenshots
- [ ] Update all project links (live demo, GitHub)
- [ ] Update contact information
- [ ] Update social media links
- [ ] Add your resume PDF to `/public/resume.pdf`

### 2. Configuration
- [ ] Update meta tags in `index.html`
- [ ] Set proper page title
- [ ] Add meta description
- [ ] Add Open Graph tags for social sharing
- [ ] Update favicon
- [ ] Configure Google Analytics (optional)
- [ ] Update sitemap.xml (optional)
- [ ] Add robots.txt (optional)

### 3. Testing
- [ ] Test all navigation links
- [ ] Verify smooth scrolling works
- [ ] Test mobile responsive design
- [ ] Test tablet responsive design
- [ ] Test desktop layouts
- [ ] Submit contact form successfully
- [ ] Verify email notifications work
- [ ] Check form validation
- [ ] Test all project links
- [ ] Test social media links
- [ ] Check all images load
- [ ] Verify animations work smoothly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

### 4. Performance
- [ ] Optimize all images (use WebP, compress)
- [ ] Remove unused code
- [ ] Check bundle size
- [ ] Test loading speed
- [ ] Enable caching
- [ ] Minify CSS/JS (done by Vite)
- [ ] Test Lighthouse scores
- [ ] Check mobile performance

### 5. Security
- [ ] No sensitive data in frontend code
- [ ] Environment variables properly set
- [ ] API keys not exposed
- [ ] CORS properly configured
- [ ] Input validation working
- [ ] SQL injection prevention
- [ ] XSS protection enabled

### 6. SEO
- [ ] Descriptive page titles
- [ ] Meta descriptions
- [ ] Alt text for images
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy (H1, H2, etc.)
- [ ] Internal links working
- [ ] External links open in new tab
- [ ] Schema markup (optional)

### 7. Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels where needed
- [ ] Color contrast ratios meet WCAG
- [ ] Alt text for all images
- [ ] Form labels properly associated
- [ ] Screen reader friendly

## 🚀 Deployment Steps

### Frontend Deployment (Vercel - Recommended)

#### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Build the project
npm run build

# Deploy
vercel

# Follow the prompts
```

#### Option 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variables:
   - `VITE_API_URL`: Your backend URL
6. Click "Deploy"

#### Option 3: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop `dist` folder
3. Or connect GitHub repo
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variable:
   - `VITE_API_URL`: Your backend URL

### Backend Deployment

#### Option 1: Deploy to Render
1. Go to [render.com](https://render.com)
2. Create New → Web Service
3. Connect your repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Root Directory: `server`
5. Add environment variables (all from `server/.env`)
6. Deploy

#### Option 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub repo
3. Select `server` folder
4. Add environment variables
5. Deploy

#### Option 3: Deploy to Heroku
```bash
# Install Heroku CLI
npm i -g heroku

# Login
heroku login

# Create app
heroku create your-portfolio-api

# Add MongoDB addon (optional)
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-password
# Set all other variables...

# Deploy
git subtree push --prefix server heroku main
```

### Database Deployment (MongoDB Atlas)

1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Create database user
4. Whitelist all IPs: `0.0.0.0/0`
5. Get connection string
6. Update `MONGODB_URI` in backend env
7. Test connection

## 🔧 Post-Deployment

### Verify Frontend
- [ ] Visit deployed URL
- [ ] Test all sections
- [ ] Check mobile view
- [ ] Submit contact form
- [ ] Verify no console errors
- [ ] Check Google PageSpeed Insights

### Verify Backend
- [ ] API health check: `https://your-api.com/api/health`
- [ ] Submit test contact form
- [ ] Check email received
- [ ] Verify data in MongoDB
- [ ] Check error logs

### Update Environment URLs
- [ ] Update `VITE_API_URL` in frontend env
- [ ] Update `FRONTEND_URL` in backend env
- [ ] Update CORS settings if needed

## 📝 Final Checklist

### Documentation
- [ ] Update README with live URLs
- [ ] Add deployment notes
- [ ] Document any custom setup
- [ ] Update repository description

### Monitoring
- [ ] Set up error tracking (optional: Sentry)
- [ ] Enable uptime monitoring (optional: UptimeRobot)
- [ ] Set up analytics (Google Analytics)
- [ ] Configure email alerts

### Maintenance
- [ ] Create backup of database
- [ ] Set up automatic backups
- [ ] Document update process
- [ ] Plan for future updates

## 🎯 Environment Variables Reference

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com
```

### Backend (Production)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
FRONTEND_URL=https://your-portfolio.com
```

## 🔒 Security Notes

### Before Going Live
- [ ] Remove all console.log statements
- [ ] No API keys in frontend code
- [ ] Environment variables on server only
- [ ] HTTPS enabled (handled by hosting)
- [ ] Rate limiting on contact form (optional)
- [ ] CAPTCHA to prevent spam (optional)

### MongoDB Security
- [ ] Strong database password
- [ ] IP whitelist configured
- [ ] User access restrictions
- [ ] Regular backups enabled

## 📊 Performance Targets

### Lighthouse Scores (Aim for)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Load Times
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Page Size: < 2MB

## 🐛 Common Deployment Issues

### Frontend Issues
| Issue | Solution |
|-------|----------|
| API calls failing | Check CORS, update API URL |
| Images not loading | Use absolute URLs or CDN |
| Build fails | Check dependencies, Node version |
| Env vars not working | Add VITE_ prefix |

### Backend Issues
| Issue | Solution |
|-------|----------|
| MongoDB connection fails | Check connection string, whitelist IP |
| Email not sending | Verify Gmail settings, app password |
| CORS errors | Update FRONTEND_URL |
| Port issues | Use process.env.PORT |

## 🎉 Launch Checklist

### Just Before Launch
- [ ] Final content review
- [ ] Spell check everything
- [ ] Test all links one more time
- [ ] Clear browser cache and test
- [ ] Test from different devices
- [ ] Test from different networks

### Launch Day
- [ ] Deploy frontend
- [ ] Deploy backend
- [ ] Update DNS (if custom domain)
- [ ] Test production site
- [ ] Monitor for errors
- [ ] Share on social media

### Post-Launch
- [ ] Monitor analytics
- [ ] Check email notifications
- [ ] Review contact form submissions
- [ ] Gather feedback
- [ ] Make improvements

## 📱 Custom Domain Setup

### Frontend (Vercel)
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records
4. Wait for SSL certificate

### Backend (Render/Railway)
1. Go to Settings → Custom Domain
2. Add your API domain
3. Update DNS records
4. Update frontend env with new URL

## 🔄 Update Workflow

When making updates:
1. Make changes locally
2. Test thoroughly
3. Commit to Git
4. Push to GitHub
5. Automatic deployment (if configured)
6. Verify on production

## 📞 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## ✅ Deployment Complete!

Once all items are checked:
- ✨ Your portfolio is live!
- 📊 Monitor performance
- 🔄 Keep content updated
- 📧 Respond to inquiries promptly
- 🚀 Share your work proudly

---

**Good luck with your deployment!** 🎉

Remember: Your portfolio is never truly "finished" - keep updating it with new projects and skills!
