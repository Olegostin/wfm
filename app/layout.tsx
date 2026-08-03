import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "@fontsource-variable/roboto";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: ["Naumen WFM", "workforce management", "планирование персонала", "рабочие графики"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${siteConfig.brand.name} — эффективное планирование персонала`,
    description: "Прогнозируйте нагрузку и собирайте оптимальные графики за минуты.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
