# Guthabenkarten.ch - Feature Backlog

_20 features in priority order, updated via competitor analysis & testing_

## P0 - Critical (Fix First)
| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 1 | Fix cart routing (`/cart` → `/warenkorb`) | 🔴 Bug | CartIcon wrong route |
| 2 | Unify cart data structure | 🔴 Bug | Old vs new CartContext mismatch |
| 3 | Add top navigation to all pages | 🔴 Bug | Product/cart pages missing header |
| 4 | Sync product page with CartContext | 🔴 Bug | AddToCartButton interface mismatch |
| 5 | Add product images | 🟡 Need | Placeholder → real images |
| 6 | **Hero trust badges with icons** | 🟡 New | ⬆️ P0 - guthaben.de's #1 trust element: Clock + Email + Shield icons |
| 7 | **Certified Reseller badge** | 🟡 New | ⬆️ P0 - "Zertifizierter Wiederverkäufer" badge per product page |
| 8 | **Search bar in header** | 🟡 New | ⬆️ P0 - guthaben.de: prominent "Suche nach Produkten, Marken usw" |
| 9 | **Product card delivery badges** | 🟡 New | ⬆️ P0 - "Sofortige Lieferung" with clock icon on every card |

## P1 - Core MVP
| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 7 | Stripe checkout integration | ⏳ Planned | Swiss CHF support |
| 8 | Checkout page (`/kasse`) | ⏳ Planned | Customer info form |
| 9 | Order confirmation page | ⏳ Planned | Success/failure states |
| 10 | Email confirmation (Resend) | ⏳ Planned | Order receipt |
| 11 | Reloadly API integration | ⏳ Planned | Gift card fulfillment |
| 12 | **Denomination variants on product pages** | 🟡 New | CHF 25/50/100 options with per-variant CTAs |
| 13 | **FAQ accordion per product category** | 🟡 New | ⬆️ P1 - SEO + trust, competitors have this |
| 14 | **Trustpilot widget in footer** | 🟡 New | ⬆️ P1 - Social proof (guthaben.de: 65k+ reviews) |

## P2 - UX Polish
| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 15 | Mobile optimization | ⏳ Planned | Test on iPhone/Android |
| 16 | Loading skeletons | ⏳ Planned | Page transitions |
| 17 | Error boundaries | ⏳ Planned | Graceful failures |
| 18 | SEO meta per product | ⏳ Planned | Dynamic og:image |
| 19 | Breadcrumb navigation | ⏳ Planned | Category → Product |
| 20 | **Product card delivery badges** | 🟡 New | "Sofortige Lieferung" + icon (larger than current ✓) |
| 21 | Payment method icons in footer | 🟡 New | Show Twint, Visa, MC, etc. |

## P3 - Growth Features
| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 22 | Search functionality | 📋 Backlog | Filter by brand/category |
| 23 | User accounts | 📋 Backlog | Order history, saved cards |
| 24 | Related products | 📋 Backlog | "You might also like" |
| 25 | Reviews/ratings | 📋 Backlog | Social proof |
| 26 | Newsletter signup | 📋 Backlog | Email capture |
| 27 | Language selector in header | 🟡 New | DE/FR/IT/EN toggle (we have multi-lang support) |
| 28 | Multi-currency display | 🟡 New | CHF primary, show EUR/USD as secondary |

---

## Competitor Insights
_Last updated: 2026-02-18 (14:18 CET)_

### Competitors Monitored
| Competitor | Status | Notes |
|------------|--------|-------|
| guthaben.de (Recharge) | ✅ Accessible | Market leader, 65k+ Trustpilot reviews |
| guthaben.ch | ✅ Same as guthaben.de | Redirects to guthaben.de |
| giftcard.ch | ❌ WAF protected | AWS CloudFront blocks scrapers |
| startselect.com | ❌ Cloudflare protected | Bot detection active |
| cdkeys.com | ❌ Now loaded.com | Cloudflare protected |

**Key Finding:** guthaben.de is the only accessible DACH competitor — but it's the market leader (Recharge.com, publicly traded). Its UX patterns are highly optimized through A/B testing. Following their patterns is evidence-based prioritization.

---

## 🆕 NEW: Detailed Product Page Analysis (2026-02-18)

---

## Competitor Analysis: guthaben.de (Market Leader)

### 1. Trust Signals (CRITICAL INSIGHT) 🎯

**Homepage Hero Section:**
- 3 trust pillars WITH ICONS above the fold:
  - ⏱️ **"Code erhalten in 30 Sekunden"** (bold "30 Sekunden")
  - 📧 **"Sofortige Lieferung per E-Mail"** (bold "per E-Mail")
  - 🔒 **"Sichere und zuverlässige Zahlung"** (bold "und zuverlässige")

**Trustpilot Integration:**
- Embedded widget showing: TrustScore **4.5** | **65,067 Bewertungen**
- Live review feed showing recency: "vor 3 Stunden"
- "Verifiziert" badges on individual reviews

**Product Pages:**
- Breadcrumb navigation: Home > Gamecards > Steam
- "Zertifizierter Reseller" badge
- Per-product "Sofortige Lieferung" with clock icon
- "Sichere Bezahlung" CTA buttons per denomination

