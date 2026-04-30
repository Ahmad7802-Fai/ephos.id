import "./globals.css";
import { Navbar, Footer } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />

        {/* 🔥 OFFSET NAVBAR */}
        <main className="pt-14 md:pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}