export const contactData = {
  modal: {
    badge: "Let's Start the Conversation",

    title: "Schedule a Leadership Consultation",

    description:
      "Whether you're looking for executive coaching, leadership development, or organisational transformation, let's discuss how we can help you achieve meaningful and lasting results.",
  },

  fields: {
    name: {
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },

    email: {
      label: "Email Address",
      placeholder: "Enter your email address",
      required: true,
    },

    phone: {
      label: "Phone Number",
      placeholder: "Enter your phone number",
      required: true,
    },

    organization: {
      label: "Organization",
      placeholder: "Company / Organization",
      required: false,
    },

    designation: {
      label: "Designation",
      placeholder: "Your role",
      required: false,
    },

    message: {
      label: "How can I help you?",
      placeholder:
        "Tell us about your leadership goals or the challenges you're facing...",
      required: true,
    },

    preferredDate: {
      label: "Preferred Meeting Date",
      required: false,
    },

    preferredTime: {
      label: "Preferred Meeting Time",
      required: false,
    },
  },

  submitButton: {
    text: "Schedule Conversation",
    loadingText: "Submitting...",
  },

  success: {
    title: "Thank You!",

    description:
      "Your consultation request has been received successfully. Sudhir will personally review your request and get in touch with you within 24 hours.",

    button: "Close",
  },
};