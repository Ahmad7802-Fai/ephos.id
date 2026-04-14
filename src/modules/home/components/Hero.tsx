import { Button, Container } from "@/components";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-blue-900/50" />

      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Content */}
      <Container
        size="wide"
        className="relative z-10 text-center text-white pt-24 md:pt-28"
      >
        
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Solusi Digital untuk
          <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Bisnis Modern
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
          ephos.id membantu bisnis berkembang melalui teknologi,
          website, dan sistem yang powerful dan scalable.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Button size="lg">
            Konsultasi Gratis
          </Button>

          <Button variant="outline" size="lg">
            Lihat Portfolio
          </Button>

        </div>

        {/* Trust badge */}
        <p className="mt-8 text-xs text-white/50">
          Dipercaya oleh bisnis modern 🚀
        </p>

      </Container>
    </section>
  );
}