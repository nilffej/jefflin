export type Skill =
    | 'Bootstrap'
    | 'D3.js'
    | 'Dart'
    | 'Express'
    | 'Firebase'
    | 'Flutter'
    | 'Java'
    | 'Javascript'
    | 'MongoDB'
    | 'Next.js'
    | 'NoSQL'
    | 'PostgreSQL'
    | 'React'
    | 'Redux'
    | 'SQL'
    | 'Spring Boot'
    | 'Typescript';

export type ExperienceData = {
    id: number,
    company: string,
    title: string,
    startDate: string,
    endDate: string,
    descriptions: string[],
    skills: Skill[]
}

export const experience: ExperienceData[] = [
    {
        id: 5,
        company: "Here™",
        title: "software engineer",
        startDate: "january 2024",
        endDate: "current",
        descriptions: [
            "Develop core features in Typescript and React for Electron-based enterprise browser and productivity environment targeting 1500+ end-users under a $725k annual contract obtaining the company’s first customer of newest flagship",
            "Improve and maintain cloud platform SaaS offering built on React, Express, and PostgreSQL",
            "Author architectural design proposals and assist in defining epics, stories, and acceptance criterias for features",
            "Advise in live customer debugging calls with support engineering team and fix customer and QA reported bugs"
        ],
        skills: [
            "React",
            "Redux",
            "Express",
            "PostgreSQL",
            "Typescript"
        ]
    },
    {
        id: 4,
        company: "Vail Systems",
        title: "software engineer intern",
        startDate: "june 2023",
        endDate: "august 2023",
        descriptions: [
            "Upgraded internal tool platforms using Javascript and Bootstrap 5.0 to improve usability for 30+ engineers",
            "Revamped metric graphs on company-wide dashboard using D3.js to improve interpretability for 250+ employees",
            "Maintained and refactored Java Spring Boot MVC and SQL models to reduce tech debt and code complexity"
        ],
        skills: [
            "Javascript",
            "Java",
            "Spring Boot",
            "SQL",
            "Bootstrap",
            "D3.js"
        ]
    },
    {
        id: 3,
        company: "Noahs’ Arc Capital Management",
        title: "frontend developer",
        startDate: "june 2023",
        endDate: "august 2023",
        descriptions: [
            "Built modular dashboard using Next.js and Redux to visualize options chain metrics and enhance trader UX",
            "Managed user data and custom dashboard configurations with MongoDB database",
            "Collaborated with traders to identify pain points on existing platforms and iterate more optimized workflows"
        ],
        skills: [
            "React",
            "Redux",
            "Next.js",
            "Typescript",
            "MongoDB"
        ]
    },
    {
        id: 2,
        company: "OpenFin",
        title: "engineering intern",
        startDate: "may 2022",
        endDate: "august 2022",
        descriptions: [
            "Developed 6 features and fixed 17 bugs in React in Electron app for 6000+ end-users at major financial institutions",
            "Created IndexedDB data migration tool using Javascript to facilitate company domain migration initiative",
            "Led initiative to improve developer onboarding and assisted in design of new engineering interview challenges",
            "Redesigned user flows in collaboration with UI/UX team and tech leads for more intuitive usage"
        ],
        skills: [
            "React",
            "Redux",
            "Typescript",
        ]
    },
    {
        id: 1,
        company: "Dayflect",
        title: "flutter mobile developer",
        startDate: "january 2022",
        endDate: "april 2022",
        descriptions: [
            "Developed 6 major features with Flutter focused on increased user retention and improved UX for 280+ daily users",
            "Reduced user data query latencies by nearly 100% while maintaining data privacy by designing and implementing synchronization mechanism between on-device NoSQL database and encrypted data hosted on Firebase",
            "Wrote functional and integration tests and maintained documentation on new and existing features"
        ],
        skills: [
            "Flutter",
            "Dart",
            "Firebase",
            "NoSQL"
        ]
    }
]