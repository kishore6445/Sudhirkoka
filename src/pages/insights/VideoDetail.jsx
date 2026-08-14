import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import {
    videos,
    videoCategories,
} from "../../data/insightsData";

import "../../styles/video-detail.css";


function VideoDetail() {

    const { category, videoId } = useParams();


    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [category, videoId]);


    /* =================================================
       FIND VIDEO
    ================================================= */

    const video = videos.find(
        (item) =>
            item.id === videoId &&
            item.category === category
    );


    /* =================================================
       FIND CATEGORY
    ================================================= */

    const currentCategory = videoCategories.find(
        (item) => item.id === category
    );


    /* =================================================
       INVALID VIDEO
    ================================================= */

    if (!video) {

        return (
            <main className="video-detail-page">

                <section className="video-detail-empty">

                    <span>
                        VIDEO
                    </span>

                    <h1>
                        Video not found.
                    </h1>

                    <Link
                        to="/insights/videos"
                        className="video-detail-back"
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
        <main className="video-detail-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="video-detail-hero">

                <Link
                    to={`/insights/videos/${category}`}
                    className="video-detail-back"
                >
                    <ArrowLeft size={18} />

                    <span>
                        Back to {currentCategory?.title || "Videos"}
                    </span>
                </Link>


                <div className="video-detail-hero-content">


                    {/* EYEBROW */}

                    <div className="video-detail-eyebrow">

                        <span>
                            VIDEO
                        </span>

                        <i />

                        <span>
                            {video.categoryLabel || video.category}
                        </span>

                    </div>


                    {/* TITLE */}

                    <h1>
                        {video.title}
                    </h1>


                    {/* META */}

                    <div className="video-detail-meta">

                        <span>
                            {video.duration}
                        </span>

                        <span>
                            •
                        </span>

                        <span>
                            {currentCategory?.title}
                        </span>

                    </div>

                </div>

            </section>


            {/* =================================================
                VIDEO
            ================================================= */}

            <section className="video-detail-content">

                <div className="video-detail-player">

                    <img
                        src={video.image}
                        alt={video.title}
                    />

                    <div className="video-detail-player-overlay" />

                    <div className="video-detail-play">

                        <Play
                            size={32}
                            fill="currentColor"
                            strokeWidth={0}
                        />

                    </div>

                    <span className="video-detail-duration">
                        {video.duration}
                    </span>

                </div>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <div className="video-detail-description">

                    <div className="video-detail-description-label">
                        ABOUT THIS VIDEO
                    </div>

                    <p>
                        {video.description}
                    </p>

                </div>


                {/* =================================================
                    YOUTUBE CTA
                ================================================= */}

                <div className="video-detail-watch">

                    <div>

                        <span>
                            WATCH THE FULL VIDEO
                        </span>

                        <p>
                            Continue watching this conversation
                            on our YouTube channel.
                        </p>

                    </div>


                    <a
                        href="#"
                        className="video-detail-youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            Watch on YouTube
                        </span>

                        <ArrowRight size={19} />

                    </a>

                </div>


                {/* =================================================
                    BACK
                ================================================= */}

                <div className="video-detail-footer">

                    <Link
                        to={`/insights/videos/${category}`}
                    >
                        <ArrowLeft size={18} />

                        <span>
                            More {currentCategory?.title || "Videos"}
                        </span>
                    </Link>

                </div>

            </section>

        </main>
    );
}


export default VideoDetail;