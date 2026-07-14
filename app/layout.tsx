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
  "I turn messy, real-world data into decisions people can act on: pipelines, dashboards and models, all live and inspectable. Open to Data Analyst roles.";

export const metadata: Metadata = {
  // Origin only — Next appends basePath itself when resolving the OG image.
  metadataBase: new URL(site.origin),
  title,
  description,
  authors: [{ name: site.name }],
  keywords: [
    "Data Analyst",
    "Data Analytics",
    "London",
    "Python",
    "SQL",
    "Power BI",
    "ETL",
    "Machine Learning",
    site.name,
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: `${site.url}/`,
    siteName: site.name,
    // Declared explicitly rather than left to the opengraph-image file
    // convention: that convention emits an extensionless file, which GitHub
    // Pages serves as application/octet-stream, and crawlers won't render it.
    // scripts/rename-og.mjs gives the same bytes a .png extension after build.
    images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${site.url}/og.png`],
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
  url: `${site.url}/`,
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
        {/* Set the theme before first paint so there is no flash, and stamp a
            matching theme-color so mobile browser chrome doesn't land on white.
            Not declared via Next's `viewport` export: that only keys off the OS
            colour scheme, and this site's theme is our own attribute. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');var d=t==='light'?'light':'dark';document.documentElement.setAttribute('data-theme',d);var m=document.createElement('meta');m.name='theme-color';m.content=d==='light'?'#f7f5f8':'#0b0e14';document.head.appendChild(m);}catch(e){}",
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
