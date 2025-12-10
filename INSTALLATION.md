# Quick Installation Guide

Follow these steps to get your portfolio up and running quickly.

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Step 2: Setup MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB (macOS)
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Your connection string:
mongodb://localhost:27017/portfolio
```

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

Example connection string:
```
mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### Step 3: Setup Email (Gmail)

1. Go to your [Google Account](https://myaccount.google.com/)
2. Security → 2-Step Verification (Enable if not already)
3. Security → 2-Step Verification → App Passwords
4. Select app: "Mail", Select device: "Other" (name it "Portfolio")
5. Click Generate
6. Copy the 16-character password (spaces removed)

### Step 4: Configure Environment Variables

**Frontend .env file (in root directory):**
```bash
# Create .env file
cp .env.example .env

# Edit .env
VITE_API_URL=http://localhost:5000
```

**Backend .env file (in server directory):**
```bash
# Create server/.env file
cp server/.env.example server/.env

# Edit server/.env with your details
```

Example `server/.env`:
```env
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_FROM=youremail@gmail.com
EMAIL_TO=youremail@gmail.com

# Frontend
FRONTEND_URL=http://localhost:3000
```

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
✅ Backend running at `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
✅ Frontend running at `http://localhost:3000`

### Step 6: Test Everything

1. Open browser: `http://localhost:3000`
2. Navigate through all sections
3. Fill out the contact form
4. Check your email for notifications
5. Check MongoDB for saved data

## 📦 All Required npm Packages

### Frontend Packages
```json
{
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
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```

### Backend Packages
```json
{
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

## 🔍 Verification Checklist

- [ ] Node.js installed (v16+)
- [ ] MongoDB running (local or Atlas)
- [ ] Frontend dependencies installed
- [ ] Backend dependencies installed
- [ ] Frontend .env configured
- [ ] Backend .env configured
- [ ] Gmail app password generated
- [ ] Backend server starts without errors
- [ ] Frontend starts without errors
- [ ] All sections visible on website
- [ ] Contact form submits successfully
- [ ] Email notifications received
- [ ] Data saved in MongoDB

## 🐛 Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"
**Solution:**
```bash
# Check if MongoDB is running
mongod --version

# For local MongoDB
brew services restart mongodb-community

# For Atlas, verify connection string
```

### Issue: "Email not sending"
**Solutions:**
- Verify Gmail app password (16 characters, no spaces)
- Ensure 2FA is enabled on Google account
- Check `EMAIL_USER` and `EMAIL_PASS` in .env
- Try different email host if needed

### Issue: "Port already in use"
**Solution:**
```bash
# Find and kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Find and kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

### Issue: "Module not found"
**Solution:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# For backend
cd server
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Build fails"
**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

## 🎨 Customization Quick Guide

### Change Colors
Edit `tailwind.config.js`:
```js
neon: {
  blue: '#00d9ff',    // Your primary color
  purple: '#a855f7',  // Your secondary color
  pink: '#ec4899',    // Your accent color
}
```

### Update Personal Info
1. `src/components/Hero.jsx` - Name and titles
2. `src/components/About.jsx` - Bio and stats
3. `src/components/Skills.jsx` - Skills list
4. `src/components/Projects.jsx` - Project data
5. `src/components/Contact.jsx` - Contact details

### Add Profile Image
Replace the placeholder in `src/components/About.jsx`:
```jsx
<img 
  src="/path/to/your/image.jpg" 
  alt="Himangshu Kamila"
  className="w-full h-full object-cover"
/>
```

## 📱 Testing on Mobile

```bash
# Find your local IP address
ipconfig getifaddr en0  # macOS
ipconfig               # Windows

# Access from mobile device
http://YOUR_IP:3000
```

## 🚀 Ready to Deploy?

See the "Deployment" section in README.md for detailed deployment instructions for:
- Frontend: Vercel, Netlify
- Backend: Heroku, Railway, Render
- Database: MongoDB Atlas

## 💡 Need Help?

1. Check README.md for detailed documentation
2. Review error messages in terminal
3. Check browser console for frontend errors
4. Verify all environment variables are set
5. Ensure all dependencies are installed

---

Happy Coding! 🎉
