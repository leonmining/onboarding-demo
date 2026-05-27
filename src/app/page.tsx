import Link from "next/link";
import {
  Shield,
  Phone,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Brain,
  SmilePlus,
  Activity,
  HeartPulse,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediCollect | Incasso voor de medische sector",
  description:
    "Openstaande facturen in uw praktijk? MediCollect neemt het incassoproces uit handen, professioneel, discreet en met respect voor uw patientrelatie.",
};

const branches = [
  {
    name: "Tandartsen",
    href: "/branche/tandarts",
    icon: SmilePlus,
    desc: "Eigen bijdragen, onverzekerde behandelingen en techniekkosten",
  },
  {
    name: "Fysiotherapeuten",
    href: "/branche/fysiotherapeut",
    icon: Activity,
    desc: "No-shows, niet-betaalde behandelreeksen en vergoedingsproblemen",
  },
  {
    name: "Huisartsen",
    href: "/branche/huisarts",
    icon: Stethoscope,
    desc: "Onverzekerden, eigen risico en POH-kosten",
  },
  {
    name: "Psychologen",
    href: "/branche/psycholoog",
    icon: Brain,
    desc: "No-show facturen, lange trajecten en eigen bijdrage GGZ",
  },
  {
    name: "Orthodontisten",
    href: "/branche/orthodontist",
    icon: HeartPulse,
    desc: "Hoge factuurbedragen, stilgevallen betalingsregelingen",
  },
];

const usps = [
  "Wij spreken de taal van uw branche",
  "Uw patientrelatie staat centraal",
  "Transparante kosten en volledige rapportage",
  "Persoonlijk contact met vaste contactpersoon",
  "Juridische slagkracht via Havenstad Gerechtsdeurwaarders",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4 text-[var(--color-primary)]" />
              Onderdeel van Havenstad Gerechtsdeurwaarders
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Openstaande facturen in uw praktijk?{" "}
              <span className="text-[var(--color-primary)]">MediCollect regelt het.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              U heeft uw patient de best mogelijke zorg gegeven. Maar de factuur
              blijft onbetaald. MediCollect neemt het incassoproces uit handen,
              professioneel, discreet en met respect voor uw patientrelatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Neem contact op
              </Link>
              <Link
                href="/werkwijze"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Bekijk onze werkwijze
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">3-8%</div>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                gemiddelde omzet die zorgpraktijken mislopen
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">5 min</div>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                om een factuur bij ons aan te melden
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">4-6 wk</div>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                gemiddelde doorlooptijd minnelijk traject
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-6">
                Incasso die past bij de zorg
              </h2>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8">
                MediCollect is speciaal opgezet voor de medische sector. Wij
                begrijpen dat uw praktijk anders is dan een webshop of
                telecombedrijf. Een patient die niet betaalt, is niet zomaar een
                debiteur. Dat vraagt om een andere aanpak.
              </p>
              <ul className="space-y-4">
                {usps.map((usp) => (
                  <li key={usp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span className="text-[var(--color-text)]">{usp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-4">
                Hoeveel omzet loopt u mis?
              </h3>
              <p className="text-[var(--color-text-light)] mb-6">
                De gemiddelde zorgpraktijk loopt jaarlijks tussen de 3% en 8% van
                de omzet mis door onbetaalde facturen. Bij een jaaromzet van
                &euro; 300.000 praat u over:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[var(--color-accent)] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    &euro; 9.000
                  </div>
                  <div className="text-xs text-[var(--color-text-light)] mt-1">
                    bij 3% verlies
                  </div>
                </div>
                <div className="bg-[var(--color-accent)] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    &euro; 24.000
                  </div>
                  <div className="text-xs text-[var(--color-text-light)] mt-1">
                    bij 8% verlies
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-light)]">
                Een professionele, correcte aanpak leidt in het overgrote deel
                van de gevallen tot betaling, vaak zelfs zonder juridische stappen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-4">
              Maatwerk per branche
            </h2>
            <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
              Elke branche heeft eigen uitdagingen. Daarom hebben wij voor
              iedere doelgroep een specifieke aanpak ontwikkeld.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="group bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <b.icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-2">
                  {b.name}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-4">
                  {b.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Meer informatie <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-secondary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hoe werkt het?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Het inschakelen van MediCollect is eenvoudig en kost u niet meer dan vijf minuten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Factuur aanmelden", desc: "Lever de openstaande factuur aan via telefoon, e-mail of ons portaal." },
              { step: "2", title: "Dossierbeoordeling", desc: "Wij bekijken de factuur en stellen een passende incassostrategie op." },
              { step: "3", title: "Minnelijk traject", desc: "Correcte benadering van de debiteur, vaak al binnen weken resultaat." },
              { step: "4", title: "Resultaat", desc: "U ontvangt het geinde bedrag. Juridische escalatie indien noodzakelijk." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/werkwijze"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--color-secondary)] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Bekijk de volledige werkwijze <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-4">
            Vrijblijvend kennismaken?
          </h2>
          <p className="text-lg text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
            De stap naar een incassobureau voelt groot. Daarom bieden wij u een
            vrijblijvend kennismakingsgesprek aan, zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Neem contact op
            </Link>
            <Link
              href="tel:0201234567"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[var(--color-secondary)] font-semibold rounded-lg border border-[var(--color-border)] hover:bg-gray-50 transition-colors"
            >
              Bel 020 - 123 4567
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
