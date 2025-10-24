# Email Automation Guide

Complete guide for setting up automated email notifications for your coaching portal.

---

## 📧 Overview

The portal includes professional HTML email templates for:
- **Welcome emails** - When clients are onboarded
- **Intake form reminders** - If clients haven't completed intake
- **Contract reminders** - When coaching agreements need signing
- **Session confirmations** - When sessions are scheduled

All emails are:
- ✅ Mobile-responsive
- ✅ Dark-themed to match your brand
- ✅ Professional and neurodivergent-friendly
- ✅ Completely optional (portal works without email)

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up (FREE for 3,000 emails/month)
2. Verify your domain OR use Resend's testing domain
3. Go to API Keys and create a new key
4. Copy the key (starts with `re_`)

### Step 2: Configure Environment Variables

Add to your `.env.local`:

```env
# Email Configuration
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=onboarding@yourdomain.com
COACH_NAME=Coach Katy
COACH_EMAIL=hello@coachkaty.com
```

**Using Resend's test domain?** (no custom domain needed)
```env
FROM_EMAIL=onboarding@resend.dev
```

### Step 3: Restart Your Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

That's it! Emails are now enabled. 🎉

---

## 📬 Available Email Templates

### 1. Welcome Email

**Triggers:** Manual (send after creating client)
**Purpose:** Welcome new clients and give them login credentials

**Usage:**
```bash
# Using curl
curl -X POST http://localhost:3000/api/emails/send-welcome \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Jane Doe",
    "email": "jane@example.com",
    "temporaryPassword": "TempPass123"
  }'
```

**Or via Postman/Insomnia:**
```json
POST /api/emails/send-welcome
{
  "clientName": "Jane Doe",
  "email": "jane@example.com",
  "temporaryPassword": "TempPass123"
}
```

### 2. Intake Form Reminder

**Triggers:** Manual (send 2-3 days after welcome if intake incomplete)
**Purpose:** Remind clients to complete their intake questionnaire

**Usage:**
```bash
curl -X POST http://localhost:3000/api/emails/send-intake-reminder \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Jane Doe",
    "email": "jane@example.com"
  }'
```

### 3. Contract Reminder

**Triggers:** Manual (send when contract is ready)
**Purpose:** Prompt clients to review and sign coaching agreement

**Usage:**
```bash
curl -X POST http://localhost:3000/api/emails/send-contract-reminder \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Jane Doe",
    "email": "jane@example.com",
    "contractUrl": "https://hellosign.com/s/abc123"
  }'
```

### 4. Session Confirmation

**Triggers:** Manual (send after scheduling a session in Sanity)
**Purpose:** Confirm upcoming coaching sessions with all details

**Usage:**
```bash
curl -X POST http://localhost:3000/api/emails/send-session-confirmation \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Jane Doe",
    "email": "jane@example.com",
    "sessionData": {
      "sessionNumber": 1,
      "scheduledDate": "2025-02-01T14:00:00.000Z",
      "duration": 60,
      "meetingLink": "https://zoom.us/j/123456789",
      "agenda": "Getting to know each other, discussing your goals"
    }
  }'
```

---

## 🤖 Automation Options

### Option A: Manual Sending (Recommended for Start)

**Pros:**
- Full control over timing
- No extra setup needed
- Easy to test

**Workflow:**
1. Create client in Sanity Studio
2. Run curl command or use API tool to send welcome email
3. Monitor for intake completion, send reminder if needed
4. Schedule session, send confirmation

### Option B: Webhook Automation (Advanced)

Set up Sanity webhooks to trigger emails automatically:

1. In Sanity dashboard, go to API → Webhooks
2. Create webhook for `client` document creation
3. Point to your API route
4. Add authentication

