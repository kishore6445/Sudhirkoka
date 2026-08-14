import { ArrowDown, ArrowLeft, BriefcaseBusiness, Crown, Gauge, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { insightsData } from "./insightsData.js";
import VideoCard from "./VideoCard.jsx";
import "./StoryPanel.jsx";

function VideosPage() {
    return (
        <main className="videos-page">
            <div className="videos-page__container">
                <Link to="/#insights" className="videos-page__back"><ArrowLeft size={17} /> Back to Insights</Link>
                {/* <div className="videos-page__kicker">Leadership video library</div> */}
                <h1>Leadership videos for the work that matters.</h1>
                {/* <p className="videos-page__intro">A practical library of ideas, frameworks and conversations to help leaders build better organisations.</p> */}
                <nav className="videos-page__categories" aria-label="Video categories">
                    {[{ label: "Leadership Foundations", icon: Crown }, { label: "Teams & Performance", icon: Gauge }, { label: "Practical Frameworks", icon: BriefcaseBusiness }, { label: "Leadership Voices", icon: MessageCircle }].map(({ label, icon: Icon }, index) => <a href={`#video-section-${String(index + 1).padStart(2, "0")}`} key={label}><Icon size={25} /><span>{label}</span></a>)}
                </nav>
                <div className="videos-page__sections">
                    {insightsData.videoSections.map((section) => (
                        <section className="video-section" id={`video-section-${section.number}`} key={section.number}>
                            <div className="video-section__heading"><span className="video-section__label">{section.number} / {section.label}</span><h2>{section.heading}</h2><span className="video-section__scroll-cue" aria-label="Scroll to watch more videos"><ArrowDown size={18} /></span></div>
                            <div className="video-section__grid">{section.videos.map((title, index) => <VideoCard key={title} video={{ title, category: section.label, duration: ["06:24", "05:31", "07:15", "04:48"][index], image: insightsData.featuredVideos[index % insightsData.featuredVideos.length].image }} />)}</div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default VideosPage;
