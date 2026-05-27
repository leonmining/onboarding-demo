import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface BranchePageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroText: string;
  sections: { heading: string; text: string }[];
  bullets: string[];
  faqs: FAQ[];
}

export default function BranchePage({
  icon: Icon,
  title,
  subtitle,
  heroText,
  sections,
  bullets,
  faqs,
}: BranchePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-300 leading-relaxed">{heroText}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
                    {s.heading}
                  </h2>
                  <p className="text-[var(--color-text-light)] leading-relaxed whitespace-pre-line">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4">{subtitle}</h3>
                  <ul className="space-y-3">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                        <span className="text-sm text-[var(--color-text)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Neem contact op
                </Link>

                <Link
                  href="/werkwijze"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-[var(--color-secondary)] font-semibold rounded-lg border border-[var(--color-border)] hover:bg-gray-50 transition-colors"
                >
                  Bekijk onze werkwijze
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-bg-alt)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-10 text-center">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-[var(--color-secondary)] hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <span className="text-[var(--color-primary)] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-[var(--color-text-light)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
            Heeft u openstaande facturen?
          </h2>
          <p className="text-[var(--color-text-light)] mb-6">
            Neem vandaag nog contact op en ontdek wat MediCollect voor uw praktijk kan doen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Vrijblijvend contact opnemen
          </Link>
        </div>
      </section>
    </>
  );
}
