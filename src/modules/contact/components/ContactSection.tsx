"use client";

import { Container } from "@/components";
import { useState } from "react";

const WHATSAPP_NUMBER = "6285285579492";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Halo Ephos Tech,\n\nNama: ${form.name}\nEmail: ${form.email}\n\nKebutuhan:\n${form.message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT ================= */}
          <div className="space-y-10">

            {/* FORM CARD */}
            <div className="
              p-10 rounded-3xl
              bg-white
              border border-gray-200
              shadow-[0_30px_80px_rgba(0,0,0,0.06)]
            ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Konsultasi Gratis
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="
                    w-full px-5 py-3 rounded-xl
                    border border-gray-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  "
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="
                    w-full px-5 py-3 rounded-xl
                    border border-gray-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  "
                  required
                />

                <textarea
                  placeholder="Ceritakan kebutuhan Anda..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="
                    w-full px-5 py-3 rounded-xl
                    border border-gray-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  "
                  required
                />

                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-xl
                    bg-gradient-to-r from-green-500 to-green-600
                    text-white font-medium
                    shadow-[0_15px_40px_rgba(34,197,94,0.4)]
                    hover:scale-[1.03]
                    hover:shadow-[0_25px_60px_rgba(34,197,94,0.5)]
                    transition-all duration-300
                  "
                >
                  Kirim via WhatsApp →
                </button>

              </form>
            </div>

            {/* GOOGLE MAPS */}
            <div className="
              rounded-2xl overflow-hidden
              border border-gray-200
              shadow-[0_20px_60px_rgba(0,0,0,0.05)]
            ">
              <iframe
                src="https://www.google.com/maps?q=Epicentrum+Walk+Jakarta&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                className="w-full h-[300px]"
              />
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-10">

            {/* INFO CARD */}
            <div className="
              relative
              p-10 rounded-3xl
              bg-gradient-to-br from-blue-50 to-blue-100
              border border-blue-100
              shadow-[0_30px_80px_rgba(37,99,235,0.15)]
            ">

              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 text-gray-700">

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium text-gray-900">
                      Gedung Epicentrum Walk, Jakarta
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">
                      info@ephostech.id
                    </p>
                  </div>
                </div>

                {/* WEBSITE */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="font-medium text-gray-900">
                      www.ephostech.id
                    </p>
                  </div>
                </div>

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  className="
                    flex items-start gap-4
                    p-4 rounded-xl
                    hover:bg-blue-50
                    transition
                  "
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500 text-white flex items-center justify-center shadow">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-gray-900">
                      +62 852 8557 9492 (Endi)
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* TRUST BADGE */}
            <div className="flex flex-wrap gap-3">
              {["100+ Client", "99.9% Uptime", "24/7 Support"].map((item, i) => (
                <span
                  key={i}
                  className="
                    px-5 py-2 rounded-full text-xs font-semibold
                    bg-gradient-to-r from-yellow-400 to-amber-500
                    text-black
                    shadow-[0_8px_25px_rgba(251,191,36,0.5)]
                    hover:scale-[1.05]
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}