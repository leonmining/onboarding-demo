import Link from "next/link";
import {
  FileText,
  Search,
  MessageSquare,
  Scale,
  BadgeCheck,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werkwijze MediCollect | Zo werkt incasso in de zorg",
  description:
    "Hoe werkt incasso via MediCollect? Transparant stappenplan, heldere kosten en persoonlijk contact. Bekijk onze werkwijze.",
};

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Factuur aanmelden",
    desc: "U levert de openstaande factuur bij ons aan, samen met de basisgegevens van de debiteur. Dit kan telefonisch, per e-mail of via ons online portaal. Het kost u niet meer dan vijf minuten.",
  },
  {
    icon: Search,
    step: "2",
    title: "Dossierbeoordeling",
    desc: "Onze specialisten bekijken de factuur, controleren de gegevens en stellen een incassostrategie op die past bij uw branche en de situatie van de debiteur.",
  },
  {
    icon: MessageSquare,
    step: "3",
    title: "Minnelijk traject",
    desc: "Wij benaderen de debiteur met een correcte, schriftelijke betalingsherinnering. Vervolgens nemen wij telefonisch contact op om tot een oplossing te komen. In veel gevallen leidt dit al tot volledige betaling of een haalbare betalingsregeling.",
  },
  {
    icon: Scale,
    step: "4",
    title: "Juridisch traject",
    desc: "Reageert de debiteur niet op het minnelijke traject? Dan bespreken wij met u de mogelijkheden voor juridische maatregelen. Als onderdeel van Havenstad Gerechtsdeurwaarders beschikken wij over de bevoegdheid om gerechtelijke stappen te ondernemen.",
  },
  {
    icon: BadgeCheck,
    step: "5",
    title: "Afronding en uitbetaling",
    desc: "Na afloop van het traject ontvangt u een volledige rapportage. Wij zorgen voor de financiele afhandeling en u ontvangt het geinde bedrag op uw rekening.",
  },
];

const expectations = [
  "Persoonlijk contact: een vaste contactpersoon die uw dossier kent",
  "Transparante kosten: u weet vooraf waar u aan toe bent",
  "Regelmatige updates over de voortgang",
  "Respectvolle communicatie richting uw patient",
  "Juridische slagkracht wanneer nodig",
];

export default function WerkwijzePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Van factuur tot <span className="text-[var(--color-primary)]">betaling</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Bij MediCollect houden wij het proces transparant, persoonlijk en
              overzichtelijk. In vijf heldere stappen werken wij aan het innen van
              uw openstaande facturen.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-px bg-[var(--color-border)]" />
                )}
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 z-10">
                  <s.icon className="w-6 h-6" />
                </div>
                {/* Content */}
                <div className="pt-1">
                  <div className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                    Stap {s.step}
                  </div>
                  <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
                    {s.title}
                  </h2>
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-6">
                Wat kunt u van ons verwachten?
              </h2>
              <ul className="space-y-4">
                {expectations.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span className="text-[var(--color-text)]">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Doorlooptijd</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                Het minnelijke traject duurt doorgaans vier tot zes weken. In veel
                gevallen is de factuur binnen deze periode voldaan. Mocht een
                juridisch traject noodzakelijk zijn, dan bespreken wij de verwachte
                doorlooptijd met u.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Factuur overdragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
            Klaar om uw openstaande facturen over te dragen?
          </h2>
          <p className="text-[var(--color-text-light)] mb-6">
            Neem contact op. Wij nemen het binnen 24 uur van u over.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Contact opnemen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
