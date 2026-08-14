import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import InsightTabs from "../../components/insights/InsightTabs";
import "../../styles/insights.css";


const videos = [
    {
        id: 1,
        image: "/images/insights/featured-video.jpg",
        category: "LEADERSHIP",
        title: "Why Great Performers Don't Always Become Great Leaders",
        description:
            "The instincts that make someone excellent individually can actively work against them the moment they lead others.",
        duration: "06:24",
        featured: true,
    },
    {
        id: 2,
        image: "/images/insights/video-2.jpg",
        category: "ORGANISATION",
        title: "Every Business Problem Has a People Story",
        description:
            "Understanding the people behind a business challenge can reveal what systems and processes often miss.",
        duration: "05:31",
    },
    {
        id: 3,
        image: "/images/insights/video-3.jpg",
        category: "TEAMS",
        title: "The Leadership Mistakes That Destroy Team Performance",
        description:
            "Small leadership mistakes can create large consequences for trust, accountability and team performance.",
        duration: "07:15",
    },
];


function PlayButton({ large = false }) {

    return (
        <div
            className={`video-play-button ${
                large ? "large" : ""
            }`}
        >

            <Play
                size={large ? 27 : 18}
                fill="currentColor"
                strokeWidth={0}
            />

        </div>
    );
}


function VideoCard({
    video,
    featured = false,
}) {

    return (

        <article
            className={`insight-video-card ${
                featured
                    ? "featured-video-card"
                    : "small-video-card"
            }`}
        >

            <div className="insight-video-image-wrapper">

                <img
                    src={video.image}
                    alt={video.title}
                    className="insight-video-image"
                />

                <PlayButton
                    large={featured}
                />

                <span className="video-duration">
                    {video.duration}
                </span>

            </div>


            <div className="insight-video-content">

                <span className="video-category">
                    {video.category}
                </span>


                <h3>
                    {video.title}
                </h3>


                <p>
                    {video.description}
                </p>


                <Link
                    to={`/insights/videos`}
                    className="watch-link"
                >

                    <span>
                        Watch
                    </span>

                    <ArrowRight size={18} />

                </Link>

            </div>

        </article>
    );
}


function StoryPanel() {

    return (

        <aside className="insight-story-panel">

            <div className="story-panel-top">

                <span className="story-eyebrow">
                    OUR STORY
                </span>


                <h2>
                    Before you share yours,
                    <br />
                    hear ours.
                </h2>


                <div className="story-video">

                    <img
                        src="/images/insights/our-story.jpg"
                        alt="Our story"
                    />


                    <div className="story-video-play">

                        <Play
                            size={22}
                            fill="currentColor"
                            strokeWidth={0}
                        />

                    </div>

                </div>


                <div className="story-copy">

                    <p className="story-main-text">
                        Have a story, thought or experience worth
                        sharing with our community?
                    </p>


                    <p className="story-secondary-text">
                        Selected stories may be featured on our website.
                    </p>

                </div>

            </div>


            <button
                className="share-story-button"
                type="button"
            >

                <span>
                    Share Your Story
                </span>

                <ArrowRight size={21} />

            </button>


            <div className="story-decoration" />

        </aside>
    );
}


function Insights() {

    return (

        <section
            className="insights-section"
            id="insights"
        >

            <div className="insights-container">


                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div className="insights-header">

                    <div className="insights-header-main">


                        {/* Eyebrow */}

                        <div className="section-eyebrow">

                            <span>
                                02
                            </span>

                            <i />

                            <span>
                                INSIGHTS
                            </span>

                        </div>


                        {/* Heading */}

                        <h2 className="insights-heading">

                            Leadership is not learned once.

                            <br />

                            It is{" "}

                            <span>
                                developed every day.
                            </span>

                        </h2>


                        {/* Description */}

                        <p className="insights-description">

                            Practical leadership ideas, articles,
                            videos and reflections drawn from decades
                            of working with organisations.

                        </p>

                    </div>


                    {/* Browse All */}

                    <div className="insights-header-action">

                        <Link to="/insights/videos">

                            <span>
                                Browse All Insights
                            </span>

                            <ArrowRight size={20} />

                        </Link>

                    </div>

                </div>


                {/* =================================================
                    INSIGHTS NAVIGATION
                ================================================= */}

                <InsightTabs />


                {/* =================================================
                    FEATURED CONTENT
                    ALWAYS SHOWN ON INSIGHTS LANDING PAGE
                ================================================= */}

                <div className="insights-content">


                    {/* LEFT — VIDEOS */}

                    <div className="insights-video-area">

                        <VideoCard
                            video={videos[0]}
                            featured
                        />


                        <div className="small-videos-grid">

                            <VideoCard
                                video={videos[1]}
                            />

                            <VideoCard
                                video={videos[2]}
                            />

                        </div>

                    </div>


                    {/* RIGHT — OUR STORY */}

                    <StoryPanel />

                </div>

            </div>

        </section>
    );
}


export default Insights;