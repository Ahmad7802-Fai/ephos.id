import "../globals.css";
import { Navbar, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">

        <NextIntlClientProvider locale={locale} messages={messages}>
          
          <Navbar />

          <main className="pt-16 md:pt-20 overflow-x-hidden">
            {children}
          </main>

          <Footer />

        </NextIntlClientProvider>

      </body>
    </html>
  );
}