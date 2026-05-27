"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.");
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Neem <span className="text-[var(--color-primary)]">contact</span> op
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Heeft u openstaande facturen in uw praktijk en wilt u weten wat
              MediCollect voor u kan betekenen? Wij staan graag voor u klaar en
              reageren binnen een werkdag.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6">
                Contactformulier
              </h2>
              <p className="text-[var(--color-text-light)] mb-8">
                Vul onderstaand formulier in en wij nemen zo snel mogelijk contact
                met u op. Heeft u een actuele factuur bij de hand? Dan kunnen wij u
                direct een eerste inschatting geven.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Praktijknaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      placeholder="Naam van uw praktijk"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    Branche
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition">
                    <option value="">Selecteer uw branche</option>
                    <option value="tandarts">Tandarts</option>
                    <option value="fysiotherapeut">Fysiotherapeut</option>
                    <option value="huisarts">Huisarts</option>
                    <option value="psycholoog">Psycholoog</option>
                    <option value="orthodontist">Orthodontist</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      placeholder="Uw e-mailadres"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Aantal openstaande facturen
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      placeholder="Bijv. 5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Geschat totaalbedrag
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      placeholder="Bijv. \u20AC 3.500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    Bericht
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none"
                    placeholder="Vertel ons kort over uw situatie..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Verstuur bericht
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-4">Bereikbaarheid</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
                      <div>
                        <div className="font-medium text-[var(--color-text)]">Telefoon</div>
                        <div className="text-sm text-[var(--color-text-light)]">020 - 123 4567</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
                      <div>
                        <div className="font-medium text-[var(--color-text)]">E-mail</div>
                        <div className="text-sm text-[var(--color-text-light)]">info@medicollect.nl</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
                      <div>
                        <div className="font-medium text-[var(--color-text)]">Bezoekadres</div>
                        <div className="text-sm text-[var(--color-text-light)]">
                          Corsicaweg 10<br />1044 AB Amsterdam
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
                      <div>
                        <div className="font-medium text-[var(--color-text)]">Openingstijden</div>
                        <div className="text-sm text-[var(--color-text-light)]">
                          Ma - Vr: 09:00 - 17:00
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-[var(--color-accent)] rounded-2xl p-6">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-2">
                    Liever eerst een vrijblijvend gesprek?
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] mb-4">
                    Wij begrijpen dat u misschien nog twijfelt. Bel ons voor een
                    vrijblijvend kennismakingsgesprek, zonder verplichtingen.
                  </p>
                  <a
                    href="tel:0201234567"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Bel direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
