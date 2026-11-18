import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Logeshwaran N",
    firstName: "Logeshwaran",
    lastName: "N",
    designation: "Full-Stack Developer",
    titles: [
      "Full-Stack Developer",
      "MERN Stack Specialist",
      "Frontend Architecture Engineer",
      "GraphQL & REST API Engineer",
      "Enterprise Systems Specialist"
    ],
    summary:
      "Full-Stack Developer with 4+ years of experience building and maintaining web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript. Skilled in developing REST/GraphQL APIs, JWT/OAuth2/Keycloak authentication, Git-based CI/CD workflows, and troubleshooting issues across development and production environments. Improved API response time by 35% and reduced feature development time by 25% through query optimization and reusable component architecture, delivering end-to-end features from UI to deployment.",
    aboutBio: [
      "I am a results-driven Full-Stack Developer specializing in enterprise-grade web applications, modern frontend architecture, and scalable backend services. With over 4 years of hands-on experience, I bridge the gap between intuitive user experiences and robust distributed systems.",
      "At AmZetta Technologies, I lead end-to-end feature delivery for mission-critical SD-WAN management platforms and enterprise storage systems used by 100+ organizations. My focus centers on building resilient microservices, optimizing GraphQL/REST API response times by 35%, and designing reusable React design systems that shorten delivery cycles by 25%.",
      "My core philosophy revolves around clean code, zero-trust security (OAuth2, Keycloak, RBAC), predictable state management, and rapid continuous deployment pipelines."
    ],
    email: "logesh15102@gmail.com",
    phone: "+91-8973329290",
    location: "Chennai, India",
    linkedin: "https://www.linkedin.com/in/logeshwaran-n-o15102",
    github: "https://github.com/logeshwaran-n",
    resumeFileName: "Logeshwaran_N_Full-Stack.docx",
    resumeUrl: "/Logeshwaran_N_Full-Stack.docx",
    stats: [
      {
        label: "Experience",
        value: "4+ Years",
        description: "Full-Stack & Frontend Engineering"
      },
      {
        label: "API Optimization",
        value: "35%",
        description: "Response Time Reduction via GraphQL & Queries"
      },
      {
        label: "Development Velocity",
        value: "25%",
        description: "Cycle Time Cut via Reusable Component System"
      },
      {
        label: "Enterprise Scale",
        value: "100+",
        description: "Enterprise Users on Mission-Critical Systems"
      }
    ]
  },

  skillCategories: [
    {
      title: "Frontend Engineering",
      description: "Modern, reactive UI systems with type safety, responsive design, and modular state management.",
      icon: "Layout",
      badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
      skills: [
        { name: "React.js", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Next.js (SSR/SSG)", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Material UI (MUI)" },
        { name: "Redux Toolkit" },
        { name: "React Query (TanStack)" },
        { name: "Apollo Client" },
        { name: "React Hooks" },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "HTML5 & CSS3" }
      ]
    },
    {
      title: "Backend & API Architecture",
      description: "Scalable backend runtimes, high-throughput microservices, and GraphQL & REST services.",
      icon: "Server",
      badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "GraphQL & Resolvers", highlight: true },
        { name: "Apollo Server" },
        { name: "Bun.js (Hono)", highlight: true },
        { name: "RESTful APIs", highlight: true },
        { name: "gRPC" },
        { name: "ASP.NET Web Forms" },
        { name: ".NET Framework" }
      ]
    },
    {
      title: "Databases & Enterprise Security",
      description: "NoSQL & relational databases with enterprise identity, access management, and token security.",
      icon: "ShieldCheck",
      badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
      skills: [
        { name: "MongoDB", highlight: true },
        { name: "SQL", highlight: true },
        { name: "SQLite3" },
        { name: "Keycloak (OAuth2)", highlight: true },
        { name: "JWT Authentication", highlight: true },
        { name: "Role-Based Access Control (RBAC)", highlight: true },
        { name: "API Authorization" },
        { name: "Token Caching & Refresh Flows" }
      ]
    },
    {
      title: "DevOps, CI/CD & Testing",
      description: "Automated pipelines, containerization, quality assurance, and production reliability.",
      icon: "GitBranch",
      badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
      skills: [
        { name: "Git & GitLab CI/CD", highlight: true },
        { name: "Docker" },
        { name: "SVN" },
        { name: "Unit Testing" },
        { name: "Performance Testing", highlight: true },
        { name: "Code Reviews & Audits" },
        { name: "Production Debugging (401/403)" }
      ]
    },
    {
      title: "Core Architecture & Concepts",
      description: "Architectural patterns for scalable enterprise software and low-latency client rendering.",
      icon: "Cpu",
      badgeColor: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30",
      skills: [
        { name: "Server-Side Rendering (SSR)", highlight: true },
        { name: "Static Site Generation (SSG)" },
        { name: "Microservices Architecture", highlight: true },
        { name: "Reusable UI Architecture", highlight: true },
        { name: "Responsive Web Design" },
        { name: "Agile & Scrum Methodologies" }
      ]
    }
  ],

  languages: ["TypeScript", "JavaScript", "C#", "C", "Python", "SQL"],

  experiences: [
    {
      id: "amzetta-tech",
      company: "AmZetta Technologies Private Limited",
      role: "Front-End Developer / Full-Stack Software Engineer",
      location: "Chennai, India",
      period: "Sep 2022 – Present",
      isCurrent: true,
      summary:
        "Leading end-to-end full-stack feature development for enterprise SD-WAN management and storage-server platforms serving 100+ corporate clients.",
      responsibilities: [
        "Architect, develop, test, and maintain enterprise web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript with Material UI and Tailwind CSS.",
        "Design and integrate REST and GraphQL APIs for seamless frontend–backend synchronization utilizing Node.js, Express.js, Bun.js, and Apollo Server.",
        "Heavily optimize GraphQL resolvers and database queries, yielding a measured 35% reduction in API response times across production clusters.",
        "Take full end-to-end ownership spanning user interface development, REST APIs, database persistence, automated testing, and release deployment support.",
        "Lead sprint reviews and present architectural designs and sprint outcomes to cross-functional stakeholders in an Agile Git/GitLab environment.",
        "Diagnose, troubleshoot, and resolve intricate production incidents including intermittent 401/403 authentication failures and network latency bottlenecks.",
        "Spearhead a unified React reusable component design system adopted across 3+ core enterprise product teams, accelerating feature velocity by 25%.",
        "Implement enterprise-grade JWT, OAuth2, Keycloak, and granular Role-Based Access Control (RBAC), successfully defending technical architectures to security governance teams.",
        "Maintain high-availability SD-WAN and storage-management applications relied upon daily by 100+ enterprise administrators."
      ],
      highlights: [
        "Cut API response latency by 35% across production workloads",
        "Decreased feature cycle time by 25% via reusable design tokens & components",
        "Maintained 99.9% uptime across SD-WAN and StorTrends management suites"
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Bun.js (Hono)",
        "GraphQL",
        "Apollo Server",
        "MongoDB",
        "Keycloak",
        "OAuth2",
        "JWT",
        "Tailwind CSS",
        "Docker",
        "GitLab CI/CD"
      ]
    }
  ],

  projects: [
    {
      id: "stor-ui",
      title: "STOR_UI – StorTrends Monitoring Dashboard",
      tagline: "Enterprise full-stack storage telemetry and command orchestration suite",
      category: "Full-Stack Cloud & Systems",
      period: "2025 – Present",
      description:
        "High-performance storage management and telemetry dashboard built with Next.js (SSR), Tailwind CSS, and a Bun.js (Hono) microservices backend, converting raw infrastructure CLI operations into real-time monitoring endpoints.",
      technologies: ["Next.js (SSR)", "Bun.js (Hono)", "Tailwind CSS", "Microservices", "REST APIs", "JWT", "XML Processing"],
      keyFeatures: [
        "Converted 30+ raw SSH/CLI storage operations into resilient RESTful API endpoints for device configuration and hardware health monitoring.",
        "Implemented multi-server JWT session state management with automated failover and secure token persistence.",
        "Engineered a high-throughput event-log viewer featuring real-time XML ingestion, dynamic multi-attribute filtering, cursor pagination, and record deduplication.",
        "Leveraged Next.js Server-Side Rendering (SSR) for instant first-contentful paint and live telemetry streaming."
      ],
      contributions: [
        "Architected both the Next.js frontend and the Bun.js microservices backend from inception.",
        "Optimized XML parsing logic to ingest thousands of storage event logs without UI thread freezing.",
        "Constructed security middleware enforcing JWT session validity across distributed storage nodes."
      ],
      architectureNotes: [
        "Microservices decoupled via Bun.js (Hono) for sub-millisecond route dispatching",
        "Custom XML streaming transformer for hardware diagnostic dumps"
      ],
      featured: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "zwan-cpe",
      title: "ZWAN-CPE & Director – SD-WAN Management Platform",
      tagline: "Centralized enterprise SD-WAN router provisioning and traffic telemetry",
      category: "Enterprise Networking",
      period: "2022 – Present",
      description:
        "Mission-critical enterprise SD-WAN management console enabling network administrators to securely onboard, configure, and monitor edge CPE routers across global WAN topologies.",
      technologies: ["React.js", "TypeScript", "GraphQL", "Apollo Client", "Apollo Server", "JWT", "RBAC", "Tailwind CSS"],
      keyFeatures: [
        "Engineered modular React.js and TypeScript interfaces for zero-touch router onboarding, automated tunnel configuration, and live bandwidth telemetry.",
        "Integrated high-efficiency GraphQL queries and subscriptions via Apollo Client and Apollo Server to replace bulky polling mechanisms.",
        "Implemented rigorous JWT authentication alongside granular Role-Based Access Control (RBAC) separating network operators, auditors, and superadmins.",
        "Built responsive interactive data tables and topology graph visualizations for high-density router clusters."
      ],
      contributions: [
        "Developed core router configuration workflows and validation wizards.",
        "Engineered GraphQL schema definitions and resolver caches that minimized roundtrips to edge routers.",
        "Authored reusable state hooks for connection health monitoring."
      ],
      architectureNotes: [
        "Normalized Apollo in-memory caching to eliminate duplicate WAN router status queries",
        "Granular RBAC permission directives protecting configuration mutations"
      ],
      featured: true,
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: "captive-portal",
      title: "Captive Portal – ZWAN-CPE Authentication Feature",
      tagline: "Zero-trust network access gateway with Keycloak OAuth2 & automated token caching",
      category: "Identity & Cybersecurity",
      period: "2024 – Present",
      description:
        "High-security network captive portal and identity federation gateway providing seamless OAuth2 authentication, session lease enforcement, and RBAC authorization across connected edge devices.",
      technologies: ["React.js", "GraphQL", "Keycloak", "OAuth2", "JWT", "Token Caching", "RBAC", "Node.js"],
      keyFeatures: [
        "Engineered custom GraphQL resolvers and a lightweight React.js captive login UI supporting multiple identity providers.",
        "Integrated Keycloak OAuth2 federation featuring in-memory token caching and background silent-refresh workflows to prevent network dropouts.",
        "Diagnosed and resolved critical edge-case JWT and permission anomalies (401/403 status codes) across complex network subnet configurations.",
        "Enforced dynamic firewall policy assignment upon successful role authentication."
      ],
      contributions: [
        "Single-handedly researched, configured, and integrated Keycloak OAuth2 with the CPE router authentication daemon.",
        "Designed the silent token refresh mechanism preserving active sessions without interrupting end-user web traffic.",
        "Prepared and presented security posture documentation to technical compliance auditors."
      ],
      architectureNotes: [
        "Keycloak OpenID Connect (OIDC) integration with PKCE for secure public client authorization",
        "Client-side token refresh queue preventing race conditions during concurrent API calls"
      ],
      featured: true,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "stortrends-managetrends",
      title: "StorTrends & ManageTrends – Storage Server Management",
      tagline: "Enterprise SAN/NAS storage infrastructure configuration and replication suite",
      category: "Storage Systems",
      period: "2023 – Present",
      description:
        "Comprehensive enterprise storage infrastructure controller managing SAN/NAS hardware clusters, dynamic volume snapshots, WAN data replication, and high-availability storage pools.",
      technologies: ["ASP.NET Web Forms", "C#", "AJAX", "XML Pipelines", "IPv6", "Storage Replication", ".NET Framework"],
      keyFeatures: [
        "Developed dynamic AJAX-driven web modules delivering real-time telemetry on disk health, RAID statuses, and volume IOPS.",
        "Designed resilient XML-based data processing pipelines that serialize and apply complex RAID and SAN configuration files.",
        "Engineered modernized IPv6 network configuration interfaces and intuitive storage disaster-recovery replication wizards.",
        "Maintained backward compatibility across legacy storage controllers while improving UI responsiveness."
      ],
      contributions: [
        "Constructed the complete IPv6 setup module and storage volume allocation wizard.",
        "Engineered XML serialization bridges between the web tier and underlying storage kernel APIs.",
        "Reduced UI page flicker by migrating legacy postback operations to asynchronous AJAX endpoints."
      ],
      architectureNotes: [
        "Asynchronous AJAX pipelines eliminating full-page postbacks",
        "Dual-stack IPv4/IPv6 networking engine for enterprise hybrid storage clouds"
      ],
      featured: false,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "feedback-helpdesk",
      title: "Feedback Management System & Admin HelpDesk",
      tagline: "Full-stack customer experience portal with role-based incident resolution",
      category: "Full-Stack Web App",
      period: "2023",
      description:
        "End-to-end feedback collection and helpdesk ticketing platform facilitating real-time issue escalation, ticket prioritization, SLA monitoring, and customer communication.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT", "RBAC", "CSS3"],
      keyFeatures: [
        "Developed high-throughput RESTful APIs with Node.js and Express.js supporting complex ticket state transitions and feedback scoring.",
        "Constructed interactive role-based administrative dashboards for triage agents, support managers, and customers using React.js.",
        "Implemented JWT authentication and RBAC to safeguard ticket confidentiality and audit logs.",
        "Integrated MongoDB aggregations for analytics on customer satisfaction, resolution times, and team performance."
      ],
      contributions: [
        "Designed MongoDB schemas and aggregation pipelines for customer feedback analytics.",
        "Built responsive ticket management views with drag-and-drop status workflows.",
        "Configured secure authentication pipelines and role middleware in Express.js."
      ],
      architectureNotes: [
        "MERN architecture with normalized MongoDB collections and indexing on ticket status",
        "Role-based routing guards on frontend and API middleware"
      ],
      featured: false,
      color: "from-amber-500 to-orange-600"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      institution: "EGS Pillay Engineering College, Nagapattinam",
      location: "Tamil Nadu, India (Affiliated to Anna University)",
      period: "2018 – 2022",
      grade: "CGPA: 8.23 / 10",
      highlights: [
        "Graduated with Distinction in Computer Science and Engineering",
        "Strong foundation in Data Structures, Algorithms, Database Management Systems, and Computer Networks",
        "Active member of the Technical Symposium organizing committee"
      ]
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "API Performance Optimization",
      metric: "35% Faster",
      description: "Optimized GraphQL resolvers and database queries, slashing production API latency by 35% across high-load SD-WAN and storage services.",
      category: "Engineering Impact",
      icon: "Zap"
    },
    {
      id: "ach-2",
      title: "Development Velocity Acceleration",
      metric: "25% Shorter Cycles",
      description: "Architected a reusable React component and design token library adopted across 3+ core enterprise projects, reducing feature development time by 25%.",
      category: "Architecture & Productivity",
      icon: "TrendingUp"
    },
    {
      id: "ach-3",
      title: "Continuous Enterprise Delivery",
      metric: "3+ Years",
      description: "Delivered continuous production releases for enterprise-grade SD-WAN platforms and storage systems relied on by 100+ business clients.",
      category: "Reliability & Scale",
      icon: "Award"
    },
    {
      id: "ach-4",
      title: "Full-Lifecycle Production Ownership",
      metric: "6+ Production Projects",
      description: "End-to-end technical leadership spanning frontend architecture, API integration, OAuth2/Keycloak security flows, and CI/CD deployment pipelines.",
      category: "Leadership & Delivery",
      icon: "CheckCircle2"
    }
  ]
};
