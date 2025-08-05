import ResumePDF from "./Ashley_Blake_Resume.md";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";

const user = {
        firstName: "Ashley",
        lastName: "Blake",
        userImage: default_avatar,
        resume: ResumePDF,
        email: "ashleyriott@gmail.com",
        linkedIn: "in/ashleyriott",
        gitHub: "ashleyriott",
        twitter: "ashleyriott",
        aboutMe: {
                intro: " Business Development professional specializing in XR/VR and gaming.",
                description:
                        "A dynamic and results-driven Business Development professional with over 6 years of dedicated experience in the XR/VR and gaming industries. Proven track record of driving global market expansion, securing high-value partnerships, and exceeding growth targets for VR software and entertainment products.",
                outro: "Combines strategic sales acumen with hands-on technical and community expertise to consistently achieve and surpass business objectives.",
        },
        experiences: [
                {
                        organization: "Solicited Advice Ltd.",
                        organizationPicture: default_avatar,
                        isCurrent: true,
                        startDate: "June 2018",
                        endDate: null,
                        positions: [
                                {
                                        positionName: "Marketing & Business Development Consultant",
                                        startDate: "June 2018",
                                        endDate: "Present",
                                        isPresent: true,
                                        description:
                                                "Partners with VR developers and organizations to drive growth. Developed and executed go-to-market strategies for over 30 VR and digital products. Crafts compelling brand narratives and conducts in-depth market analysis to refine product positioning.",
                                },
                        ],
                },
                {
                        organization: "Andromeda Entertainment",
                        organizationPicture: default_avatar,
                        isCurrent: false,
                        startDate: "July 2022",
                        endDate: "April 2024",
                        positions: [
                                {
                                        positionName: "Chief Operating Officer",
                                        startDate: "July 2022",
                                        endDate: "April 2024",
                                        isPresent: false,
                                        description:
                                                "Led strategic planning and operational execution that grew the company's product portfolio by over 500%. Negotiated major B2B deals exceeding $1M and spearheaded expansion into China.",
                                },
                        ],
                },
                {
                        organization: "elsewhere Not-For-Profit",
                        organizationPicture: default_avatar,
                        isCurrent: true,
                        startDate: "June 2023",
                        endDate: null,
                        positions: [
                                {
                                        positionName: "Founder & CEO",
                                        startDate: "June 2023",
                                        endDate: "Present",
                                        isPresent: true,
                                        description:
                                                "Secured foundational funding and forged strategic partnerships to support underrepresented developers and promote safer online spaces. Executed the inaugural Safer Spaces Summit.",
                                },
                        ],
                },
                {
                        organization: "Realize Music",
                        organizationPicture: default_avatar,
                        isCurrent: true,
                        startDate: "April 2024",
                        endDate: null,
                        positions: [
                                {
                                        positionName: "Head of Marketing",
                                        startDate: "April 2024",
                                        endDate: "Present",
                                        isPresent: true,
                                        description:
                                                "Created compelling pitch decks and comprehensive marketing plans for business development and platform partners. Conducted market research aligning initiatives with business goals and client needs.",
                                },
                        ],
                },
                {
                        organization: "Cloudhead Games",
                        organizationPicture: default_avatar,
                        isCurrent: false,
                        startDate: "March 2020",
                        endDate: "Dec 2021",
                        positions: [
                                {
                                        positionName: "Social Media & Community Relations Specialist",
                                        startDate: "March 2020",
                                        endDate: "Dec 2021",
                                        isPresent: false,
                                        description:
                                                "Maintained long-term relationships with the player community for the award-winning Pistol Whip VR. Acted as a link between customers and developers and designed an engagement system driving up to 150,000 weekly plays.",
                                },
                        ],
                },
        ],
        education: [],
        projects: [],
        skills: [
                {
                        name: "Core Competencies",
                        values: [
                                "B2B Sales & Partnerships",
                                "Go-to-Market Strategy",
                                "Lead Generation & Qualification",
                                "Contract Negotiation",
                                "Client Relationship Management",
                                "Sales Quota Attainment",
                                "VR/XR Platforms",
                                "Live Service Strategy",
                                "Market Analysis",
                                "Community Engagement",
                                "Inbound Sales Strategy",
                                "Public Speaking",
                                "Grant & Proposal Writing",
                                "CRM Software Experience",
                                "MS & Google Office Suites",
                                "Cold Outreach",
                                "Email Campaigns",
                                "Sales Performance Metrics",
                                "Sales KPI Reporting",
                                "Consultative Selling",
                                "Client Success & Retention",
                                "Cross-Functional Collaboration",
                                "HubSpot CRM Proficiency",
                        ],
                },
        ],
};

export default user;
