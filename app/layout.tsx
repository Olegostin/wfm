import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: ["WFM", "workforce management", "планирование персонала", "рабочие графики"],
  openGraph: {
    title: `${siteConfig.brand.name} — точное планирование команды`,
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
