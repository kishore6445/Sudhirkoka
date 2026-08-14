import {
    PlayCircle,
    FileText,
    MessageCircle,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../../styles/insights.css";


const tabs = [
    {
        id: "videos",
        label: "Videos",
        icon: PlayCircle,
        path: "/insights/videos",
    },
    {
        id: "articles",
        label: "Articles",
        icon: FileText,
        path: "/insights/articles",
    },
    {
        id: "reflections",
        label: "Reflections",
        icon: MessageCircle,
        path: "/insights/reflections",
    },
    {
        id: "quick-bites",
        label: "Quick Bites",
        icon: Zap,
        path: "/insights/quick-bites",
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
                        >

                            <Icon
                                className="insight-tab-icon"
                                size={25}
                                strokeWidth={1.8}
                            />

                            <span>
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