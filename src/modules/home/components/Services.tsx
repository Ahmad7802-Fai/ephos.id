import { Card, Container } from "@/components";
import { services } from "../data";

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-slate-900 overflow-hidden">
      
      <Container>
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Layanan Digital Premium
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Kami membantu bisnis berkembang dengan teknologi modern.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card key={index}>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 mb-4">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}