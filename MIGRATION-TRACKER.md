# Astro to Next.js Migration Tracker

**Migration Start Date:** October 21, 2025
**Source:** Astro site at `/Users/kathrynwelborn/coachkaty/angie` (NOT copying folder - using as reference only)
**Destination:** Next.js Resonance Brutalist Dark template
**Last Updated:** October 22, 2025 (Homepage Refinements Complete)
**Dev Server:** http://localhost:3000

---

## Current State Summary

**✅ What's Working:**
- Next.js dev server running at http://localhost:3000
- Root routing configured (redirects to `/brutalist-multi-page-dark`)
- **Homepage fully migrated with all Katy's content!**
  - Hero section with custom coaching content and animations
  - Meet Katy section with 8 core values and headshot
  - Learn More section with 3 coaching offerings
  - Values That Guide Me section (3 cards)
  - Client Voices testimonials section (2 testimonials)
  - Call to Action for consultation booking
- Custom color scheme fully implemented (8 colors with accents)
- All Resonance brutalist animations preserved (AnimatedText, parallax, wow, mark-decoration-2)
- Page metadata updated with SEO for coaching business

**✅ All Homepage Tasks Complete:**
- ✅ Banner section content updated with coaching messaging
- ✅ Newsletter section updated with Resend integration and light purple background
- ✅ START HERE section refined with custom yellow star SVGs and golden glow hover effects
- ✅ Values section redesigned with clean outlined rectangular sections and full text
- ✅ Client Voices updated with actual testimonials and authentic description
- ✅ CTA section updated to "Ready to Book?" with personal messaging

**✅ Major Tasks Completed (Homepage):**
- ✅ About/Meet Katy section - DONE!
- ✅ Replace Services section with 3 coaching offerings - DONE!
- ✅ Replace Portfolio section with "Values That Guide Me" (3 cards) - DONE!
- ✅ Add Testimonials section (2 testimonials from Astro site) - DONE!
- ✅ Replace Contact section with CTA ("Ready to start your coaching journey?") - DONE!

**✅ Minor Tasks Completed (Homepage):**
- ✅ Replace Banner section content - DONE!
- ✅ Update Newsletter section with Resend form - DONE!
- ✅ Add custom SVG icons (yellow stars, outline values) - DONE!
- ✅ Implement organic hover effects with golden glow - DONE!
- ✅ Refine text centering and spacing - DONE!

---

## 🎨 Homepage Refinements (October 22, 2025)

