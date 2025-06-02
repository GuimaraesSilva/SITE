import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website - Personal Portfolio",
  description:
    "Website for promotion of personal portfolio, showcasing skills, projects, and experiences.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await the params object and then destructure
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
