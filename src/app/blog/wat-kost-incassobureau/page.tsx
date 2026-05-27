import Link from "next/link";
import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wat kost een incassobureau? Tarieven en modellen uitgelegd",
  description:
    "Wat betaalt u voor een incassobureau? MediCollect legt de verschillende tariefmodellen uit, speciaal voor zorgverleners.",
};

export default function BlogPost2() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar kennisbank
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Wat kost een incassobureau? Tarieven uitgelegd voor zorgverleners
          </h1>
          <p className="text-gray-300">Gepubliceerd op 8 januari 2025</p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8">
              U overweegt om uw openstaande facturen uit handen te geven aan een
              incassobureau, maar u wilt eerst weten wat het kost. Een logische
              vraag. In dit artikel zetten wij de meest voorkomende
              tariefstructuren voor u op een rij.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              Het provisiemodel: betalen bij succes
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Bij het provisiemodel betaalt u een percentage van het geinde bedrag.
              Dit percentage varieert doorgaans tussen de 10% en 25%, afhankelijk
              van de hoogte van de vordering en het stadium waarin de factuur wordt
              aangeleverd. Het voordeel: u betaalt alleen als er daadwerkelijk geld
              binnenkomt. Het nadeel: bij kleine bedragen kan het percentage
              relatief hoog uitvallen.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              Het abonnementsmodel: vast bedrag per maand
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Sommige incassodiensten werken met een vast maandelijks tarief. Dit
              model is met name interessant voor praktijken met een structureel
              hoog volume aan openstaande facturen. Het voordeel is
              voorspelbaarheid; het nadeel is dat u betaalt ongeacht het resultaat.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              Incassokosten voor de debiteur
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Op basis van de Wet Incassokosten (WIK) mogen incassokosten aan de
              debiteur worden doorberekend, mits u een correcte aanmaning heeft
              gestuurd met een betalingstermijn van minimaal 14 dagen. Dit
              betekent dat de kosten in veel gevallen niet of slechts gedeeltelijk
              voor uw rekening komen.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              Waar moet u op letten?
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Transparantie: weet u precies wat u betaalt en wanneer?",
                "Branchekennis: begrijpt het bureau de medische sector?",
                "Communicatiestijl: past de toon bij uw praktijk?",
                "Juridische mogelijkheden: kan het bureau opschalen naar een gerechtelijk traject?",
                "Persoonlijk contact: heeft u een vast aanspreekpunt?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                  <span className="text-[var(--color-text-light)]">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                Wat kost MediCollect?
              </h3>
              <p className="text-[var(--color-text-light)] mb-4">
                MediCollect werkt met een transparant tarievenmodel afgestemd op de
                medische sector. Geen opstartkosten, geen verborgen toeslagen.
                Benieuwd naar de tarieven voor uw situatie?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Vraag een vrijblijvende offerte aan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
