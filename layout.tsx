import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Fутуризм",
  description: "Инженерное наследие великих визионеров прошлого",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-[#0f172a]`}
      >
        <div className="fixed inset-0 pointer-events-none z-100 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
        
        {children}
      </body>
    </html>
  );
}