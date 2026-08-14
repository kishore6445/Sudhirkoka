import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import {
    videoCategories,
    videos,
} from "../../data/insightsData";

import "../../styles/video-category.css";


function VideoCard({ video }) {

    return (
        <article className="category-video-card">

            <div className="category-video-image">

                <img
                    src={video.image}
                    alt={video.title}
                />

                <div className="category-video-overlay" />


                <div className="category-video-play">

                    <Play
                        size={19}
                        fill="currentColor"
                        strokeWidth={0}
                    />

                </div>


                <span className="category-video-duration">
                    {video.duration}
                </span>

            </div>


            <div className="category-video-content">

                <span className="category-video-label">
                    {video.categoryLabel}
                </span>


                <h2>
                    {video.title}
                </h2>


                <p>
                    {video.description}
                </p>


                <button
                    className="category-video-watch"
                    type="button"
                >
                    Watch

                    <ArrowRight size={18} />

                </button>

            </div>

        </article>
    );
}


function VideoCategory() {

    const { category } = useParams();


    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [category]);


    const currentCategory = videoCategories.find(
        (item) => item.id === category
    );


    const categoryVideos = videos.filter(
        (video) => video.category === category
    );


    /* =========================================
       INVALID CATEGORY
    ========================================= */

    if (!currentCategory) {

        return (
            <main className="video-category-page">

                <section className="video-category-empty">

                    <span>
                        VIDEOS
                    </span>

                    <h1>
                        Category not found.
                    </h1>


                    <Link
                        to="/insights/videos"
                        className="video-category-back"
                    >
                        <ArrowLeft size={18} />

                        <span>
                            Back to Videos
                        </span>
                    </Link>

                </section>

            </main>
        );
    }


    return (
        <main className="video-category-page">


            {/* =========================================
                HERO
            ========================================= */}

            <section className="video-category-header">

                <Link
                    to="/insights/videos"
                    className="video-category-back"
                >
                    <ArrowLeft size={18} />

                    <span>
                        Back to Videos
                    </span>
                </Link>


                <div className="video-category-header-grid">

                    <div>

                        <div className="video-category-eyebrow">

                            <span>
                                03
                            </span>

                            <i />

                            <span>
                                VIDEOS
                            </span>

                        </div>


                        <h1>

                            {currentCategory.title}

                            <br />

                            <span>
                                {currentCategory.highlightedTitle}
                            </span>

                        </h1>

                    </div>


                    <div className="video-category-intro">

                        <p>
                            {currentCategory.description}
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                VIDEO CONTENT
            ========================================= */}

            <section className="video-category-content">

                <div className="video-category-toolbar">

                    <span className="video-count">

                        {categoryVideos.length}{" "}

                        {categoryVideos.length === 1
                            ? "VIDEO"
                            : "VIDEOS"}

                    </span>

                </div>


                {categoryVideos.length > 0 ? (

                    <div className="category-video-grid">

                        {categoryVideos.map((video) => (

                            <VideoCard
                                key={video.id}
                                video={video}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="video-category-no-content">

                        <span>
                            COMING SOON
                        </span>

                        <h2>
                            More videos are on the way.
                        </h2>

                        <p>
                            We're preparing more videos for this category.
                        </p>

                    </div>

                )}

            </section>

        </main>
    );
}

export default VideoCategory;