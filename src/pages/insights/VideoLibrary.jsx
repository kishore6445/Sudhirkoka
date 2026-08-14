import {
    ArrowLeft,
    ArrowRight,
    Users,
    Target,
    UsersRound,
    Building2,
    TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import { videoCategories } from "../../data/insightsData";
import "../../styles/insight-library.css";


/* =========================================================
   CATEGORY ICONS
========================================================= */

const categoryIcons = {
    "leadership-voices": Users,
    "skills-to-improve": Target,
    "strong-teams": UsersRound,
    "teams-culture": UsersRound,
    "business-growth": TrendingUp,
    organisation: Building2,
    "growth-performance": TrendingUp,
};


/* =========================================================
   VIDEO LIBRARY
========================================================= */

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
                HERO
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


                    {/* HERO TITLE */}

                    <div className="insight-library-heading-wrap">

                        <h1>
                            Ideas worth
                            <br />

                            <span>
                                watching.
                            </span>

                        </h1>

                    </div>


                    {/* HERO DESCRIPTION */}

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
                VIDEO CATEGORIES
            ================================================= */}

            <section className="insight-library-category-section">


                {/* SECTION HEADING */}

                <div className="insight-library-category-heading">

                    <span>
                        EXPLORE BY CATEGORY
                    </span>

                </div>



                {/* CATEGORY CARDS */}

                <div className="insight-library-category-list">

                    {videoCategories.map((category, index) => {

                        const Icon =
                            categoryIcons[category.id] || Users;


                        return (

                            <Link
                                key={category.id}
                                to={`/insights/videos/${category.id}`}
                                className="insight-library-category-row"
                            >


                                {/* NUMBER */}

                                <div className="insight-library-category-number">

                                    {category.number ||
                                        String(index + 1).padStart(2, "0")}

                                </div>



                                {/* ICON */}

                                <div className="insight-library-category-icon">

                                    <Icon
                                        size={27}
                                        strokeWidth={1.8}
                                    />

                                </div>



                                {/* CONTENT */}

                                <div className="insight-library-category-content">

                                    <div className="insight-library-category-label">
                                        VIDEO SERIES
                                    </div>

                                    <h2>
                                        {category.title}
                                    </h2>

                                    <p>
                                        {category.description}
                                    </p>

                                </div>



                                {/* ARROW */}

                                <div className="insight-library-category-arrow">

                                    <ArrowRight
                                        size={25}
                                    />

                                </div>


                            </Link>

                        );

                    })}

                </div>

            </section>


        </main>
    );
}


export default VideoLibrary;