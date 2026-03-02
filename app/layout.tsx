import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://orfys.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orfys Technologies - Build. Automate. Scale. | Software Development & Workflow Automation",
    template: "%s | Orfys Technologies",
  },
  description:
    "Transform your business with software development and workflow automation solutions. Orfys Technologies provides custom software applications, automation services, and integration solutions to streamline operations and accelerate growth.",
  keywords: [
    "software development",
    "custom software",
    "workflow automation",
    "business automation",
    "custom software applications",
    "automation tools",
    "web solutions",
    "workflow management",
    "process automation",
    "enterprise automation",
    "Orfys Technologies",
  ],
  authors: [{ name: "Orfys Technologies" }],
  creator: "Orfys Technologies",
  publisher: "Orfys Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Orfys Technologies",
    title: "Orfys Technologies - Build. Automate. Scale.",
    description:
      "Software Development & Workflow Automation Solutions. Transform your business operations with custom software applications and intelligent automation tools.",
    images: [
      {
        url: `${siteUrl}/o-logo.png`,
        width: 1200,
        height: 630,
        alt: "Orfys Technologies - SaaS & Workflow Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orfys Technologies - Build. Automate. Scale.",
    description:
      "Software Development & Workflow Automation Solutions. Transform your business operations with custom software applications and intelligent automation tools.",
    images: [`${siteUrl}/o-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Orfys Technologies",
    url: siteUrl,
    logo: `${siteUrl}/o-logo.png`,
    description:
      "Orfys Technologies specializes in software development and workflow automation, helping businesses streamline operations and accelerate growth.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sargodha",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@orfys.com",
      contactType: "Customer Service",
    },
    sameAs: [
      // Add social media links when available
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development and Workflow Automation",
    provider: {
      "@type": "Organization",
      name: "Orfys Technologies",
    },
    areaServed: "Worldwide",
    description:
      "Custom software development, workflow automation, business intelligence, and integration services.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable}
         ${geistMono.variable}
          antialiased 
          overflow-x-hidden`
        }
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
