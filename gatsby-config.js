module.exports = {
  siteMetadata: {
    siteName: 'Seong Yong-ju | Software Engineer/Systems Architect',
    skills: [
      {
        name: 'Software Engineering',
        progress: 'advanced',
        abilities: [
          { content: 'Understand SOLID principles' },
          {
            content:
              'Understand general data structures: Array, Linked List, Hash Map, Binary Heap, Segment Tree',
          },
          { content: 'Understand general sort algorithms, search algorithms' },
          {
            content: 'Analyze the time and space complexity of an algorithm',
          },
          {
            content: 'Design testable implementations by removing side-effects',
          },
        ],
        experiences: [],
      },
      {
        name: 'Frontend Engineering',
        progress: 'advanced',
        abilities: [
          { content: 'Design an webapp in MVC pattern' },
          { content: 'Understand the lifecycle of React component' },
          { content: 'Design an application state in Flux, Redux' },
          { content: 'Understand HTTP' },
        ],
        experiences: [
          { content: 'Develop apps using Closure Library, React at work' },
          { content: 'Create this portfolio' },
          { content: 'Create hybrid apps using Cordova&Ionic/Onsen UI' },
          { content: 'Create browser games using Phaser' },
          {
            content:
              'Read most parts of Prototype.js, Script.aculo.us, Zepto.js, CreateJS, Hyperapp',
          },
        ],
      },
      {
        name: 'Java',
        progress: 'advanced',
        abilities: [
          { content: 'Understand how general GC algotirhm works' },
          { content: 'Understand how Spring DI works' },
          { content: 'Develop an webapp using Spring MVC' },
          { content: 'Design an application in model driven' },
          { content: 'Implement a distributed batch using Spark' },
        ],
        experiences: [
          { content: 'Develop webapps using Spring MVC at work' },
          { content: 'Develop a distributed batch using Spark at work' },
          {
            content: 'Join a open-sourced game server development of a MMORPG',
          },
        ],
      },
      {
        name: 'Database Engineering',
        progress: 'intermediate',
        abilities: [
          { content: 'Understand CAP theorem' },
          {
            content:
              'Understand general DB architectures: Master-Slave, Multi Masters, Consistent Hashing',
          },
          {
            content: 'Understand general DB indexes: Binary Tree, Hash',
          },
          { content: 'Design a table schema and relationships' },
          {
            content:
              'Optimize an execution plan and improve the query performance: Join methods, Partitioning, Padding Factor',
          },
        ],
        experiences: [
          { content: 'Improve query performance in PostgreSQL, Oracle' },
          { content: 'Create a trigger function to pool the update logs' },
          { content: 'Solve HackerRank, LeetCode problems' },
        ],
      },
      {
        name: 'C',
        progress: 'intermediate',
        abilities: [
          { content: 'Create simple tools' },
          { content: 'Understand how memory heap and stack work' },
        ],
        experiences: [
          { content: 'Implement popular algorithms' },
          { content: 'Solve AtCoder, LeetCode problems' },
        ],
      },
      {
        name: 'Rust',
        progress: 'beginner',
        abilities: [{ content: 'Create simple tools' }],
        experiences: [
          { content: 'Implement popular algorithms' },
          { content: 'Solve AtCoder problems' },
        ],
      },
      {
        name: 'Ruby',
        progress: 'beginner',
        abilities: [],
        experiences: [
          { content: 'Create RPG Maker VX extensions' },
          { content: 'Read most parts of RGSS2' },
        ],
      },
      {
        name: 'PHP',
        progress: 'beginner',
        abilities: [],
        experiences: [
          {
            content:
              'Create access counters, guest books, simple blog systems from scratch',
          },
          { content: 'Create FFAPHP extensions' },
          { content: 'Read the authentication part in WordPress' },
        ],
      },
      {
        name: 'Shell Script',
        progress: 'intermediate',
        abilities: [
          {
            content: 'Create useful tools using POSIX-compatible shell script',
          },
        ],
        experiences: [{ content: 'Customize my shell environment' }],
      },
      {
        name: 'Emacs Lisp',
        progress: 'intermediate',
        abilities: [],
        experiences: [
          { content: 'Contribute to Spacemacs' },
          { content: 'Customize my Emacs environment' },
        ],
      },
    ],
    projects: [
      {
        startYYYYMM: '201811',
        endYYYYMM: null,
        name: 'Financial System',
        company: 'Pega Japan K.K.',
        workRole: 'Systems Architect',
        themeColor: '#15183f',
        description: 'Developing some subsystems of a financial system.',
        accomplishments: [],
      },
      {
        startYYYYMM: '201709',
        endYYYYMM: '201806',
        name: 'WSP Development',
        company: 'TeamSpirit Inc.',
        workRole: 'Frontend Engineer',
        themeColor: '#107cad',
        description: 'Developing a new attendance system product.',
        accomplishments: [
          { content: 'Setup a type checker for the project' },
          { content: 'Maintain frontend coding conventions' },
        ],
      },
      {
        startYYYYMM: '201702',
        endYYYYMM: '201704',
        name: 'Developer Tools Development',
        company: 'Works Applications Co., Ltd.',
        workRole: 'Engineer',
        themeColor: '#20334c',
        description:
          "Domestic tools to improve product developers' productivity.",
        accomplishments: [],
      },
      {
        startYYYYMM: '201610',
        endYYYYMM: '201701',
        name: 'Datasync Framework Development',
        company: 'Works Applications Co., Ltd.',
        workRole: 'Frontend Engineer & Backend Engineer & DB Engineer',
        themeColor: '#20334c',
        description:
          'A domestic framework to sync data between RDB and Cassandra.',
        accomplishments: [
          { content: 'Create a testing tool for product developers' },
          {
            content:
              'Create a data dumping feature to reproduce data-related issues',
          },
        ],
      },
      {
        startYYYYMM: '201608',
        endYYYYMM: '201609',
        name: 'HUE Product Prototyping',
        company: 'Works Applications Co., Ltd.',
        workRole: 'Frontend Engineer',
        themeColor: '#20334c',
        description: 'Creating a prototype for a Onboarding system product. ',
        accomplishments: [],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
        omitGoogleFont: false,
      },
    },
  ],
};
