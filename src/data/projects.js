// Portfolio projects. Every project uses the same fields.
//
// HOW TO ADD A LINK LATER
//   liveDemo: "https://..."   -> shows a "Live Demo" button
//   github:   "https://..."   -> shows a "GitHub" button
// Leave a link as null and its button is simply hidden.
// Leave `status` as "" and the status badge is hidden.
// `highlights` and `learning` can be empty lists; those blocks then hide.

const projects = [
  {
    id: "jamia-umar",
    title: "Jamia Umar Islamic University Management System",
    category: "Full-Stack Web Application",
    status: "Live",

    description:
      "A full-stack management system built for a real Islamic university in Pakistan. It handles the day-to-day operations of the School, Hifz ul Quran and Hadith departments, with separate Male and Female sections.",

    problem:
      "A multi-department institution has to keep track of staff, students, attendance, salaries, admissions, expenses and donations. Without a central digital system, these records are hard to keep organized and accessible.",

    solution:
      "A role-based dashboard where Admins, Teachers and Parents each get their own portal and access level, with all core operations managed in one clean, responsive interface.",

    technologies: [
      "React JS",
      "Vite",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "REST API",
      "Vercel",
    ],

    features: [
      "Multi-role authentication with separate Admin, Teacher and Parent portals",
      "Teacher and student management across School, Hifz ul Quran and Hadith departments",
      "Attendance tracking",
      "Salary and performance management",
      "Admissions management",
      "Expense tracker and funds and donations tracking",
    ],

    highlights: [
      "Secure authentication with bcrypt password hashing and token-based session management",
      "RESTful API integration between the React frontend and the PHP backend",
      "Role-based access, with separate Male and Female sections",
      "Clean, modern and fully responsive dashboard",
    ],

    contribution:
      "Built the application end to end: the React interface, the PHP REST API, the MySQL database, authentication and the deployment on Vercel.",

    learning: [],

    github: null,
    liveDemo: "https://jamia-umar-ms.vercel.app/",
  },

  {
    id: "kisanrai",
    title: "KisanRai: Farmer's Opinion",
    category: "Full-Stack Web Platform",
    status: "",

    description:
      "A full-stack review and discussion platform for agricultural inputs: pesticides, fertilizers and seeds. Farmers share honest product experiences, companies reply publicly, and admins keep the platform trustworthy.",

    problem:
      "Farmers often choose inputs based on a dealer's word of mouth, with no reliable way to learn how a product performed for other growers. A poor or counterfeit product can cost a whole crop season, and companies have no structured way to answer complaints publicly.",

    solution:
      "A single place where product experience is shared openly, companies are accountable, and abuse is controlled through verification and moderation.",

    technologies: [
      "React (Vite)",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "PHP 8.2",
      "Laravel 12",
      "Laravel Sanctum",
      "MySQL",
    ],

    features: [
      "Three roles (Farmer, Company, Admin), each with its own permissions and pages",
      "Star ratings, written reviews, comments and likes/dislikes, with automatic average-rating updates",
      "Company right of reply: owners can publicly reply to, edit and delete replies on their product reviews",
      "Verified company badge, granted or revoked by admins",
      "Community moderation: a reports queue for products, reviews and comments",
      "Profile management with validated image uploads and automatic cleanup of old files",
    ],

    highlights: [
      "Token-based authentication with Laravel Sanctum and route protection by role and email-verification status",
      "Email OTP verification with hashed 6-digit codes, 10-minute expiry, a 5-attempt limit and a 60-second resend cooldown",
      "Rate limiting on login, registration and OTP endpoints to slow down brute-force attempts",
      "Privilege-escalation protection: admin accounts cannot be created through public registration",
      "Clean backend structure with Form Requests, API Resources, a dedicated OTP service class and custom middleware",
      "Relational schema with foreign keys, cascading deletes, unique constraints and database transactions",
      "35+ REST endpoints tested with Postman",
    ],

    contribution:
      "Built the platform end to end: the React interface, the Laravel REST API, the MySQL schema, authentication and the moderation system.",

    learning: [
      "Designing a role-based system end to end",
      "Thinking about abuse cases such as spam, fake accounts and brute force",
      "Keeping the API and UI in sync and shipping a responsive interface for phones",
    ],

    github: null,
    liveDemo: null,
  },

  {
    id: "boxverse",
    title: "BoxVerse: Custom Gift Box Builder",
    category: "Frontend Web Application",
    status: "Live",

    description:
      "A gamified gift-box builder where users design a box with drag-and-drop, add a personal message and earn rewards. Built as a React single-page application with a role-protected admin console.",

    problem:
      "Most gift sites sell fixed bundles, so customers cannot build the gift themselves.",

    solution:
      "A guided journey (discover, build, personalize, checkout, rewards and return) that lets the customer build the gift and makes the process feel like a game.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "JavaScript (ES6+)",
      "Vercel",
    ],

    features: [
      "Drag-and-drop box builder with a live box preview and product detail modals",
      "Gift message step and promo-code validation",
      "Auth modal (login and register), protected checkout and order confirmation",
      "Rewards system with points, six levels (Newcomer to BoxVerse Legend), a progress bar and badges",
      "Persisted wishlist, user profile and order history",
      "Role-protected admin console for products, boxes, orders and users",
    ],

    highlights: [
      "Feature-based architecture: components, pages, hooks, services, store and routes, with components grouped by feature (auth, builder, gamification, admin)",
      "Global state with Zustand: separate stores for auth, wishlist, points and UI, with auth persisted across refreshes",
      "Role-based access control with AuthGuard and AdminGuard route protection",
      "Custom hooks for points and level calculation, promo codes, dark mode and toasts",
      "API-ready service layer with a central API client and separate services for boxes, products and orders",
      "UX polish: dark mode, page transitions, toast notifications, confetti on success and a fully responsive layout",
      "Deployed on Vercel with SPA rewrite configuration so deep links work on refresh",
    ],

    contribution:
      "Built the complete frontend: the feature-based architecture, the Zustand state layer, custom hooks, the API service layer, route guards and the Vercel deployment.",

    learning: [
      "Structuring a scalable codebase by feature instead of by file type",
      "Moving business logic into custom hooks and global state into Zustand",
      "Debugging real deployment issues: a case-sensitive import bug that broke the Linux build on Vercel, and modal stacking fixed with a global UI store",
    ],

    github: null,
    liveDemo: "https://abdulsalamcode-boxverse.vercel.app/",
  },

  {
    id: "banking-gateway",
    title: "Banking Payment Gateway System",
    category: "Full-Stack Web & Android Application",
    status: "",

    description:
      "A simulated digital payment gateway that models core banking transaction flows such as balance inquiry and fund transfer, with real-time Telegram notifications and an Android app built on WebView.",

    problem:
      "Banking-style transactions need clear record-keeping and instant feedback, so users know what happened to their account without checking manually.",

    solution:
      "A PHP and MySQL backend that records every transaction, a Telegram bot that sends real-time alerts, and an Android app that packages the platform for mobile use.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Telegram Bot API",
      "Android WebView",
    ],

    features: [
      "Balance inquiry",
      "Fund transfer between accounts",
      "Real-time transaction notifications and account alerts through a Telegram bot",
      "Android app packaged with WebView and backed by PHP and MySQL for transaction records",
    ],

    highlights: [
      "End-to-end flow: user interface, server logic, database and notification channel",
      "Secure PHP and MySQL data handling for transaction record-keeping",
      "Third-party API integration with the Telegram Bot API",
      "One web codebase delivered on Android through WebView",
    ],

    contribution:
      "Designed and developed the platform end to end: the web interface, the PHP and MySQL backend, the Telegram bot integration and the Android packaging.",

    learning: [],

    github: null,
    liveDemo: null,
  },

  {
    id: "abdul-salam-os",
    title: "Abdul Salam OS: Interactive Developer Portfolio",
    category: "Frontend Web Application",
    status: "Live",

    description:
      "This portfolio, designed like a desktop operating system, with a taskbar, Start menu, draggable app windows and a command terminal, built to present my work in a memorable and accessible way.",

    problem:
      "Most developer portfolios are static pages that look alike, which makes it hard for a recruiter to remember a candidate or see how they think about UI and structure.",

    solution:
      "An OS-style interface where projects, stack, resume, about and contact open as windows, alongside a regular scrolling page, so it works for quick scanners and curious visitors alike.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Context",
      "Vercel",
    ],

    features: [
      "Desktop-style taskbar with a Start menu, running-app indicators, a clock and Show desktop",
      "Draggable, minimizable and maximizable windows with correct stacking and focus",
      "Command terminal (help, projects, skills, resume, contact, github, clear) with history and Tab completion",
      "Animated intro, scroll reveals and cursor-following card highlights",
      "Data-driven content: projects, stack, journey and contact links live in simple data files",
      "Fully responsive from small phones to wide desktops",
    ],

    highlights: [
      "Window manager built with React Context: z-index stacking, focus return, minimize and restore, and modal case studies",
      "Accessibility: keyboard navigation, focus management, a skip link, ARIA attributes and support for reduced-motion settings",
      "Tested with axe-core accessibility checks and at 320px, 375px, 768px and desktop widths",
      "Reusable building blocks: shared Reveal, SpotlightCard, Icon and section components",
    ],

    contribution:
      "Designed the interface and structure and built it with an AI-assisted workflow, reviewing and testing the result.",

    learning: [
      "Designing a window manager and shared state with Context",
      "Building accessible interactive UI: focus, keyboard and reduced motion",
      "Making a data-driven site that is easy to update",
    ],

    github: null,
    liveDemo: "https://abdul-salam-os.vercel.app/",
  },
];

export default projects;