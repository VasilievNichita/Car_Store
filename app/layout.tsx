import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car Showcase",
  description: "Car catalogue with search",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header>
          <Navbar />   
        </header>

        <main className="flex-1">
          {children}   
        </main>

        <footer>
          <Footer />  
        </footer>
      </body>
    </html>
  );
}
