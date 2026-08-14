// src/components/insights/FeaturedVideo.jsx

import { Play } from "lucide-react";

function FeaturedVideo() {
    return (
        <div className="featured-video">

            <div className="featured-video__media">
                <img
                    src="/assets/insights/featured-video.jpg"
                    alt="Featured leadership video"
                />

                <div className="featured-video__overlay"></div>

                <button
                    className="featured-video__play"
                    aria-label="Play featured video"
                >
                    <Play size={24} fill="currentColor" />
                </button>

                <div className="featured-video__content">
                    <span>FEATURED VIDEO</span>

                    <h3>
                        How Great Leaders Build
                        High-Performing Teams
                    </h3>

                    <small>08:45 min</small>
                </div>
            </div>

            <div className="featured-video__title">
                <span>LEADERSHIP • FEATURED</span>

                <h3>
                    How Great Leaders Build
                    High-Performing Teams
                </h3>
            </div>

        </div>
    );
}

export default FeaturedVideo;