import React from "react";
import { ArrowRight } from "lucide-react";
import "./cta.css";
import { useContact } from "../../sections/Contact/ContactContext";
const CTA = () => {
    const { openModal } = useContact();
    return (
        <section className="cta-section">
            <div className="cta-container">

                {/* Decorative Elements */}
                <div className="cta-circle cta-circle--one" />
                <div className="cta-circle cta-circle--two" />

                <div className="cta-content">

                    <span className="cta-eyebrow">
                        READY TO GROW?
                    </span>

                    <h2 className="cta-heading">
                        Stronger leadership starts
                        <br />
                        <span>with a conversation.</span>
                    </h2>

                    <p className="cta-description">
                        Whether you're developing yourself, your leaders,
                        or your organisation, let's explore what's possible.
                    </p>

                    {/* <a
                        href="#conversation"
                        className="cta-button"
                    >
                        <span>Let's Talk</span>

                        <ArrowRight
                            size={18}
                            strokeWidth={1.8}
                        />
                    </a> */}
                    <button
    type="button"
    className="cta-button"
    onClick={openModal}
>
    Let's Talk
</button>

                </div>

            </div>
        </section>
    );
};

export default CTA;