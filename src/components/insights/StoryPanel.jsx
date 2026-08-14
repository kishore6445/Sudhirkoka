function StoryPanel({ onShareStory }) {
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
                onClick={onShareStory}
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