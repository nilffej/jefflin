export type ExperienceData = {
    company: string,
    title: string,
    startDate: string,
    endDate: string,
    descriptions: string[],
    skills: string[]
}

export const experience: ExperienceData[] = [
    {
        company: "Here™",
        title: "software engineer",
        startDate: "january 2024",
        endDate: "current",
        descriptions: [],
        skills: []
    },
    {
        company: "Vail Systems",
        title: "software engineer intern",
        startDate: "june 2023",
        endDate: "august 2023",
        descriptions: [
            "Upgraded internal platforms to use Bootstrap 5.0 and Javascript to improve usability for 30+ engineers",
            "Maintained and refactored Java Spring Boot MVC and SQL database models to decrease codebase complexity",
            "Revamped call metric graphs using D3.js on company-wide dashboard for better interpretability"
        ],
        skills: [
            "Bootstrap",
            "Javascript",
            "Java",
            "Spring Boot",
            "SQL",
            "D3.js"
        ]
    },
    {
        company: "Noahs’ Arc Capital Management",
        title: "frontend developer",
        startDate: "june 2023",
        endDate: "august 2023",
        descriptions: [
            "Developed modular dashboard using Next.js and Redux to better visualize data, such as option chain metrics and hedging sensitivity analysis, for enhanced trader experience and information digestibility",
            "Managed user data and custom workspace configurations with MongoDB database",
            "Collaborated with lead traders to identify pain points on existing platforms and design more capable features for more optimized workflows"
        ],
        skills: [
            "React",
            "Redux",
            "Next.js",
            "Typescript",
            "MongoDB",
        ]
    },
    {
        company: "OpenFin",
        title: "engineering intern",
        startDate: "may 2022",
        endDate: "august 2022",
        descriptions: [
            "Planned and developed 6 features and fixed 17 UI/UX bugs using React.js for primary product utilized by major leading financial institutions, such as Barclays, J.P. Morgan, and Wells Fargo",
            "Created IndexedDB data migration tool using Javascript for company domain migration initiative",
            "Led initiative to improve engineering onboarding and assisted in developing new hiring interview challenges",
            "Redesigned user flows in collaboration with UI/UX team and tech leads for more intuitive usage"

        ],
        skills: [
            "React",
            "Typescript",
            "MongoDB",
        ]
    },
    {
        company: "Dayflect",
        title: "flutter mobile developer",
        startDate: "january 2022",
        endDate: "april 2022",
        descriptions: [
            "Developed 6 major features using Flutter focused on increased user retention and improved user experience, including automated review prompting for increased App Store engagement and interactive app onboarding",
            "Reduced data search speeds to near-zero while maintaining user data privacy by designing and implementing synchronization mechanism between local NoSQL database and encrypted data hosted on Firebase ",
            "Wrote functional and integration tests and maintained documentation on new and existing features"
        ],
        skills: [
            "Flutter",
            "Dart",
            "Firebase",
            "NoSQL",
        ]
    }
]