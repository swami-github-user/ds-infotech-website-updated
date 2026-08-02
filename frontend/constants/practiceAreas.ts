import {
  Cloud,
  Bot,
  Boxes,
  Cpu,
  Workflow,
  Server,
} from "lucide-react";

export const practiceAreas = [
  {
    title: "Cloud Engineering",
    description:
      "Design, migration and operations for enterprise AWS environments.",
    icon: Cloud,
    badges: ["AWS", "Lambda", "EKS"],
  },
  {
    title: "DevOps Transformation",
    description:
      "CI/CD pipelines, automation and platform engineering.",
    icon: Workflow,
    badges: ["Git", "Jenkins", "Docker"],
  },
  {
    title: "Generative AI",
    description:
      "Enterprise AI solutions with Amazon Bedrock and modern LLMs.",
    icon: Bot,
    badges: ["Bedrock", "LLMs", "RAG"],
  },
  {
    title: "AI Agents",
    description:
      "Build autonomous AI workflows using Agentic AI and MCP.",
    icon: Cpu,
    badges: ["Agents", "MCP", "Automation"],
  },
  {
    title: "Container Platforms",
    description:
      "Docker, Kubernetes and Amazon EKS for cloud-native applications.",
    icon: Boxes,
    badges: ["Docker", "Kubernetes", "EKS"],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Provision cloud infrastructure using Terraform and CloudFormation.",
    icon: Server,
    badges: ["Terraform", "IaC", "GitOps"],
  },
];