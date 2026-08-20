import { useState } from "react";
import {
  ShieldCheck,
  Clock3,
  CalendarDays,
} from "lucide-react";

import { contactData } from "./contactData";

export default function ContactForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const fields = contactData.fields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // API integration later
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      onSuccess();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      {/* Header */}

      <div className="contact-form__header">

        <span className="contact-form__badge">
          Executive Coaching
        </span>

        <h2 className="contact-form__title">
          Schedule a Leadership Consultation
        </h2>

        <p className="contact-form__subtitle">
          Let's discuss your leadership challenges,
          organisational goals and how we can work
          together to create meaningful impact.
        </p>

      </div>

      {/* Grid */}

      <div className="contact-form__grid">

        <div className="contact-form__group">
          <label>{fields.name.label}</label>

          <input
            type="text"
            name="name"
            value={form.name}
            placeholder={fields.name.placeholder}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__group">
          <label>{fields.email.label}</label>

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder={fields.email.placeholder}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__group">
          <label>{fields.phone.label}</label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            placeholder={fields.phone.placeholder}
            onChange={handleChange}
          />
        </div>

        {/* <div className="contact-form__group">
          <label>{fields.organization.label}</label>

          <input
            type="text"
            name="organization"
            value={form.organization}
            placeholder={fields.organization.placeholder}
            onChange={handleChange}
          />
        </div> */}

        {/* <div className="contact-form__group">
          <label>{fields.designation.label}</label>

          <input
            type="text"
            name="designation"
            value={form.designation}
            placeholder={fields.designation.placeholder}
            onChange={handleChange}
          />
        </div> */}

        <div className="contact-form__group">
          <label>{fields.preferredDate.label}</label>

          <input
            type="date"
            name="preferredDate"
            value={form.preferredDate}
            onChange={handleChange}
          />
        </div>

      </div>

      {/* Message */}

      <div className="contact-form__group contact-form__group--full">

        <label>{fields.message.label}</label>

        <textarea
          rows="6"
          name="message"
          value={form.message}
          placeholder={fields.message.placeholder}
          onChange={handleChange}
        />

      </div>

      {/* Trust Cards */}

      <div className="contact-form__features">

        <div className="contact-feature">
          <ShieldCheck size={22} />
          <span>Confidential Discussion</span>
        </div>

        <div className="contact-feature">
          <Clock3 size={22} />
          <span>Response within 24 Hours</span>
        </div>

        <div className="contact-feature">
          <CalendarDays size={22} />
          <span>Flexible Scheduling</span>
        </div>

      </div>

      {/* Button */}

      <button
        type="submit"
        className="contact-form__submit"
        disabled={loading}
      >
        {loading
          ? "Scheduling..."
          : "Schedule My Consultation"}
      </button>

    </form>
  );
}