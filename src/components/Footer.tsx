import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L3 7v6c0 5.25 3.81 10.13 9 11.25C17.19 23.13 21 18.25 21 13V7l-9-5z" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-[var(--color-primary)]">Medi</span>
                <span className="text-lg font-bold text-white">Collect</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Incasso voor de medische sector. Onderdeel van Havenstad Gerechtsdeurwaarders.
            </p>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Branches</h3>
            <ul className="space-y-2.5">
              <li><Link href="/branche/tandarts" className="text-sm text-gray-300 hover:text-white transition-colors">Tandarts</Link></li>
              <li><Link href="/branche/fysiotherapeut" className="text-sm text-gray-300 hover:text-white transition-colors">Fysiotherapeut</Link></li>
              <li><Link href="/branche/huisarts" className="text-sm text-gray-300 hover:text-white transition-colors">Huisarts</Link></li>
              <li><Link href="/branche/psycholoog" className="text-sm text-gray-300 hover:text-white transition-colors">Psycholoog</Link></li>
              <li><Link href="/branche/orthodontist" className="text-sm text-gray-300 hover:text-white transition-colors">Orthodontist</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigatie</h3>
            <ul className="space-y-2.5">
              <li><Link href="/over" className="text-sm text-gray-300 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/werkwijze" className="text-sm text-gray-300 hover:text-white transition-colors">Werkwijze</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">Veelgestelde vragen</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[var(--color-primary)]" />
                <span className="text-sm text-gray-300">020 - 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[var(--color-primary)]" />
                <span className="text-sm text-gray-300">info@medicollect.nl</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-primary)]" />
                <span className="text-sm text-gray-300">Corsicaweg 10<br />1044 AB Amsterdam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} MediCollect. Een handelsnaam van Havenstad Gerechtsdeurwaarders (Iustum B.V.). KvK 74583840.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacybeleid</Link>
            <Link href="/voorwaarden" className="text-xs text-gray-400 hover:text-white transition-colors">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
