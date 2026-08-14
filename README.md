# Desert Mountain Healing IOP

> **Compassionate, evidence-based outpatient addiction treatment in Rio Rancho, New Mexico**

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdmhiop.com)](https://dmhiop.com)
[![Performance](https://img.shields.io/badge/Performance-90%2F100-green)](https://pagespeed.web.dev/analysis?url=https://dmhiop.com/)
[![Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-brightgreen)](https://pagespeed.web.dev/analysis?url=https://dmhiop.com/)
[![SEO](https://img.shields.io/badge/SEO-100%2F100-brightgreen)](https://pagespeed.web.dev/analysis?url=https://dmhiop.com/)

---

## 🌅 About Desert Mountain Healing

Desert Mountain Healing provides **Intensive Outpatient Program (IOP)** services for substance use treatment in Rio Rancho, serving the greater Albuquerque area and Sandoval County communities in New Mexico.

### Our Services

- **Intensive Outpatient Program (IOP)** - ASAM Level 2.1
- **Medication-Assisted Treatment (MAT)** - FDA-approved medications + counseling
- **Medical Detox Assistance** - Outpatient detox support and referrals
- **Individual Counseling** - One-on-one therapy sessions
- **Group Therapy** - Peer support and shared recovery experiences
- **Case Management** - Care coordination and community resources
- **Family Support Services** - Education and counseling for families

### Key Features

✅ **Flexible Scheduling** - Morning and evening programs  
✅ **Insurance Accepted** - Most major plans including NM Medicaid (AHCCCS)  
✅ **Evidence-Based Care** - Proven recovery practices  
✅ **Connected Recovery** - Your Recovery Portal for daily support  
✅ **Licensed Facility** - New Mexico state licensed  
✅ **Bilingual Services** - English and Spanish  

---

## 🌐 Live Website

- **Production URL:** [https://dmhiop.com](https://dmhiop.com)
- **GitHub Pages:** [https://dmhiopllc-tech.github.io/dmhiop-website/](https://dmhiopllc-tech.github.io/dmhiop-website/)

---

## 📊 Performance Metrics

### PageSpeed Insights Scores (Mobile)

| Metric | Score | Status |
|--------|-------|--------|
| **Performance** | 90/100 | 🟢 Excellent |
| **Accessibility** | 100/100 | 🟢 Perfect |
| **Best Practices** | 100/100 | 🟢 Perfect |
| **SEO** | 100/100 | 🟢 Perfect |
| **Agentic Browsing** | 2/3 | 🟡 Good |

### Core Web Vitals

- **LCP (Largest Contentful Paint):** 3.6s (Target: <2.5s)
- **FCP (First Contentful Paint):** 1.6s ✅
- **TBT (Total Blocking Time):** 0ms ✅
- **CLS (Cumulative Layout Shift):** 0.003 ✅
- **Speed Index:** 1.6s ✅

### Performance Improvements Achieved

From initial audit to current state:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Mobile Score | 68/100 | 90/100 | **+32% (22 points)** |
| LCP | 27.8s | 3.6s | **87% faster** |
| Page Weight | 5,393 KB | ~2,800 KB | **48% reduction** |
| Accessibility | 93/100 | 100/100 | **+7 points** |

---

## 🛠️ Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom CSS with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, lightweight and fast

### Fonts
- **Merriweather** (headings) - via Google Fonts
- **Open Sans** (body text) - via Google Fonts

### Hosting
- **GitHub Pages** - Static site hosting
- **Custom Domain:** dmhiop.com
- **CDN:** GitHub's global CDN

### SEO & Discoverability
- **Sitemap:** `/sitemap.xml`
- **Robots.txt:** `/robots.txt`
- **llms.txt:** `/llms.txt` (AI agent optimization)
- **Structured Data:** JSON-LD schema markup

---

## 📁 Project Structure

```
dmhiop-website/
├── index.html                          # Homepage
├── team.html                           # Our Team page
├── iop-benefits.html                   # IOP Benefits
├── reliable-substance-abuse-treatments.html  # All Services
├── mat.html                            # Medication-Assisted Treatment
├── medical-detox-assistance.html       # Medical Detox Assistance
├── individual-counseling.html          # Individual Counseling
├── case-management.html                # Case Management
├── faq.html                            # FAQ
├── reviews.html                        # Client Reviews
├── contact-us.html                     # Contact Us
├── blog.html                           # Blog
├── client-app.html                     # Recovery Portal landing
├── insurance-verification.html         # Insurance Verification
│
├── privacy-policy.html                 # Privacy Policy
├── terms-of-service.html               # Terms of Service
├── hipaa-notice.html                   # HIPAA Notice
│
├── sitemap.xml                         # XML sitemap
├── robots.txt                          # Search engine directives
├── llms.txt                            # AI agent optimization
├── README.md                           # This file
├── OPTIMIZATION-README.md              # Performance optimization guide
│
├── __static/
│   ├── images/
│   │   └── hero/
│   │       ├── sunrise-optimized.png   # Hero image (202 KB)
│   │       └── recovery-portal.png     # Portal screenshot
│   └── team/
│       └── tatiana-schnierow.jpg       # Team photo
│
├── css/                                # (CSS is inlined in HTML for performance)
├── js/                                 # (JavaScript is inlined in HTML)
│
└── [Client Portal Files]               # Internal app pages (disallowed in robots.txt)
    ├── goals.html
    ├── journal.html
    ├── achievements.html
    └── ...
```

---

## 🚀 Recent Optimizations (August 2024)

### Performance Optimizations
- ✅ **Hero image optimization** - Compressed from 2.9 MB → 202 KB (93% reduction)
- ✅ **Image format conversion** - PNG → JPEG for photos
- ✅ **Preload critical resources** - Hero image with `fetchpriority="high"`
- ✅ **Async font loading** - Non-blocking Google Fonts
- ✅ **Content-visibility CSS** - Lazy rendering of off-screen sections
- ✅ **Hero image as `<img>` tag** - Better browser optimization vs CSS background
- ✅ **Explicit image dimensions** - Prevents layout shift
- ✅ **Local image paths** - Eliminates CDN cache issues

### Accessibility Improvements
- ✅ **Screen reader support** - Added `.sr-only` utility class
- ✅ **Heading hierarchy** - Proper `<h1>` → `<h2>` → `<h3>` structure
- ✅ **Footer contrast** - Increased text opacity from 75-80% → 90-92%
- ✅ **ARIA labels** - Proper semantic markup
- ✅ **Keyboard navigation** - Accessible dropdowns and FAQ accordions

### SEO Enhancements
- ✅ **llms.txt** - AI agent optimization file
- ✅ **Structured data** - JSON-LD schema for Organization, MedicalOrganization, LocalBusiness
- ✅ **Meta tags** - Comprehensive Open Graph and Twitter Card tags
- ✅ **Semantic HTML** - Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ **robots.txt** - Search engine crawling directives

---

## 🎯 Outstanding Items

### Performance
- ⏳ **Further image compression** - Target: 150 KB hero image (currently 202 KB)
- ⏳ **llms.txt deployment** - Upload to fix Agentic Browsing score (2/3 → 3/3)

### Future Enhancements
- 🔮 **Progressive Web App (PWA)** - Offline support and installability
- 🔮 **Blog content** - Regular recovery-focused articles
- 🔮 **Video testimonials** - Client success stories
- 🔮 **Spanish language version** - Full site translation

---

## 📞 Contact Information

**Desert Mountain Healing IOP**

- **Address:** 3301 Southern Blvd SE, Suite 105, Rio Rancho, NM 87124
- **Phone:** [(505) 270-0840](tel:+15052700840)
- **Email:** sean_roberts@dmhiop.com
- **Hours:** Monday-Friday, 8:00 AM - 8:00 PM MST
- **Website:** [https://dmhiop.com](https://dmhiop.com)

### Social Media

- **Facebook:** [@DesertMountainHealingIOP](https://www.facebook.com/DesertMountainHealingIOP)
- **Instagram:** [@desertmountainhealingiop](https://www.instagram.com/desertmountainhealingiop)

---

## 📜 License & Legal

- **Privacy Policy:** [https://dmhiop.com/privacy-policy](https://dmhiop.com/privacy-policy)
- **Terms of Service:** [https://dmhiop.com/terms-of-service](https://dmhiop.com/terms-of-service)
- **HIPAA Notice:** [https://dmhiop.com/hipaa-notice](https://dmhiop.com/hipaa-notice)

© 2026 Desert Mountain Healing IOP, LLC. All rights reserved.

---

## 🏆 Achievements

- 🥇 **100/100 Accessibility Score** (PageSpeed Insights Mobile)
- 🥇 **100/100 Best Practices Score**
- 🥇 **100/100 SEO Score**
- 🥈 **90/100 Performance Score** (Mobile - Top 15% of websites)
- ⚡ **3.6s LCP** on Slow 4G (Target: <2.5s)
- 🎨 **0.003 CLS** - Near-perfect layout stability

---

## 🙏 Crisis Resources

**If you or someone you know is in crisis:**

- **988 Suicide & Crisis Lifeline:** Call or text **988**
- **Emergency Services:** Call **911**
- **SAMHSA National Helpline:** 1-800-662-4357 (24/7, free, confidential)

---

*Last updated: August 14, 2026*
