import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { useContact } from "./ContactContext";

import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";

import "./Contact.css";

export default function ContactModal() {
  const { isOpen, closeModal } = useContact();

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    closeModal();

    setTimeout(() => {
      setSubmitted(false);
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal"
      onClick={handleClose}
    >
      <div
        className="contact-modal__dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="contact-modal__close"
          onClick={handleClose}
          type="button"
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <ContactSuccess
            onClose={handleClose}
          />
        ) : (
          <ContactForm
            onSuccess={() => setSubmitted(true)}
          />
        )}
      </div>
    </div>
  );
}