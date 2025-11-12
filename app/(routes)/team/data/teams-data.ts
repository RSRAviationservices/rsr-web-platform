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
      "Authorized supplier networks",
      "Spec-matched availability & SLAs",
      "Multi-site delivery coordination",
    ],
    image: "/images/team/directors/directors1.png",
  },
  {
    name: "Reena Paigude",
    title: "Director",
    bio: "18+ years leading controlled storage, hazmat compliance, and documentation accuracy to meet audit standards.",
    focus: [
      "Temperature-controlled zones",
      "Lot/batch traceability",
      "Continuous improvement",
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
  {
    name: "Narendra Genolia",
    title: "General Manager, Sales & Procurement",
    bio: "10+ years leading sales strategy, key accounts, and procurement alignment for predictable delivery.",
    focus: [
      "Pipeline health & revenue planning",
      "Approved alternatives checks",
      "Contract & lead-time optimization",
    ],
    image: "/images/team/managers/manager1.png",
  },
  {
    name: "Ramesh Karra",
    title: "General Manager - Business Development",
    bio: "14+ years in marketing and business growth, bringing market expansion expertise to aerospace.",
    focus: [
      "Market expansion & opportunity development",
      "Strategic partnerships & alliance management",
      "Revenue growth & customer acquisition",
    ],
    image: "/images/team/managers/manager3.jpeg",
  },
];

// Tier 4: Business Development Managers & Leads
export const leadsAndSpecialists: TeamMember[] = [
  {
    name: "Puneet Virdi",
    title: "Business Development Manager - Aerospace",
    bio: "Aerospace specialist focused on expanding market presence and building strategic customer relationships.",
    focus: [
      "Customer relationship management",
      "Aerospace market intelligence",
      "Business development strategy execution",
    ],
    image: "/images/team/managers/manager6.jpeg",
  },
  {
    name: "Mrunali Dhargave",
    title: "Asst. General Manager, Sales & Defence",
    bio: "7+ years managing key accounts and ensuring technical compliance for defence programs.",
    focus: [
      "Defence specifications & approvals",
      "Documentation readiness for audits",
      "Long-term agreements and SLAs",
    ],
    image: "/images/team/sales/sales1.png",
  },
  {
    name: "Harshada Gavkar",
    title: "Finance & Accounts",
    bio: "11+ years overseeing financial controls, invoicing accuracy, and compliance.",
    focus: [
      "Contract billing and credit terms",
      "Tax, statutory, and audit support",
      "Vendor and customer reconciliations",
    ],
    image: "/images/team/finance/finance.png",
  },
  {
    name: "Swapnil Mishra",
    title: "Business Development Manager - Aerospace",
    bio: "4+ years supporting customer consultations, product selection, and order coordination.",
    focus: [
      "Requirement capture and quotes",
      "Availability checks and follow-ups",
      "Post-order customer support",
    ],
    image: "/images/team/operations/operations1.png",
  },
  {
    name: "Gaurav Thakkar",
    title: "SCM",
    bio: "6+ years leading vendor management, purchase orders, and order lifecycle control.",
    focus: [
      "RFQs, supplier evaluation, and PO release",
      "Order tracking and exception handling",
      "Compliance verification on receipt",
    ],
    image: "/images/team/purchase/purchase1.png",
  },
  {
    name: "Shubham Rahangdale",
    title: "Head of Sales And Marketing",
    bio: "3+ years coordinating logistics, shipping documentation, and dispatch accuracy.",
    focus: [
      "Pick, pack, seal, and labeling control",
      "Courier bookings and tracking updates",
      "Proof of delivery and records retention",
    ],
    image: "/images/team/sales/sales3.png",
  },
];
