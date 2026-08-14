import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/images/hero/hero-image.png";
export const heroData = {
    eyebrow: "People. Leadership. Growth.",

    title: {
        lineOne: "Strong People.",
        lineTwo: "Strong Leaders.",
        lineThree: "Strong Businesses.",
    },

    description:
        "Helping organizations build accountable teams, impactful leaders and scalable people systems.",

    buttons: {
        primary: {
            label: "Let's Talk",
            icon: ArrowRight,
            href: "#contact",
        },

        secondary: {
            label: "Watch Intro Video",
            icon: Play,
        },
    },

    image: heroImage,

    purpose: {
        label: "Our Purpose",
        text:
            "To empower leaders and organizations to unlock the full potential of their people.",
    },

    belief: {
        label: "Our Belief",
        text:
            "When people grow, organizations grow. And when leaders lead well, businesses win.",
    },
};