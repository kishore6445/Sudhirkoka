import React from "react";
import {
    UserRound,
    GraduationCap,
    UsersRound,
    MessageCircle,
    Award,
    Check
} from "lucide-react";

import "./about.css";

import sudhirImage from "../../../assets/images/about/sudhir.jpeg";


const focusAreas = [
    {
        icon: UserRound,
        title: "Leadership Development",
        description:
            "Build stronger leaders through practical development, mentoring and coaching.",
    },
    {
        icon: GraduationCap,
        title: "Learning & Development",
        description:
            "Create meaningful learning experiences that connect people development with organisational goals.",
    },
    {
        icon: UsersRound,
        title: "Talent & Organisation",
        description:
            "Develop talent, strengthen teams and create conditions for sustainable organisational performance.",
    },
    {
        icon: MessageCircle,
        title: "Coaching & Conversations",
        description:
            "Help leaders build self-awareness, confidence and effectiveness through better conversations.",
    },
];


const recognitions = [
    "Top 20 Most Impactful L&D Leaders",
    "100 Top Learning & Development Minds of India",
    "Telangana's Top Learning & Development Leaders",
];


const About = () => {
    return (
        <section className="about-section" id="about">

            <div className="about-container">

                {/* =========================================
                    LEFT — VISUAL
                ========================================= */}

                <div className="about-visual">

                    <div className="about-image-shape" />

                    <div className="about-gold-circle" />

                    <div className="about-image-wrapper">

                        <img
                            src={sudhirImage}
                            alt="Sudhir Koka"
                            className="about-image"
                        />

                    </div>


                    {/* Experience Card */}

                    <div className="about-experience-card">

                        <span className="about-experience-number">
                            30+
                        </span>

                        <span className="about-experience-label">
                            Years of
                            <br />
                            Professional Experience
                        </span>

                    </div>


                    {/* Recognition Badge */}

                    <div className="about-recognition-badge">

                        <div className="about-recognition-icon">
                            <Award size={20} strokeWidth={2} />
                        </div>

                        <div>
                            <span className="about-recognition-year">
                                2024
                            </span>

                            <span className="about-recognition-title">
                                Editor's Choice
                            </span>
                        </div>

                    </div>

                </div>


                {/* =========================================
                    RIGHT — CONTENT
                ========================================= */}

                <div className="about-content">

                    {/* Label */}
<div className="about-label">
    ABOUT SUDHIR
</div>

<h2 className="about-heading">
    Helping People Become
    <br />
    <span>Better Leaders.</span>
</h2>

{/* <p className="about-intro">
    Leadership is built through intentional growth —
    in how we think, communicate, make decisions, and
    work with others.
</p> */}

<p className="about-description">
    Sudhir works with individuals and organisations to
    develop stronger leadership capabilities, build
    high-performing teams, and create cultures where
    people and businesses can grow together.
</p>


                    {/* Focus Areas */}

                    <div className="about-focus-grid">

                        {focusAreas.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    className="about-focus-item"
                                    key={item.title}
                                >

                                    <div className="about-focus-icon">
                                        <Icon
                                            size={19}
                                            strokeWidth={2}
                                        />
                                    </div>


                                    <div className="about-focus-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>


                    {/* =========================================
                        RECOGNITION
                    ========================================= */}

                    <div className="about-recognition">

                        <div className="about-recognition-header">

                            <div className="about-recognition-header-icon">
                                <Award
                                    size={18}
                                    strokeWidth={2}
                                />
                            </div>

                            <div>
                                <span className="about-recognition-eyebrow">
                                    RECOGNITION
                                </span>

                                <h3>
                                    Editor's Choice — 2024
                                </h3>
                            </div>

                        </div>


                        <p className="about-recognition-description">
                            Recognised by CEO Insights for leadership,
                            innovation and contribution to the field of
                            people development.
                        </p>


                        <div className="about-recognition-list">

                            {recognitions.map((item) => (

                                <div
                                    className="about-recognition-item"
                                    key={item}
                                >

                                    <span className="about-recognition-check">
                                        <Check
                                            size={12}
                                            strokeWidth={3}
                                        />
                                    </span>

                                    <span>
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Signature */}

                    <div className="about-signature">

                        <div className="about-signature-line" />

                        <h3>
                            Sudhir Koka
                        </h3>

                        <p>
                            Leadership &amp; People Development Professional
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;