import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://medicollect.nl";
const siteName = "MediCollect";
const siteDescription =
  "Openstaande facturen in uw praktijk? MediCollect neemt het incassoproces uit handen. Professioneel, discreet en met respect voor uw patientrelatie.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MediCollect | Incasso voor de medische sector",
    template: "%s | MediCollect",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName,
    url: siteUrl,
    title: "MediCollect | Incasso voor de medische sector",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "MediCollect | Incasso voor de medische sector",
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  email: "info@medicollect.nl",
  telephone: "+31201234567",
  parentOrganization: {
    "@type": "Organization",
    name: "Havenstad Gerechtsdeurwaarders",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corsicaweg 10",
    postalCode: "1044 AB",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
