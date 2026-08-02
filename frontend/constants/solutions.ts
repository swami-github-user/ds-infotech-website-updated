import {
  Cloud,
  Workflow,
  Bot,
  GraduationCap,
} from "lucide-react";

export const solutions = [
  {
    title: "Cloud Adoption Accelerator",
    description:
      "Enable enterprise teams to adopt AWS confidently through structured learning paths and practical workshops.",
    icon: Cloud,
    badges: ["AWS", "Migration", "Architecture"],
  },
  {
    title: "DevOps Excellence Program",
    description:
      "Accelerate software delivery with CI/CD, GitOps, Infrastructure as Code and automation.",
    icon: Workflow,
    badges: ["Jenkins", "Terraform", "GitOps"],
  },
  {
    title: "Enterprise AI Enablement",
    description:
      "Upskill engineering teams on Generative AI, Amazon Bedrock, AI Agents and modern enterprise AI patterns.",
    icon: Bot,
    badges: ["Bedrock", "LLMs", "Agents"],
  },
  {
    title: "Custom Corporate Learning",
    description:
      "Learning paths tailored specifically for your organization's technology roadmap.",
    icon: GraduationCap,
    badges: ["Customized", "Instructor-led", "Hands-on"],
  },
];