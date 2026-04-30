"use client";

import { Container } from "@/components";

export default function ImpactSection() {
  return (
    <section className="py-28 bg-white">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900">
              Fokus Kami
              <span className="block text-blue-600">
                Hasil Nyata
              </span>
            </h2>

            <p className="mt-4 text-gray-600">
              Kami tidak hanya membangun sistem, tetapi memastikan setiap solusi
              memberikan dampak nyata terhadap performa bisnis.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { value: "100+", label: "Clients" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "Fast", label: "Response" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border">
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}