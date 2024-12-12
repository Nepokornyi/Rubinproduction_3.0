This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

install vercel CLI

-   yarn add vercel
-   run $ vercel

### Login Setup

Google OAuth Credentials:

1. Go to the Google Cloud Console
2. Create a new project or select an existing one
3. Go to the APIs & Services > Credentials section
4. Create Credentials > OAuth 2.0 Client IDs

-   Application Type: Web application
-   Authorized redirect URIs: Add http://localhost:3000/api/auth/callback/google (replace with your production domain later)

5. Copy the Client ID and Client Secret into your .env file
