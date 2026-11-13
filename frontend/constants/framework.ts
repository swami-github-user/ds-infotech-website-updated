import {
  ClipboardCheck,
  FileText,
  Laptop,
  Presentation,
  BadgeCheck,
  BarChart3,
} from "lucide-react";

export const framework = [
  {
    title: "Requirement Discussion",
    description:
      "We understand the audience, current skill level, technology stack and the outcomes the training must deliver.",
    icon: ClipboardCheck,
  },
  {
    title: "Tailored Outline & Proposal",
    description:
      "You receive a day-wise outline, lab plan and commercial proposal, adjusted until it matches your requirement.",
    icon: FileText,
  },
  {
    title: "Lab Environment Setup",
    description:
      "Labs are prepared and tested in advance, in client-provided AWS accounts or sandbox accounts with cost guardrails.",
    icon: Laptop,
  },
  {
    title: "Instructor-led Delivery",
    description:
      "Live, interactive sessions driven by demos, guided labs and Q&A, scheduled around your teams' working hours.",
    icon: Presentation,
  },
  {
    title: "Assessment & Feedback",
    description:
      "Pre- and post-training assessments and daily feedback show progress and let us adjust pace during the program.",
    icon: BadgeCheck,
  },
  {
    title: "Completion Report",
    description:
      "A closing report covers attendance, assessment results, feedback scores and recommended next steps for the team.",
    icon: BarChart3,
  },
];
