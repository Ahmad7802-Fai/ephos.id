import { Container } from "@/components";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 py-16">
        
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              ephos.id
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-xs">
              Solusi digital untuk membantu bisnis berkembang
              dengan teknologi modern dan scalable.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-3">
              Menu
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-3">
              Konsultasi
            </h3>
            <p className="text-sm text-white/70">
              Diskusikan kebutuhan digital bisnis Anda bersama kami.
            </p>

            <a
              href="#"
              className="inline-block mt-4 px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-sm"
            >
              Mulai Sekarang
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} ephos.id. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}