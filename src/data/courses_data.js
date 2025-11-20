import { Database, TrendingUp, BarChart3 } from "lucide-react";

export const categoryData = {
  professional: {
    title: "Professional Courses",
    description:
      "Aptech offers a well structured programme that gives you a competitive edge and the right skills to succeed in modern Information Technology age. Some of our courses include: Flutter App Dev, Responsive Web Dev, Database Management, Web Development, etc.",
    heroImage:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    layout: "detailed", // Different layout for professional
    sections: [
      {
        title: "Responsive Web Development",
        courses: [
          {
            id: 1,
            title: "HTML5",
            icon: "📄",
            description:
              "HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.",
            features: [
              "New Semantic Elements",
              "Enhanced Forms",
              "Audio & Video Support",
              "Canvas & SVG",
              "Web Storage",
            ],
          },
          {
            id: 2,
            title: "CSS3",
            icon: "🎨",
            description:
              "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
            features: [
              "Flexbox & Grid",
              "Animations",
              "Responsive Design",
              "Variables",
              "Modern Layouts",
            ],
          },
          {
            id: 3,
            title: "JavaScript",
            icon: "⚡",
            description:
              "JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.",
            features: [
              "ES6+ Features",
              "DOM Manipulation",
              "Async Programming",
              "Modern Frameworks",
              "Web APIs",
            ],
          },
          {
            id: 4,
            title: "AngularJS/ReactJS",
            icon: "🔄",
            description:
              "AngularJS and ReactJS are both popular JavaScript frameworks used for building dynamic web applications, but they have different approaches and philosophies.",
            features: [
              "Component-Based Architecture",
              "State Management",
              "Routing",
              "API Integration",
              "Performance Optimization",
            ],
          },
        ],
      },
      {
        title: "Web Development",
        courses: [
          {
            id: 5,
            title: "PHP",
            icon: "🐘",
            description:
              "PHP is the most popular scripting language on the web. Without PHP Facebook, Yahoo, Google wouldn't have exist. Our course is geared to make you a PHP pro. Once you digest all basics, the course will help you create your very own application.",
            features: [
              "Server-Side Scripting",
              "Database Integration",
              "MVC Architecture",
              "Security Best Practices",
              "RESTful APIs",
            ],
          },
          {
            id: 6,
            title: "Python",
            icon: "🐍",
            description:
              "Python is a powerful general-purpose programming language. It is used in web development, data science, creating software prototypes, and so on. Fortunately for beginners, Python has simple easy-to-use syntax. This makes Python an excellent language to learn to program for beginners.",
            features: [
              "Web Development",
              "Data Science",
              "Automation",
              "Machine Learning",
              "Rapid Prototyping",
            ],
          },
          {
            id: 7,
            title: "Django",
            icon: "🎸",
            description:
              "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source. Ridiculously fast.",
            features: [
              "MVT Architecture",
              "Admin Interface",
              "ORM",
              "Security",
              "Scalability",
            ],
          },
        ],
      },
      {
        title: "Microsoft Office",
        courses: [
          {
            id: 8,
            title: "Microsoft Office Suite",
            icon: "📊",
            description:
              "Microsoft Office, or simply Office, is a family of client software, server software, and services developed by Microsoft. It was first announced by Bill Gates on August 1, 1988, at COMDEX in Las Vegas. Initially a marketing term for an office suite (bundled set of productivity applications), the first version of Office contained Microsoft Word, Microsoft Excel, and Microsoft PowerPoint.",
            features: [
              "Word Processing",
              "Spreadsheets",
              "Presentations",
              "Data Analysis",
              "Business Applications",
            ],
          },
        ],
      },
    ],
    additionalSections: [
      {
        title: "Programming Languages",
        items: ["Python", "JAVA", "C#", "C++", "R Programming"],
      },
      {
        title: "Web Development Using",
        items: ["Python (Django)", "PHP"],
      },
      {
        title: "Database Management",
        items: ["MS SQL", "MONGO DB"],
      },
      {
        title: "Professional Diploma Courses",
        items: [
          "Data Science",
          "Artificial Intelligence and Machine Learning",
          "Software Testing",
          "Cross platform app dev using flutter",
        ],
      },
    ],
  },
  corporate: {
    title: "Corporate Training",
    description:
      "Training and development involves improving the effectiveness of organizations and the individuals and teams within them. Give your team the IT skills development platform they need to level up their skills.",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    layout: "corporate", // Different layout for corporate
    sections: [
      {
        title: "What We Can Do For You",
        courses: [
          {
            id: 1,
            title: "Data Management & Database Systems",
            description:
              "Data management courses introduce students to languages, applications and programming used for the design and maintenance of business databases. One of the basic skills covered in database management courses is the use of Structured Query Language (SQL); the most common database manipulation language, Power BI, C# and Java.",
            features: [
              "Structured Query Language (SQL)",
              "Power BI for Business Intelligence",
              "C# Programming",
              "Java Database Connectivity",
              "Database Design & Maintenance",
            ],
            icon: Database,
          },
          {
            id: 2,
            title: "Digital Marketing Professional",
            description:
              "Everything is getting digitalized. Companies in all sectors are focusing on developing a robust online presence. And with the demand for digital marketers outweighing the supply, there are plenty of opportunities out there for those looking to get into the field. Some of the most wanted skill sets to acquire are: Search Engine Optimization (SEO), Search Engine Marketing (SEM), Analytics: Google Analytics, Bing, Semrush, Social Media Marketing (SMM), Email Marketing and Pay Per Click (PPC).",
            features: [
              "Search Engine Optimization (SEO)",
              "Search Engine Marketing (SEM)",
              "Google Analytics & Bing Analytics",
              "Social Media Marketing (SMM)",
              "Email Marketing Campaigns",
            ],
            icon: TrendingUp,
          },
          {
            id: 3,
            title: "Advanced Excel for Business",
            description:
              "Advanced Excel is one of the most popular and useful data analysis tool that helps a business organization to save a lot of time and effort in data processing using the likes of Macros, Pivot Tables, Conditional statements, Data Tables, etc. These skills can be useful in various fields such as finance and accounting, marketing and product management, human resource planning, etc.",
            features: [
              "Excel Macros & Automation",
              "Advanced Pivot Tables",
              "Conditional Statements & Formulas",
              "Data Tables & Analysis",
              "Financial Modeling",
            ],
            icon: BarChart3,
          },
        ],
      },
    ],
  },
  career: {
    title: "Career Courses",
    description:
      "Complete career transformation programs designed to take you from beginner to job-ready professional.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    layout: "detailed", // Changed to match professional layout
    sections: [
      {
        title: "Software Development Career Tracks",
        courses: [
          {
            id: 1,
            title: "Full Stack Web Development",
            icon: "🌐",
            description:
              "Complete full-stack development program covering frontend, backend, and deployment. Become job-ready with hands-on projects and modern technologies.",
            features: [
              "HTML5/CSS3/JavaScript",
              "React & Node.js",
              "Database Design & Management",
              "RESTful APIs & Microservices",
              "DevOps & Deployment",
            ],
            duration: "24 weeks",
            students: "62 students",
            level: "Beginner to Advanced",
            rating: 4.9,
          },
          {
            id: 2,
            title: "Software Engineering Career Track",
            icon: "💻",
            description:
              "Comprehensive software engineering program with focus on industry best practices, system design, and real-world project experience.",
            features: [
              "Java & Python Programming",
              "System Design & Architecture",
              "Agile Methodology & Scrum",
              "Testing & Quality Assurance",
              "Technical Interview Preparation",
            ],
            duration: "36 weeks",
            students: "55 students",
            level: "Beginner to Advanced",
            rating: 4.9,
          },
        ],
      },
      {
        title: "Specialized Career Programs",
        courses: [
          {
            id: 3,
            title: "Data Science Career Program",
            icon: "📊",
            description:
              "Master data science from fundamentals to advanced machine learning. Build a portfolio of real-world data projects.",
            features: [
              "Python for Data Science",
              "Machine Learning & AI",
              "Data Visualization",
              "Statistical Analysis",
              "Big Data Technologies",
            ],
            duration: "28 weeks",
            students: "48 students",
            level: "Intermediate to Advanced",
            rating: 4.8,
          },
          {
            id: 4,
            title: "Mobile App Development",
            icon: "📱",
            description:
              "Learn to build cross-platform mobile applications using Flutter and React Native. Create professional apps for iOS and Android.",
            features: [
              "Flutter & Dart",
              "React Native",
              "Mobile UI/UX Design",
              "API Integration",
              "App Store Deployment",
            ],
            duration: "20 weeks",
            students: "71 students",
            level: "Beginner to Intermediate",
            rating: 4.7,
          },
        ],
      },
    ],
    additionalSections: [
      {
        title: "Career Support Services",
        items: [
          "1-on-1 Career Coaching",
          "Resume & Portfolio Review",
          "Technical Interview Preparation",
          "Job Placement Assistance",
          "Industry Networking Events",
        ],
      },
      {
        title: "Program Features",
        items: [
          "Hands-on Project Experience",
          "Mentorship from Industry Experts",
          "Flexible Learning Schedule",
          "Certificate of Completion",
          "Lifetime Career Support",
        ],
      },
      {
        title: "Career Outcomes",
        items: [
          "Full-Stack Developer",
          "Software Engineer",
          "Data Scientist",
          "Mobile App Developer",
          "DevOps Engineer",
        ],
      },
    ],
  },
};
