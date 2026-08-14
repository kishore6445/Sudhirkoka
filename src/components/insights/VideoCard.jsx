// src/components/insights/VideoCard.jsx

import { Play } from "lucide-react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
    return (
        <Link
            to={`/insights/videos/${video.category}/${video.id}`}
            className="video-card"
        >
            <div className="video-card__media">

                <img
                    src={video.image}
                    alt={video.title}
                />

                <div className="video-card__overlay"></div>

                <span className="video-card__play">
                    <Play
                        size={16}
                        fill="currentColor"
                    />
                </span>

                <span className="video-card__duration">
                    {video.duration}
                </span>

            </div>

            <div className="video-card__meta">
                <span>VIDEO</span>

                <h3>{video.title}</h3>
            </div>
        </Link>
    );
}

export default VideoCard;