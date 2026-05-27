import { Activity } from "lucide-react";
import BranchePage from "@/components/BranchePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incasso voor fysiotherapeuten | Factuur niet betaald?",
  description:
    "Onbetaalde facturen in uw fysiotherapiepraktijk? MediCollect neemt het incassoproces over. Persoonlijk, respectvol en resultaatgericht.",
};

export default function FysiotherapeutPage() {
  return (
    <BranchePage
      icon={Activity}
      title="Incasso voor fysiotherapeuten"
      subtitle="Onze aanpak voor fysiotherapeuten"
      heroText="Uw patient is aan het herstellen. De behandelreeks loopt, de vooruitgang is zichtbaar. Maar halverwege het traject stopt de betaling. Of erger: de patient verschijnt niet meer op afspraken en de openstaande factuur blijft onbetaald."
      sections={[
        {
          heading: "De financiele druk op fysiotherapiepraktijken",
          text: "Binnen de fysiotherapie spelen specifieke factoren mee die het innen van facturen extra uitdagend maken. Behandelreeksen worden gedeeltelijk vergoed vanuit de basisverzekering, maar het aantal vergoede behandelingen is beperkt. Patienten realiseren zich vaak pas halverwege het traject dat zij een eigen bijdrage moeten betalen.\n\nAanvullende verzekeringen dekken niet altijd het volledige aantal behandelingen. En uw no-show beleid is lastig te handhaven als u de patient ook therapeutisch begeleidt.",
        },
        {
          heading: "Kleine bedragen, grote impact",
          text: "Het gaat bij fysiotherapie vaak om facturen van \u20AC 30 tot \u20AC 60 per behandeling. Afzonderlijk lijken dat overzichtelijke bedragen. Maar een patient die zes behandelingen niet betaalt, kost u al \u20AC 180 tot \u20AC 360. Vermenigvuldig dat met tien of twintig patienten per jaar, en u loopt al snel \u20AC 2.000 tot \u20AC 7.000 mis.\n\nVeel fysiotherapeuten werken bovendien met een klein team. Er is geen aparte administratieve kracht die het debiteurenbeheer op zich neemt.",
        },
        {
          heading: "MediCollect begrijpt uw praktijk",
          text: "Wij kennen de fysiotherapiebranche. Wij weten hoe behandeltrajecten zijn opgebouwd, begrijpen het verschil tussen directe toegankelijkheid en verwijzing, en kennen de vergoedingsstructuur van de belangrijkste zorgverzekeraars.\n\nDie kennis zetten wij in om uw openstaande facturen effectief te innen, zonder dat dit ten koste gaat van uw reputatie.",
        },
        {
          heading: "Meer tijd voor uw patienten",
          text: "Door uw debiteurenbeheer aan MediCollect over te laten, wint u niet alleen geld terug, u wint ook tijd. Tijd die u kunt besteden aan uw patienten, aan het bijhouden van vakliteratuur, aan het verbeteren van uw praktijk.\n\nHet aanleveren van een factuur kost u niet meer dan vijf minuten. Binnen 24 uur nemen wij het dossier over.",
        },
      ]}
      bullets={[
        "Respectvolle communicatie passend bij de therapeutische setting",
        "Kennis van vergoedingsstructuren en aanvullende verzekeringen",
        "Ervaring met no-show facturen en gedeeltelijk betaalde trajecten",
        "Ondersteuning bij het opstellen van waterdichte algemene voorwaarden",
        "Persoonlijk contact via een vaste contactpersoon",
      ]}
      faqs={[
        {
          question: "Kan ik ook no-show facturen laten incasseren?",
          answer:
            "Ja, mits u een helder no-show beleid hanteert dat uw patienten vooraf kennen en waarmee zij akkoord zijn gegaan. Wij adviseren u graag over het opstellen van waterdichte algemene voorwaarden.",
        },
        {
          question: "Vanaf welk bedrag kan ik facturen aanleveren?",
          answer:
            "Er is geen minimumbedrag. Ook kleinere facturen van \u20AC 30 of \u20AC 50 kunt u bij ons aanmelden. Wij adviseren u wel over de verhouding tussen kosten en het te verwachten resultaat.",
        },
        {
          question: "Kan MediCollect mij helpen met mijn algemene voorwaarden?",
          answer:
            "Ja. Wij zien regelmatig dat fysiotherapeuten geen of onvolledige algemene voorwaarden hanteren. Wij adviseren u graag over de essentiele bepalingen die uw voorwaarden moeten bevatten.",
        },
        {
          question: "Wat als de patient zegt dat de verzekering moet betalen?",
          answer:
            "In werkelijkheid is de patient zelf verantwoordelijk voor betaling, ook als de vergoeding door de verzekeraar vertraagd is. Wij communiceren dit helder richting de debiteur.",
        },
        {
          question: "Hoe snel zien jullie resultaat?",
          answer:
            "In het minnelijke traject zien wij doorgaans binnen vier tot zes weken resultaat. Bij kleinere bedragen verloopt het vaak sneller.",
        },
      ]}
    />
  );
}
