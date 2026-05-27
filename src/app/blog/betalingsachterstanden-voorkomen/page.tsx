import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 tips om betalingsachterstanden in uw praktijk te voorkomen",
  description:
    "Voorkom onbetaalde facturen in uw zorgpraktijk. MediCollect deelt 5 praktische tips om betalingsachterstanden te verminderen.",
};

export default function BlogPost1() {
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
            5 tips om betalingsachterstanden in uw praktijk te voorkomen
          </h1>
          <p className="text-gray-300">Gepubliceerd op 15 januari 2025</p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8">
              Onbetaalde facturen zijn een van de grootste ergernissen voor
              zorgverleners. Ze kosten u geld, tijd en energie, en ze zijn deels te
              voorkomen. Hieronder vijf concrete maatregelen die u vandaag nog kunt
              doorvoeren.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              1. Communiceer kosten vooraf
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Veel betalingsproblemen ontstaan doordat de patient niet wist wat de
              behandeling zou kosten. Voorkom verrassingen door vooraf duidelijk te
              communiceren wat de verwachte eigen bijdrage is. Dit kan mondeling,
              maar leg het ook schriftelijk vast, bijvoorbeeld in een
              behandelovereenkomst of een prijsindicatie per e-mail.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              2. Factureer direct na de behandeling
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Hoe langer u wacht met factureren, hoe kleiner de kans op tijdige
              betaling. Een factuur die twee weken na de behandeling arriveert,
              voelt minder urgent dan een factuur die de patient dezelfde dag
              ontvangt. Automatiseer uw facturatieproces waar mogelijk.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              3. Bied meerdere betaalmogelijkheden
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Door meerdere betaalopties aan te bieden, zoals iDEAL, PIN aan de
              balie, een QR-code op de factuur of automatische incasso, verlaagt u
              de drempel om te betalen. Hoe makkelijker u het maakt, hoe sneller
              het geld binnen is.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              4. Stel waterdichte algemene voorwaarden op
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Uw algemene voorwaarden zijn de juridische basis voor het innen van
              onbetaalde facturen. Zorg dat ze actueel, helder en compleet zijn.
              Vermeld in ieder geval uw betalingstermijn, no-show beleid,
              incassokosten bij wanbetaling en de toepasselijkheid van de Wet
              Incassokosten (WIK). Laat uw voorwaarden bij voorkeur opstellen of
              toetsen door een jurist.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
              5. Volg een strak herinneringsproces
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Wacht niet te lang met het sturen van herinneringen. Een effectief
              schema: na 14 dagen de eerste herinnering, na 28 dagen de tweede
              herinnering met vermelding van incassokosten, en na 42 dagen
              overdracht aan een incassobureau. Door dit schema consequent te
              volgen, laat u zien dat u betalingsverplichtingen serieus neemt.
            </p>

            {/* CTA */}
            <div className="bg-[var(--color-accent)] rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                Toch een wanbetaler?
              </h3>
              <p className="text-[var(--color-text-light)] mb-4">
                Ondanks alle preventieve maatregelen zult u af en toe te maken
                krijgen met een patient die niet betaalt. MediCollect neemt het
                volledige proces van u over, professioneel, respectvol en
                resultaatgericht.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
