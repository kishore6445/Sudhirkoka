import {
    ArrowLeft,
    ArrowRight,
    Quote,
} from "lucide-react";

import {
    Link,
} from "react-router-dom";

import { useEffect } from "react";

import {
    reflectionCategories,
    reflections,
} from "../../data/insightsData";

import "../../styles/reflection-library.css";


function ReflectionLibrary() {

    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, []);


    /* =====================================================
       FEATURED REFLECTION
    ===================================================== */

    const featuredReflection = reflections[0];


    return (

        <main className="reflection-library-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="reflection-library-hero">

                <div className="reflection-library-container">


                    {/* BACK */}

                    <Link
                        to="/insights"
                        className="reflection-library-back"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            Back to Insights
                        </span>

                    </Link>


                    {/* HERO GRID */}

                    <div className="reflection-library-hero-grid">


                        {/* LEFT */}

                        <div className="reflection-library-hero-main">

                            <div className="reflection-library-eyebrow">

                                <span>
                                    REFLECTIONS
                                </span>

                            </div>


                            <h1>

                                Thoughts worth

                                <br />

                                <span>
                                    sitting with.
                                </span>

                            </h1>

                        </div>


                        {/* RIGHT */}

                        <div className="reflection-library-hero-intro">

                            <p>
                                Reflections on leadership, people and
                                organisational growth drawn from experience,
                                conversations and everyday moments.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CATEGORY SECTION
            ================================================= */}

            <section className="reflection-library-categories">

                <div className="reflection-library-container">


                    {/* SECTION HEADING */}

                    <div className="reflection-library-section-heading">

                        <div>

                            <span>
                                EXPLORE BY CATEGORY
                            </span>

                            <h2>
                                Choose a thought
                                <br />
                                <em>to sit with.</em>
                            </h2>

                        </div>


                        <p>
                            Explore reflections across leadership,
                            people, growth and the realities of work.
                        </p>

                    </div>


                    {/* CATEGORY LIST */}

                    <div className="reflection-library-category-list">

                        {reflectionCategories.map(
                            (category) => (

                                <Link
                                    key={category.id}
                                    to={`/insights/reflections/${category.id}`}
                                    className="reflection-library-category-row"
                                >


                                    {/* NUMBER */}

                                    <div className="reflection-library-category-number">

                                        {category.number}

                                    </div>


                                    {/* CONTENT */}

                                    <div className="reflection-library-category-content">

                                        <h3>
                                            {category.title}
                                        </h3>

                                        <p>
                                            {category.description}
                                        </p>

                                    </div>


                                    {/* ARROW */}

                                    <div className="reflection-library-category-arrow">

                                        <ArrowRight
                                            size={20}
                                        />

                                    </div>

                                </Link>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                FEATURED REFLECTION
            ================================================= */}

            {featuredReflection && (

                <section className="reflection-library-featured">

                    <div className="reflection-library-container">


                        <div className="reflection-featured-card">


                            {/* DECORATIVE QUOTE */}

                            <Quote
                                className="reflection-featured-quote-icon"
                                size={90}
                            />


                            {/* TOP LABEL */}

                            <div className="reflection-featured-label">

                                <span>
                                    FEATURED REFLECTION
                                </span>

                                <div />

                            </div>


                            {/* QUOTE */}

                            <blockquote>

                                “
                                {featuredReflection.quote}
                                ”

                            </blockquote>


                            {/* AUTHOR */}

                            <div className="reflection-featured-author">

                                <span />

                                <div>

                                    <small>
                                        REFLECTION BY
                                    </small>

                                    <strong>
                                        {featuredReflection.author}
                                    </strong>

                                </div>

                            </div>


                            {/* READ */}

                            <Link
                                to={`/insights/reflections/${featuredReflection.category}/${featuredReflection.id}`}
                                className="reflection-featured-link"
                            >

                                <span>
                                    Read reflection
                                </span>

                                <ArrowRight size={18} />

                            </Link>

                        </div>

                    </div>

                </section>

            )}


            {/* =================================================
                LATEST REFLECTIONS
            ================================================= */}

            {reflections.length > 1 && (

                <section className="reflection-library-latest">

                    <div className="reflection-library-container">


                        <div className="reflection-library-latest-heading">

                            <div>

                                <span>
                                    MORE TO CONSIDER
                                </span>

                                <h2>
                                    Latest reflections.
                                </h2>

                            </div>


                            <Link
                                to="/insights"
                            >

                                <span>
                                    Explore all insights
                                </span>

                                <ArrowRight size={17} />

                            </Link>

                        </div>


                        <div className="reflection-latest-grid">

                            {reflections
                                .slice(1, 4)
                                .map(
                                    (reflection) => (

                                        <Link
                                            key={reflection.id}
                                            to={`/insights/reflections/${reflection.category}/${reflection.id}`}
                                            className="reflection-latest-card"
                                        >

                                            <div className="reflection-latest-card-top">

                                                <Quote
                                                    size={25}
                                                />

                                                <span>
                                                    REFLECTION
                                                </span>

                                            </div>


                                            <p>
                                                {reflection.quote}
                                            </p>


                                            <div className="reflection-latest-card-footer">

                                                <span>
                                                    — {reflection.author}
                                                </span>

                                                <ArrowRight
                                                    size={17}
                                                />

                                            </div>

                                        </Link>

                                    )
                                )}

                        </div>

                    </div>

                </section>

            )}


            {/* =================================================
                EXPLORE OTHER INSIGHTS
            ================================================= */}

            <section className="reflection-library-explore">

                <div className="reflection-library-container">

                    <div className="reflection-explore-inner">


                        <div>

                            <span>
                                KEEP EXPLORING
                            </span>

                            <h2>
                                There is more to
                                <br />
                                <em>discover.</em>
                            </h2>

                        </div>


                        <div className="reflection-explore-links">

                            <Link
                                to="/insights/videos"
                            >

                                <span>
                                    Videos
                                </span>

                                <ArrowRight size={18} />

                            </Link>


                            <Link
                                to="/insights/articles"
                            >

                                <span>
                                    Articles
                                </span>

                                <ArrowRight size={18} />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


export default ReflectionLibrary;