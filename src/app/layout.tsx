import type { Metadata } from "next";
import dynamic from "next/dynamic";

import NextTopLoader from "nextjs-toploader";

import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
import { PopupBanner } from "@/components/global/popup-banner";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";

import { generalSans, polysans } from "@/fonts";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import "./globals.css";

import OpenPanelProvider from "@/components/open-panel";

const LiveChat = dynamic(() => import("@/lib/3cx"));

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  verification: {
    google: siteConfig.googleVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV !== "development") {
    console.info(
      "%cWebsite Developed by %cZiron Media - www.zironmedia.com",

      "background: #4A3AFF; border-radius:0.5em 0 0 0.5em; padding:0.5em 0em 0.5em 0.5em; color: white;",
      "background: #4A3AFF; border-radius:0 0.5em 0.5em 0; padding:0.5em 0.5em 0em; color: white; font-weight: bold"
    );
  }

  return (
    <html lang="en">
      <body className={cn("relative antialiased", generalSans.className, polysans.variable)}>
        <OpenPanelProvider>
          <div className="bg-background" data-vaul-drawer-wrapper>
            <NextTopLoader />
            <PopupBanner enable={false} />
            <Navbar />
            {children}
            {/* <FloatingWhatsapp /> */}
            <BreakpointIndicator />
            <Footer />
            <Toaster />
          </div>
          <LiveChat />
        </OpenPanelProvider>
      </body>
    </html>
  );
}
