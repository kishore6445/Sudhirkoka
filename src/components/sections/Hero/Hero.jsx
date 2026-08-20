import {
    UsersRound,
    Flag,
    BarChart3,
    Target,
    Play,
    ArrowRight,
} from "lucide-react";

import { useState } from "react";

import { heroData } from "../../../data/heroData";
import { useContact } from "../../sections/Contact/ContactContext";

import Button from "../../common/Button/Button";
import SectionLabel from "../../common/SectionLabel/SectionLabel";

import YouTubeModal from "../../insights/YouTubeModal";

import "./Hero.css";


function Hero() {

    const { openModal } = useContact();

    const [
        isIntroVideoOpen,
        setIsIntroVideoOpen
    ] = useState(false);


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


    /* =========================================================
       OPEN INTRO VIDEO
    ========================================================= */

    const handleOpenIntroVideo = () => {

        setIsIntroVideoOpen(true);

    };


    /* =========================================================
       CLOSE INTRO VIDEO
    ========================================================= */

    const handleCloseIntroVideo = () => {

        setIsIntroVideoOpen(false);

    };


    return (

        <section
            className="hero"
            id="home"
        >

            <div className="hero__container">


                {/* =================================================
                    HERO CONTENT
                ================================================= */}

                <div className="hero__main">


                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="hero__content">


                        {/* Eyebrow */}

                        <SectionLabel variant="gold">

                            {eyebrow}

                        </SectionLabel>


                        {/* Heading */}

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


                        {/* Description */}

                        <p className="hero__description">

                            {description}

                        </p>


                        {/* =================================================
                            ACTIONS
                        ================================================= */}

                        <div className="hero__actions">


                            {/* Let's Talk */}

                            <Button
                                variant="primary"
                                onClick={openModal}
                                icon={ArrowRight}
                            >

                                Let's Talk

                            </Button>


                            {/* Watch Intro */}

                            <button
                                className="hero__video-button"
                                type="button"
                                onClick={handleOpenIntroVideo}
                            >

                                <span className="hero__play-icon">

                                    <Play
                                        size={16}
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />

                                </span>

                                Watch Intro Video

                            </button>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT IMAGE
                    ================================================= */}

                    <div className="hero__visual">


                        <div className="hero__city-glow" />


                        {/* Growth bars */}

                        <div className="hero__growth-bars">

                            <span />
                            <span />
                            <span />
                            <span />

                        </div>


                        {/* Person */}

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


                {/* =================================================
                    PILLARS
                ================================================= */}

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


            {/* =========================================================
                INTRO VIDEO MODAL
            ========================================================= */}

            <YouTubeModal
                isOpen={isIntroVideoOpen}

                videoUrl={
                    "https://www.youtube.com/watch?v=vsx-UJ4TzWQ"
                }

                title="Introduction"

                onClose={
                    handleCloseIntroVideo
                }
            />

        </section>
    );
}


export default Hero;