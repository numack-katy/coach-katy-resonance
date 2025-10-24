# Client Portal Setup Guide

This guide explains how to set up and use the client portal system for coaching websites.

## 🎯 Overview

The client portal is a fully-functional coaching client management system built with:
- **NextAuth.js** for authentication
- **Sanity CMS** as the database
- **Next.js 15** App Router
- **bcryptjs** for password security

### Features
- 🔐 Secure client authentication
- 📅 Session management and scheduling
- 📚 Resource library with access controls
- 📋 Comprehensive intake forms
- ✅ Contract and onboarding tracking
- 🎨 Dark theme matching your coaching brand

---

## 🚀 Initial Setup

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-write-token-here

# NextAuth
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

#### Getting Sanity Credentials

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Copy the Project ID
4. Go to API settings and create a new token with **Editor** permissions
5. Copy the token

#### Generating NEXTAUTH_SECRET

Run this command:
```bash
openssl rand -base64 32
```

### 2. Deploy Sanity Schemas

The portal uses these Sanity document types:
- `client` - Client accounts and profiles
- `session` - Coaching sessions
- `resource` - Downloadable resources and materials
- `intakeForm` - Client intake questionnaire responses

To deploy the schemas:

```bash
npm run sanity:deploy
```

Or manually in Sanity Studio at `http://localhost:3333`

---

## 👥 Creating Client Accounts

### Step 1: Generate Password Hash

Use the password hashing script:

```bash
node scripts/hash-password.js "ClientPassword123"
```

This outputs a bcrypt hash like:
```
$2a$10$abc123...xyz789
```

### Step 2: Create Client in Sanity Studio

1. Open Sanity Studio: `http://localhost:3333`
2. Create a new **Client** document
3. Fill in:
   - **Name**: Full name
   - **Email**: Login email
   - **Password Hash**: Paste the generated hash
   - **Status**: Set to "active"
   - **Package Type**: e.g., "6pack"
   - **Sessions Remaining**: e.g., 6
   - **Pricing Tier**: "middle", "supported", or "full"
4. Save the document

The client can now log in at `/portal/login`

---

## 📖 Portal Features

### For Clients

**Dashboard** (`/portal/dashboard`)
- View upcoming sessions
- See action items from past sessions
- Quick links to intake form and contract
- Access recent resources

**Sessions** (`/portal/sessions`)
- View all upcoming and past sessions
- See session notes and action items
- Join video calls via meeting links

**Resources** (`/portal/resources`)
- Browse coaching materials
- Download PDFs, worksheets, templates
- Access videos and external links

**Intake Form** (`/portal/intake`)
- Complete comprehensive intake questionnaire
- Neurodivergent-friendly questions
- Saves to Sanity for coach review

### For Coaches (via Sanity Studio)

**Manage Clients**
- View all clients and their status
- Track sessions remaining
- See last login activity
- Mark intake/contract completion

**Schedule Sessions**
- Create session documents
- Set date, time, duration
- Add meeting links (Zoom, Google Meet, etc.)
- Write agendas and session notes
- Track action items

**Organize Resources**
- Upload files or link to external resources
- Categorize by topic
- Control access (all clients, active only, specific clients)
- Add cover images and descriptions

**Review Intake Forms**
- View client responses
- Add coach notes
- Mark as reviewed

---

## 🎨 Customization

### Branding

Update these files to match your coaching brand:

**Logo**: Replace in `/public/assets/images/demo-brutalist/logo-white.svg`

**Colors**: Main brand color is `#77599f` (purple). Update in:
- `/components/portal/*.jsx`
- `/app/(portal)/portal/*/page.jsx`

**Fonts**: Uses existing site fonts (Poppins, Urbanist)

### Email Customization

