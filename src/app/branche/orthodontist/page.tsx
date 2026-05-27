import { HeartPulse } from "lucide-react";
import BranchePage from "@/components/BranchePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incasso voor orthodontisten | Betalingsregeling stopt?",
  description:
    "Stilgevallen betalingsregelingen of onbetaalde orthodontierekeningen? MediCollect is gespecialiseerd in incasso voor orthodontiepraktijken.",
};

export default function OrthodontistPage() {
  return (
    <BranchePage
      icon={HeartPulse}
      title="Incasso voor orthodontisten"
      subtitle="Onze aanpak voor orthodontiepraktijken"
      heroText="Orthodontische behandelingen zijn intensief, langdurig en kostbaar. Bedragen van \u20AC 2.000 tot \u20AC 6.000 zijn geen uitzondering. Maar wat als de betalingsregeling stilvalt en de behandeling al is gestart?"
      sections={[
        {
          heading: "Waarom juist orthodontisten kwetsbaar zijn",
          text: "De orthodontiepraktijk is bijzonder kwetsbaar voor betalingsproblemen. Hoge factuurbedragen betekenen een groot risico per onbetaalde factuur. U levert de zorg voordat de volledige betaling binnen is. Veel behandelingen bij volwassenen worden niet of slechts gedeeltelijk vergoed.\n\nEen behandeling duurt 12 tot 36 maanden, en in die tijd kan de financiele situatie van de patient veranderen. Bij minderjarigen zijn de ouders betalingsplichtig, wat een extra communicatielaag toevoegt.",
        },
        {
          heading: "Het dilemma van de lopende behandeling",
          text: "De behandeling is vaak nog bezig als de betalingsproblemen beginnen. U kunt niet zomaar stoppen, dat zou schade kunnen toebrengen aan het gebit van de patient. Tegelijkertijd levert u elke maand zorg waarvoor u niet betaald wordt.\n\nHet gesprek over geld voeren tijdens een controleafspraak is ongemakkelijk, zeker als de patient een kind is en u met de ouders moet onderhandelen.",
        },
        {
          heading: "MediCollect: specialist in orthodontie-incasso",
          text: "MediCollect begrijpt de specifieke dynamiek van de orthodontiepraktijk. Wij weten dat u te maken heeft met hoge bedragen, lopende behandelingen en betalingsregelingen die stilvallen. Onze aanpak is daarop afgestemd.\n\nIn veel gevallen kunnen wij de betalingsregeling heractiveren en alsnog tot een oplossing komen.",
        },
        {
          heading: "Bescherm uw praktijkomzet",
          text: "Bij de bedragen die in de orthodontie spelen, heeft een onbetaalde factuur al een merkbare impact op uw omzet. Drie of vier wanbetalers per jaar en u loopt al gauw \u20AC 10.000 of meer mis.\n\nOns advies: schakel MediCollect in zodra een betalingsregeling twee termijnen achterloopt. Hoe langer u wacht, hoe lastiger het wordt om het bedrag te incasseren.",
        },
      ]}
      bullets={[
        "Ervaring met het heractiveren van stilgevallen betalingsregelingen",
        "Correcte communicatie richting ouders en volwassen patienten",
        "Kennis van de vergoedingsstructuur bij orthodontie",
        "Mogelijkheid om betalingsregelingen aan te passen",
        "Juridische escalatie wanneer nodig",
      ]}
      faqs={[
        {
          question: "Kan ik een factuur aanleveren terwijl de behandeling nog loopt?",
          answer:
            "Ja. Wij richten ons op de openstaande betalingstermijnen, niet op het stopzetten van de behandeling. De klinische beslissing blijft altijd bij u.",
        },
        {
          question: "Hoe communiceren jullie met ouders van minderjarige patienten?",
          answer:
            "Bij minderjarigen richten wij onze communicatie aan de wettelijk vertegenwoordiger, doorgaans de ouders. Onze toon is altijd correct en respectvol.",
        },
        {
          question: "Wat als de patient zegt dat de verzekering het zou vergoeden?",
          answer:
            "Wij controleren samen met u welk deel vergoed zou moeten zijn en benaderen de debiteur met de juiste informatie. De patient of ouder blijft zelf verantwoordelijk voor betaling.",
        },
        {
          question: "Kunnen jullie een betalingsregeling heractiveren?",
          answer:
            "Ja, dat is een van onze specialiteiten. In veel gevallen is de debiteur niet onwillig maar ongeorganiseerd. Een professionele benadering kan de regeling weer op gang brengen.",
        },
        {
          question: "Wat als de patient helemaal niet meer reageert?",
          answer:
            "Als het minnelijke traject geen resultaat oplevert, bespreken wij de opties voor juridische stappen. Als onderdeel van Havenstad Gerechtsdeurwaarders kunnen wij een gerechtelijke procedure starten.",
        },
      ]}
    />
  );
}
