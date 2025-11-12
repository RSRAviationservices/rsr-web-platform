// We'll define a clear type for our post data
export interface Post {
  slug: string;
  title: string;
  description: string;
  imageUrl: string; // We'll use paths from your /public folder
  date: string;
  category: string;
  author: {
    name: string;
    imageUrl: string; // Placeholder or path to a team member image
  };
}

// Mock data for all posts
export const mockPosts: Post[] = [
  {
    slug: "navigating-aerospace-supply-chains",
    title: "Navigating the Complexities of Aerospace Supply Chains in 2025",
    description:
      "The global aerospace supply chain faces new challenges and opportunities. We dive into the trends shaping the future of aviation logistics.",
    imageUrl: "/images/services/aerospace-mro.jpg",
    date: "October 28, 2025",
    category: "Industry Insights",
    author: {
      name: "RSR Aviation Team",
      imageUrl: "/images/team/directors/directors1.png",
    },
  },
  {
    slug: "quality-assurance-in-mro",
    title: "The Critical Role of Quality Assurance in MRO Services",
    description:
      "Learn how RSR Aviation's commitment to quality sets a new standard in maintenance, repair, and overhaul.",
    imageUrl: "/images/services/commercial-aviation.jpg",
    date: "October 24, 2025",
    category: "Company News",
    author: {
      name: "Jane Doe, QA Lead",
      imageUrl: "/images/team/managers/manager1.png",
    },
  },
  {
    slug: "sustainable-aviation-fuel",
    title: "Sustainable Aviation Fuel (SAF): What You Need to Know",
    description:
      "A look into the technology and logistics behind sustainable aviation fuel and its impact on the industry.",
    imageUrl: "/images/services/defense-military.jpg",
    date: "October 20, 2025",
    category: "Technology",
    author: {
      name: "RSR Aviation Team",
      imageUrl: "/images/team/directors/directors2.png",
    },
  },
  {
    slug: "rsr-expands-bengaluru-operations",
    title: "RSR Aviation Expands Operations in Bengaluru",
    description:
      "We are excited to announce the expansion of our MRO facilities at Bengaluru, enhancing our service capabilities.",
    imageUrl: "/images/services/general-aviation.jpg",
    date: "October 15, 2025",
    category: "Company News",
    author: {
      name: "RSR Aviation Team",
      imageUrl: "/images/team/finance/finance.png",
    },
  },
  {
    slug: "the-future-of-defense-logistics",
    title: "The Future of Defense and Military Aviation Logistics",
    description:
      "How technology is changing the way military and defense contracts are serviced and fulfilled.",
    imageUrl: "/images/home/team/team.jpeg",
    date: "October 10, 2025",
    category: "Industry Insights",
    author: {
      name: "John Smith, Logistics",
      imageUrl: "/images/team/operations/operations1.png",
    },
  },
  {
    slug: "meet-our-new-director",
    title: "Meet Our New Director of Sales",
    description:
      "We are thrilled to welcome our new Director of Sales to the RSR Aviation family.",
    imageUrl: "/images/team/sales/sales1.png",
    date: "October 5, 2025",
    category: "Company News",
    author: {
      name: "RSR Aviation Team",
      imageUrl: "/images/team/directors/directors1.png",
    },
  },
];