**Example webhook endpoint** (you'd need to create this):
```javascript
// app/api/webhooks/sanity/route.js
export async function POST(request) {
  const { _type, name, email } = await request.json()

  if (_type === 'client') {
    // Send welcome email
    await fetch('/api/emails/send-welcome', {
      method: 'POST',
      body: JSON.stringify({ clientName: name, email })
    })
  }
}
```

### Option C: Scheduled Reminders (Most Advanced)

Use Vercel Cron Jobs or similar to check for incomplete tasks daily:

**Example:**
```javascript
// app/api/cron/daily-reminders/route.js
export async function GET(request) {
  // Check for clients with incomplete intake
  // Send reminders
}
```

Add to `vercel.json`:
```json
{
  "crons": [{
    "path": "/api/cron/daily-reminders",
    "schedule": "0 9 * * *"
  }]
}
```

---

## 🎨 Customizing Email Templates

All templates are in `/lib/emails/`:

```
lib/
  emails/
    welcome.js
    intake-reminder.js
    contract-reminder.js
    session-confirmation.js
```

### Changing Colors

Update the purple accent (`#77599f`) in templates:
```javascript
// Before
style="background-color: #77599f;"

// After (your brand color)
style="background-color: #your-color;"
```

### Editing Copy

Templates use template literals - just edit the HTML strings:
```javascript
<p>Hi ${clientName},</p>
<p>Your custom message here...</p>
```

### Adding Your Logo

Add logo to email header:
```javascript
<img
  src="https://yourdomain.com/logo.png"
  alt="Your Logo"
  style="max-width: 200px;"
/>
```

---

## 🔐 Domain Verification (Production)

For production, verify your domain with Resend:

### 1. Add DNS Records

Resend will give you DNS records to add:
- SPF record
- DKIM record
- Return-path record

### 2. Update FROM_EMAIL

```env
FROM_EMAIL=coaching@yourdomain.com
```

### 3. Test Deliverability

Send test emails to:
- Gmail
- Outlook
- Apple Mail

Check spam folders and adjust if needed.

---

## 📊 Monitoring & Analytics

### View Email Status

1. Go to [resend.com/emails](https://resend.com/emails)
2. See all sent emails
3. Check delivery status, opens, clicks

### Track Engagement

Resend provides:
- ✅ Delivery confirmation
- 📧 Open rates
- 🔗 Click tracking
- ❌ Bounce notifications

---

## 💰 Pricing

**Resend Pricing:**
- **FREE**: 3,000 emails/month, 100 emails/day
- **$20/mo**: 50,000 emails/month

**For coaching practice:**
- ~10 clients = ~50 emails/month
- Well within free tier!

**Cost breakdown per coach:**
- Portal: FREE (Vercel + Sanity)
- Email: FREE (under 3k emails/mo)
- Total: $0/month 🎉

---

## 🐛 Troubleshooting

### "Email not configured" message

This is normal! If `RESEND_API_KEY` is not set, the API routes gracefully skip sending emails. The portal still works perfectly.

### Emails not arriving

1. **Check spam folder** - First place to look
2. **Verify FROM_EMAIL** - Must be verified domain or resend.dev
3. **Check Resend dashboard** - See delivery status
4. **Test with resend.dev** - Use Resend's test domain first

### Emails look broken

1. **Test in multiple clients** - Email rendering varies
2. **Check HTML validity** - Use online validator
3. **View in Resend dashboard** - Preview how it looks

### API route errors

```bash
# Check if Resend is installed
npm list resend

# Reinstall if needed
npm install resend

# Restart dev server
npm run dev
```

---

## 🚢 Production Checklist

Before going live:

- [ ] Verify your domain with Resend
- [ ] Update `FROM_EMAIL` to your domain
- [ ] Update `COACH_NAME` and `COACH_EMAIL`
- [ ] Test all 4 email types
- [ ] Check spam scores (mail-tester.com)
- [ ] Send test emails to yourself
- [ ] Confirm mobile rendering
- [ ] Add unsubscribe link if needed
- [ ] Review email copy for your brand voice

---

## 🎯 Best Practices

### Timing

- **Welcome**: Send immediately after account creation
- **Intake reminder**: Wait 2-3 days, send if not completed
- **Contract reminder**: Send with contract link
- **Session confirmation**: Send when scheduled, reminder 24h before

### Tone

All templates use:
- ✅ Warm, personal language
- ✅ Clear, actionable steps
- ✅ Neurodivergent-friendly formatting
- ✅ No pressure or urgency

### Frequency

- Don't email too often
- Space reminders 3-5 days apart
- Respect client communication preferences

---

## 🙋 Common Questions

**Q: Do I need email for the portal to work?**
A: No! Email is completely optional. The portal works perfectly without it.

**Q: Can I use a different email service?**
A: Yes, but you'll need to modify the API routes. Resend is recommended for simplicity.

**Q: How do I stop receiving test emails?**
A: Remove or comment out `RESEND_API_KEY` in `.env.local`

**Q: Can clients reply to these emails?**
A: Yes! Set `FROM_EMAIL` to your real email address and replies will come to you.

**Q: What about GDPR/privacy?**
A: Resend is GDPR compliant. Add unsubscribe links for marketing emails (not needed for transactional).

---

## 📚 Resources

- [Resend Documentation](https://resend.com/docs)
- [Email HTML Best Practices](https://www.campaignmonitor.com/css/)
- [Testing Emails](https://www.mail-tester.com/)

---

## 🎉 You're All Set!

Your automated email system is ready. Start by sending a test welcome email, then gradually add automation as needed.

Remember: **Email is optional but powerful** - use it to create a smooth, professional onboarding experience for your clients! 💜
