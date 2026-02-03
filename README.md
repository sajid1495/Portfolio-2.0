# Personal Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- 🌓 **Dark/Light Mode** toggle
- ✨ **Smooth Animations** with Framer Motion
- 📧 **Contact Form** ready for integration
- 🔍 **SEO Optimized**
- 🚀 **Static Export** for easy deployment

## 📂 Sections

- **Home** - Hero section with introduction
- **About** - Personal information and stats
- **Education** - Academic background timeline
- **Skills** - Technical skills with progress bars
- **GitHub** - GitHub activity and pinned repos
- **Projects** - Featured and other projects
- **Contact** - Contact form and information

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information
Update your information in these files:
- `src/components/sections/Hero.tsx` - Name, tagline, social links
- `src/components/sections/About.tsx` - Bio, location, stats
- `src/components/sections/Education.tsx` - Academic history
- `src/components/sections/Skills.tsx` - Technical skills
- `src/components/sections/GitHub.tsx` - GitHub username and repos
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social links
- `src/app/layout.tsx` - Page title and meta description

### Images
Replace placeholder images:
- Add your profile photo
- Add project screenshots in the public folder

### Contact Form
The contact form is integrated with **[Web3Forms](https://web3forms.com/)** for email delivery.

#### Current Setup (Web3Forms)
1. The form sends submissions to your email via Web3Forms API
2. Access key is configured in `src/components/sections/Contact.tsx`
3. To use your own Web3Forms account:
   - Sign up at [web3forms.com](https://web3forms.com/)
   - Get your access key from the dashboard
   - Replace the `access_key` in `Contact.tsx`

#### Alternative Options
If you prefer a different service, you can easily switch to:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- Custom API endpoint

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a static export in the `out` folder.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `out`

## 📦 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Made with ❤️ by Sajid
