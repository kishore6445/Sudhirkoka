import {
    UsersRound,
    Flag,
    BarChart3,
    Target,
    Play,
    ArrowRight,
} from "lucide-react";

import { heroData } from "../../../data/heroData";

import Button from "../../common/Button/Button";
import SectionLabel from "../../common/SectionLabel/SectionLabel";

import "./Hero.css";

function Hero() {
    const {
        eyebrow,
        description,
        buttons,
        image,
    } = heroData;

    const pillars = [
        {
            icon: UsersRound,
            title: "STRONG PEOPLE",
            description: "Build the Right Teams",
        },
        {
            icon: Flag,
            title: "STRONG LEADERS",
            description: "Create Ownership",
        },
        {
            icon: BarChart3,
            title: "STRONG SYSTEMS",
            description: "Drive Performance",
        },
        {
            icon: Target,
            title: "STRONG BUSINESSES",
            description: "Sustain Growth",
        },
    ];

    return (
        <section className="hero" id="home">

            <div className="hero__container">

                {/* ================================
                    HERO CONTENT
                ================================= */}

                <div className="hero__main">

                    {/* LEFT */}
                    <div className="hero__content">

                        <SectionLabel variant="gold">
                            {eyebrow}
                        </SectionLabel>

                        <h1 className="hero__title">

                            <span>
                                STRONG{" "}
                                <span className="hero__gold">
                                    PEOPLE,
                                </span>
                            </span>

                            <span>
                                STRONG{" "}
                                <span className="hero__gold">
                                    LEADERS
                                </span>{" "}
                                &
                            </span>

                            <span>
                                STRONG{" "}
                                <span className="hero__gold">
                                    BUSINESSES.
                                </span>
                            </span>

                        </h1>

                        <p className="hero__description">
                            {description}
                        </p>

                        <div className="hero__actions">

                            <Button
                                variant="primary"
                                href={buttons.primary.href}
                                icon={ArrowRight}
                            >
                                Let's Talk
                            </Button>

                            <button
                                className="hero__video-button"
                                type="button"
                            >
                                <span className="hero__play-icon">
                                    <Play
                                        size={16}
                                        fill="currentColor"
                                    />
                                </span>

                                Watch Intro Video
                            </button>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="hero__visual">

                        <div className="hero__city-glow" />

                        {/* Growth bars */}
                        <div className="hero__growth-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        {/* Growth arrow */}
                        {/* <svg
                            className="hero__growth-arrow"
                            viewBox="0 0 320 220"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 205C70 185 110 170 145 145C190 112 220 75 300 18"
                                stroke="#D4AF37"
                                strokeWidth="7"
                                strokeLinecap="round"
                            />

                            <path
                                d="M268 20L300 18L290 49"
                                stroke="#D4AF37"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg> */}

                        <div className="hero__person">
                            <div className="hero__person-glow" />

                            <img
                                src={image}
                                alt="Sudhir"
                                className="hero__image"
                            />
                        </div>

                    </div>

                </div>


                {/* ================================
                    STRONG PEOPLE / LEADERS / SYSTEMS
                ================================= */}

                <div className="hero__pillars">

                    {pillars.map((pillar) => {

                        const Icon = pillar.icon;

                        return (
                            <div
                                className="hero__pillar"
                                key={pillar.title}
                            >

                                <div className="hero__pillar-icon">
                                    <Icon
                                        size={32}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <h3>
                                    {pillar.title}
                                </h3>

                                <p>
                                    {pillar.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default Hero;