# 🌟 Coaching Website + Client Portal

A complete Next.js coaching website with integrated client portal system. Built for neurodivergent coaching practices but adaptable for any coaching niche.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Sanity credentials

# Start development server
npm run dev

# Start Sanity Studio (in another terminal)
cd sanity && npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Portal Login**: http://localhost:3000/portal/login
- **Sanity Studio**: http://localhost:3333

---

## 📦 What's Included

### 🎨 Public Website
- Modern brutalist dark theme
- Responsive design
- Blog with Sanity CMS
- Contact forms
- Service pages
- Pricing tiers
- SEO optimized

### 🔐 Client Portal
- Secure authentication (NextAuth.js)
- Client dashboard
- Session management
- Resource library
- Intake forms
- Contract tracking
- Progress monitoring

### 📧 Email Automation (Optional)
- Welcome emails
- Intake reminders
- Contract reminders
- Session confirmations
- Professional HTML templates

---

## 📚 Documentation

- **[PORTAL_SETUP.md](./PORTAL_SETUP.md)** - Complete portal setup guide
- **[EMAIL_AUTOMATION.md](./EMAIL_AUTOMATION.md)** - Email automation guide
- **[.env.example](./.env.example)** - Environment variables template

---

## 💰 Pricing (Per Coach Site)

### Infrastructure (FREE)
- **Vercel Hosting**: FREE
- **Sanity CMS**: FREE (up to 5k docs)
- **NextAuth**: FREE (open source)

### Optional Services
- **Resend Email**: FREE (up to 3k emails/mo) or $20/mo
- **Stripe Payments**: Transaction fees only
- **HelloSign Contracts**: Pay per signature

**Total: $0-20/month** 🎉

**vs. Competitors:**
- Practice Better: $29-79/mo
- Healthie: $99-299/mo
- Kajabi: $149+/mo
- Dubsado: $40+/mo

---

## 🔑 Key Features

### Portal Features
✅ Client authentication & authorization
✅ Session scheduling & history
✅ Downloadable resources with access controls
✅ Comprehensive intake forms
✅ Contract tracking
✅ Progress monitoring
✅ Mobile responsive

### Admin Features (Sanity Studio)
✅ Client management
✅ Session scheduling
✅ Resource library management
✅ Intake form responses
✅ Blog content management
✅ Easy content updates

---

## 🛠️ Setup Guide

### 1. Environment Setup

```env
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-write-token
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000

# Optional (for email)
RESEND_API_KEY=your-resend-key
FROM_EMAIL=onboarding@yourdomain.com
COACH_NAME=Your Name
```

### 2. Create First Client

```bash
# Generate password hash
node scripts/hash-password.js "ClientPassword123"

# Copy the hash and create client in Sanity Studio
```

---

## 📖 Detailed Guides

- **Portal Setup**: [PORTAL_SETUP.md](./PORTAL_SETUP.md)
- **Email Automation**: [EMAIL_AUTOMATION.md](./EMAIL_AUTOMATION.md)

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

---

## 🎉 Ready to Ship!

You now have a complete coaching website + client portal that:
- Costs $0-20/month to run
- Scales with your practice
- Clients can self-manage
- Professional and modern
- Easy to deploy and clone

**Break your clients free from subscription hell!** 💜

---

Built with 💜 for neurodivergent coaches and the web designers who support them.
