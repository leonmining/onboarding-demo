import { Stethoscope } from "lucide-react";
import BranchePage from "@/components/BranchePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incasso voor huisartsen | Openstaande factuur?",
  description:
    "Openstaande facturen in uw huisartsenpraktijk? MediCollect lost het discreet en professioneel op. Speciaal voor de eerstelijnszorg.",
};

export default function HuisartsPage() {
  return (
    <BranchePage
      icon={Stethoscope}
      title="Incasso voor huisartsen"
      subtitle="Onze aanpak voor huisartsenpraktijken"
      heroText="Als huisarts staat u midden in de gemeenschap. Uw patienten kennen u, vertrouwen u en komen bij u terug. Dat maakt het extra lastig als een patient zijn of haar factuur niet betaalt."
      sections={[
        {
          heading: "De specifieke uitdagingen van de huisarts",
          text: "De huisartsenpraktijk kent unieke factoren die het innen van facturen bijzonder uitdagend maken: onverzekerden die wel zorg ontvangen, patienten die hun eigen risico niet kunnen betalen, POH-GGZ kosten die deels voor rekening van de patient komen, en niet-vergoede diensten zoals vaccinaties, keuringen en attesten.",
        },
        {
          heading: "Waarom het nabellen niet werkt",
          text: "Uw assistentes hebben het druk met het spreekuur, de telefoon, de herhaalrecepten en de triage. Het nabellen van wanbetalers komt er simpelweg niet van.\n\nBovendien voelt het voor uw team ongemakkelijk. De assistent die 's ochtends een patient vriendelijk te woord staat aan de balie, moet 's middags diezelfde persoon bellen over een onbetaalde rekening. Die dubbele rol wringt.",
        },
        {
          heading: "Uw reputatie is veilig bij MediCollect",
          text: "MediCollect neemt het volledige debiteurenbeheer van uw praktijk over, zodat u en uw team zich kunnen richten op de patientenzorg. Onze aanpak is afgestemd op de eerstelijnszorg: correct, respectvol en discreet.\n\nUw reputatie in de wijk is veilig bij ons. Indien nodig schakelen wij op naar juridische maatregelen, altijd in overleg met u.",
        },
        {
          heading: "Volledig debiteurenbeheer mogelijk",
          text: "Naast het incasseren van individuele facturen bieden wij ook volledig debiteurenbeheer aan. Dat betekent dat wij het gehele proces overnemen: van het versturen van de eerste factuur tot het incassotraject.\n\nDit is met name interessant voor grotere huisartsenpraktijken en gezondheidscentra waar het volume aan onbetaalde facturen substantieel is.",
        },
      ]}
      bullets={[
        "Correcte en respectvolle communicatie",
        "Kennis van vergoedingsstructuur eerstelijnszorg",
        "Discrete afhandeling, reputatie beschermd",
        "Juridische maatregelen mogelijk, altijd in overleg",
        "Regelmatige voortgangsrapportages",
      ]}
      faqs={[
        {
          question: "Hoe ga ik om met onverzekerde patienten?",
          answer:
            "Onverzekerde patienten vormen een specifieke categorie. U heeft als huisarts een zorgplicht, maar dat betekent niet dat u de kosten moet dragen. Wij hebben ervaring met het incasseren van facturen bij onverzekerden.",
        },
        {
          question: "Kan ik mijn volledige debiteurenbeheer uitbesteden?",
          answer:
            "Ja. Wij bieden volledig debiteurenbeheer aan, waarbij wij het gehele facturatie- en incassoproces overnemen. Neem contact op voor een maatwerkofferte.",
        },
        {
          question: "Wat als een patient klaagt over de incasso?",
          answer:
            "Onze communicatie is altijd correct en toetsbaar. Mocht een patient contact met u opnemen, dan kunt u verwijzen naar MediCollect. Wij handelen de klacht professioneel af.",
        },
        {
          question: "Is het juridisch toegestaan om patientgegevens te delen?",
          answer:
            "Ja. Voor het innen van een openstaande vordering mag u de noodzakelijke persoonsgegevens delen met een incassopartij. Dit valt onder de AVG-grondslag 'gerechtvaardigd belang'. Wij hebben een verwerkersovereenkomst beschikbaar.",
        },
        {
          question: "Hoe snel kan MediCollect starten?",
          answer:
            "Binnen een werkdag na ontvangst van uw dossier starten wij het traject op. Hoe sneller u een factuur aanlevert, hoe groter de kans op een succesvol resultaat.",
        },
      ]}
    />
  );
}
