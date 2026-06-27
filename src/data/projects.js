export const PROJECTS = [
  {
    slug: "tradexs",
    title: "TradeXs",
    subtitle: "B2B Wholesale Marketplace",
    description:
      "AI-powered B2B wholesale marketplace designed to connect suppliers and buyers through a smart digital platform.",
    role: "Software Developer and UI/UX Designer",
    tech: ["React", "Node.js", "Firebase", "AI Integration"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "TradeXs is a comprehensive Business-to-Business (B2B) wholesale marketplace developed as part of the Software Development Group Project (SDGP). The platform connects suppliers, wholesalers, manufacturers, and retailers in one centralized system for efficient wholesale transactions.",
        ],
      },
      {
        heading: "Project Objectives",
        paragraphs: [
          "TradeXs was designed to create a centralized marketplace, simplify supplier and retailer interactions, improve inventory and product management, enable secure bulk ordering, and provide a user-friendly responsive web application.",
        ],
      },
      {
        heading: "Key Features",
        paragraphs: [
          "Secure registration and authentication, role-based access for buyers, sellers, and administrators, product catalog and inventory management, advanced search and filtering, bulk order placement, transaction monitoring, and an administrative dashboard for system oversight.",
        ],
      },
      {
        heading: "My Contributions",
        paragraphs: [
          "I contributed to requirement analysis, feature design and implementation, frontend and backend development, database integration, testing, debugging, documentation, and team collaboration through Git and GitHub throughout the SDGP lifecycle.",
        ],
      },
      {
        heading: "Challenges and Learning Outcomes",
        paragraphs: [
          "Developing TradeXs strengthened my skills in full-stack development, database design, API development, version control, teamwork, and agile collaboration. It also gave me hands-on experience in building scalable software solutions for real-world wholesale business needs.",
        ],
      },
    ],
  },
  {
    slug: "graph-algorithm-analyzer",
    title: "Graph Algorithm Analyzer",
    subtitle: "Directed Graph Cycle Detection",
    description:
      "Java-based application developed to analyze directed graphs and detect cycles using DFS.",
    role: "Software Developer",
    tech: ["Java", "OOP", "DFS Algorithm"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This coursework focuses on determining whether a directed graph is cyclic or acyclic using algorithmic techniques. The project implements and analyzes two approaches: the Sink Elimination Algorithm and DFS-based cycle detection, using benchmark datasets to compare behavior and performance.",
          "A directed graph is cyclic if a path returns to its starting vertex. Both algorithms were tested on benchmark examples to confirm whether the graph contained a cycle and to compare their efficiency for different graph sizes.",
        ],
      },
      {
        heading: "Algorithms Used",
        paragraphs: [
          "Sink Elimination Algorithm: repeatedly removes sink vertices and their incoming edges until all vertices are removed or no sink remains, which indicates a cycle.",
          "DFS-Based Cycle Detection: traverses each vertex deeply, marking visited nodes and detecting back edges to identify cycles.",
        ],
      },
      {
        heading: "Benchmark Examples",
        paragraphs: [
          "Acyclic Graph: 0 → 1 → 2 → 3. Both algorithms confirm the graph is acyclic.",
          "Cyclic Graph: 0 → 1 → 2 → 0. Sink elimination fails to remove all vertices, while DFS detects a back edge, confirming the graph is cyclic.",
        ],
      },
      {
        heading: "Performance Analysis",
        paragraphs: [
          "Sink Elimination runs in O(V × E) time with O(V + E) space, while DFS cycle detection runs in O(V + E) time with O(V) space. DFS is more efficient and scalable for larger graphs, while sink elimination is simpler and effective for smaller cases.",
        ],
      },
    ],
  },
  {
    slug: "vehicle-traffic-analysis-system",
    title: "Vehicle Traffic Analysis System",
    subtitle: "Traffic Monitoring & Insights",
    description:
      "Python-based traffic monitoring system capable of analyzing vehicle movement and generating traffic insights.",
    role: "Developer",
    tech: ["Python", "Data Analysis", "Computer Vision"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This Python-based solution monitors vehicle movement patterns and turns raw traffic data into useful insights for analysis and decision-making.",
        ],
      },
      {
        heading: "Highlights",
        paragraphs: [
          "The system combines data analysis with computer vision techniques to support smarter traffic observation and evaluation workflows.",
        ],
      },
    ],
  },
  {
    slug: "robot-simulink-creation",
    title: "Robot Simulink Creation",
    subtitle: "Individual Project",
    description:
      "Designed and simulated a two-robot cooperative control system using Simulink.",
    role: "Individual Project Developer",
    tech: ["Simulink", "PID Control", "Robotics"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Designed and simulated a two-robot cooperative control system using Simulink to model coupled train coach dynamics.",
        ],
      },
      {
        heading: "Highlights",
        paragraphs: [
          "The project focused on PID-based control, displacement tracking, stability, and coordination between robotic agents.",
        ],
      },
    ],
  },
  {
    slug: "robust-relational-database-schema",
    title: "Design A Robust Relational Database Schema Using UML Notation",
    subtitle: "Database Design Project",
    description:
      "Created detailed data dictionaries and relationships aligned with business requirements.",
    duration: "September 2025 – January 2026",
    tech: ["UML", "Database Design"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Created detailed data dictionaries covering entities, relationships, specializations, attributes, and business rules aligned with real-world constraints.",
        ],
      },
      {
        heading: "Highlights",
        paragraphs: [
          "The project emphasized UML conceptual modeling, consistency, and compliance with database design standards.",
        ],
      },
    ],
  },
  {
    slug: "software-engineering-principles-research",
    title: "Software Engineering Principles Research",
    subtitle: "Requirements & Architecture",
    description:
      "Requirement analysis, UML modelling and system architecture design.",
    duration: "September 2025 – January 2026",
    tech: ["Requirement Analysis", "UML"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Software engineering project involving requirement analysis, UML modelling, and system architecture design based on client requirements.",
        ],
      },
      {
        heading: "Highlights",
        paragraphs: [
          "Produced use case, class, and activity diagrams aligned with functional, technical, and non-functional requirements.",
        ],
      },
    ],
  },
  {
    slug: "life-under-water",
    title: "Life Under Water",
    subtitle: "SDG 14 Awareness Website",
    description:
      "Educational website developed to raise awareness about Sustainable Development Goal 14.",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This educational website highlights awareness around Sustainable Development Goal 14 and encourages positive action for ocean conservation.",
        ],
      },
      {
        heading: "Highlights",
        paragraphs: [
          "Built with straightforward web technologies to make the message engaging, accessible, and easy to share with a wider audience.",
        ],
      },
    ],
  },
  {
    slug: "sri-lanka-attraction-places",
    title: "Sri Lanka Attraction Places",
    subtitle: "Travel & Tourism Website",
    description:
      "Responsive travel website showcasing famous locations across Sri Lanka.",
    role: "Frontend Developer",
    tech: ["Next.js", "React", "TypeScript"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sri Lanka Attraction Places is a travel-focused web project created to showcase the island's most memorable destinations, from cultural landmarks and golden beaches to wildlife experiences and scenic highlands.",
          "This project highlights the beauty of Sri Lanka through a responsive interface, destination-focused sections, and travel inspiration for both local and international visitors.",
        ],
      },
      {
        heading: "Key Features",
        list: [
          "Discover Sri Lanka's iconic tourist destinations",
          "Explore cultural, historical, coastal, and wildlife experiences",
          "Responsive layout for smooth browsing across devices",
          "Travel inspiration, destination highlights, and contact support",
          "Simple navigation with dedicated sections for home, services, about, and contact",
        ],
      },
      {
        heading: "Featured Attractions",
        paragraphs: [
          "Sigiriya & Cultural Triangle: Ancient rock fortress, heritage temples, and UNESCO-listed cultural treasures.",
          "Beach Escapes: Mirissa, Unawatuna, and Bentota provide scenic coastlines and relaxing travel experiences.",
          "Wildlife Adventures: Yala, Udawalawe, and Horton Plains offer memorable safari and nature encounters.",
        ],
      },
      {
        heading: "Why This Project Matters",
        paragraphs: [
          "It demonstrates how a travel website can combine visual appeal, storytelling, and user-friendly navigation to promote a destination effectively. The project also reflects an understanding of responsive design and presentation for tourism-related applications.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}
