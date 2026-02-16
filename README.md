# 🇨🇭 Guthabenkarten.ch

**Automated Swiss Gaming Gift Card Store**

Built with Next.js 14, TypeScript, Tailwind CSS, and Reloadly API.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 What's Built So Far

### ✅ Completed:
- [x] Next.js 14 project setup
- [x] Product catalog (7 gaming gift cards)
- [x] Homepage with featured products
- [x] Responsive design (mobile-first)
- [x] Tailwind CSS styling
- [x] TypeScript type safety

### 🚧 In Progress:
- [ ] Product detail pages
- [ ] Shopping cart
- [ ] Checkout flow
- [ ] Stripe payment integration
- [ ] Reloadly API integration
- [ ] Automated email delivery

### ⏳ Planned:
- [ ] Multi-language (DE/FR/IT/EN)
- [ ] User accounts
- [ ] Order history
- [ ] Admin dashboard
- [ ] Bulk order portal

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe (+ Twint)
- **Gift Cards:** Reloadly API
- **Email:** Resend
- **Database:** Supabase (optional)
- **Hosting:** Vercel

---

## 📁 Project Structure

```
guthabenkarten/
├── app/
│   ├── page.tsx              # Homepage
│   ├── product/
│   │   └── [id]/page.tsx     # Product detail pages (TODO)
│   ├── cart/page.tsx          # Shopping cart (TODO)
│   ├── checkout/page.tsx      # Checkout flow (TODO)
│   └── api/
│       ├── purchase/route.ts  # Purchase API (TODO)
│       └── reloadly/route.ts  # Reloadly integration (TODO)
├── lib/
│   ├── products.ts            # Product catalog
│   ├── reloadly.ts            # Reloadly API client (TODO)
│   ├── stripe.ts              # Stripe integration (TODO)
│   └── email.ts               # Email delivery (TODO)
├── components/
│   ├── ProductCard.tsx        # Product display component (TODO)
│   ├── Cart.tsx               # Cart component (TODO)
│   └── Checkout.tsx           # Checkout form (TODO)
└── public/
    └── images/                # Product images (TODO)
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
# Reloadly API
RELOADLY_API_KEY=your_reloadly_api_key
RELOADLY_CLIENT_ID=your_client_id
RELOADLY_CLIENT_SECRET=your_client_secret
RELOADLY_SANDBOX_MODE=true  # Set to false in production

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Resend)
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=orders@guthabenkarten.ch

# Optional: Database
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
```

---

## 📊 Product Catalog

Currently supports:
1. Steam Gift Cards (CHF 10, 20, 50, 100)
2. PlayStation Store (CHF 10, 20, 50, 75)
3. Xbox Gift Cards (CHF 10, 25, 50, 100)
4. Nintendo eShop (CHF 15, 35, 50)
5. Roblox (CHF 10, 25, 50)
6. Google Play (CHF 10, 25, 50, 100)
7. Apple App Store (CHF 10, 25, 50, 100)

**Margins:** 5-10% per sale (CHF 0.50-10.00 profit per transaction)

---

## 🔄 Order Flow (Automated)

```
1. Customer selects product + denomination
2. Add to cart
3. Checkout (name + email + payment)
4. Stripe processes payment
5. Webhook triggers purchase API
6. API calls Reloadly to generate code
7. Code received in 10-30 seconds
8. Email sent to customer with code
9. Order confirmation displayed
```

**Total time:** 30-60 seconds, fully automated ⚡

---

## 💰 Business Model

**Revenue per Sale:**
- Average order: CHF 50
- Margin: 6-10% = CHF 3-5 profit
- Stripe fee: ~CHF 1.50 (2.9% + CHF 0.30)
- **Net profit:** CHF 1.50-3.50 per sale

**Break-even:** ~200 sales  
**Target:** 50-100 sales/day = CHF 2,250-5,250/month profit

---

## 🚀 Deployment

### Vercel (Recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Manual:

```bash
# Build
npm run build

# Start
npm start
```

---

## 🧪 Testing

### Test Cards (Stripe):
- **Success:** 4242 4242 4242 4242
- **Decline:** 4000 0000 0000 0002
- **3D Secure:** 4000 0027 6000 3184

### Reloadly Sandbox:
- Use sandbox API keys
- Test with demo products
- No real money charged

---

## 📞 Support

- **Developer:** Lucy AI
- **Owner:** Philipp Schmutz
- **Email:** (Add your email here)
- **Phone:** (Add your phone here)

---

## 📄 License

Private project. Not open source.

---

## 🎯 Next Steps

1. **Create Reloadly account** → Get API keys
2. **Create Stripe account** → Get test keys
3. **Build product detail pages** → Individual product views
4. **Implement shopping cart** → Add/remove items
5. **Integrate Stripe checkout** → Payment processing
6. **Connect Reloadly API** → Gift card generation
7. **Set up email delivery** → Resend integration
8. **Test end-to-end flow** → Purchase → Email
9. **Deploy to Vercel** → Live staging site
10. **Go live!** → Real payments enabled

---

**Current Status:** 🟢 Foundation Complete (20% done)  
**Next Milestone:** Product pages + Shopping cart (50% done)  
**Launch Target:** 7-10 days

---

Built with ❤️ in Switzerland 🇨🇭
