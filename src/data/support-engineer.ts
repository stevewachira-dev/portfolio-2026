import { ResumeData } from "./types";
import { PERSONAL_INFO } from "./shared";

export const supportEngineerData: ResumeData = {
  ...PERSONAL_INFO,
  role: "Support Engineer",
  resumeFile: "/Steve-Wachira-Support-Resume.pdf",
  summary:
    "Technical Support Specialist with 7+ years of front-end engineering experience in startup environments. Combines deep product knowledge with hands-on development skills to resolve customer issues, create onboarding resources, and build internal admin tools that streamline support operations. Proven ability to triage bugs, produce tutorial content that reduces support volume, and collaborate cross-functionally to improve the customer experience.",
  skills: [
    {
      category: "Support",
      items: [
        "Ticket Triage & Resolution",
        "Customer Onboarding",
        "Tutorial & Documentation Creation",
        "Bug Reproduction",
        "Escalation Management",
      ],
    },
    {
      category: "Technical",
      items: [
        "React",
        "Vue",
        "TypeScript",
        "Node.js",
        "HIPAA",
        "Cybersecurity tools",
        "HTML/CSS",
        "Jira",
        "REST APIs",
        "CI/CD",
        "Docker",
        "Jest",
        "MongoDB",
        "Tauri",
        "Git",
      ],
    },
  ],
  experience: [
    {
      company: "Stealth Healthcare Startup",
      title: "Software Engineer (Support & Compliance)",
      dates: "Jul 2025 - Present",
      location: "Florida, US",
      bullets: [
        "Built a secure, HIPAA-compliant admin tool for staff to document meeting minutes, account health notes, insurance, tax records, and medical notes",
        "Signed AWS BAA and enabled CloudTrail to establish HIPAA-compliant infrastructure, reducing compliance risk for the healthcare application",
        "Created Cognito user pools for prod and dev environments to replace Supabase Auth, enabling secure identity management for patient-facing features",
        "Integrated Stripe payment processing end-to-end, enabling recurring billing and reducing payment-related support inquiries",
        "Collaborated with CEO and CTO on incident response using Jira and Slack, reducing resolution time for customer-impacting issues",
      ],
    },
    {
      company: "VibeCheck",
      title: "Founder & Technical Support Lead",
      dates: "Nov 2024 - Apr 2026",
      location: "Boston, MA",
      bullets: [
        "Built and launched a desktop security audit tool for AI/no-code builders using Vue, Vuetify, and Jest, identifying 150+ critical security issues",
        "Created a non-technical reporting layer translating complex security findings into plain-language summaries for non-developer users",
        "Designed and shipped a notarized macOS desktop app end-to-end, managing the full release cycle via GitHub Releases",
      ],
    },
    {
      company: "Trender.ai",
      title: "Technical Support & Front-end Engineer",
      dates: "Apr 2022 - Jan 2024",
      location: "Boston, MA",
      bullets: [
        "Resolved customer-submitted support tickets and bugs, diagnosing front-end issues and coordinating fixes to maintain user satisfaction",
        "Produced tutorial videos for clients to streamline onboarding during product iterations, reducing inbound support questions",
        "Built a custom admin platform in Vue and TypeScript within two sprints, enabling the support team to monitor usage, manage accounts, and resolve client disputes",
        "Engineered Slack and API integrations using REST endpoints and Node.js, delivering real-time notifications that improved user satisfaction",
        "Saved $35K by assuming additional DevOps, technical support, and videography responsibilities",
      ],
    },
    {
      company: "DYSE",
      title: "Founding Front-end Engineer",
      dates: "Aug 2021 - Mar 2022",
      location: "Boston, MA",
      bullets: [
        "Built and tested the app's front-end infrastructure, receiving positive feedback from beta testers and founders within two sprints",
      ],
    },
    {
      company: "Big Nerd Ranch",
      title: "Web Development Intern",
      dates: "Apr 2021 - Aug 2021",
      location: "Atlanta, GA",
      bullets: [
        "Developed a responsive, test-driven React app with TypeScript and Jest; implemented data-validation scripts that raised data quality and reduced errors",
      ],
    },
  ],
};
