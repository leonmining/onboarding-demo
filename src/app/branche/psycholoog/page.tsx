import { Brain } from "lucide-react";
import BranchePage from "@/components/BranchePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incasso voor psychologen | No-show factuur niet betaald?",
  description:
    "Onbetaalde no-show facturen of openstaande rekeningen? MediCollect biedt incasso speciaal voor psychologen en GGZ-praktijken.",
};

export default function PsycholoogPage() {
  return (
    <BranchePage
      icon={Brain}
      title="Incasso voor psychologen"
      subtitle="Onze aanpak voor GGZ-praktijken"
      heroText="De therapeutische relatie is het fundament van uw werk. U investeert tijd, aandacht en expertise in het welzijn van uw clienten. Maar wat als een client stopt met betalen? Of herhaaldelijk niet verschijnt op afspraken?"
      sections={[
        {
          heading: "No-shows: het grootste probleem",
          text: "No-shows zijn binnen de GGZ een hardnekkig probleem. Een client die niet verschijnt, kost u niet alleen de sessie-inkomsten, het kost u ook een tijdslot dat u niet meer kunt vullen. Bij een gemiddeld tarief van \u20AC 100 tot \u20AC 130 per sessie lopen de kosten snel op.\n\nVeel GGZ-praktijken hanteren een no-show tarief, maar het daadwerkelijk innen ervan is een ander verhaal. Clienten betwisten de factuur, reageren niet op herinneringen, of zijn simpelweg niet meer bereikbaar.",
        },
        {
          heading: "Lange trajecten, oplopende achterstanden",
          text: "GGZ-trajecten duren weken of maanden. In die tijd kan een betalingsachterstand gestaag oplopen. De client betaalt de eerste drie sessies, daarna wordt het stil. Na tien sessies staat er \u20AC 700 tot \u20AC 1.000 open.\n\nDaarnaast speelt de eigen bijdrage GGZ een rol. Clienten weten niet altijd dat er een eigen bijdrage geldt, of zij kunnen het bedrag niet opbrengen.",
        },
        {
          heading: "Scheiding tussen zorg en financien",
          text: "Een van de grootste voordelen van het uitbesteden van uw incasso is de scheiding tussen de therapeutische relatie en de financiele afhandeling. U kunt zich volledig richten op de zorgverlening, terwijl MediCollect de zakelijke kant afhandelt.\n\nDat is gezonder voor u, voor uw client en voor de therapeutische relatie.",
        },
        {
          heading: "Onverzekerde zorg groeit",
          text: "Steeds meer psychologen bieden ook onverzekerde zorg aan: relatietherapie, coaching, burnoutbegeleiding. Deze behandelingen worden niet vergoed door de zorgverzekeraar, wat betekent dat de volledige kosten voor rekening van de client komen.\n\nHet risico op onbetaalde facturen is hier extra groot. MediCollect heeft ervaring met het incasseren van facturen voor zowel verzekerde als onverzekerde GGZ-zorg.",
        },
      ]}
      bullets={[
        "U hoeft niet zelf het gesprek over geld te voeren",
        "De therapeutische relatie wordt niet belast",
        "Uw no-show beleid wordt consequent gehandhaafd",
        "Correcte benadering van clienten met financiele problemen",
        "Regelmatige updates over de voortgang",
      ]}
      faqs={[
        {
          question: "Hoe gaan jullie om met kwetsbare clienten?",
          answer:
            "Wij zijn ons zeer bewust van de kwetsbare positie van sommige GGZ-clienten. Onze communicatie is daarop aangepast: zakelijk maar empathisch, helder maar nooit intimiderend. In uitzonderlijke gevallen overleggen wij met u over de beste benadering.",
        },
        {
          question: "Mag ik clientgegevens delen met een incassobureau?",
          answer:
            "Ja, voor het innen van een openstaande vordering mag u de noodzakelijke NAW-gegevens en factuurinformatie delen. Dit valt onder de AVG-grondslag 'gerechtvaardigd belang'. U deelt uiteraard geen behandelinhoudelijke informatie.",
        },
        {
          question: "Wat als de client de no-show factuur betwist?",
          answer:
            "Wij toetsen of uw no-show beleid correct is gecommuniceerd en of de client hiermee heeft ingestemd. Is dat het geval, dan staat u juridisch sterk en kunnen wij de factuur effectief incasseren.",
        },
        {
          question: "Kan ik ook facturen voor onverzekerde zorg aanleveren?",
          answer:
            "Ja. Facturen voor relatietherapie, coaching, burnoutbegeleiding en andere niet-vergoede behandelingen kunt u bij ons aanmelden.",
        },
        {
          question: "Wat kost het om MediCollect in te schakelen?",
          answer:
            "Onze tarieven zijn afhankelijk van het type en de omvang van de vordering. Neem contact op voor een vrijblijvende offerte. Wij zijn transparant over onze kosten.",
        },
      ]}
    />
  );
}
