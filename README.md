# John Paull - Virtual Contact Page

A modern, responsive NFC contact page built with React for music producer John Paull.

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000` to view the page.

### Production Build
```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Setup Instructions

### 1. Add Background Image
Place your `jp.webp` file in the project root directory. The image should be:
- Format: WebP
- Recommended size: 1920x1080 or larger
- File size: Under 500KB for optimal performance

### 2. Update Links
Edit the `links` object in `App.jsx` (lines 6-13) with the actual URLs:

```javascript
const links = {
  discography: 'https://music.apple.com/your-actual-link',
  beatStore: 'https://www.beatstars.com/your-actual-store',
  instagram: 'https://instagram.com/johnpaull',
  twitter: 'https://twitter.com/johnpaull',
  spotify: 'https://open.spotify.com/artist/your-id',
  soundcloud: 'https://soundcloud.com/johnpaull'
};
```

### 3. Customize Content (Optional)
To change the name or title, edit lines 18-19 in `App.jsx`:
```javascript
<h1 className="name">John Paull</h1>
<p className="title">Music Producer / Artist</p>
```

## Project Structure

```
JP/
├── index.html          # HTML entry point
├── main.jsx           # React root
├── App.jsx            # Main component
├── App.css            # Styling
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
├── jp.webp            # Background image (add this)
├── designRules.md     # Design documentation
└── README.md          # This file
```

## Features

- Modern glassmorphism design
- Responsive layout (mobile-first)
- Smooth animations
- Dark overlay for readability
- Social media integration
- Touch-optimized for mobile
- Accessibility compliant
- SEO optimized

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Other Platforms
Build the project and upload the `dist` folder to any static hosting service.

## Customization

For detailed customization options and design patterns for creating similar contact pages, see [designRules.md](./designRules.md).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome Android (latest)

## License

Private project for NFC contact card business.
