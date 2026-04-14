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

        {/* offset navbar fixed */}
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}