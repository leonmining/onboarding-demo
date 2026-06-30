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

function HeroMedicalGraphic({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[280px]">
      {/* Background circles */}
      <circle cx="150" cy="150" r="140" fill="white" fillOpacity="0.04" />
      <circle cx="150" cy="150" r="110" fill="white" fillOpacity="0.04" />

      {/* Shield outline */}
      <path
        d="M150 40L80 75V155C80 210 110 255 150 275C190 255 220 210 220 155V75L150 40Z"
        fill="#2a9d8f"
        fillOpacity="0.15"
        stroke="#2a9d8f"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Central icon circle */}
      <circle cx="150" cy="140" r="40" fill="#2a9d8f" fillOpacity="0.25" stroke="#2a9d8f" strokeWidth="2" />

      {/* Floating dots */}
      <circle cx="60" cy="60" r="4" fill="white" fillOpacity="0.2" />
      <circle cx="240" cy="80" r="3" fill="#2a9d8f" fillOpacity="0.3" />
      <circle cx="50" cy="200" r="5" fill="white" fillOpacity="0.15" />
      <circle cx="250" cy="220" r="4" fill="#2a9d8f" fillOpacity="0.2" />
      <circle cx="90" cy="260" r="3" fill="white" fillOpacity="0.1" />

      {/* Small medical crosses */}
      <g transform="translate(55, 100)" opacity="0.15">
        <rect x="-2" y="-8" width="4" height="16" rx="1" fill="white" />
        <rect x="-8" y="-2" width="16" height="4" rx="1" fill="white" />
      </g>
      <g transform="translate(245, 160)" opacity="0.15">
        <rect x="-2" y="-8" width="4" height="16" rx="1" fill="white" />
        <rect x="-8" y="-2" width="16" height="4" rx="1" fill="white" />
      </g>
    </svg>
  );
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
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: heroText,
    serviceType: "Incasso",
    areaServed: "NL",
    provider: {
      "@type": "Organization",
      name: "MediCollect",
      url: "https://medicollect.nl",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white overflow-hidden">
        {/* Heartbeat line top */}
        <svg className="absolute top-0 left-0 w-full h-16 opacity-10" viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none">
          <path d="M0 30 L300 30 L350 30 L380 8 L410 52 L440 3 L470 48 L500 25 L530 30 L1200 30" stroke="#2a9d8f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Glow effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[var(--color-primary)] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[var(--color-primary)] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-lg text-gray-300 leading-relaxed">{heroText}</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <HeroMedicalGraphic icon={Icon} />
            </div>
          </div>
        </div>

        {/* Heartbeat line bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-16 opacity-10" viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none">
          <path d="M0 30 L500 30 L550 30 L580 8 L610 52 L640 3 L670 48 L700 25 L730 30 L1200 30" stroke="#2a9d8f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
      <section className="relative bg-[var(--color-accent)] overflow-hidden">
        {/* Heartbeat line decoration */}
        <svg className="absolute bottom-0 left-0 w-full h-20 opacity-10" viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
          <path d="M0 40 L200 40 L250 40 L280 10 L310 70 L340 5 L370 60 L400 35 L430 40 L1200 40" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
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
