# AI Portfolio Website

A modern, responsive portfolio website built with React to showcase AI models, projects, and APIs. Features a beautiful dark theme with smooth animations and interactive components.

## ✨ Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Professional Sections**: Hero, About, AI Models, Projects, APIs, Skills, and Contact
- **Contact Form**: Functional contact form with validation and submission feedback
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── AIModels.js     # AI Models showcase
│   ├── Projects.js     # Projects portfolio
│   ├── APIs.js         # API services
│   ├── Skills.js       # Technical skills
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer section
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ai-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The website will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  },
  dark: {
    100: '#1f2937',
    200: '#111827',
    300: '#0f172a',
  }
}
```

### Content
Update the content in each component file:
- **Hero.js**: Change main headline, description, and CTA buttons
- **About.js**: Update personal information, stats, and highlights
- **AIModels.js**: Modify AI models data and categories
- **Projects.js**: Update project information and links
- **APIs.js**: Modify API services and endpoints
- **Skills.js**: Update skills and proficiency levels
- **Contact.js**: Change contact information and social links

### Images
Replace placeholder images with your own:
- Update image URLs in component files
- Use high-quality images (recommended: 400x300 for cards)
- Optimize images for web performance

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
```json
"homepage": "https://yourusername.github.io/ai-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_CONTACT_EMAIL=your_email
```

### Meta Tags
Update meta tags in `public/index.html`:
- Title
- Description
- Keywords
- Social media tags

## 📊 Performance

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Responsive images with proper sizing
- **Minified CSS**: Tailwind CSS is purged in production
- **Smooth Scrolling**: Optimized scroll behavior

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: hello@aiportfolio.com
- Documentation: [Link to docs]

---

**Built with ❤️ and React**
