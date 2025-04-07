import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "../styles/global.css";
import { cn } from "@/utils/cn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="font-geist-sans text-gray-1000">{children}</body>
    </html>
  );
}
