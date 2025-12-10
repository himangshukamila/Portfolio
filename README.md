# Himangshu Kamila - Portfolio Website

A modern, professional portfolio website for Frontend Developer Himangshu Kamila. Built with the MERN stack (MongoDB, Express, React, Node.js) featuring beautiful animations, dark theme with coding aesthetics, and a fully functional contact form with email notifications.

![Portfolio Preview](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop)

## ✨ Features

### Frontend Features
- 🎨 **Modern Dark Theme** - Coding-inspired design with neon accents and glassmorphism effects
- 🔄 **Loading Animation** - Cool coding-themed loader on initial page load
- 🎭 **Smooth Animations** - Framer Motion animations throughout (scroll-triggered, hover effects, transitions)
- ⌨️ **Typing Animation** - Dynamic typing effect in hero section
- 📱 **Fully Responsive** - Works seamlessly on all devices (mobile, tablet, desktop)
- 🧭 **Smooth Navigation** - Navbar with smooth scroll to sections + scroll-through functionality
- 📊 **Skills Section** - Interactive tab menu (Languages, Frameworks, Tools)
- 💼 **Projects Showcase** - Filterable project cards with live/GitHub links
- 📧 **Contact Form** - Validated form with real-time feedback
- 🎯 **Scroll to Top** - Floating button for easy navigation

### Backend Features
- 🗄️ **MongoDB Database** - Contact form submissions stored securely
- 📨 **Email Notifications** - Automatic email alerts for new submissions
- 📧 **Auto-Reply** - Automated thank you emails to users
- ✅ **Form Validation** - Server-side validation with express-validator
- 🔐 **Security** - CORS enabled, input sanitization, error handling
- 📊 **Admin Endpoints** - View all submissions (ready for admin panel)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Type Animation** - Typing animation effects
- **React Scroll** - Smooth scrolling functionality
- **React Icons** - Icon library
- **Lucide React** - Additional icons
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email sending
- **Express Validator** - Form validation
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas account)
- Gmail account (for email notifications)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Configure Environment Variables

#### Frontend (.env in root directory)
```env
VITE_API_URL=http://localhost:5000
```

#### Backend (server/.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=himangshu.kamila@example.com

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

### 5. Gmail App Password Setup
To enable email notifications:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → 2-Step Verification → App Passwords
4. Generate an app password for "Mail"
5. Use this password in `EMAIL_PASS` (not your regular Gmail password)

## 🚀 Running the Application

### Development Mode

#### Terminal 1 - Start Backend Server
```bash
cd server
npm run dev
# Or: npm start
```
Server will run on `http://localhost:5000`

#### Terminal 2 - Start Frontend
```bash
npm run dev
```
Frontend will run on `http://localhost:3000`

### Production Build

#### Build Frontend
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

#### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── server/                 # Backend application
│   ├── config/            # Configuration files
│   │   └── db.js          # MongoDB connection
│   ├── models/            # Database models
│   │   └── Contact.js     # Contact form model
│   ├── routes/            # API routes
│   │   └── contact.js     # Contact endpoints
│   ├── utils/             # Utility functions
│   │   └── email.js       # Email sending logic
│   ├── .env.example       # Environment variables template
│   ├── package.json       # Backend dependencies
│   └── server.js          # Express server setup
├── src/                   # Frontend source code
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Footer.jsx     # Footer with social links
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Loader.jsx     # Loading animation
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Projects.jsx   # Projects showcase
│   │   └── Skills.jsx     # Skills with tabs
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
├── .env.example           # Frontend env template
├── .gitignore             # Git ignore file
├── index.html             # HTML template
├── package.json           # Frontend dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS config
└── vite.config.js         # Vite configuration
```

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section (`src/components/Hero.jsx`)
- Change name, titles, and typing animations
- Update social links
- Modify description text

#### 2. About Section (`src/components/About.jsx`)
- Update bio text
- Change stats (projects, clients, etc.)
- Modify highlights and achievements

#### 3. Skills Section (`src/components/Skills.jsx`)
- Add/remove programming languages
- Update frameworks list
- Modify tools and their proficiency levels

#### 4. Projects Section (`src/components/Projects.jsx`)
- Replace dummy projects with real projects
- Update project images, descriptions, and links
- Add/remove project categories

#### 5. Contact Section (`src/components/Contact.jsx`)
- Update contact information
- Modify email address and phone number
- Change location details

### Update Colors & Theme

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  neon: {
    blue: '#00d9ff',    // Primary accent
    purple: '#a855f7',  // Secondary accent
    pink: '#ec4899',    // Tertiary accent
    green: '#10b981',   // Success color
  }
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📧 API Endpoints

### Contact Form API

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get All Submissions (Admin)
```http
GET /api/contact?page=1&limit=10
```

#### Get Single Submission (Admin)
```http
GET /api/contact/:id
```

#### Update Status (Admin)
```http
PATCH /api/contact/:id/status
Content-Type: application/json

{
  "status": "read"
}
```

## 🎯 Features Breakdown

### Animations
- **Loading Screen** - Rotating code icons with progress bar
- **Scroll Animations** - Fade-in and slide-up effects on scroll
- **Hover Effects** - Scale, glow, and color transitions
- **Typing Animation** - Dynamic text in hero section
- **Smooth Scroll** - Animated navigation between sections
- **Particle Effects** - Floating code symbols

### Design Elements
- **Glassmorphism** - Frosted glass effect on cards
- **Gradient Text** - Multi-color gradient on headings
- **Neon Glow** - Glowing borders and shadows
- **Code Blocks** - Styled code editor mockups
- **Dark Theme** - Professional dark background

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly buttons
- Optimized images

## 🔧 Troubleshooting

### MongoDB Connection Issues
```bash
# Make sure MongoDB is running locally
mongod

# Or use MongoDB Atlas connection string
# Update MONGODB_URI in server/.env
```

### Email Not Sending
1. Verify Gmail app password is correct
2. Check 2FA is enabled on Google account
3. Ensure less secure app access is disabled (use app password instead)
4. Check server logs for detailed error messages

### Port Already in Use
```bash
# Find process using port 3000 or 5000
lsof -i :3000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

## 📝 Libraries to Install Locally

After cloning, you need to install these packages:

### Frontend Dependencies
```bash
npm install react react-dom
npm install react-icons react-scroll react-type-animation
npm install framer-motion lucide-react axios
```

### Frontend Dev Dependencies
```bash
npm install -D @vitejs/plugin-react vite
npm install -D tailwindcss postcss autoprefixer
```

### Backend Dependencies
```bash
cd server
npm install express mongoose cors dotenv
npm install nodemailer express-validator
npm install -D nodemon
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variable: `VITE_API_URL=your-backend-url`

### Backend (Heroku/Railway/Render)
1. Push `server` folder to hosting
2. Set all environment variables
3. Ensure MongoDB Atlas is configured
4. Update `FRONTEND_URL` in backend .env

### Database (MongoDB Atlas)
1. Create free cluster at mongodb.com/atlas
2. Get connection string
3. Update `MONGODB_URI` in server/.env

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Himangshu Kamila**
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)
- GitHub: [@himangshu](https://github.com/himangshu)
- LinkedIn: [Himangshu Kamila](https://linkedin.com/in/himangshu-kamila)
- Email: himangshu.kamila@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons and Lucide React
- Images from Unsplash
- Animation ideas from Framer Motion community

## 📞 Support

For support, email himangshu.kamila@example.com or open an issue in the GitHub repository.

---

⭐️ If you like this project, please give it a star on GitHub!

Built with ❤️ and lots of ☕ by Himangshu Kamila