**Footer:**
- Payment method icons displayed prominently
- Dedicated /zahlungsmethoden page
- Blog section with recent posts (dated 2026-02-16, 2026-02-15)

### 2. Product Page UX (Steam Example)

**Denomination Display:**
```
[Steam Gift Card €5]    [Steam Gift Card €10]    [Steam Gift Card €20]
€ 5,00                  € 10,00                  € 20,00
Sofortige Lieferung     Sofortige Lieferung      Sofortige Lieferung
[Qty: 1 ▼] [Sichere     [Qty: 1 ▼] [Sichere     [Qty: 1 ▼] [Sichere
 Bezahlung]              Bezahlung]               Bezahlung]
```

**Key patterns:**
- Multiple price points (€5, €10, €20, €25, €35)
- Direct CTA per denomination
- Quantity selector inline
- Trust badges on every card

**FAQ Accordion (Product-Specific):**
- "Wie kann ich ein Steam Geschenkkarte online kaufen?"
- "Was für einen Account brauche ich zum Einlösen?"
- "Wo gebe ich meinen Steam Guthaben Code ein?"
- "Wie kann ich Steam Guthaben auf PayPal kaufen?"
- "Wie kann ich mein aktuelles Steam Guthaben abfragen?"

### 3. Homepage Layout

**Header:**
- Logo + Search bar (prominent: "Suche nach Produkten, Marken usw")
- Top nav: "Für das Geschäft", "Brauchen Sie Hilfe?", "Über Uns"
- Language selector (DE button)

**Category Navigation (5 top categories):**
- Handy aufladen
- Prepaid-Zahlungsmittel
- Entertainment cards
- Gamecards
- Shopping Gutscheine

**Popular Products Section:**
- "Beliebte Produkte" label
- Visual grid with logos: PaysafeCard, Google Play, Apple, PSN, E-Plus, Aldi Talk, Telekom, Amazon, Steam

**Content Marketing:**
- Active blog with dated posts
- SEO-optimized landing pages for each category
- Extensive footer with 40+ product links

### 4. NEW: Product Page Deep-Dive (Steam Example)

**Breadcrumb Navigation:**
```
Home > Gamecards > Steam
```
Clear hierarchy helps users navigate and boosts SEO.

**Certified Reseller Badge:**
- "Guthaben.de ist zertifizierter Reseller von Steam" with official seal
- Builds authority right below H1

**Denomination Grid (5 options visible):**
```
[€5]  [€10]  [€20]  [€25]  [€35]
Each with:
- Product image (card visual)
- Price (€ 5,00)
- "Sofortige Lieferung" + clock icon
- Quantity dropdown
- "Sichere Bezahlung" CTA button
```

**FAQ Accordion (5 expandable questions):**
1. Wie kann ich ein Steam Geschenkkarte online kaufen?
2. Was für einen Account brauche ich zum Einlösen meines Steam Guthabens?
3. Wo gebe ich meinen Steam Guthaben Code ein?
4. Wie kann ich Steam Guthaben auf PayPal kaufen?
5. Wie kann ich mein aktuelles Steam Guthaben abfragen?

**Trust Bar (below product grid):**
- "Sofortige Codezustellung per E-Mail"
- "Sichere Zahlung"
- "Zertifizierter Wiederverkäufer"

### 5. Trust Architecture Summary

| Element | guthaben.de | guthabenkarten.ch | Gap |
|---------|-------------|-------------------|-----|
| Trustpilot widget | ✅ Embedded + live reviews | ❌ None | HIGH |
| Hero trust badges | ✅ Icons + bold text | ⚠️ Lower section, plain | HIGH |
| Delivery promise | ✅ "30 Sekunden" headline | ✅ "30-60 Sek" buried | HIGH |
| Denomination variants | ✅ 5+ options | ❌ 1 fixed price | MEDIUM |
| FAQ per product | ✅ 5 questions | ❌ None | MEDIUM |
| Breadcrumb nav | ✅ Full path | ❌ None | LOW |
| Payment icons | ✅ Footer display | ⚠️ Partial | MEDIUM |
| Search bar | ✅ Prominent header | ❌ None | MEDIUM |
| Certified badge | ✅ Per product page | ❌ None | HIGH |

---

## 5 Specific Improvements for guthabenkarten.ch

### 1. P0 - Hero Trust Badges with Icons ⏱️📧🔒
**Priority:** P0 (Highest Impact)

**What guthaben.de does:** Three visual trust pillars in hero:
- Icon + "Code erhalten" + **bold** "in 30 Sekunden"
- Icon + "Sofortige Lieferung" + **bold** "per E-Mail"  
- Icon + "Sichere" + **bold** "und zuverlässige" Zahlung

**Our current state:** Trust badges exist but are lower down with simple checkmarks (✓ Sofortlieferung, ✓ CHF Preise, ✓ 24/7 Verfügbar)

