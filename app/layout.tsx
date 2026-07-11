import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Self-hosted at build time by next/font — no runtime CDN, no layout shift.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${site.name} · ${site.role}, London`;
const description =
  "I turn messy, real-world data into decisions people can act on: pipelines, dashboards and models, all live and inspectable. Open to data roles.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title,
  description,
  authors: [{ name: site.name }],
  keywords: [
    "Data Analyst",
    "Data Engineer",
    "London",
    "Python",
    "SQL",
    "ETL",
    "FastAPI",
    "Machine Learning",
    site.name,
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: `https://${site.domain}`,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  email: `mailto:${site.email}`,
  url: `https://${site.domain}`,
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set the theme before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
