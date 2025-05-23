import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  mysql,
  postgresql,
  oracle,
  sqlite,
  mssql
} from "../assets";
import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  // {
  //   id: "1",
  //   title: "Pricing",
  //   url: "#pricing",
  // },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Integration",
    url: "#integration",
  },
  // {
  //   id: "4",
  //   title: "Source Code",
  //   url: links.sourceCode,
  //   onlyMobile: true,
  //   external: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [mysql, oracle, postgresql, mssql,sqlite];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const dbIntegrationText =
  "Effortlessly connect all your databases to Vaame for unified access, instant AI-powered SQL generation, and enterprise-grade security. Manage and analyze your data from one intuitive platform.";

export const dbIntegrationContent = [
  {
    id: "0",
    title: "Popular Databases",
    text: "Connect to MySQL, MS SQL, Oracle, SQLite, PostgreSQL, MongoDB, and more with just a few clicks.",
  },
  {
    id: "1",
    title: "Excel & CSV Files",
    text: "Drag-and-drop any spreadsheet or CSV and start querying immediately.",
  },
  {
    id: "2",
    title: "No-Code Setup",
    text: "Integrate your databases without writing a single line of code. Vaame makes onboarding effortless.",
  },
  {
    id: "3",
    title: "Cloud Services",
    text: "Sync with Google Sheets and other data sources seamlessly for live updates.",
  },
  {
    id: "4",
    title: "Enterprise-Grade Security",
    text: "All integrations use robust encryption and security best practices to keep your data safe.",
  },
];

export const dbApps = [
  {
    id: "0",
    title: "MySQL",
    icon: mysql,
    width: 60,
    height: 60,
  },
  {
    id: "1",
    title: "MS SQL",
    icon: mssql,
    width: 60,
    height: 60,
  },
  {
    id: "2",
    title: "Oracle",
    icon: oracle,
    width: 60,
    height: 60,
  },
  {
    id: "3",
    title: "SQLite",
    icon: sqlite,
    width: 60,
    height: 60,
  },
  {
    id: "4",
    title: "PostgreSQL",
    icon: postgresql,
    width: 60,
    height: 60,
  },
  {
    id: "5",
    title: "MongoDB",
    icon: mssql,
    width: 60,
    height: 60,
  },
  {
    id: "6",
    title: "Firebase",
    icon: oracle,
    width: 60,
    height: 60,
  },
  {
    id: "7",
    title: "More",
    icon: postgresql,
    width: 60,
    height: 60,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
];

// export const benefits = [
//   {
//     id: "0",
//     title: "Ask anything",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "/src/assets/benefits/card-1.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "1",
//     title: "Improve everyday",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "/src/assets/benefits/card-2.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "2",
//     title: "Connect everywhere",
//     text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//     backgroundUrl: "/src/assets/benefits/card-3.svg",
//     iconUrl: benefitIcon3,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "3",
//     title: "Fast responding",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "/src/assets/benefits/card-4.svg",
//     iconUrl: benefitIcon4,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "4",
//     title: "Ask anything",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "/src/assets/benefits/card-5.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "5",
//     title: "Improve everyday",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "/src/assets/benefits/card-6.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//   },
// ];

export const benefits = [
  {
    id: "0",
    title: "Text to SQL in Seconds",
    text: "Just type what you're looking for in plain English—Vaame instantly translates it into optimized SQL queries so you don’t have to.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Visualize Your Data Instantly",
    text: "Turn SQL queries into beautiful, interactive charts and graphs—automatically. No more exporting to other tools.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Upload & Query CSV/Excel",
    text: "Drop in your CSV or Excel files and start querying them like a database—directly in Vaame, with full SQL support.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Export & Share with Ease",
    text: "Download visual reports or export query results in one click. Sharing your insights has never been this easy.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Friendly for Everyone",
    text: "Whether you're a data analyst, business user, or founder, Vaame’s intuitive design makes it simple for anyone to explore data.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Secure by Design",
    text: "Vaame uses enterprise-grade security to protect your data. Your files, queries, and insights stay safe and private.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];





export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
