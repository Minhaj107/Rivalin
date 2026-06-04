# Rivalin Project - Complete Development Guide

## 📋 Project Overview
Rivalin is a premium luxury jewelry e-commerce platform built with modern web technologies.

## 🏗️ Project Structure

```
src/
├── pages/
│   ├── api/                 # Backend API endpoints
│   ├── admin/              # Admin pages
│   ├── _app.tsx            # App wrapper
│   ├── _document.tsx       # HTML document
│   ├── index.tsx           # Home page
│   ├── products.tsx        # Product listing
│   ├── products/[id].tsx   # Product details
│   ├── cart.tsx            # Shopping cart
│   ├── checkout.tsx        # Checkout flow
│   └── order-confirmation.tsx # Success page
├── components/
│   ├── common/             # Navbar, Footer, Button, Input, etc.
│   ├── product/            # ProductCard, ReviewCard
│   └── cart/               # CartItem
├── layouts/
│   └── Layout.tsx          # Main layout wrapper
├── lib/
│   ├── supabase.ts         # Database client
│   ├── stripe.ts           # Payment processing
│   ├── sslcommerz.ts       # Bangladesh payments
│   ├── utils.ts            # Utility functions
│   ├── api.ts              # API helpers
│   ├── apiClient.ts        # API client with axios
│   └── storage.ts          # Local storage utilities
├── hooks/
│   └── useCart.ts          # Cart hook
├── store/
│   └── cartStore.ts        # Zustand cart store
├── types/
│   └── index.ts            # TypeScript interfaces
└── styles/
    └── globals.css         # Global styles
```

## 🎯 Core Features

### Customer Features
- ✅ Browse products with filters & search
- ✅ View detailed product information
- ✅ Add/remove items from cart
- ✅ Checkout with multiple payment methods
- ✅ Order tracking
- ✅ User account management
- ✅ Wishlist functionality
- ✅ Product reviews & ratings

### Admin Features
- ✅ Dashboard with analytics
- ✅ Product management (CRUD)
- ✅ Order management
- ✅ Customer management
- ✅ Sales analytics

### Technical Features
- ✅ Responsive design
- ✅ SEO optimization
- ✅ TypeScript support
- ✅ Zustand state management
- ✅ API error handling
- ✅ Local storage persistence

## 🔧 Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- next-seo (SEO)

### Backend
- Next.js API Routes
- Supabase (Database & Auth)
- Stripe (Payments)
- SSLCommerz (Local Payments)

### Tools & Libraries
- Axios (HTTP Client)
- React Hot Toast (Notifications)
- Tailwind CSS (Styling)

## 📦 Components Created

### Common Components
- Navbar - Navigation header with mobile menu
- Footer - Footer with links and newsletter
- Button - Reusable button with variants
- Input - Form input with validation
- Alert - Notification alerts
- Loader - Loading spinner
- Pagination - Page navigation

### Product Components
- ProductCard - Product display card
- ReviewCard - Customer review display

### Cart Components
- CartItem - Individual cart item

### Layout
- Layout - Main app layout wrapper

## 🚀 Getting Started

### Installation
```bash
git clone https://github.com/Minhaj107/Rivalin.git
cd Rivalin
npm install
```

### Setup Environment
```bash
cp .env.example .env.local
# Update with your API keys
```

### Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

## 📝 API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/[id]` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Orders
- `POST /api/checkout` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/[id]` - Get order details

### Admin
- `POST /api/admin/auth` - Admin login

## 🔐 Security Considerations

- Environment variables for sensitive data
- Supabase Row Level Security
- Stripe webhook verification
- Input validation on all APIs
- Authorization headers on protected routes

## 📱 Responsive Design

All pages are mobile-first responsive using Tailwind CSS:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🎨 Design System

### Color Palette
- Primary Gold: #d4af37
- Dark Gold: #aa8c2c
- Text Black: #212121
- Background White: #fafafa

### Typography
- Sans-serif: Segoe UI
- Serif: Georgia
- Font sizes scale responsively

## 📊 Database Schema

Tables ready for Supabase:
- users
- products
- categories
- orders
- order_items
- payments
- reviews
- wishlist
- coupons

See DATABASE.sql for full schema

## 🧪 Testing

```bash
npm run type-check    # TypeScript check
npm run lint          # Code linting
npm run build         # Production build
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Environment Variables (Production)
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- SSLCOMMERZ_STORE_ID
- SSLCOMMERZ_STORE_PASSWORD

## 📚 Documentation Files

- README.md - Project overview
- BUILD_SUMMARY.md - Build details
- DEVELOPMENT.md - Development guide (this file)

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Create pull request

## 📞 Support

For issues or questions:
- GitHub Issues
- Email: support@rivalin.com

## 📄 License

Proprietary to Rivalin Luxury Jewelry

---

**Last Updated**: June 4, 2026
**Status**: Active Development 🚀