Footer copyright: Update in each portal page:
```jsx
© {new Date().getFullYear()} Coach Katy. All rights reserved.
```

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore` for a reason
2. **Use strong NEXTAUTH_SECRET** - Generate with OpenSSL
3. **Rotate Sanity API tokens** - Periodically update your write token
4. **Client passwords** - Encourage strong passwords (min 8 chars, mixed case, numbers)
5. **HTTPS in production** - Always use HTTPS for portal in production

---

## 📊 Data Structure

### Client Document
```javascript
{
  _type: 'client',
  name: 'Jane Doe',
  email: 'jane@example.com',
  passwordHash: '$2a$10$...',
  status: 'active', // active, paused, completed, pending
  intakeCompleted: true,
  contractSigned: true,
  contractUrl: 'https://...',
  packageType: '6pack',
  sessionsRemaining: 4,
  pricingTier: 'middle', // supported, middle, full
  startDate: '2025-01-15T00:00:00.000Z',
  pronouns: 'she/her',
  phone: '+1234567890'
}
```

### Session Document
```javascript
{
  _type: 'session',
  client: { _ref: 'client-id' },
  scheduledDate: '2025-02-01T14:00:00.000Z',
  duration: 60,
  status: 'scheduled', // scheduled, completed, cancelled, noshow
  sessionNumber: 3,
  meetingLink: 'https://zoom.us/j/...',
  agenda: 'Review progress on energy management...',
  coachNotes: 'Client showed great progress...',
  actionItems: ['Try morning routine', 'Journal about...'],
  clientFeedback: 'This session was helpful...'
}
```

### Resource Document
```javascript
{
  _type: 'resource',
  title: 'Energy Management Worksheet',
  description: 'Track your energy levels...',
  resourceType: 'worksheet', // pdf, worksheet, video, link, template
  category: 'energy', // getting-started, self-awareness, energy, etc.
  accessLevel: 'all', // all, active, specific
  specificClients: [{ _ref: 'client-id' }],
  file: { asset: { _ref: 'file-asset-id' } },
  coverImage: { asset: { _ref: 'image-asset-id' } },
  published: true
}
```

---

## 📧 Email Automation (Optional)

The portal includes professional automated emails for client onboarding:
- Welcome emails with login credentials
- Intake form reminders
- Contract signing reminders
- Session confirmations

**Setup (5 minutes):**

1. Sign up at [resend.com](https://resend.com) (FREE for 3,000 emails/month)
2. Get your API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_key_here
   FROM_EMAIL=onboarding@yourdomain.com
   COACH_NAME=Your Name
   COACH_EMAIL=hello@yourdomain.com
   ```
4. Restart dev server

**Send emails via API:**
```bash
# Welcome email
curl -X POST http://localhost:3000/api/emails/send-welcome \
  -H "Content-Type: application/json" \
  -d '{"clientName":"Jane Doe","email":"jane@example.com"}'
```

📖 **Full email guide:** See [EMAIL_AUTOMATION.md](./EMAIL_AUTOMATION.md) for complete setup, templates, and automation options.

**Note:** Email is completely optional - the portal works perfectly without it!

---

## 🚀 Deployment

### Vercel (Recommended - FREE)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)
4. Deploy!

### Cost Breakdown (Per Coach)
- **Vercel**: FREE (Hobby plan includes 100GB bandwidth)
- **Sanity**: FREE (up to 5,000 documents, 5GB assets)
- **NextAuth**: FREE (open source)
- **Total**: $0/month for infrastructure!

Optional add-ons:
- **Resend** (email): ~$20/month for 3,000 emails
- **HelloSign** (contracts): Pay per signature
- **Stripe** (payments): Transaction fees only

**Compare to competition:**
- Practice Better: $29-79/mo
- Healthie: $99-299/mo
- Kajabi: $149+/mo
- Dubsado: $40+/mo

---

## 🐛 Troubleshooting

### "Invalid credentials" on login
- Check password hash is correctly copied to Sanity
- Verify client status is "active"
- Check email is exact match (case sensitive)

### "Unauthorized" errors
- Verify `SANITY_API_TOKEN` is set and valid
- Check token has Editor or Admin permissions
- Restart dev server after adding env vars

### Intake form not submitting
- Check `SANITY_API_TOKEN` has write permissions
- Look in browser console for errors
- Verify Sanity Studio is accessible

### Can't access protected routes
- Clear browser cookies/cache
- Check `NEXTAUTH_SECRET` is set
- Verify middleware.js is in root directory

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review Sanity Studio for data issues
3. Check browser console for errors
4. Verify environment variables are set

---

## 🎉 Success!

Your client portal is ready! Clients can:
1. Log in at `/portal/login`
2. Complete their intake form
3. View upcoming sessions
4. Access resources
5. Track their coaching journey

**Next steps:**
- Create your first test client
- Upload resources to Sanity
- Schedule test sessions
- Customize branding to match your site
- Set up email automation (optional)
