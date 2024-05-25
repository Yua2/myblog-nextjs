import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import AppProvider from "@/provider";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "MyBlog",
  description: "A blog about my thoughts and ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={inter.className}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppProvider>
          <Header />
          <div style={{ display: "flex", flex: "1 0 auto" }}>
            <main style={{ flexGrow: 1 }}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
          </div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
