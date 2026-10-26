This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form

The home and portfolio contact forms use `POST /api/contact` with Resend.
Set these server-only variables in `.env.local` (and in the deployment environment):

```dotenv
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Portfolio <contact@your-verified-domain.com>
```

Verify the sender domain in [Resend](https://github.com/resend/resend-node).
Restart the development server after changing environment variables.
Messages are sent to `pro.roihan@gmail.com`, with the visitor's email as Reply-To.
Without the configuration, the form shows an error and a direct email link;
it never reports a successful send. Do not use `NEXT_PUBLIC_` for the API key.

## SEO configuration

The canonical production origin is `https://roihansalsabila.com`. Metadata,
canonical links, JSON-LD, robots and sitemap all use this origin. Set `SITE_URL`
only when deploying to a different canonical domain (without a route), then
rebuild/redeploy after changing it.

- `/sitemap.xml` includes public pages and all Sanity post slugs, refreshed hourly.
- `/robots.txt` excludes Studio and API paths from crawling. Studio also emits `noindex`.
- `/opengraph-image` generates the default 1200×630 share image; articles use their
  Sanity cover image when available.
- Each public route has its own canonical and metadata. Articles emit BlogPosting
  JSON-LD; the homepage describes the author and website.

After deployment, verify the production sitemap and submit it in Google Search
Console. Search rankings and rich-result display are determined by search engines.
