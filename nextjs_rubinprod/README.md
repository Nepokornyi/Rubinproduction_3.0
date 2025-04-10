# Video Atelier Platform

A professional platform for a creative video making atelier, featuring a public-facing landing page and a subscription-based community area.

## 🎬 Project Overview

This application consists of two main components:

-   **Landing Page**: A business card showcasing services, portfolio, and contact information
-   **Community Page**: A subscription-based platform where users can access free and premium content

## 🛠️ Technology Stack

-   **Framework**: Next.js 15
-   **Language**: TypeScript
-   **Styling**: TailwindCSS
-   **Authentication**: Supabase
-   **Payments**: Stripe
-   **Animation**: Framer Motion, GSAP
-   **Form Handling**: React Hook Form with Zod validation, Mailchimp
-   **Internationalization**: i18next, next-intl

## 📋 Prerequisites

-   Node.js 18+
-   Yarn package manager
-   Supabase account
-   Stripe account

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to project directory
cd your-repo-name

# Install dependencies
yarn install
```

### Configuration

1. Create a `.env.local` file in the root directory with the following variables:

```
# Base configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PRICE_ID=your_stripe_price_id
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

#Mailchimp configuration
MAILCHIMP_KEY=your_mailchimp_key
MAILCHIMP_SERVER_PREFIX=your_mailchimp_server_prefix
MAILCHIMP_AUDIENCE_ID=your_mailchimp_audience_id
```

2. Set up your Supabase database tables (see Database Schema section)
3. Configure Stripe products and prices for subscription tiers

### Running the Development Server

```bash
# Start the development server
yarn dev
```

### Building for Production

```bash
# Build the application
yarn build

# Start the production server
yarn start
```

App is deployed on Vercel, to deploy app using CLI:

```bash
# Install Vercel CLI
yarn add -g vercel

# run to link the project (First Time setup)
vercel
```

## 🧪 Code Quality Tools

This project uses several tools to ensure code quality:

-   **TypeScript**: Static type checking (`yarn check:type`)
-   **ESLint**: Code linting (`yarn lint`)
-   **Madge**: Circular dependency detection (`yarn check:circular-dependencies`)
-   **Knip**: Dead code detection (`yarn check:dead-code`)
-   **Security Audits**: Dependency security checks (`yarn check:security`)

Run all checks with:

```bash
yarn check:code
```

## 🔒 Authentication

Authentication is handled using Supabase. Users can:

-   Sign up/login with email/google
-   Access community content based on subscription level

## 💰 Subscription System

The platform uses Stripe for subscription management:

-   Free tier: Access to basic community content
-   Premium tier: Access to exclusive content and features

## 🌐 Internationalization

The application supports multiple languages using i18next and next-intl.

## 🔄 Deployment

Instructions for deploying to your preferred hosting platform:

1. Set up environment variables on your hosting platform
2. Deploy using the platform's recommended method
3. Configure Stripe webhooks to point to your production URL
