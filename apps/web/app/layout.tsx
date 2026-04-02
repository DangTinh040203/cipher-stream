import "@/styles/theme.css";
import "@shared/ui/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@shared/ui/components/sonner";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CipherStream",
    template: "%s | CipherStream",
  },
  description:
    "CipherStream - Learn without limits. World-class courses from industry experts.",
};

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en">
      <body
        className={`
          ${fontSans.variable}
          font-sans antialiased
        `}
      >
        <Toaster richColors />
        <NextTopLoader
          showSpinner={false}
          color="oklch(0.4919 0.2403 293.54)"
        />
        {children}
      </body>
    </html>
  );

  if (!clerkKey) return content;

  return <ClerkProvider>{content}</ClerkProvider>;
}
