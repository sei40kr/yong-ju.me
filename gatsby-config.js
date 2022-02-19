module.exports = {
  siteMetadata: {
    siteName: "Seong Yong-ju | Software Engineer/Systems Architect",
    skills: [
      {
        name: "Software Engineering",
        progress: "advanced",
        abilities: [
          {
            content:
              "Knowledge for general data structures: linked list, binary heap, segment tree, etc ...",
          },
          {
            content: "Knowledge for some algorithms to reduce time complexity",
          },
          {
            content: "Design a clean & testable implementation",
          },
        ],
        experiences: [],
      },
      {
        name: "Web Development",
        progress: "advanced",
        abilities: [
          { content: "Model-driven design" },
          { content: "Knowledge for HTML, CSS, DOM, event-driven programming" },
          { content: "Knowledge for React component lifecycle" },
          { content: "Develop an app using Prototype.js/jQuery" },
          { content: "Develop a rich app using React+Flux/Redux" },
        ],
        experiences: [
          { content: "Develop apps using Closure Library/React" },
          { content: "Develop web games using Phaser" },
          { content: "Design & develop hybrid apps using Cordova & Onsen UI" },
          {
            content:
              "Read most parts of Prototype.js, Script.aculo.us, Zepto.js, CreateJS, Processing.js, Hyperapp",
          },
        ],
      },
      {
        name: "Java",
        progress: "advanced",
        abilities: [
          { content: "Model-driven design" },
          {
            content: "Create a webapp using Spring Boot, Spring MVC, Spring DI",
          },
          { content: "Create a distributed batch using Spark" },
        ],
        experiences: [
          { content: "Develop webapps using Spring MVC at work" },
          { content: "Develop a distributed batch using Spark at work" },
          {
            content: "Join an open-source game server development",
          },
        ],
      },
      {
        name: "Database",
        progress: "intermediate",
        abilities: [
          {
            content:
              "General knowledge for distributed database: architectures, CAP, replication, quorum, etc ...",
          },
          {
            content:
              "Design a schema balancing the consistency and the performance",
          },
          {
            content:
              "Optimize a query performance: creating an index, denormalize the schema",
          },
        ],
        experiences: [
          { content: "Optimize a query performance" },
          { content: "Solve LeetCode/HackerRank problems" },
        ],
      },
      {
        name: "PHP",
        progress: "beginner",
        abilities: [],
        experiences: [
          {
            content:
              "Develop access counters, guest books, simple blog systems from scratch",
          },
          { content: "Develop FFAPHP extensions" },
          { content: "Read the most parts of FFAPHP" },
          {
            content:
              "Read the authentication part of WordPress, Simple Blog PHP",
          },
        ],
      },
      {
        name: "Ruby",
        progress: "beginner",
        abilities: [],
        experiences: [
          { content: "Read most parts of RGSS2" },
          { content: "Develop RPG Maker VX extensions" },
          { content: "Solve paiza problems" },
        ],
      },
      {
        name: "C",
        progress: "intermediate",
        abilities: [
          {
            content:
              "Knowledge for variable lifecycle, memory allocation & freeing",
          },
        ],
        experiences: [
          { content: "Implement major algorithms" },
          { content: "Solve AtCoder/LeetCode/HackerRank problems" },
        ],
      },
      {
        name: "Rust",
        progress: "beginner",
        abilities: [],
        experiences: [
          { content: "Implement major algorithms" },
          { content: "Solve AtCoder problems" },
        ],
      },
      {
        name: "Haskell",
        progress: "beginner",
        abilities: [],
        experiences: [{ content: "Solve AtCoder/HackerRank problems" }],
      },
      {
        name: "Shell Script",
        progress: "intermediate",
        abilities: [
          {
            content:
              "Knowledge for basic commands and syntax of Bourne-compatible shells and Z shell",
          },
        ],
        experiences: [
          { content: "Create useful tools for other developers" },
          { content: "Customize my shell environment" },
        ],
      },
      {
        name: "Pega Platform",
        progress: "beginner",
        abilities: [],
        experiences: [
          { content: "Certified as a Senior Systems Architect" },
          { content: "Certified as a Business Architect" },
          { content: "Complete Decisioning Consultant course in Pega Academy" },
          {
            content:
              "Complete Robotics Process Automation course in Pega Academy",
          },
        ],
      },
      {
        name: "Emacs Lisp",
        progress: "intermediate",
        abilities: [],
        experiences: [
          { content: "Contribute to Spacemacs" },
          { content: "Customize my Emacs environment" },
        ],
      },
    ],
    projects: [
      {
        startYYYYMM: "201811",
        endYYYYMM: null,
        name: "Subsystems of a Huge Financial System",
        company: "Pega Japan K.K.",
        workRole: "Systems Architect",
        themeColor: "#15183f",
        description:
          "Subsystems of a huge financial system. Built on Pega Platform.",
        accomplishments: [{ content: "Develop some features" }],
      },
      {
        startYYYYMM: "201709",
        endYYYYMM: "201806",
        name: "Attendance & Time Tracking System",
        company: "TeamSpirit Inc.",
        workRole: "Frontend Engineer",
        themeColor: "#107cad",
        description:
          "An enterprise application to provide an attendance management & time tracking. Built on Sales Cloud.",
        accomplishments: [
          { content: "Design specifications & develop some features" },
          { content: "Setup static type checking for the project" },
        ],
      },
      {
        startYYYYMM: "201702",
        endYYYYMM: "201704",
        name: "Frontend Developer Tools",
        company: "Works Applications Co., Ltd.",
        workRole: "Frontend Engineer",
        themeColor: "#20334c",
        description:
          "Frontend developer tools to improve product developers' productivities.",
        accomplishments: [],
      },
      {
        startYYYYMM: "201610",
        endYYYYMM: "201701",
        name: "Domestic Datasync Framework",
        company: "Works Applications Co., Ltd.",
        workRole: "Frontend & Backend & Database Engineer",
        themeColor: "#20334c",
        description:
          "A domestic framework to sync data between RDB and Cassandra.",
        accomplishments: [
          { content: "Develop a distributed batch to sync data in bulk" },
          {
            content:
              "Create a testing tool to enable the framework users to test their modules easily",
          },
          {
            content:
              "Develop an useful feature to reproduce data-related issues in development environment",
          },
        ],
      },
      {
        startYYYYMM: "201608",
        endYYYYMM: "201609",
        name: "Employee Onboarding System Prototyping",
        company: "Works Applications Co., Ltd.",
        workRole: "Frontend Engineer",
        themeColor: "#20334c",
        description:
          "A prototype of an Employee Onboarding subsystem of an ERP product.",
        accomplishments: [{ content: "Design & develop some mockup screens" }],
      },
    ],
  },
  plugins: ["gatsby-plugin-postcss"],
};
