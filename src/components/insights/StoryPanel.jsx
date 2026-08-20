import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

import ourstory from "../../assets/images/insights/our-story.jpg";

import YouTubeModal from "./YouTubeModal";

// import "./StoryPanel.css";


function StoryPanel({ onShareStory }) {

    const [
        isStoryVideoOpen,
        setIsStoryVideoOpen
    ] = useState(false);


    /* =========================================================
       OPEN STORY VIDEO
    ========================================================= */

    const handleOpenStoryVideo = () => {

        setIsStoryVideoOpen(true);

    };


    /* =========================================================
       CLOSE STORY VIDEO
    ========================================================= */

    const handleCloseStoryVideo = () => {

        setIsStoryVideoOpen(false);

    };


    return (
        <>

            <aside className="insight-story-panel">

                <div className="story-panel-top">

                    <span className="story-eyebrow">
                        YOUR STORY
                    </span>


                    <h2>
                        Before you share yours,
                        <br />
                        hear ours.
                    </h2>


                    {/* =================================================
                        OUR STORY VIDEO
                    ================================================= */}

                    <button
                        type="button"
                        className="story-video"
                        onClick={handleOpenStoryVideo}
                        aria-label="Play Our Story video"
                    >

                        <img
                            src={ourstory}
                            alt="Our story"
                        />


                        <div className="story-video-play">

                            <Play
                                size={22}
                                fill="currentColor"
                                strokeWidth={0}
                            />

                        </div>

                    </button>


                    {/* =================================================
                        STORY DESCRIPTION
                    ================================================= */}

                    <div className="story-copy">

                        <p className="story-main-text">

                            Have a story, thought or experience worth
                            sharing with our community?

                            <br />

                            Selected stories may be featured on our website.

                        </p>

                    </div>

                </div>


                {/* =================================================
                    SHARE YOUR STORY
                ================================================= */}

                <button
                    className="share-story-button"
                    type="button"
                    onClick={onShareStory}
                >

                    <span>
                        Share Your Story
                    </span>

                    <ArrowRight size={21} />

                </button>


                <div className="story-decoration" />

            </aside>


            {/* =========================================================
                YOUTUBE MODAL
            ========================================================= */}

            <YouTubeModal
                isOpen={isStoryVideoOpen}

                videoUrl="https://www.youtube.com/watch?v=vsx-UJ4TzWQ"

                title="Our Story"

                onClose={handleCloseStoryVideo}
            />

        </>
    );
}


export default StoryPanel;