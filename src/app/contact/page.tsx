import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met MediCollect over incasso voor uw praktijk. Vul het contactformulier in of bel ons direct. Wij reageren binnen een werkdag.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
