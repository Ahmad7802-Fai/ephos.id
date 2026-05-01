"use client";

import { Container } from "@/components";
import { useState } from "react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function ContactSection() {
  const t = useTranslations("ContactSection");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert(t("error"));
      return;
    }

    setLoading(true);

    const text = encodeURIComponent(
      `Halo Ephos Tech 👋

Nama: ${form.name}
Email: ${form.email}

Kebutuhan:
${form.message}`
    );

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 BACKGROUND (FIXED) */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]
      " />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT ================= */}
          <div className="space-y-10">

            {/* FORM */}
            <div className="
              p-10 rounded-3xl
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
            ">
              <h3 className="text-2xl font-semibold text-[var(--text)] mb-6">
                {t("title")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  placeholder={t("name")}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="
                    w-full px-5 py-3 rounded-xl
                    bg-[var(--bg)]
                    border border-[var(--border)]
                    text-[var(--text)]
                    focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  "
                />

                <input
                  type="email"
                  placeholder={t("email")}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="
                    w-full px-5 py-3 rounded-xl
                    bg-[var(--bg)]
                    border border-[var(--border)]
                    text-[var(--text)]
                    focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  "
                />

                <textarea
                  placeholder={t("message")}
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="
                    w-full px-5 py-3 rounded-xl
                    bg-[var(--bg)]
                    border border-[var(--border)]
                    text-[var(--text)]
                    focus:outline-none focus:ring-2 focus:ring-blue-500/40
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full py-3 rounded-xl
                    bg-gradient-to-r from-green-500 to-green-600
                    text-white font-medium
                    shadow-[0_15px_40px_rgba(34,197,94,0.4)]
                    hover:scale-[1.03]
                    transition
                    disabled:opacity-50
                  "
                >
                  {loading ? t("sending") : t("cta")} →
                </button>

              </form>
            </div>

            {/* GOOGLE MAPS */}
            <div className="
              rounded-2xl overflow-hidden
              border border-[var(--border)]
              shadow-[0_20px_60px_rgba(0,0,0,0.1)]
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

            {/* INFO */}
            <div className="
              p-10 rounded-3xl
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
            ">

              <h3 className="text-2xl font-semibold text-[var(--text)] mb-8">
                {t("infoTitle")}
              </h3>

              <div className="space-y-6 text-[var(--text-muted)]">

                <div>
                  <p className="text-sm">{t("addressLabel")}</p>
                  <p className="text-[var(--text)] font-medium">
                    {t("address")}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-[var(--text)] font-medium">
                    info@ephostech.id
                  </p>
                </div>

                <div>
                  <p className="text-sm">Website</p>
                  <p className="text-[var(--text)] font-medium">
                    www.ephostech.id
                  </p>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  className="
                    inline-block mt-4
                    px-6 py-3 rounded-xl
                    bg-green-500 text-white font-medium
                    hover:scale-[1.05]
                    transition
                  "
                >
                  WhatsApp →
                </a>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}