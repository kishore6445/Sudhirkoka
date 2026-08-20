import {
    ArrowLeft,
    ArrowRight,
    Quote,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router-dom";

import { useEffect } from "react";

import {
    reflectionCategories,
    reflections,
} from "../../data/insightsData";

import "../../styles/reflection-detail.css";


function ReflectionDetail() {

    const {
        category,
        reflectionId,
    } = useParams();


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [reflectionId]);


    /* =====================================================
       FIND CATEGORY
    ===================================================== */

    const currentCategory =
        reflectionCategories.find(
            (item) => item.id === category
        );


    /* =====================================================
       FIND REFLECTION
    ===================================================== */

    const reflection =
        reflections.find(
            (item) =>
                item.id === reflectionId &&
                item.category === category
        );


    /* =====================================================
       INVALID REFLECTION
    ===================================================== */

    if (!currentCategory || !reflection) {

        return (

            <main className="reflection-detail-page">

                <section className="reflection-detail-not-found">

                    <span>
                        REFLECTION
                    </span>

                    <h1>
                        Reflection not found.
                    </h1>

                    <p>
                        The reflection you're looking for
                        doesn't exist or may have been moved.
                    </p>

                    <Link
                        to="/insights/reflections"
                        className="reflection-detail-back-button"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            Back to Reflections
                        </span>

                    </Link>

                </section>

            </main>
        );
    }


    /* =====================================================
       OTHER REFLECTIONS
    ===================================================== */

    const otherReflections =
        reflections
            .filter(
                (item) =>
                    item.category === category &&
                    item.id !== reflectionId
            )
            .slice(0, 2);


    return (

        <main className="reflection-detail-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="reflection-detail-hero">

                <div className="reflection-detail-container">


                    {/* BACK */}

                    <Link
                        to={`/insights/reflections/${category}`}
                        className="reflection-detail-back"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            Back to {currentCategory.title}
                        </span>

                    </Link>


                    {/* EYEBROW */}

                    <div className="reflection-detail-eyebrow">

                        <span>
                            {currentCategory.number}
                        </span>

                        <i />

                        <span>
                            REFLECTION
                        </span>

                    </div>


                    {/* CATEGORY */}

                    <div className="reflection-detail-category">

                        {currentCategory.title}

                    </div>


                    {/* MAIN QUOTE */}

                    <div className="reflection-detail-quote-wrap">

                        <Quote
                            className="reflection-detail-quote-icon"
                            size={70}
                        />


                        <blockquote>

                            {reflection.quote}

                        </blockquote>


                        <div className="reflection-detail-author">

                            <span />

                            <div>

                                <small>
                                    REFLECTION BY
                                </small>

                                <strong>
                                    {reflection.author}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                REFLECTION CONTENT
            ================================================= */}

            <section className="reflection-detail-content">

                <div className="reflection-detail-container">

                    <div className="reflection-detail-content-grid">


                        {/* LEFT LABEL */}

                        <div className="reflection-detail-content-label">

                            <span>
                                A THOUGHT
                            </span>

                            <div />

                        </div>


                        {/* RIGHT CONTENT */}

                        <div className="reflection-detail-copy">

                            <h2>
                                A thought worth
                                <br />
                                <em>sitting with.</em>
                            </h2>


                            <p>
                                Leadership often asks us to
                                look beyond our own answers.
                                The way we create space for
                                others to think, contribute and
                                grow can be just as important
                                as the decisions we make.
                            </p>


                            <p>
                                Sometimes the most meaningful
                                leadership begins by creating
                                the conditions for someone else
                                to find their own way forward.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                OTHER REFLECTIONS
            ================================================= */}

            {otherReflections.length > 0 && (

                <section className="reflection-detail-more">

                    <div className="reflection-detail-container">


                        <div className="reflection-detail-more-heading">

                            <span>
                                CONTINUE READING
                            </span>

                            <h2>
                                More reflections
                                <br />
                                <em>to sit with.</em>
                            </h2>

                        </div>


                        <div className="reflection-detail-more-grid">

                            {otherReflections.map(
                                (item, index) => (

                                    <Link
                                        key={item.id}
                                        to={`/insights/reflections/${category}/${item.id}`}
                                        className="reflection-detail-more-card"
                                    >

                                        <div className="reflection-detail-more-top">

                                            <span>
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </span>

                                            <Quote
                                                size={25}
                                            />

                                        </div>


                                        <blockquote>
                                            {item.quote}
                                        </blockquote>


                                        <div className="reflection-detail-more-footer">

                                            <span>
                                                {item.author}
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
                BOTTOM NAVIGATION
            ================================================= */}

            <section className="reflection-detail-navigation">

                <div className="reflection-detail-container">

                    <Link
                        to={`/insights/reflections/${category}`}
                    >

                        <ArrowLeft size={17} />

                        <span>
                            More in {currentCategory.title}
                        </span>

                    </Link>


                    <Link
                        to="/insights/reflections"
                    >

                        <span>
                            All Reflections
                        </span>

                        <ArrowRight size={17} />

                    </Link>

                </div>

            </section>

        </main>
    );
}


export default ReflectionDetail;