import {
    ArrowLeft,
    ArrowRight,
    Play,
    Search,
    PlayCircle,
} from "lucide-react";
import { useState } from "react";
import YouTubeModal from "../../components/insights/YouTubeModal";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import {
    videoCategories,
    videos,
} from "../../data/insightsData";

import "../../styles/video-library.css";


/* =========================================================
   FEATURED VIDEO
========================================================= */

function FeaturedVideo({ video }) {

    if (!video) return null;

    return (
        <article className="video-library-featured">

            <div className="video-library-featured-media">

                <img
                    src={video.image}
                    alt={video.title}
                />

                <div className="video-library-featured-overlay" />

                <div className="video-library-featured-play">
                    <Play
                        size={27}
                        fill="currentColor"
                        strokeWidth={0}
                    />
                </div>

                <span className="video-library-featured-duration">
                    {video.duration}
                </span>

            </div>


            <div className="video-library-featured-info">

                <div className="video-library-featured-label">
                    FEATURED VIDEO
                </div>

                <h2>
                    {video.title}
                </h2>

                <p>
                    {video.description}
                </p>

                <button
                    // to={`/insights/videos/${video.category}/${video.id}`}
                    className="video-library-featured-button"
                    onClick={() => setSelectedVideo(featuredVideo)}
                >
                    <span>Watch Video</span>

                    <ArrowRight size={18} />
                </button>

            </div>

        </article>
    );
}


/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({ category }) {

    const categoryVideos = videos.filter(
        (video) => video.category === category.id
    );

    return (
        <Link
            to={`/insights/videos/${category.id}`}
            className="video-library-category-card"
        >

            <div className="video-library-category-top">

                <span className="video-library-category-number">
                    {category.number}
                </span>

                {/* <div className="video-library-category-icon">
                    <PlayCircle
                        size={25}
                        strokeWidth={1.8}
                    />
                </div> */}

            </div>


            <div className="video-library-category-body">

                <h3>
                    {category.title}
                </h3>

                <p>
                    {category.description}
                </p>

            </div>


            <div className="video-library-category-footer">

                <span>
                    {categoryVideos.length}{" "}
                    {categoryVideos.length === 1
                        ? "Video"
                        : "Videos"}
                </span>

                <span className="video-library-explore">
                    Explore
                    <ArrowRight size={17} />
                </span>

            </div>

        </Link>
    );
}


/* =========================================================
   VIDEO CARD
========================================================= */

function VideoCard({ video }) {

    return (
        <article className="video-library-card">

            <Link
                to={`/insights/videos/${video.category}/${video.id}`}
                className="video-library-card-media"
            >

                <img
                    src={video.image}
                    alt={video.title}
                />

                <div className="video-library-card-overlay" />

                <div className="video-library-card-play">
                    <Play
                        size={20}
                        fill="currentColor"
                        strokeWidth={0}
                    />
                </div>

                <span className="video-library-card-duration">
                    {video.duration}
                </span>

            </Link>


            <div className="video-library-card-content">

                <span className="video-library-card-category">
                    {video.category}
                </span>

                <Link
                    to={`/insights/videos/${video.category}/${video.id}`}
                >
                    <h3>
                        {video.title}
                    </h3>
                </Link>


                <p>
                    {video.description}
                </p>


                <Link
                    to={`/insights/videos/${video.category}/${video.id}`}
                    className="video-library-card-link"
                >
                    Watch

                    <ArrowRight size={17} />
                </Link>

            </div>

        </article>
    );
}


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

const featuredVideo = videos.find(
    (video) => video.featured
);
const [selectedVideo, setSelectedVideo] = useState(null);

const latestVideos = videos.filter(
    (video) => !video.featured
);


    return (

        <main className="video-library-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="video-library-hero">

                <div className="video-library-hero-decoration video-library-hero-decoration-one" />
                <div className="video-library-hero-decoration video-library-hero-decoration-two" />


                <div className="video-library-hero-container">


                    {/* Back */}

                    <Link
                        to="/insights"
                        className="video-library-back"
                    >
                        <ArrowLeft size={18} />

                        <span>
                            Back to Insights
                        </span>
                    </Link>


                    <div className="video-library-hero-grid">


                        {/* LEFT */}

                        <div className="video-library-hero-content">

                            <div className="video-library-eyebrow">

                                <PlayCircle
                                    size={18}
                                    strokeWidth={1.8}
                                />

                                <span>
                                    VIDEO LIBRARY
                                </span>

                            </div>


                            <h1>

                                Ideas.
                                <br />

                                <span>
                                    Insights.
                                </span>

                                <br />

                                Perspectives.

                            </h1>


                            <p>

                                Explore conversations, practical
                                frameworks and leadership ideas designed
                                to help people and organisations grow.

                            </p>


                            {/* Search */}

                            <div className="video-library-search">

                                <Search size={20} />

                                <input
                                    type="text"
                                    placeholder="Search videos by topic, title or keyword..."
                                    aria-label="Search videos"
                                />

                            </div>

                        </div>


                        {/* RIGHT */}

                        <div className="video-library-hero-featured"
                        onClick={() => setSelectedVideo(featuredVideo)}>

                            <FeaturedVideo
                                video={featuredVideo}
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CATEGORIES
            ================================================= */}

            <section className="video-library-categories">

                <div className="video-library-container">


                    <div className="video-library-section-heading">

                        <div>

                            <span className="video-library-section-eyebrow">
                                EXPLORE BY CATEGORY
                            </span>

                            <h2>
                                Browse videos by what
                                <br />
                                interests you.
                            </h2>

                        </div>


                        {/* <Link
                            to="/insights/videos"
                            className="video-library-view-all"
                        >
                            <span>
                                View All Videos
                            </span>

                            <ArrowRight size={18} />

                        </Link> */}

                    </div>


                    <div className="video-library-category-grid">

                        {videoCategories.map((category) => (

                            <CategoryCard
                                key={category.id}
                                category={category}
                            />

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                LATEST VIDEOS
            ================================================= */}

            {/* <section className="video-library-latest">

                <div className="video-library-container">


                    <div className="video-library-latest-heading">

                        <div>

                            <span className="video-library-section-eyebrow">
                                LATEST VIDEOS
                            </span>

                            <h2>
                                Watch something
                                <span>
                                    worth your time.
                                </span>
                            </h2>

                        </div>


                        <span className="video-library-video-count">
                            {videos.length} VIDEOS
                        </span>

                    </div>


                    <div className="video-library-video-grid">

                        {latestVideos.map((video) => (

                            <VideoCard
                                key={video.id}
                                video={video}
                            />

                        ))}

                    </div>

                </div>

            </section> */}

<YouTubeModal
    isOpen={Boolean(selectedVideo)}
    videoUrl={selectedVideo?.youtubeUrl}
    title={selectedVideo?.title}
    onClose={() => setSelectedVideo(null)}
/>

        </main>
    );
}

export default VideoLibrary;