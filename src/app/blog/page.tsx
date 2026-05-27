import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MediCollect - Tips en inzichten voor zorgverleners",
  description:
    "Praktische tips over factureren, incasso en financieel beheer in de zorg. Lees de nieuwste artikelen van MediCollect.",
};

const articles = [
  {
    title: "5 tips om betalingsachterstanden in uw praktijk te voorkomen",
    excerpt:
      "Voorkomen is beter dan genezen. In dit artikel deelt MediCollect vijf concrete maatregelen die u vandaag nog kunt doorvoeren om het aantal wanbetalers te verlagen.",
    href: "/blog/betalingsachterstanden-voorkomen",
    date: "2025-01-15",
  },
  {
    title: "Wat kost een incassobureau? Alles over tarieven en modellen",
    excerpt:
      "Veel zorgverleners weten niet wat een incassobureau precies kost. In dit artikel leggen wij de verschillende tariefmodellen uit.",
    href: "/blog/wat-kost-incassobureau",
    date: "2025-01-08",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Kennisbank</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Praktische tips, actuele inzichten en branche-specifieke informatie
              over factureren, debiteurenbeheer en incasso in de medische sector.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col bg-[var(--color-bg-alt)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)] mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[var(--color-text-light)] mb-4 flex-1">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Lees meer <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-[var(--color-accent)] rounded-2xl p-8 text-center">
            <p className="text-[var(--color-text-light)]">
              Heeft u een onderwerp waar u meer over wilt weten? Laat het ons weten
              via het{" "}
              <Link href="/contact" className="text-[var(--color-primary)] font-semibold hover:underline">
                contactformulier
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
