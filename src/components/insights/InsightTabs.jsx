import {
    FileText,
    MessageCircle,
    Zap,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

import "../../styles/insights.css";


const tabs = [
    {
        id: "videos",
        label: "Videos",
        path: "/insights/videos",
        type: "youtube",
    },
    {
        id: "articles",
        label: "Articles",
        path: "/insights/articles",
        icon: FileText,
    },
    {
        id: "reflections",
        label: "Reflections",
        path: "/insights/reflections",
        icon: MessageCircle,
    },
    {
        id: "quick-bites",
        label: "Quick Bites",
        path: "/insights/quick-bites",
        icon: Zap,
    },
];


function InsightTabs() {

    return (
        <div className="insight-tabs-wrapper">

            <nav
                className="insight-tabs"
                aria-label="Insights categories"
            >

                {tabs.map((tab) => {

                    const Icon = tab.icon;

                    return (
                        <Link
                            key={tab.id}
                            to={tab.path}
                            className="insight-tab"
                            data-label={tab.label}
                            aria-label={tab.label}
                        >

                            <span className="insight-tab-icon-wrap">

                                {tab.type === "youtube" ? (

                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="insight-tab-youtube"
                                    />

                                ) : (

                                    <Icon
                                        className="insight-tab-icon"
                                        size={30}
                                        strokeWidth={1.8}
                                    />

                                )}

                            </span>

                            <span className="insight-tab-label">
                                {tab.label}
                            </span>

                        </Link>
                    );
                })}

            </nav>

        </div>
    );
}


export default InsightTabs;