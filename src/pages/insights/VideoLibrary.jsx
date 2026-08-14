import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { videoCategories } from "../../data/insightsData";
import "../../styles/insight-library.css";


function VideoLibrary() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);


    return (
        <main className="insight-library-page">

            {/* =================================================
                HEADER
            ================================================= */}

            <section className="insight-library-header">

                <div className="insight-library-eyebrow">
                    <span>VIDEOS</span>
                </div>


                <div className="insight-library-hero-card">

                    {/* BACK */}

                    <Link
                        to="/insights"
                        className="insight-library-back-link"
                    >
                        <ArrowLeft size={19} />

                        <span>
                            Back to Insights
                        </span>
                    </Link>


                    {/* HERO */}

                    <div className="insight-library-heading-wrap">

                        <h1>
                            Ideas worth
                            <br />
                            <span>watching.</span>
                        </h1>

                    </div>


                    <div className="insight-library-intro">

                        <p>
                            Conversations, practical frameworks and
                            leadership ideas designed to help people
                            and organisations grow.
                        </p>

                    </div>

                </div>

            </section>


            {/* =================================================
                CATEGORIES
            ================================================= */}

            <section className="insight-library-category-section">

                <div className="insight-library-category-heading">

                    <span>
                        EXPLORE BY CATEGORY
                    </span>

                </div>


                <div className="insight-library-category-list">

                    {videoCategories.map((category) => (

                        <Link
                            key={category.id}
                            to={`/insights/videos/${category.id}`}
                            className="insight-library-category-row"
                        >

                            {/* NUMBER */}

                            <div className="insight-library-category-number">
                                {category.number}
                            </div>


                            {/* VIDEO ICON */}

                            <div className="insight-library-category-icon">

                                <PlayCircle
                                    size={22}
                                    strokeWidth={1.8}
                                />

                            </div>


                            {/* CONTENT */}

                            <div className="insight-library-category-content">

                                <h2>
                                    {category.title}
                                </h2>

                                <p>
                                    {category.description}
                                </p>

                            </div>


                            {/* ARROW */}

                            <div className="insight-library-category-arrow">

                                <ArrowRight size={22} />

                            </div>

                        </Link>

                    ))}

                </div>

            </section>

        </main>
    );
}


export default VideoLibrary;