import Link from "next/link";
import { Shield, Users, Scale, Target, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over MediCollect | Incassobureau voor zorgverleners",
  description:
    "MediCollect is het incassobureau dat begrijpt hoe de zorg werkt. Onderdeel van Havenstad Gerechtsdeurwaarders, jarenlange ervaring, specifiek voor uw praktijk.",
};

export default function OverPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Het incassobureau dat de <span className="text-[var(--color-primary)]">zorg begrijpt</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Als zorgverlener besteedt u uw dagen aan het welzijn van uw patienten.
              Het laatste waar u zich mee bezig wilt houden, is het achterna zitten
              van onbetaalde rekeningen. MediCollect is opgericht om precies dit
              probleem op te lossen.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
                Onderdeel van Havenstad Gerechtsdeurwaarders
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                MediCollect is een handelsnaam van Havenstad Gerechtsdeurwaarders,
                gevestigd in Amsterdam. Met jarenlange ervaring in het incasso- en
                deurwaardersvak beschikken wij over de juridische kennis en de
                infrastructuur om uw openstaande facturen effectief te innen.
              </p>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                Het verschil? Waar Havenstad Gerechtsdeurwaarders werkt voor
                uiteenlopende sectoren, richt MediCollect zich uitsluitend op de
                medische sector. Dat maakt ons uw specialist.
              </p>

              <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-4 mt-10">
                Waarom een apart merk voor de zorg?
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Wij hebben MediCollect in het leven geroepen omdat we merkten dat
                de drempel voor zorgverleners om contact op te nemen met een
                deurwaarder bijzonder hoog is. De associatie met rechtszaken en
                beslaglegging schrikt af, terwijl het incassoproces in de meeste
                gevallen veel laagdrempeliger verloopt dan u denkt.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "Herkenbaar aanspreekpunt",
                  desc: "Wij kennen uw branche en spreken uw taal. Of u nu tandarts, fysiotherapeut of psycholoog bent.",
                },
                {
                  icon: Target,
                  title: "Communicatie op maat",
                  desc: "Onze communicatie sluit aan bij de toon van uw praktijk. Professioneel, respectvol en correct.",
                },
                {
                  icon: Scale,
                  title: "Juridische slagkracht",
                  desc: "De volledige juridische slagkracht van een gerechtsdeurwaarderskantoor wanneer dat nodig is.",
                },
                {
                  icon: Shield,
                  title: "Vast contactpersoon",
                  desc: "U heeft altijd een vaste contactpersoon die uw dossiers kent en u persoonlijk te woord staat.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-[var(--color-bg-alt)] rounded-xl p-6 border border-[var(--color-border)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-secondary)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-light)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-6">Onze missie</h2>
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8">
            Wij geloven dat u recht heeft op betaling voor de zorg die u levert.
            Tegelijkertijd geloven wij dat het innen van openstaande facturen niet
            ten koste hoeft te gaan van de relatie met uw patient. Die balans, dat
            is waar MediCollect voor staat.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Neem contact op voor een vrijblijvend gesprek
          </Link>
        </div>
      </section>
    </>
  );
}
