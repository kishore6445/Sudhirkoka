import { CheckCircle2 } from "lucide-react";

import { contactData } from "./contactData";

export default function ContactSuccess({ onClose }) {
  return (
    <div className="contact-success">

      {/* Icon */}

      <div className="contact-success__icon">
        <CheckCircle2 size={72} />
      </div>

      {/* Heading */}

      <h2 className="contact-success__title">
        {contactData.success.title}
      </h2>

      {/* Description */}

      <p className="contact-success__description">
        {contactData.success.description}
      </p>

      {/* Information Card */}

      <div className="contact-success__info">

        <div className="contact-success__item">
          <span>✓</span>

          <p>We'll review your request carefully.</p>
        </div>

        <div className="contact-success__item">
          <span>✓</span>

          <p>You'll receive a response within 24 hours.</p>
        </div>

        <div className="contact-success__item">
          <span>✓</span>

          <p>Your information remains completely confidential.</p>
        </div>

      </div>

      {/* Close Button */}

      <button
        type="button"
        onClick={onClose}
        className="contact-success__button"
      >
        {contactData.success.button}
      </button>

    </div>
  );
}