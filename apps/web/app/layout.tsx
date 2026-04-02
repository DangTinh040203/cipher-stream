import "@/styles/theme.css";
import "@shared/ui/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@shared/ui/components/sonner";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@/context/theme-provider";

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
  description: "CipherStream - Your streaming platform",
};

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${fontSans.variable}
          font-sans antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          <NextTopLoader showSpinner={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );

  if (!clerkKey) return content;

  return <ClerkProvider>{content}</ClerkProvider>;
}
