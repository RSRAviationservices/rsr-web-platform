export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
  focus?: string[];
}

// Tier 1: Directors
export const directors: TeamMember[] = [
  {
    name: "Suresh Rahangdale",
    title: "Director",
    bio: "18+ years aligning OEM relationships and global sourcing to program timelines, availability, and cost discipline.",
    focus: [
      "Drives RSR’s sales vision and growth across aerospace and defence sectors.",
      "Builds long-term partnerships with global OEMs and distributors to expand market reach",
      "Leads the business development team to achieve strategic and revenue goals",
    ],
    image: "/images/team/directors/directors1.png",
  },
  {
    name: "Reena Paigude",
    title: "Director",
    bio: "18+ years leading controlled storage, hazmat compliance, and documentation accuracy to meet audit standards.",
    focus: [
      "Leads operations and supply management with a focus on paint and surface treatment processes",
      "Oversees end-to-end material flow, vendor relations, and global supply chain efficiency",
      "Drives process excellence, resource optimization, and quality assurance",
    ],
    image: "/images/team/directors/directors2.png",
  },
];

// Tier 2: VPs
export const vps: TeamMember[] = [
  {
    name: "Pulak Sen",
    title: "VP - BD & PR",
    bio: "Veteran aviation journalist with 37+ years in aerospace reporting and strategic advisory.",
    focus: [
      "Industry relations & strategic partnerships",
      "Government policy advocacy",
      "Brand positioning & stakeholder engagement",
    ],
    image: "/images/team/managers/manager4.jpeg",
  },
  {
    name: "Nimish Kadam",
    title: "VP - SCM & BD",
    bio: "Supply chain specialist, formerly with Boeing, driving strategic sourcing and business development.",
    focus: [
      "Global supply chain optimization",
      "Vendor qualification & risk management",
      "Strategic sourcing & procurement excellence",
    ],
    image: "/images/team/managers/manager5.jpeg",
  },
];

// Tier 3: General Managers
export const generalManagers: TeamMember[] = [
  {
    name: "Sarika Malusare",
    title: "General Manager",
    bio: "10+ years orchestrating day-to-day operations, resource planning, and cross-functional cadence.",
    focus: [
      "Capacity planning & SLA tracking",
      "Process standardization",
      "Performance & risk mitigation",
    ],
    image: "/images/team/managers/manager2.png",
  },
  
];

// Tier 4: Business Development Managers & Leads
export const leadsAndSpecialists: TeamMember[] = [
  
  {
    name: "Mrunali Dhargave",
    title: "Asst. General Manager, Sales & Defence",
    bio: "7+ years managing key accounts and ensuring technical compliance for defence programs.",
    focus: [
      "Manages key government and defence accounts, ensuring compliance with technical and contractual requirements",
      "Builds strong client relationships and strategic alliances with OEMs and defence organizations",
    ],
    image: "/images/team/sales/sales1.png",
  },
  {
    name: "Shubham Rahangdale",
    title: "Head of Sales And Marketing",
    bio: "4+ years coordinating logistics, shipping documentation, and dispatch accuracy.",
    focus: [
      "Responsible for lead generation, client communication, quotation preparation, and negotiation to achieve sales targets.",
      "Coordinated with technical and procurement teams to ensure smooth order processing and customer satisfaction.",
      "Contributed to expanding market presence and maintaining long-term partnerships with key aviation clients",
    ],
    image: "/images/team/sales/sales3.png",
  },
  
  {
    name: "Swapnil Mishra",
    title: "Business Development Manager - Aerospace",
    bio: "5+ years supporting customer consultations, product selection, and order coordination.",
    focus: [
      "Drives business growth through strategic engagement with aerospace OEMs and MROs",
      "Identifies new opportunities and manages end-to-end customer acquisition",
      "Leads proposal strategy, and pricing alignment",
    ],
    image: "/images/team/operations/operations1.png",
  },
  {
    name: "Puneet Virdi",
    title: "Business Development Manager - Aerospace",
    bio: "Aerospace specialist focused on expanding market presence and building strategic customer relationships With 15+ years of experience in the industry.",
    focus: [
      "Customer relationship management",
      "Aerospace market intelligence",
      "Business development strategy execution",
    ],
    image: "/images/team/managers/manager6.jpeg",
  },
  {
    name: "Harshada Gavkar",
    title: "Head of Finance & Accounts",
    bio: "11+ years overseeing financial controls, invoicing accuracy, and compliance.",
    focus: [
      "Oversees all financial operations, budgeting, and statutory compliance",
      "Drives transparency and control across accounting and audit functions",
      "Supports business decisions through financial planning and reporting",
    ],
    image: "/images/team/finance/finance.png",
  },
  
  {
    name: "Gaurav Thakkar",
    title: "SCM",
    bio: "6+ years leading vendor management, purchase orders, and order lifecycle control.",
    focus: [
      "Manages procurement strategy, supplier performance, and logistics operations",
      "Ensures seamless order fulfilment and material availability across projects",
      "Aligns sourcing and compliance processes with customer expectations",
    ],
    image: "/images/team/purchase/purchase1.png",
  },
  
];
