import {
  Sparkles,
  Bot,
  GitBranchPlus,
  Boxes,
  Building2,
  BrainCircuit,
} from "lucide-react";

export const solutions = [
  {
    title: "GenAI Builder Bootcamp",
    description:
      "Build production-style Generative AI applications on Amazon Bedrock: prompt engineering, Knowledge Bases, RAG pipelines, guardrails and cost-aware model selection.",
    icon: Sparkles,
    badges: ["3 days", "Bedrock", "RAG", "Guardrails"],
  },
  {
    title: "Agentic AI on AWS",
    description:
      "Design and deploy AI agents with Bedrock Agents, Strands Agents and AgentCore, covering tool use, memory, multi-agent patterns and observability.",
    icon: Bot,
    badges: ["2 days", "Agents", "AgentCore", "Strands"],
  },
  {
    title: "AWS DevOps Accelerator",
    description:
      "Automate delivery end to end: CI/CD with CodePipeline and GitHub Actions, Infrastructure as Code with CloudFormation and Terraform, and monitoring with CloudWatch.",
    icon: GitBranchPlus,
    badges: ["3 days", "CI/CD", "IaC", "Observability"],
  },
  {
    title: "Containers to Kubernetes on AWS",
    description:
      "Go from Docker fundamentals to running production workloads on Amazon ECS and EKS, including Helm, GitOps with Argo CD, scaling and security.",
    icon: Boxes,
    badges: ["3 days", "Docker", "EKS", "GitOps"],
  },
  {
    title: "Cloud Architecture on AWS",
    description:
      "Design secure, resilient and cost-optimized architectures across networking, compute, storage and databases, with Well-Architected reviews of real scenarios.",
    icon: Building2,
    badges: ["3 days", "VPC", "Resilience", "Cost"],
  },
  {
    title: "Machine Learning & MLOps on AWS",
    description:
      "Build, train and deploy models with Amazon SageMaker, then operationalize them with pipelines, model registry, monitoring and automated retraining.",
    icon: BrainCircuit,
    badges: ["3 days", "SageMaker", "Pipelines", "MLOps"],
  },
];
