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

import "../../styles/reflection-category.css";


function ReflectionCategory() {

    const { category } = useParams();


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [category]);


    /* =====================================================
       CURRENT CATEGORY
    ===================================================== */

    const currentCategory =
        reflectionCategories.find(
            (item) => item.id === category
        );


    /* =====================================================
       CATEGORY REFLECTIONS
    ===================================================== */

    const categoryReflections =
        reflections.filter(
            (reflection) =>
                reflection.category === category
        );


    /* =====================================================
       INVALID CATEGORY
    ===================================================== */

    if (!currentCategory) {

        return (

            <main className="reflection-category-page">

                <section className="reflection-category-not-found">

                    <span>
                        REFLECTIONS
                    </span>

                    <h1>
                        Category not found.
                    </h1>

                    <p>
                        The reflection category you're looking
                        for doesn't exist or may have been moved.
                    </p>

                    <Link
                        to="/insights/reflections"
                        className="reflection-category-back-button"
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


    return (

        <main className="reflection-category-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="reflection-category-hero">

                <div className="reflection-category-container">


                    {/* BACK */}

                    <Link
                        to="/insights/reflections"
                        className="reflection-category-back"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            Back to Reflections
                        </span>

                    </Link>


                    {/* CATEGORY */}

                    <div className="reflection-category-eyebrow">

                        <span>
                            {currentCategory.number}
                        </span>

                        <i />

                        <span>
                            REFLECTIONS
                        </span>

                    </div>


                    {/* HERO GRID */}

                    <div className="reflection-category-hero-grid">


                        <div className="reflection-category-heading">

                            <h1>
                                {currentCategory.title}
                            </h1>

                            <div className="reflection-category-title-line" />

                        </div>


                        <div className="reflection-category-intro">

                            <p>
                                {currentCategory.description}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                REFLECTIONS
            ================================================= */}

            <section className="reflection-category-content">

                <div className="reflection-category-container">


                    {/* SECTION HEADER */}

                    <div className="reflection-category-section-heading">

                        <div>

                            <span>
                                REFLECTIONS IN THIS CATEGORY
                            </span>

                            <h2>
                                Ideas to pause
                                <br />
                                <em>and consider.</em>
                            </h2>

                        </div>


                        <div className="reflection-category-count">

                            <strong>
                                {categoryReflections.length}
                            </strong>

                            <span>
                                {categoryReflections.length === 1
                                    ? "REFLECTION"
                                    : "REFLECTIONS"}
                            </span>

                        </div>

                    </div>


                    {/* REFLECTION LIST */}

                    {categoryReflections.length > 0 ? (

                        <div className="reflection-category-list">

                            {categoryReflections.map(
                                (reflection, index) => (

                                    <article
                                        key={reflection.id}
                                        className={`reflection-category-card ${
                                            index === 0
                                                ? "reflection-category-card--featured"
                                                : ""
                                        }`}
                                    >

                                        {/* QUOTE ICON */}

                                        <Quote
                                            className="reflection-category-quote"
                                            size={
                                                index === 0
                                                    ? 65
                                                    : 45
                                            }
                                        />


                                        {/* CARD TOP */}

                                        <div className="reflection-category-card-top">

                                            <span>
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span>
                                                REFLECTION
                                            </span>

                                        </div>


                                        {/* QUOTE */}

                                        <blockquote>
                                            {reflection.quote}
                                        </blockquote>


                                        {/* FOOTER */}

                                        <div className="reflection-category-card-footer">


                                            <div className="reflection-category-author">

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


                                            <Link
                                                to={`/insights/reflections/${reflection.category}/${reflection.id}`}
                                                className="reflection-category-read"
                                            >

                                                <span>
                                                    Read reflection
                                                </span>

                                                <ArrowRight
                                                    size={17}
                                                />

                                            </Link>

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    ) : (

                        /* =================================================
                           EMPTY STATE
                        ================================================= */

                        <div className="reflection-category-empty">

                            <Quote size={40} />

                            <span>
                                MORE REFLECTIONS COMING SOON
                            </span>

                            <h3>
                                There is more to sit with.
                            </h3>

                            <p>
                                We're preparing more reflections
                                for this category.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* =================================================
                OTHER CATEGORIES
            ================================================= */}

            <section className="reflection-category-other">

                <div className="reflection-category-container">


                    <div className="reflection-category-other-heading">

                        <span>
                            CONTINUE EXPLORING
                        </span>

                        <h2>
                            More perspectives
                            <br />
                            <em>to sit with.</em>
                        </h2>

                    </div>


                    <div className="reflection-category-other-list">

                        {reflectionCategories
                            .filter(
                                (item) =>
                                    item.id !== category
                            )
                            .slice(0, 3)
                            .map(
                                (item) => (

                                    <Link
                                        key={item.id}
                                        to={`/insights/reflections/${item.id}`}
                                        className="reflection-category-other-card"
                                    >

                                        <div>

                                            <span>
                                                {item.number}
                                            </span>

                                            <h3>
                                                {item.title}
                                            </h3>

                                            <p>
                                                {item.description}
                                            </p>

                                        </div>


                                        <ArrowRight
                                            size={19}
                                        />

                                    </Link>

                                )
                            )}

                    </div>

                </div>

            </section>


            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

            <section className="reflection-category-navigation">

                <div className="reflection-category-container">

                    <Link
                        to="/insights/reflections"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            All Reflections
                        </span>

                    </Link>


                    <Link
                        to="/insights"
                    >

                        <span>
                            Explore Insights
                        </span>

                        <ArrowRight size={17} />

                    </Link>

                </div>

            </section>

        </main>
    );
}


export default ReflectionCategory;