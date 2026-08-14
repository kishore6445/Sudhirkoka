import {
  Users,
  Target,
  Handshake,
  TrendingUp,
  UserMinus,
  RefreshCw,
} from "lucide-react";
export const challengesData = [
  
  {
    // id: "01",
    // label: "Projects move slowly",
    // explanation:
    //   "When decision rights are unclear, every project waits on a meeting that hasn't happened yet.",
    // impact:[
    //   "Timelines slip", "launches get delayed", and momentum quietly erodes across the organisation.",]
    // response:
    //   "Clarify who owns each decision, and give them the authority to make it without escalation.",

      id: "01",

      icon: Users,

      label: "Weak Leadership Pipeline",

      explanation:
        "Many organisations struggle to identify, develop, and prepare future leaders, creating leadership gaps that impact long-term business success.",

      impact: [
        "Limited succession planning",
        "Low team productivity",
        "Reduced organisational agility",
      ],
  },

  {
    // id: "02",
    // label: "Leaders avoid difficult conversations",
    // explanation:
    //   "Discomfort gets postponed until it becomes a resignation, a missed deadline, or a quiet resentment.",
    // impact:
    //   "Small issues compound into larger performance and trust problems that are harder to reverse.",
    // response:
    //   "Build the habit of early, direct feedback — before the conversation becomes unavoidable.",

      id: "02",

      icon: Target,

      label: "Lack of Accountability",

      explanation:
        "Teams often struggle with ownership and execution because of poor attitude, unclear expectations or lack of motivation.",

      impact: [
        "Missed deadlines",
        "Poor execution",
        "Low ownership culture",
      ],
  },

  {
    // id: "03",
    // label: "Managers become overwhelmed",
    // explanation:
    //   "New managers are given authority without ever being taught how to use it.",
    // impact:
    //   "Burned-out managers under-deliver, and their teams absorb the strain.",
    // response:
    //   "Invest in manager training before promotion, not after the first crisis.",
      id: "03",

      icon: Handshake,

      label: "Poor Team Collaboration",

      explanation:
        "Departments work in silos, communication breaks down, and teams struggle to collaborate toward shared organisational goals.",

      impact: [
        "Communication gaps",
        "Reduced Efficiency",

        "Low team engagement",
      ],
  },

  {
    // id: "04",
    // label: "Teams work in silos",
    // explanation:
    //   "When shared goals are unclear, departments optimise for themselves instead of the organisation.",
    // impact:
    //   "Duplicated effort, competing priorities, and slower cross-functional delivery.",
    // response:
    //   "Anchor every team to one shared scorecard, not department-level metrics alone.",

    id: "04",

      icon: TrendingUp,

      label: "Scaling Challenges",

      explanation:
        "Business growth often outpaces leadership capability and people systems, making it difficult to scale sustainably.",

      impact: [
        "Operational bottlenecks",
        "Leadership overload",
        "Inconsistent execution",
      ],
  },

  {
    // id: "05",
    // label: "High performers lose motivation",
    // explanation:
    //   "Talented people disengage quietly, long before they announce they're leaving.",
    // impact:
    //   "Your best people become your biggest flight risk, often without warning.",
    // response:
    //   "Create visible growth paths and check in before performance dips, not after.",

    id: "05",

      icon: UserMinus,

      label: "Talent Retention",

      explanation:
        "High-performing employees leave when they lack growth opportunities, meaningful leadership, and a positive organisational culture.",

      impact: [
        "High attrition",
        "Loss of critical talent",
        "Increased hiring costs",
      ],
  },

  {
    // id: "06",
    // label: "Employee accountability declines",
    // explanation:
    //   "Without clear ownership, commitments become suggestions everyone quietly ignores.",
    // impact:
    //   "Deadlines become guidelines, and standards drift lower across the team.",
    // response:
    //   "Make ownership explicit and visible — one name per commitment, every time.",

     id: "06",

      icon: RefreshCw,

      label: "Resistance to Change",

      explanation:
        "Organisations often struggle to embrace change because leaders and teams lack clarity, confidence, and alignment during transformation.",

      impact: [
        "Slow adoption",
        "Reduced productivity",
        "Change fatigue",
      ],
  },
];