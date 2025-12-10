# Portfolio Customization Guide

This guide will help you customize the portfolio to make it your own.

## 🎨 Personal Information

### 1. Update Name and Title

**File: `src/components/Hero.jsx`**
```jsx
// Line ~48: Change your name
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Your Name{' '}
  <span className="gradient-text">Here</span>
</h1>

// Line ~59: Update typing animation roles
<TypeAnimation
  sequence={[
    'Your Title 1',
    2000,
    'Your Title 2',
    2000,
    'Your Title 3',
    2000,
  ]}
  // ...
/>

// Line ~70: Update description
<p className="text-gray-400 text-lg mb-8">
  Your personal description here...
</p>
```

### 2. Update About Section

**File: `src/components/About.jsx`**
```jsx
// Line ~100: Update personal info
<div className="flex items-center justify-between p-3">
  <span className="text-gray-400">Name:</span>
  <span className="text-white font-semibold">Your Name</span>
</div>

// Line ~114-145: Update bio paragraphs
<p>
  Your personalized bio text here...
</p>

// Line ~20-26: Update stats
const stats = [
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  // Update values to match your achievements
]
```

### 3. Update Skills

**File: `src/components/Skills.jsx`**
```jsx
// Line ~26-48: Update skills with your actual proficiency
const skillsData = {
  languages: [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', level: 85, color: 'from-green-400 to-green-600' },
    // Add or remove languages
  ],
  frameworks: [
    { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-600' },
    // Add your frameworks
  ],
  tools: [
    { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
    // Add your tools
  ]
}
```

### 4. Update Projects

**File: `src/components/Projects.jsx`**
```jsx
// Line ~14-75: Replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Detailed description of your project...',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack', // or 'frontend'
    liveLink: 'https://your-live-site.com',
    githubLink: 'https://github.com/yourusername/project',
    featured: true // Set true for featured projects
  },
  // Add more projects...
]
```

**Tips for Project Images:**
- Use high-quality screenshots (1200x800px recommended)
- Optimize images before uploading
- Use services like Unsplash, or host on your own server
- Ensure images have proper alt text for accessibility

### 5. Update Contact Information

**File: `src/components/Contact.jsx`**
```jsx
// Line ~17-33: Update contact details
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 YOUR NUMBER',
    link: 'tel:+91YOURNUMBER'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Country',
    link: null
  },
]
```

### 6. Update Social Links

**File: `src/components/Footer.jsx`**
```jsx
// Line ~15-36: Update social media links
const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/yourusername', 
    label: 'GitHub',
    color: 'hover:text-gray-400'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/yourprofile', 
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com/yourhandle', 
    label: 'Twitter',
    color: 'hover:text-sky-400'
  },
]
```

**Also update in:**
- `src/components/Hero.jsx` (line ~86)

### 7. Update Meta Tags

**File: `index.html`**
```html
<!-- Line 6-9: Update meta information -->
<meta name="description" content="Your custom description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta name="author" content="Your Name" />
<title>Your Name | Your Title</title>
```

## 🎨 Design Customization

### Change Color Scheme

**File: `tailwind.config.js`**
```js
// Line 13-21: Update neon colors
colors: {
  neon: {
    blue: '#YOUR_COLOR',    // Primary accent
    purple: '#YOUR_COLOR',  // Secondary accent
    pink: '#YOUR_COLOR',    // Tertiary accent
    green: '#YOUR_COLOR',   // Success color
  }
}
```

**Color Palette Suggestions:**
- Blue Theme: `blue: '#0ea5e9'`, `purple: '#6366f1'`, `pink: '#8b5cf6'`
- Green Theme: `blue: '#10b981'`, `purple: '#14b8a6'`, `pink: '#06b6d4'`
- Orange Theme: `blue: '#f97316'`, `purple: '#f59e0b'`, `pink: '#ef4444'`

### Modify Fonts

