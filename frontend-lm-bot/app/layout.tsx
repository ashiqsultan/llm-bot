import TanStackProvider from "../provider/TanStackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAG Search",
  description: "AI RAG Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container ${inter.className}`}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
