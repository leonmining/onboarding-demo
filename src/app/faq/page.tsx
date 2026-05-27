import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veelgestelde vragen | MediCollect incasso zorg",
  description:
    "Veelgestelde vragen over incasso in de medische sector. Wat kost het? Hoe werkt het? Is het juridisch verantwoord? MediCollect geeft antwoord.",
};

const faqCategories = [
  {
    title: "Over MediCollect",
    faqs: [
      {
        q: "Wat is MediCollect?",
        a: "MediCollect is een incassodienst die zich uitsluitend richt op de medische sector. Wij helpen zorgverleners, van tandartsen tot psychologen, bij het innen van openstaande facturen. MediCollect is een handelsnaam van Havenstad Gerechtsdeurwaarders in Amsterdam.",
      },
      {
        q: "Waarom een apart incassobureau voor de zorg?",
        a: "De medische sector vraagt om een specifieke aanpak. Uw patienten zijn anders dan de klanten van een webshop. Wij begrijpen de gevoeligheden, kennen de vergoedingsstructuren en communiceren op een manier die past bij uw praktijk.",
      },
      {
        q: "Is MediCollect een erkend incassobureau?",
        a: "Ja. MediCollect is een handelsnaam van Havenstad Gerechtsdeurwaarders (Iustum B.V.), ingeschreven bij de Kamer van Koophandel onder nummer 74583840. Als gerechtsdeurwaarderskantoor zijn wij gebonden aan strenge beroeps- en gedragsregels.",
      },
    ],
  },
  {
    title: "Kosten en tarieven",
    faqs: [
      {
        q: "Wat kost het om MediCollect in te schakelen?",
        a: "Wij werken met een transparant tarievenmodel. De exacte kosten zijn afhankelijk van het type en de omvang van de vordering. Neem contact op voor een vrijblijvende offerte. Er zijn geen opstartkosten of verborgen toeslagen.",
      },
      {
        q: "Zijn er kosten als het niet lukt om de factuur te innen?",
        a: "Dit hangt af van het gekozen tarievenmodel. Wij bespreken vooraf alle scenario's met u, zodat u precies weet waar u aan toe bent. Transparantie is een van onze kernwaarden.",
      },
      {
        q: "Wie betaalt de incassokosten: ik of de debiteur?",
        a: "De incassokosten komen in principe voor rekening van de debiteur. Op basis van de Wet Incassokosten (WIK) mogen deze kosten aan de debiteur worden doorberekend, mits aan de wettelijke voorwaarden is voldaan.",
      },
    ],
  },
  {
    title: "Privacy en wetgeving",
    faqs: [
      {
        q: "Mag ik patientgegevens delen met een incassobureau?",
        a: "Ja. Voor het innen van een openstaande vordering mag u de noodzakelijke NAW-gegevens en factuurinformatie delen. Dit valt onder de AVG-grondslag 'gerechtvaardigd belang'. U deelt uiteraard geen behandelinhoudelijke of medische informatie. Wij hebben een verwerkersovereenkomst beschikbaar.",
      },
      {
        q: "Hoe gaat MediCollect om met persoonsgegevens?",
        a: "Wij verwerken alle persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG). Gegevens worden uitsluitend gebruikt voor het incassodoel en worden niet gedeeld met derden, tenzij dit noodzakelijk is voor het juridische traject.",
      },
      {
        q: "Wat als een patient een klacht indient over de incasso?",
        a: "Wij nemen klachten serieus en hebben een interne klachtenprocedure. Daarnaast is Havenstad Gerechtsdeurwaarders aangesloten bij de Koninklijke Beroepsorganisatie van Gerechtsdeurwaarders (KBvG), waar externe klachten kunnen worden ingediend.",
      },
    ],
  },
  {
    title: "Het incassoproces",
    faqs: [
      {
        q: "Hoe lang duurt het incassoproces?",
        a: "Het minnelijke traject duurt doorgaans vier tot zes weken. Lukt het niet om er minnelijk uit te komen, dan bespreken wij de opties voor een juridisch traject. De doorlooptijd daarvan is afhankelijk van de specifieke situatie.",
      },
      {
        q: "Kan de debiteur een betalingsregeling treffen?",
        a: "Ja. Wij treffen regelmatig betalingsregelingen met debiteuren. Deze worden altijd in overleg met u vastgesteld, zodat u de controle behoudt. Wij monitoren de naleving en schakelen op als afspraken niet worden nagekomen.",
      },
      {
        q: "Wat als de debiteur niet reageert op het minnelijke traject?",
        a: "Dan bespreken wij met u de opties voor juridische stappen. Als gerechtsdeurwaarderskantoor beschikken wij over de bevoegdheid om een dagvaarding uit te brengen, een vonnis te verkrijgen en zo nodig beslag te leggen. Dit doen wij altijd in overleg met u.",
      },
      {
        q: "Kan ik ook oude facturen aanleveren?",
        a: "Ja, zolang de factuur niet is verjaard. De verjaringstermijn voor facturen aan consumenten bedraagt in de regel twee jaar na de oorspronkelijke vervaldatum. Wij adviseren u om facturen zo snel mogelijk aan te leveren.",
      },
      {
        q: "Komt mijn patientrelatie in gevaar?",
        a: "Onze aanpak is er juist op gericht om uw patientrelatie te beschermen. Wij communiceren correct, respectvol en professioneel. In veel gevallen waarderen patienten het dat het proces helder en zakelijk verloopt via een externe partij.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Veelgestelde vragen</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Heeft u vragen over incasso in de medische sector? Hieronder vindt u
              antwoorden op de meest gestelde vragen. Staat uw vraag er niet bij?
              Neem gerust contact met ons op.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.title}>
                <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6">
                  {cat.title}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)] overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-[var(--color-secondary)] hover:bg-gray-50 transition-colors">
                        {faq.q}
                        <span className="text-[var(--color-primary)] text-xl group-open:rotate-45 transition-transform ml-4 shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-5 text-[var(--color-text-light)] leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
            Staat uw vraag er niet bij?
          </h2>
          <p className="text-[var(--color-text-light)] mb-6">
            Neem contact met ons op. Wij beantwoorden uw vraag graag persoonlijk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Contact opnemen
          </Link>
        </div>
      </section>
    </>
  );
}