**File: `index.html`**
```html
<!-- Line 12-13: Change Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**File: `tailwind.config.js`**
```js
// Line 50: Update font family
fontFamily: {
  'mono': ['Your Mono Font', 'monospace'],
}
```

**File: `src/index.css`**
```css
/* Line 9: Update main font */
body {
  font-family: 'Your Font', sans-serif;
}
```

### Add/Remove Sections

**To Add a New Section:**

1. Create component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`:
```jsx
import YourSection from './components/YourSection'

function App() {
  return (
    <div>
      {/* ... other sections ... */}
      <YourSection />
    </div>
  )
}
```

3. Add navigation link in `src/components/Navbar.jsx`:
```jsx
const navItems = [
  // ... existing items ...
  { name: 'Your Section', to: 'your-section', icon: YourIcon },
]
```

**To Remove a Section:**
1. Delete component file
2. Remove import and usage from `src/App.jsx`
3. Remove navigation link from `src/components/Navbar.jsx`

## 📸 Images and Media

### Add Profile Picture

**File: `src/components/About.jsx`**
```jsx
// Replace the placeholder (around line 89)
<div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden">
  <img 
    src="/images/profile.jpg" 
    alt="Your Name"
    className="w-full h-full object-cover"
  />
</div>
```

### Add Favicon

1. Generate favicon using [favicon.io](https://favicon.io)
2. Replace `public/vite.svg` with your favicon
3. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Optimize Images

**Recommended image sizes:**
- Profile photo: 500x500px
- Project screenshots: 1200x800px
- Background images: 1920x1080px

**Tools for optimization:**
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

## 📧 Email Configuration

### Update Email Templates

**File: `server/routes/contact.js`**

**Admin Notification (Line 51-68):**
```jsx
subject: `New Contact from ${name}`,
html: `
  <div style="font-family: Arial, sans-serif;">
    <h2>Your Custom Heading</h2>
    <!-- Customize HTML template -->
  </div>
`
```

**Auto-Reply (Line 73-90):**
```jsx
subject: 'Your Custom Subject',
html: `
  <div style="font-family: Arial, sans-serif;">
    <p>Your custom message...</p>
  </div>
`
```

## 🔧 Advanced Customization

### Add Google Analytics

**File: `index.html`**
```html
<head>
  <!-- Add before closing head tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

### Add Blog Section

1. Create `src/components/Blog.jsx`
2. Set up blog posts data structure
3. Add routing with React Router (if needed)
4. Connect to CMS like Contentful or Strapi

### Add Resume Download

1. Add your resume PDF to `public/resume.pdf`
2. Update Hero section button:
```jsx
<a href="/resume.pdf" download>
  <button>Download CV</button>
</a>
```

### Add Testimonials Section

Create `src/components/Testimonials.jsx`:
```jsx
const testimonials = [
  {
    name: 'Client Name',
    role: 'Position at Company',
    content: 'Testimonial text...',
    avatar: '/images/client1.jpg'
  },
  // More testimonials...
]
```

## 🚀 Performance Optimization

### Lazy Loading Components

```jsx
import { lazy, Suspense } from 'react'

const Projects = lazy(() => import('./components/Projects'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  )
}
```

### Image Optimization

Use optimized image formats:
- WebP for modern browsers
- JPEG for photos
- PNG for graphics with transparency
- SVG for icons and logos

## 📝 Content Writing Tips

### Hero Section
- Keep it concise and impactful
- Use action-oriented language
- Highlight your unique value proposition

### About Section
- Tell your story authentically
- Focus on achievements and impact
- Show personality and passion

### Projects
- Lead with results and impact
- Explain your role clearly
- Highlight technical challenges solved

### Contact
- Make it easy to reach you
- Set clear expectations (response time)
- Consider adding calendar booking link

## 🎯 SEO Optimization

### Meta Tags
```html
<meta name="description" content="Your 150-160 character description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-site.com/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### Sitemap
Generate and add `public/sitemap.xml` for better SEO.

### Robots.txt
Add `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://your-site.com/sitemap.xml
```

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Test changes in development before deploying
- Keep backups before major customizations

---

Happy Customizing! Make it uniquely yours! 🎨
