import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Dev Agency",
  description: "Contactez Dev Agency pour votre projet de site web, application mobile ou stratégie digitale. Réponse sous 24h.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
