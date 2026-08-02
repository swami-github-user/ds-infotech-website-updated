import {
  Cloud,
  BrainCircuit,
  Building2,
  Code2,
  Server,
  Cpu,
  GitBranchPlus,
  Layers3,
  ShieldCheck,
  Boxes,
  Sparkles,
} from "lucide-react";

export const solutions = [
  {
    title: "AWS Cloud Practitioner",
    description:
      "Start your cloud journey by learning AWS fundamentals, core services, pricing, billing and security best practices.",
    icon: Cloud,
    level: "Foundational",
    badges: ["Cloud", "Security", "Billing"],
  },

  {
    title: "AWS AI Practitioner",
    description:
      "Build foundational AI skills using AWS AI services, Amazon Bedrock and responsible AI practices.",
    icon: Sparkles,
    trending: true,
    badges: ["AI", "Bedrock", "Prompting"],
  },

  {
    title: "AWS Solutions Architect Associate",
    description:
      "Design secure, scalable and highly available AWS architectures using real-world enterprise scenarios.",
    icon: Building2,
    featured: true,
    badges: ["EC2", "VPC", "S3"],
  },

  {
    title: "AWS Developer Associate",
    description:
      "Develop cloud-native applications using Lambda, API Gateway, DynamoDB and modern AWS developer services.",
    icon: Code2,
    badges: ["Lambda", "API", "DynamoDB"],
  },

  {
    title: "AWS SysOps Administrator",
    description:
      "Deploy, monitor and operate production workloads using AWS management and monitoring services.",
    icon: Server,
    badges: ["CloudWatch", "EC2", "IAM"],
  },

  {
    title: "AWS Machine Learning Engineer Associate",
    description:
      "Build, train and deploy machine learning models using Amazon SageMaker and MLOps practices.",
    icon: BrainCircuit,
    badges: ["SageMaker", "ML", "MLOps"],
  },

  {
    title: "AWS DevOps Engineer Professional",
    description:
      "Master CI/CD pipelines, Infrastructure as Code and enterprise DevOps automation on AWS.",
    icon: GitBranchPlus,
    badges: ["CI/CD", "CloudFormation", "EKS"],
  },

  {
    title: "AWS Solutions Architect Professional",
    description:
      "Design complex enterprise-scale AWS architectures including hybrid and multi-account environments.",
    icon: Layers3,
    badges: ["Hybrid", "Networking", "Migration"],
  },

  {
    title: "AWS Security Specialty",
    description:
      "Protect enterprise AWS workloads using IAM, KMS, GuardDuty, Security Hub and AWS security best practices.",
    icon: ShieldCheck,
    badges: ["IAM", "KMS", "GuardDuty"],
  },

  {
    title: "Running Containers on Amazon EKS",
    description:
      "Deploy, manage and scale Kubernetes workloads using Amazon Elastic Kubernetes Service.",
    icon: Boxes,
    badges: ["EKS", "Kubernetes", "Containers"],
  },

  {
    title: "Generative AI on AWS (Amazon Bedrock)",
    description:
      "Build enterprise Generative AI applications using Amazon Bedrock, Knowledge Bases, Agents and RAG.",
    icon: Cpu,
    badges: ["Bedrock", "Agents", "RAG"],
  },
];