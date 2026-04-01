import { useState, type FormEvent } from "react";

// --- Form veri modeli ---
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Form hata modeli ---
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// --- Baslangic degerleri ---
const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// --- Dogrulama fonksiyonu ---
function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {};

  if (!data.name.trim()) {
    newErrors.name = "Ad soyad zorunludur.";
  } else if (data.name.trim().length < 2) {
    newErrors.name = "Ad soyad en az 2 karakter olmalidir.";
  }

  if (!data.email.trim()) {
    newErrors.email = "E-posta zorunludur.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "Gecerli bir e-posta adresi giriniz.";
  }

  if (!data.subject.trim()) {
    newErrors.subject = "Konu zorunludur.";
  }

  if (!data.message.trim()) {
    newErrors.message = "Mesaj zorunludur.";
  } else if (data.message.trim().length < 10) {
    newErrors.message = "Mesaj en az 10 karakter olmalidir.";
  }

  return newErrors;
}

export default function ContactForm() {
  // Form state
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Tek alan guncelleme ---
  function handleChange(
    field: keyof ContactFormData,
    value: string
  ) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Hata mesajini temizle
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  // --- Form gonderme ---
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Dogrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simule edilmis API cagirisi
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gonderim basarisiz. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Basari durumu
  if (submitSuccess) {
    return (
      <div className="alert alert-success">
        <p>Mesajiniz basariyla gonderildi!</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="btn btn-outline"
          style={{ marginTop: "1rem" }}
        >
          Yeni mesaj gonder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <fieldset>
        <legend>Iletisim Formu</legend>

        {/* Ad Soyad */}
        <div className="form-group">
          <label htmlFor="contact-name">Ad Soyad:</label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "input-error" : ""}
            placeholder="Adiniz Soyadiniz"
            aria-describedby="contact-name-error"
          />
          {errors.name && (
            <small id="contact-name-error" className="error-msg" role="alert">
              {errors.name}
            </small>
          )}
        </div>

        {/* E-posta */}
        <div className="form-group">
          <label htmlFor="contact-email">E-posta:</label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "input-error" : ""}
            placeholder="ornek@mail.com"
            aria-describedby="contact-email-error"
          />
          {errors.email && (
            <small id="contact-email-error" className="error-msg" role="alert">
              {errors.email}
            </small>
          )}
        </div>

        {/* Konu */}
        <div className="form-group">
          <label htmlFor="contact-subject">Konu:</label>
          <select
            id="contact-subject"
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className={errors.subject ? "input-error" : ""}
            aria-describedby="contact-subject-error"
          >
            <option value="">Konu seciniz...</option>
            <option value="genel">Genel</option>
            <option value="destek">Teknik Destek</option>
            <option value="oneri">Oneri</option>
            <option value="isbirligi">Is Birligi</option>
          </select>
          {errors.subject && (
            <small id="contact-subject-error" className="error-msg" role="alert">
              {errors.subject}
            </small>
          )}
        </div>

        {/* Mesaj */}
        <div className="form-group">
          <label htmlFor="contact-message">Mesajiniz:</label>
          <textarea
            id="contact-message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={errors.message ? "input-error" : ""}
            placeholder="Mesajinizi yaziniz..."
            aria-describedby="contact-message-error"
          />
          {errors.message && (
            <small id="contact-message-error" className="error-msg" role="alert">
              {errors.message}
            </small>
          )}
        </div>

        {/* Gonder butonu */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={isSubmitting ? "btn-submitting" : ""}
        >
          {isSubmitting ? "Gonderiliyor..." : "Gonder"}
        </button>
      </fieldset>
    </form>
  );
}