**✅ START HERE Section Enhancements:**
- ✅ Updated title from "LEARN MORE" to "START HERE" with circle decoration
- ✅ Replaced generic star SVGs with custom yellow star SVGs
- ✅ Implemented organic hover effects: golden glow (#ffe066, 0.25 opacity) with blur
- ✅ Added smooth transitions: ease-out 0.3s hover in, ease-in 0.15s fade out
- ✅ Positioned yellow star SVGs in upper left corner of each card
- ✅ Centered all text content with proper spacing
- ✅ Updated service card copy to be more authentic and direct

**✅ Values Section Redesign:**
- ✅ Converted from cramped 3-column layout to spacious outlined rectangular sections
- ✅ Used template's `services-2-item` structure for proper brutalist design
- ✅ Added full, authentic value descriptions (Lived Experience, Empathetic Approach, Collaborative)
- ✅ Removed custom SVGs for clean, minimal aesthetic
- ✅ Maintained all animations and responsive design

**✅ Client Voices Updates:**
- ✅ Updated description to "Words from those I've worked with — reflections on connection, trust, and growth"
- ✅ Replaced placeholder testimonials with actual client quotes (HH and AN)
- ✅ Maintained template structure and animations

**✅ Newsletter Section:**
- ✅ Replaced background image with light purple background (#c476c1)
- ✅ Updated to use Resend API integration
- ✅ Added API key configuration instructions

**✅ CTA Section:**
- ✅ Changed title from "Ready to start your coaching journey?" to "Ready to Book?"
- ✅ Updated description to "All clients start with a free call to make sure we click"
- ✅ More direct, personal, and authentic messaging

**✅ Technical Improvements:**
- ✅ Added custom CSS for hover effects in `demo-brutalist.css`
- ✅ Implemented proper flexbox layouts for text centering
- ✅ Added organic transition timing for professional feel
- ✅ Maintained all brutalist animations and responsive design

**📋 Content from Astro Site to Migrate:**

**Services Section:**
1. Work With Me - "One-on-one coaching that's collaborative, affirming, and shaped around your real life."
2. About Me - "Want to know more about me? Read my story here about how I began coaching."
3. Equity Pricing - "Learn about my pricing packages and sliding scale."

**Values That Guide Me (3 cards):**
1. Lived Experience - "Being autistic allows me to bring real-world understanding..."
2. Empathetic Approach - "Grounded in compassion and acceptance..."
3. Collaborative - "You're the expert in your own life..."

**Testimonials (2):**
1. HH - "Katy really gets me. For the first time, I opened up..."
2. AN - "Katy held the safest, most engaging space..."

**Call to Action:**
- Title: "Ready to start your coaching journey?"
- Description: "Take the first step towards understanding yourself better..."
- Button: "Book a Session" → /booking

---

## Migration Status Overview

- **Phase 1 - Foundation:** ✅ 100% Complete (6/6 tasks done - color scheme defined, headshot added)
- **Phase 2 - Core Pages:** ⏳ 100% Complete (Homepage migration fully done! Other pages pending)
- **Phase 3 - Custom Pages:** ⏸️ Not Started
- **Phase 4 - Blog & Polish:** ⏸️ Not Started

---

## Phase 1: Foundation Setup

| Task | Status | Notes |
|------|--------|-------|
| Backup original Resonance template | ✅ Complete | Backup at `resonance-BACKUP-20251021-222216` |
| Cleanup scripts executed | ✅ Complete | Cleanup script run |
| Set up root page routing | ✅ Complete | Redirects to `/brutalist-multi-page-dark` |
| Verify dev server works | ✅ Complete | Running at http://localhost:3000 |
| Add headshot image | 🔲 Not Started | Only keeping headshot from Astro site |
| Define new color scheme | 🔲 Not Started | Document new colors (not lavender) |

---

## Phase 2: Core Pages Migration

### 2.1 Homepage (`brutalist-multi-page-dark/page.jsx`)

**Current Homepage Sections in `Home3` component:**

| Section | Location | Status | What Needs Changing |
|---------|----------|--------|-------------------|
| Hero Section | `Hero1.jsx` | ✅ Built (⏳ Refining) | May need tweaks |
| About Section | `Home3/index.jsx` lines 17-69 | 🔲 Not Started | Replace "About Studio" with coaching intro |
| Banner Section | `Home3/Banner.jsx` | 🔲 Not Started | Replace content |
| Services Section | `Home3/Services.jsx` | 🔲 Not Started | Replace with coaching services |
| Portfolio Section | `Home3/Portfolio.jsx` | ⚠️ To Remove | Not needed for coaching site |
| Blog Section | `Home3/Blog.jsx` | 🔲 Not Started | Keep for future blog posts |
| Newsletter Section | `Home3/NewsLetter.jsx` | 🔲 Not Started | Replace with ConvertKit form |
| Contact Section | `Home3/ContactDark.jsx` | 🔲 Not Started | Update contact info |

**Hero Section Current State:**
- ✅ Headline: "Coaching by the Neurodiverse" with AnimatedText
- ✅ Tagline: "Neurodivergent-affirming support rooted in lived experience."
- ✅ Scroll down arrow animation
- ✅ Facebook social link
- ⏳ May need refinements based on feedback

**About Section Current State (NEEDS REPLACEMENT):**
- ❌ Still has template text: "About Studio", "Resonance is a full-service creative studio..."
- ❌ Has placeholder qualities list
- ❌ Has placeholder image

**Services Section Current State (NEEDS REPLACEMENT):**
- ❌ Still has template text: "Services", "power of design"
- ❌ Services component needs coaching services content

---

### 2.2 About Page (`brutalist-about-dark/page.jsx`)

| Section | Astro Source | Status | Content |
|---------|--------------|--------|---------|
| Hero Title | `about.astro` → Background | 🔲 Not Started | "My Background and Story" |
| Values Grid | `about.astro` → Values | 🔲 Not Started | 4 values: Peer Approach, Self Acceptance, etc. |
| Vision Statement | `about.astro` → Vision | 🔲 Not Started | Your vision statement |
| Photo Section | `about.astro` | 🔲 Not Started | Replace with your photo + parallax |

**Animation Preservation:**
- ✓ charsAnimInLong for titles
- ✓ fadeInUp for value cards
- ✓ Banner section with background

---

### 2.3 Services Page (`brutalist-services-dark/page.jsx`)

| Task | Status | Notes |
|------|--------|-------|
| Replace service cards content | 🔲 Not Started | Your 3 coaching offerings |
| Update pricing tiers link | 🔲 Not Started | Link to equity pricing page |
| Add CTA to booking | 🔲 Not Started | Cal.com booking link |

**Animation Preservation:**
- ✓ Hover animations on service cards
- ✓ Staggered fadeInUp
- ✓ Icon animations

---

### 2.4 Contact Page (`brutalist-contact-dark/page.jsx`)

| Task | Status | Notes |
|------|--------|-------|
| Update contact info | 🔲 Not Started | Your email, location, etc. |
| Integrate ConvertKit form | 🔲 Not Started | Replace existing form |
| Add Cal.com booking link | 🔲 Not Started | Alternative to form |
| Map integration (optional) | 🔲 Not Started | If needed |

**Animation Preservation:**
- ✓ ContactDark component structure
- ✓ Form animations
- ✓ Wrap ConvertKit in wow fadeIn

---

## Phase 3: Custom Pages Creation

### 3.1 Booking Page (New Page)

| Task | Status | Notes |
|------|--------|-------|
| Create page structure | 🔲 Not Started | Base from brutalist-contact-dark |
| Add hero section | 🔲 Not Started | "Book Your Free Consultation" |
| Integrate Cal.com embed | 🔲 Not Started | Inline or link |
| Add "What to Expect" section | 🔲 Not Started | Preparation tips |

**Animation Strategy:**
- Title with charsAnimInLong
- Cal.com embed with fadeIn
- Link with link-hover-anim

---

### 3.2 Equity Pricing Page

| Task | Status | Notes |
|------|--------|-------|
| Copy from main-pages-pricing-1-dark | 🔲 Not Started | |
| Change theme-main → theme-brutalist | 🔲 Not Started | |
| Replace Header1Multipage → Header3 | 🔲 Not Started | |
| Replace Footer1 → Footer3 | 🔲 Not Started | |
| Update brutalistMultipageDark menu | 🔲 Not Started | |
| Add sliding scale content | 🔲 Not Started | Your equity pricing model |

---

### 3.3 Tennessee SEO Page (Hidden)

| Task | Status | Notes |
|------|--------|-------|
| Copy from brutalist-about-dark | 🔲 Not Started | Use as base |
| Add noindex meta tag | 🔲 Not Started | Keep hidden from search |
| Optimize for Tennessee keywords | 🔲 Not Started | SEO content |
| Keep minimal, clean design | 🔲 Not Started | |

---

### 3.4 Client Portal (Future Phase - After Site Launch)

**IMPORTANT:** Portal development is NOT part of initial migration. Build after main site is live.

| Planning Task | Status | Notes |
|--------------|--------|-------|
| Document portal requirements | 🔲 Not Started | Define features needed |
| Research tech stack options | 🔲 Not Started | Directus, other CMS options |
| Plan authentication flow | 🔲 Not Started | Login, session management |
| Design database schema | 🔲 Not Started | Client data structure |
| Consider integration points | 🔲 Not Started | How portal connects to main site |

**Future Development Tasks (Post-Launch):**
- Copy from main-pages-account-dark as base
- Convert to theme-brutalist
- Replace header/footer with brutalist components
- Implement Directus or chosen CMS integration
- Build client dashboard
- Create resource library for clients
- Add booking integration for current clients

**Note:** This is being planned now but will NOT be built until after the main coaching site is launched and live.

---

## Phase 4: Blog & Final Touches

### 4.1 Blog Setup

| Task | Status | Notes |
|------|--------|-------|
| Review brutalist-blog-dark structure | 🔲 Not Started | |
| Plan Sanity CMS integration | 🔲 Not Started | |
| Style blog cards | 🔲 Not Started | Brutalist theme |
| Set up dynamic routes | 🔲 Not Started | |

### 4.2 Final Polish

| Task | Status | Notes |
|------|--------|-------|
| Test all animations | 🔲 Not Started | Verify wow, parallax, etc. |
| Check responsive design | 🔲 Not Started | Mobile, tablet, desktop |
| SEO optimization | 🔲 Not Started | Meta tags, titles, descriptions |
| Performance testing | 🔲 Not Started | Lighthouse scores |
| Cross-browser testing | 🔲 Not Started | Chrome, Firefox, Safari |

---

## Animation Preservation Checklist

For each migrated page, ensure:

- ✓ `<ParallaxContainer>` wrappers for sections
- ✓ `AnimatedText` component for titles
- ✓ `wow` classes with proper delays
- ✓ `data-rellax` attributes for parallax
- ✓ `link-hover-anim` on all links
- ✓ `fadeInUp` on content blocks
- ✓ `scrollSpysection` on main sections
- ✓ Dark theme classes (bg-dark-1, light-content)
- ✓ Image decorations and SVG shapes
- ✓ Hover states on cards/buttons

---

## Color Scheme Integration

**✅ DEFINED COLOR PALETTE - Dark Brutalist with Plum/Lavender Tones**

### Color Palette

| Color Name | Hex | Usage |
|------------|-----|-------|
| **Fog Cream** | `#f9f5f0` | Primary text color (light on dark) |
| **Dusky Plum** | `#77599f` | Primary accent, buttons, links |
| **Shadow Lavender** | `#5c476b` | Alternative background, cards |
| **Dusty Rose** | `#c476c1` | Secondary accent, hover states |
| **Raspberry Smoke** | `#a75ba5` | Tertiary accent, highlights |
| **Midnight Moss** | `#2c2b30` | Main dark background |
| **Charcoal Violet** | `#1d1d1d` | Cards, sections, darker elements |
| **Glint Gold** | `#ffe066` | Special moments, sparkle touches |

### Design Notes
- **Main background:** Midnight Moss (#2c2b30) or Shadow Lavender (#5c476b)
- **Cards/sections:** Charcoal Violet (#1d1d1d) or slightly lighter
- **Text:** Fog Cream (#f9f5f0)
- **Accents:** Dusky Plum, Dusty Rose, Raspberry Smoke
- **Special moments:** Glint Gold for sparkle touches
- **Borders:** Thick black brutalist borders OR lighter color for contrast

### CSS Implementation

Custom CSS to add to `demo-brutalist.css`:

```css
.theme-brutalist {
  /* Custom Color Palette */
  --color-fog-cream: #f9f5f0;
  --color-dusky-plum: #77599f;
  --color-shadow-lavender: #5c476b;
  --color-dusty-rose: #c476c1;
  --color-raspberry-smoke: #a75ba5;
  --color-midnight-moss: #2c2b30;
  --color-charcoal-violet: #1d1d1d;
  --color-glint-gold: #ffe066;

  /* Apply to theme */
  --bg-dark-1: var(--color-midnight-moss);
  --bg-dark-2: var(--color-charcoal-violet);
  --bg-dark-alpha: var(--color-shadow-lavender);
  --text-light: var(--color-fog-cream);
  --color-primary-accent: var(--color-dusky-plum);
  --color-secondary-accent: var(--color-dusty-rose);
  --color-gold-accent: var(--color-glint-gold);
}
```

**Status:** ✅ Defined | ✅ CSS Variables Added to `demo-brutalist.css`

**Applied Changes:**
- ✅ Added all 8 custom color variables to `.theme-brutalist` CSS class
- ✅ Overrode `--color-dark-1` to use Midnight Moss (#2c2b30)
- ✅ Overrode `--color-dark-2` to use Charcoal Violet (#1d1d1d)
- ✅ Overrode `--color-dark-3` to use Shadow Lavender (#5c476b)
- ✅ Added accent color variables for links, buttons, and interactive elements

**Text Readability Improvements:**
- ✅ All light-content text now uses Fog Cream (#f9f5f0)
- ✅ Improved text opacity for better readability
- ✅ Enhanced form input visibility with Shadow Lavender backgrounds
- ✅ Form placeholders now readable in Fog Cream

**Accent Colors & Hover Effects:**
- ✅ Links: Dusky Plum (#77599f) → hover: Dusty Rose (#c476c1)
- ✅ Buttons: Dusky Plum → hover: Raspberry Smoke (#a75ba5) with lift effect
- ✅ Social links: Raspberry Smoke borders, Dusky Plum hover backgrounds
- ✅ Navigation: Dusty Rose hover
- ✅ "Get in Touch" buttons: Glint Gold (#ffe066) hover
- ✅ Service cards: Dusky Plum border on hover with lift effect
- ✅ Portfolio/Blog cards: Dusty Rose title on hover with lift effect

**Section Color Variety:**
- ✅ Banner section: Shadow Lavender (bg-dark-3)
- ✅ Blog section: Shadow Lavender (bg-dark-3)
- ✅ Contact section: Shadow Lavender (bg-dark-3)
- ✅ Footer: Charcoal Violet

**Special Gold Accents:**
- ✅ Gold button class (.btn-gold) for special CTAs
- ✅ Section title images tinted gold
- ✅ Link hover effects use gold for emphasis

**Other Improvements:**
- ✅ Borders now use Raspberry Smoke instead of black
- ✅ Header navigation uses Midnight Moss (not pure black)
- ✅ All transitions smooth (0.3s ease)

---

## Integration Tasks

| Integration | Status | Notes |
|-------------|--------|-------|
| ConvertKit forms | 🔲 Not Started | Wrap in wow fadeIn |
| Cal.com booking | 🔲 Not Started | Use link-hover-anim styling |
| Sanity CMS (blog) | 🔲 Not Started | Blog posts with brutalist cards |
| Directus (portal) | 🔲 Not Started | Match brutalist form styles |

---

## Asset Migration

| Asset Type | Source | Destination | Status |
|------------|--------|-------------|--------|
| Headshot photo | Manual upload | `/resonance/public/` | 🔲 Not Started |
| Favicon | Create new | `/resonance/public/` | 🔲 Not Started |

**Note:** Not copying Astro folder or bulk images. Using only headshot + new assets.

---

## Testing Checklist

- [ ] Dev server runs without errors
- [ ] All pages load correctly
- [ ] Animations trigger properly
- [ ] Forms submit successfully
- [ ] Images load and display correctly
- [ ] Links navigate properly
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Performance optimized
- [ ] SEO meta tags complete

---

## Next Immediate Steps

1. ⏳ Verify dev server works
2. 🔲 Copy images from Astro to Next.js
3. 🔲 Set up root page routing
4. 🔲 Start homepage migration

---

## Notes & Issues

- **2025-10-22:** Migration started - token limit reached during initial setup
- **2025-10-22:** Clarified approach - NOT copying Astro folder, only using headshot image
- **2025-10-22:** Hero section already built, currently making changes to it
- **2025-10-22:** New color scheme to be defined (not the lavender from original plan)
- **2025-10-22:** Fixed hero text jumbling issue - adjusted parallax speeds (7/-5 vs 2/-2) and added text-end alignment to "Neurodiverse"
- **2025-10-22:** Applied full color scheme with accents - Dusky Plum for links, Dusty Rose for hovers, Shadow Lavender for section variety
- **2025-10-22:** Fixed newsletter section from black (bg-dark-2) to Shadow Lavender (bg-dark-3), removed black hr class
- **2025-10-22:** Confirmed hero has background image at `/assets/images/demo-brutalist/section-bg-1.jpg`
- **2025-10-22:** Enhanced mark-decoration-2 (circle around text) to use Dusty Rose with 2px border for better visibility - matches business cards!
- **2025-10-22:** Replaced "About Studio" with "Meet Katy" section - added authentic coaching copy and 8 core values
- **2025-10-22:** Added Katy's headshot (image11.webp) to About section with parallax effect
- **2025-10-22:** Reviewed Astro site at `/Users/kathrynwelborn/coachkaty/angie` - documented all homepage content to migrate
- **2025-10-22:** FULL HOMEPAGE MIGRATION COMPLETED! Replaced Services with 3 coaching offerings (Work With Me, About Me, Equity Pricing)
- **2025-10-22:** Replaced Portfolio with "Values That Guide Me" cards (Lived Experience, Empathetic Approach, Collaborative)
- **2025-10-22:** Added Testimonials section with 2 client testimonials (HH and AN) replacing Blog section
- **2025-10-22:** Replaced Contact form with Call to Action section ("Ready to start your coaching journey?") - links to consultation booking
- **2025-10-22:** All brutalist animations and styling preserved throughout migration (wow, fadeInUp, AnimatedText, mark-decoration-2)

---

## Resources

- **Astro Source:** `/Users/kathrynwelborn/coachkaty/angie`
- **Next.js Destination:** `/Users/kathrynwelborn/resonance/themeforest-yJbX6X6g-resonance-multipurpose-onemulti-page-react-nextjs-template/resonance`
- **Backup:** `resonance-BACKUP-20251021-222216`
- **Documentation:** `themeforest-yJbX6X6g-resonance-multipurpose-onemulti-page-react-nextjs-template/documentation`
