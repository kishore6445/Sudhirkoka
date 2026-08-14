import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import {
    reflectionCategories,
    reflections,
} from "../../data/insightsData";

import "../../styles/insight-library.css";


function ReflectionCategory() {

    const { category } = useParams();


    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [category]);


    const currentCategory = reflectionCategories.find(
        (item) => item.id === category
    );


    const categoryReflections = reflections.filter(
        (reflection) => reflection.category === category
    );


    /* =========================================
       INVALID CATEGORY
    ========================================= */

    if (!currentCategory) {

        return (
            <main className="insight-category-page">

                <section className="insight-category-empty">

                    <span>
                        REFLECTIONS
                    </span>

                    <h1>
                        Category not found.
                    </h1>

                    <Link
                        to="/insights/reflections"
                        className="insight-category-back"
                    >
                        <ArrowLeft size={19} />
                        Back to Reflections
                    </Link>

                </section>

            </main>
        );
    }


    return (
        <main className="insight-category-page">


            {/* =========================================
                HERO
            ========================================= */}

            <section className="insight-category-hero">

                <div className="insight-category-decoration" />


                <Link
                    to="/insights/reflections"
                    className="insight-category-back"
                >
                    <ArrowLeft size={20} />

                    <span>
                        Back to Reflections
                    </span>
                </Link>


                <div className="insight-category-hero-content">

                    <div>

                        <div className="insight-category-eyebrow">

                            <span>
                                04
                            </span>

                            <i />

                            <span>
                                REFLECTIONS
                            </span>

                        </div>


                        <h1>

                            {currentCategory.title}

                            <br />

                            <span>
                                Thoughts worth sitting with.
                            </span>

                        </h1>

                    </div>


                    <div className="insight-category-intro">

                        <p>
                            {currentCategory.description}
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                REFLECTION LIST
            ========================================= */}

            <section className="insight-category-content">

                <div className="insight-category-section-heading">

                    <span>
                        {categoryReflections.length}{" "}
                        {categoryReflections.length === 1
                            ? "REFLECTION"
                            : "REFLECTIONS"}
                    </span>

                    <div />

                </div>


                {categoryReflections.length > 0 ? (

                    <div className="insight-reflection-list">

                        {categoryReflections.map(
                            (reflection, index) => (

                                <article
                                    key={reflection.id}
                                    className="insight-reflection-card"
                                >

                                    <div className="insight-reflection-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>


                                    <div className="insight-reflection-content">

                                        <span>
                                            REFLECTION
                                        </span>

                                        <blockquote>
                                            “{reflection.quote}”
                                        </blockquote>

                                        <p>
                                            — {reflection.author}
                                        </p>

                                    </div>


                                    <div className="insight-reflection-mark">
                                        <ArrowRight size={21} />
                                    </div>

                                </article>

                            )
                        )}

                    </div>

                ) : (

                    <div className="insight-category-no-content">

                        <span>
                            COMING SOON
                        </span>

                        <h2>
                            More reflections are on the way.
                        </h2>

                        <p>
                            We're preparing more reflections for this category.
                        </p>

                    </div>

                )}

            </section>

        </main>
    );
}

export default ReflectionCategory;