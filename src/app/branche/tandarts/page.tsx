import { SmilePlus } from "lucide-react";
import BranchePage from "@/components/BranchePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incasso voor tandartsen | Onbetaalde rekening?",
  description:
    "Patient betaalt tandartsrekening niet? MediCollect is gespecialiseerd in incasso voor tandartspraktijken. Respectvol, effectief en zonder gedoe.",
};

export default function TandartsPage() {
  return (
    <BranchePage
      icon={SmilePlus}
      title="Incasso voor tandartsen"
      subtitle="Onze aanpak voor tandartspraktijken"
      heroText="U heeft de behandeling zorgvuldig uitgevoerd. Een vulling geplaatst, een kroon gezet of een wortelkanaalbehandeling afgerond. Uw patient is tevreden naar huis gegaan. Maar de factuur? Die blijft onbetaald."
      sections={[
        {
          heading: "Waarom betalen patienten niet?",
          text: "Sommige patienten realiseren zich pas na de behandeling dat hun verzekering de kosten niet volledig dekt. Anderen hebben financiele problemen en schuiven de rekening voor zich uit. En een kleinere groep betaalt bewust niet, in de hoop dat de factuur 'vanzelf verdwijnt'.\n\nWat al deze situaties gemeen hebben: ze kosten u geld, tijd en energie. Uw assistentes bellen na, sturen herinneringen, maar het levert weinig op.",
        },
        {
          heading: "De impact op uw praktijk",
          text: "Onbetaalde facturen raken niet alleen uw omzet. Ze beinvloeden uw cashflow, uw werkplezier en uiteindelijk ook de kwaliteit van de zorg die u kunt bieden. Elke euro die u misloopt, is een euro die u niet kunt investeren in nieuwe apparatuur, nascholing of extra personeel.\n\nDaarnaast is het emotioneel belastend. U wilt uw patienten aanspreken op hun betalingsverplichting, maar tegelijkertijd wilt u de relatie niet beschadigen.",
        },
        {
          heading: "MediCollect: incasso op maat voor tandartspraktijken",
          text: "MediCollect begrijpt de dynamiek van een tandartspraktijk. Wij weten dat uw patienten terugkomen voor controles, dat u een vertrouwensrelatie heeft opgebouwd, en dat een agressieve incassostrategie daar niet bij past.\n\nWij hanteren een aanpak die specifiek is ontwikkeld voor de tandheelkunde, met correcte en vriendelijke communicatie richting uw patient, zodat de relatie intact blijft.",
        },
        {
          heading: "Resultaat zonder risico",
          text: "Voordat wij aan de slag gaan, bespreken wij de kosten en de verwachte slagingskans met u. Zo weet u precies waar u aan toe bent. Geen verborgen kosten, geen verrassingen achteraf. En in veel gevallen is de factuur al binnen enkele weken voldaan, zonder dat er juridische stappen nodig zijn.",
        },
      ]}
      bullets={[
        "Correcte, vriendelijke communicatie richting uw patient",
        "Kennis van tandheelkundige facturering",
        "Ervaring met niet-betaalde kronen, vullingen en techniekkosten",
        "Inzicht in verzekeringspolissen en dekkingen",
        "Van minnelijke aanmaning tot juridische afhandeling",
      ]}
      faqs={[
        {
          question: "Welke soort facturen kan ik aanleveren?",
          answer:
            "U kunt alle onbetaalde facturen aanleveren: eigen bijdragen, onverzekerde behandelingen zoals cosmetische tandheelkunde, techniekkosten voor kronen en bruggen, en no-show facturen. Wij beoordelen per dossier de beste aanpak.",
        },
        {
          question: "Wat als mijn patient een betalingsregeling wil?",
          answer:
            "Wij treffen regelmatig betalingsregelingen met debiteuren. Deze worden altijd in overleg met u vastgesteld, zodat u de controle behoudt. Wij monitoren de naleving en schakelen op als afspraken niet worden nagekomen.",
        },
        {
          question: "Merkt mijn patient dat het via een deurwaarder loopt?",
          answer:
            "In het minnelijke traject communiceren wij namens MediCollect, niet als deurwaarder. De toon is professioneel en vriendelijk. Pas als juridische stappen noodzakelijk zijn, wordt de rol van Havenstad Gerechtsdeurwaarders zichtbaar.",
        },
        {
          question: "Kan ik ook oude facturen aanleveren?",
          answer:
            "Ja, zolang de factuur niet is verjaard. De verjaringstermijn voor facturen aan consumenten bedraagt in de regel twee jaar na de oorspronkelijke vervaldatum. Wij adviseren u om facturen zo snel mogelijk aan te leveren.",
        },
        {
          question: "Hoeveel kost het om MediCollect in te schakelen?",
          answer:
            "Wij werken met een transparant tarievenmodel dat afhangt van het type en de omvang van de vordering. Neem contact op voor een vrijblijvende offerte. Er zijn geen opstartkosten of verborgen toeslagen.",
        },
      ]}
    />
  );
}
