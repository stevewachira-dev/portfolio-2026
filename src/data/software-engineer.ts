import { ResumeData } from "./types";
import { PERSONAL_INFO } from "./shared";

export const softwareEngineerData: ResumeData = {
  ...PERSONAL_INFO,
  role: "Software Engineer",
  resumeFile: "/Steve-Wachira-SE-Resume.pdf",
  summary:
    "Front-end Engineer with strong expertise building fast, scalable apps using React, Vue, and TypeScript. Led development of VibeCheck, a desktop security audit tool that uncovered 150+ critical AI-built app issues and cut manual review time, and created an admin platform at Trender.ai that saved $35K in expenses and boosted user-management efficiency by 30%. Proven success in fast-paced startup environments and cross-functional teams. Aiming to apply full-stack front-end skills to deliver high-impact, user-focused products.",
  skills: [
    {
      items: [
        "React",
        "Vue",
        "Tauri",
        "TypeScript",
        "React Native",
        "Node.js",
        "HIPAA",
        "Cybersecurity tools",
        "Front-end Development",
        "Jest/Enzyme",
        "HTML/SCSS/JSS",
        "Material-UI",
        "Framer Motion",
        "Tailwindn CSS",
        "Mongo",
      ],
    },
  ],
  experience: [
    {
      company: "Stealth Healthcare Startup",
      title: "Software Engineer",
      dates: "Jul 2025 - Present",
      location: "Florida, US",
      bullets: [
        "Signed AWS BAA and enabled CloudTrail to establish HIPAA-compliant infrastructure for a live healthcare application handling protected health information",
        "Architected a custom VPC with public/private subnets across 2 availability zones, NAT Gateway, Internet Gateway, and VPC endpoints for S3 and Bedrock to keep all PHI traffic off the public internet",
        "Provisioned Aurora Serverless v2 (PostgreSQL) for prod and dev environments and migrated 17 tables of live patient data from Supabase using a temporary bastion EC2",
        "Built Lambda functions and API Gateway as the serverless backend and deployed CloudFront distributions for the React frontend across prod and dev environments",
        "Integrated Amazon Bedrock with Claude Haiku 4.5 and Sonnet 4.6 as the AI layer, routing all model traffic through a private VPC endpoint",
        "Integrated Stripe from frontend to backend, enabling recurring revenue and active paying customers",
      ],
    },
    {
      company: "VibeCheck",
      title: "Founder",
      dates: "Nov 2024 - Apr 2026",
      location: "Boston, MA",
      bullets: [
        "Built and launched VibeCheck, a local-first desktop security audit tool for AI and no-code app builders, using Vue, Vuetify, and Jest, enabling developers to quickly identify security gaps before release",
        "Discovered over 150+ critical security issues found in AI-built apps using VibeCheck",
        "Implemented automated security scans for exposed secrets, risky prompts, and launch-blocking issues with custom scripts, reducing manual review time and preventing deployment failures",
        "Saved over 2,500 tokens on optimized prompts by refining prompt structures and applying token-reduction techniques, lowering API costs for users",
        "Designed, built, and shipped a notarized macOS desktop app end-to-end",
        "Created a non-technical reporting layer so non-developers can understand security risks",
        "Released the application via GitHub Releases using a Tauri-based desktop client built with React and TypeScript, enabling offline updates and storing all data locally on users' devices",
      ],
    },
    {
      company: "Trender.ai",
      title: "Front-end Engineer",
      dates: "Apr 2022 - Jan 2024",
      location: "Boston, MA",
      bullets: [
        "Saved $35,000 in expenses by assuming additional DevOps, technical customer support, and videography responsibilities, using Docker, CI/CD pipelines, and Jira to streamline workflows",
        "Built an admin platform for monitoring app usage and providing customer support within two sprints, using Vue and TypeScript, which enabled the startup to launch support features ahead of schedule",
        "Developed a user management system that increased team management efficiency by 30%",
        "Engineered integrations with Slack and Trender's API using REST endpoints and Node.js, allowing users to receive real-time notifications and sync data",
      ],
    },
    {
      company: "DYSE",
      title: "Founding Front-end Engineer",
      dates: "Aug 2021 - Mar 2022",
      location: "Boston, MA",
      bullets: [
        "Built and tested the app's frontend infrastructure that received positive and affirmative responses from beta testers and the founders in under 2 sprints",
        "Collaborated with the designer and CTO in peer review sessions to enhance the app's progress, leading to a more maintainable and efficient codebase using Jest/Enzyme for testing",
      ],
    },
    {
      company: "Big Nerd Ranch",
      title: "Web Development Intern",
      dates: "Apr 2021 - Aug 2021",
      location: "Atlanta, GA",
      bullets: [
        "Developed a responsive, test-driven React web application with TypeScript and Jest, consuming REST APIs from the client server; the codebase passed all unit tests and received positive stakeholder feedback",
        "Implemented data-validation scripts and code-review guidelines that raised data quality and reduced coding errors; presented the enhancements to stakeholders",
      ],
    },
  ],
};
