"use client";

import { Container } from "@/components";

export default function Timeline() {
  const data = [
    { year: "2021", title: "Company Founded", desc: "Ephos didirikan dengan fokus IT infrastructure." },
    { year: "2022", title: "First Enterprise Client", desc: "Mulai menangani klien skala enterprise." },
    { year: "2023", title: "Cloud Expansion", desc: "Ekspansi layanan cloud & automation." },
    { year: "2024", title: "Scaling Business", desc: "Meningkatkan kapasitas dan tim profesional." },
  ];

  return (
    <section className="py-28 bg-white">
      <Container>

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-semibold text-gray-900 mb-16 text-center">
            Perjalanan Perusahaan
          </h2>

          <div className="space-y-10 border-l border-gray-200 pl-6">
            {data.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full" />

                <p className="text-sm text-blue-600 font-semibold">{item.year}</p>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}