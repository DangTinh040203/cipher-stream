import "@/styles/theme.css";
import "@shared/ui/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@shared/ui/components/sonner";
import { type Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { ScrollToTop } from "@/components/common/scroll-to-top";
import MotionProvider from "@/components/providers/motion-provider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "CipherStream - Learn Without Limits",
    template: "%s | CipherStream",
  },
  description:
    "CipherStream - Learn without limits. World-class courses from industry experts. Access 10,000+ courses and advance your career.",
  keywords: [
    "online courses",
    "e-learning",
    "online education",
    "programming courses",
    "data science",
    "web development",
    "career development",
  ],
  authors: [{ name: "CipherStream Team" }],
  creator: "CipherStream",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "CipherStream - Learn Without Limits",
    description:
      "World-class courses from industry experts. Access 10,000+ courses and advance your career.",
    siteName: "CipherStream",
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherStream - Learn Without Limits",
    description:
      "World-class courses from industry experts. Access 10,000+ courses and advance your career.",
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
};

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`
          ${fontSans.variable}
          w-full max-w-screen overflow-x-hidden font-sans antialiased
        `}
      >
        <MotionProvider>
          <Toaster richColors />
          <NextTopLoader
            showSpinner={false}
            color="oklch(0.4919 0.2403 293.54)"
            easing="ease-in-out"
          />
          <ScrollToTop />
          {children}
        </MotionProvider>
      </body>
    </html>
  );

  if (!clerkKey) return content;

  return <ClerkProvider>{content}</ClerkProvider>;
}
