import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { reflectionCategories } from "../../data/insightsData";
import "../../styles/insight-library.css";

function ReflectionLibrary() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <main className="insight-library-page">

            {/* =========================================
                HERO
            ========================================= */}

            <section className="insight-library-header">

                <div className="insight-library-hero-card">

                    {/* BACK */}

                    <Link
                        to="/insights"
                        className="insight-library-back-link"
                    >
                        <ArrowLeft size={20} />

                        <span>
                            Back to Insights
                        </span>
                    </Link>


                    {/* HERO CONTENT */}

                    <div className="insight-library-heading-wrap">

                        <div className="insight-library-eyebrow">
                            <span>04</span>
                            <i />
                            <span>REFLECTIONS</span>
                        </div>

                        <h1>
                            Thoughts worth
                            <br />
                            <span>sitting with.</span>
                        </h1>

                    </div>


                    <div className="insight-library-intro">

                        <p>
                            Reflections on leadership, people and
                            organisational growth drawn from experience
                            and everyday conversations.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                CATEGORIES
            ========================================= */}

            <section className="insight-library-category-section">

                <div className="insight-library-category-heading">

                    <span>
                        EXPLORE BY CATEGORY
                    </span>

                    <div />

                </div>


                <div className="insight-library-category-list">

                    {reflectionCategories.map((category) => (

                        <Link
                            key={category.id}
                            to={`/insights/reflections/${category.id}`}
                            className="insight-library-category-row"
                        >

                            <div className="insight-library-category-number">
                                {category.number}
                            </div>


                            <div className="insight-library-category-content">

                                <h2>
                                    {category.title}
                                </h2>

                                <p>
                                    {category.description}
                                </p>

                            </div>


                            <div className="insight-library-category-arrow">

                                <ArrowRight size={23} />

                            </div>

                        </Link>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default ReflectionLibrary;