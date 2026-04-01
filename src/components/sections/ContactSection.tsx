import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="iletisim">
      <h2>Iletisim</h2>
      <p className="section-subtitle">
        Benimle iletisime gecmek icin asagidaki formu doldurun.
      </p>
      <ContactForm />
    </section>
  );
}