**Recommendation:** 
- Move trust badges to hero section immediately below H1
- Add icons (Clock, Email, ShieldLock) from Lucide
- Bold the key differentiators ("30-60 Sekunden", "per E-Mail", "Swiss Made")
- This is guthaben.de's #1 conversion element

**Effort:** 30 minutes
**Impact:** HIGH - First impression trust signal

---

### 2. P1 - Denomination Variants on Product Pages 💰
**Priority:** P1

**What guthaben.de does:** Show 5 price options (€5, €10, €20, €25, €35) as selectable cards. Each has quantity selector + "Sichere Bezahlung" CTA.

**Our current state:** Only CHF 50 for each product.

**Recommendation:**
- Add CHF 25, CHF 50, CHF 100 variants
- Display as card grid on product pages
- Each variant shows price + delivery badge + CTA
- Update product data structure to support variants

**Effort:** 2-3 hours
**Impact:** HIGH - More entry points = more conversions

---

### 3. P1 - FAQ Accordion per Product Category ❓
**Priority:** P1  

**What guthaben.de does:** Category-specific FAQ section on product pages. For Steam: 5 expandable questions about purchase, account requirements, code redemption, PayPal, balance checking.

**Our current state:** No FAQ on product pages.

**Recommendation:**
- Add FAQ accordion below product grid on product pages
- Questions per category:
  - **Gaming (Steam/PlayStation/Xbox):** "Wie löse ich den Code ein?", "Brauche ich einen Account?", "Wie lange ist der Code gültig?"
  - **Streaming (Netflix/Spotify):** "Kann ich bestehende Abos verlängern?", "Wann startet die Mitgliedschaft?"
  - **Mobile (Apple/Google):** "Funktioniert auf iPhone/Android?", "Kann ich Apps damit kaufen?"

**Effort:** 1-2 hours
**Impact:** MEDIUM - SEO + trust + reduces support

---

### 4. P1 - Trustpilot Widget Integration ⭐
**Priority:** P1

**What guthaben.de does:** Embedded Trustpilot widget in footer showing 4.5/5 with 65,067 reviews. Live review feed with timestamps ("vor 3 Stunden").

**Our current state:** No social proof widget.

**Recommendation:**
- Sign up for Trustpilot Business account (free tier)
- Embed Trustpilot widget in footer
- Show TrustScore + review count
- Initially may show "Bewertungen bei Trustpilot" placeholder
- Once we have 10+ reviews, activate full widget

**Effort:** 30 minutes (account) + 15 minutes (embed)
**Impact:** MEDIUM - Social proof is conversion booster

---

### 5. P2 - Enhanced Product Card Badges 🚀
**Priority:** P2

**What guthaben.de does:** Per-product "Sofortige Lieferung" badge with clock icon. Visible, professional-looking.

**Our current state:** Small "✓" checkmark with "Sicher" label on product cards.

**Recommendation:**
- Replace "✓" with themed badge: "Sofortige Lieferung" or "In 30-60 Sek"
- Add clock icon (Lucide)
- Use badge style (bordered or filled) not just text
- Keep color consistent with trust theme (green/blue)

**Effort:** 30 minutes
**Impact:** LOW - Polish, less critical than hero badges

---

## Additional Findings

### What's Working Well (Keep It)
- ✅ Gradient design is more modern than guthaben.de
- ✅ Multi-language support (DE/FR/IT/EN) - competitors mostly German-only
- ✅ Swiss focus (CHF, no fees) - differentiation from DE competitors
- ✅ Simple 10-product catalog - focused, not overwhelming

### Medium-Term Priorities (Post-MVP)
- Search bar in header (guthaben.de has this)
- Breadcrumb navigation
- Category filter pages
- Payment icons in footer
- Newsletter/blog section
- Language selector in header

---

## Test-Fix Loop Log

### 2026-02-16
- [x] Identified cart routing bug
- [x] Found cart context mismatch
- [ ] Fix bugs → rebuild → retest

### 2026-02-17
- [x] Competitor analysis complete (guthaben.de, startselect.com, cdkeys.com)
- [x] Identified 7 key UX patterns from market leaders
- [x] Updated priorities: Trustpilot integration → P1, FAQ section → P1
- [ ] Implement hero trust badges
- [ ] Add payment method icons to footer

### 2026-02-18
- [x] Detailed competitor scan: guthaben.de only accessible
- [x] Identified 5 specific improvements from market leader
- [x] Moved hero trust badges to P0 (highest impact)
- [x] Added denomination variants to roadmap (P1)
- [x] Updated 5 improvement recommendations with effort/impact
- [ ] Review with Philipp
- [ ] Prioritize implementation order

### 2026-02-19 - Security Audit Results
- [x] Security audit completed (see SECURITY_AUDIT.md for details)
- [x] Live site test passed (https://guthabenkarten.vercel.app - HTTP 200)
- [ ] Address critical security issues (Stripe test keys in .env.local committed to git)
- [ ] Add security headers (CSP, HSTS, X-Frame-Options)
- [ ] Remove .env.local from git history (git filter-repo required)
- [ ] Add CSRF protection before payment integration
- [ ] Implement input sanitization library (DOMPurify)
- [ ] Add rate limiting on checkout endpoints
