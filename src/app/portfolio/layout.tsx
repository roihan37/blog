import { absoluteUrl, pageMetadata, person, serializeJsonLd } from "../lib/seo";

export const metadata = pageMetadata("Portfolio", "Explore Roihan Salsabila’s full-stack development portfolio: React, Next.js, mobile applications, project case studies, skills and experience.", "/portfolio");

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
      "@context": "https://schema.org", "@type": "ProfilePage",
      url: absoluteUrl("/portfolio"), name: "Roihan Salsabila — Portfolio", mainEntity: person,
    }) }} />
    {children}
  </>;
}
