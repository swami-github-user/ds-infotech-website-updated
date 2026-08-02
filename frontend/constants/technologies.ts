export interface Technology {
  name: string;
  category: string;
}

export const technologies: Technology[] = [
  {
    name: "AWS",
    category: "Cloud"
  },
  {
    name: "Docker",
    category: "Containers"
  },
  {
    name: "Kubernetes",
    category: "Orchestration"
  },
  {
    name: "Terraform",
    category: "IaC"
  },
  {
    name: "Git",
    category: "Version Control"
  },
  {
    name: "GitHub",
    category: "DevOps"
  },
  {
    name: "Jenkins",
    category: "CI/CD"
  },
  {
    name: "Linux",
    category: "Operating System"
  },
  {
    name: "Python",
    category: "Programming"
  },
  {
    name: "Amazon Bedrock",
    category: "Generative AI"
  },
  {
    name: "Amazon Q",
    category: "AI Assistant"
  },
  {
    name: "OpenSearch",
    category: "Analytics"
  }
];