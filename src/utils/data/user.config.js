import ResumePDF from "./20241204172619.pdf";
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
		intro: "XR Evangelist | Futurist | Strategist",
		description:
			"I specialize in leadership, communication, and digital strategies to create meaningful connections and drive impactful change. With over 50 projects spanning gaming, emerging tech, and advocacy, I'm passionate about helping teams achieve their dreams while building a more inclusive and equitable world.",
		outro: "This space is where I showcase work that matters to me. Feel free to explore, reach out, or leave a comment -- I'd love to connect!",
	},
	experiences: [
		{
			organization: "elsewhere Not-For-Profit",
			organizationPicture: null,
			isCurrent: true,
			startDate: "June 2023",
			endDate: null,
			positions: [
				{
					positionName: "Founder & CEO",
					startDate: "June 2023",
					endDate: " Present",
					isPresent: true,
					description:
						"Founded elsewhereNFP to drive innovation and inclusivity in the games industry through data-driven research and actionable resources. Organized the inaugural Safer Spaces Summit, convening 40+ major industry organizers to share strategies and establish best practices for safety and inclusivity in gaming. Conducted comprehensive surveys at major global gaming events, gathering insights from 1,000+ participants to produce reports that influenced organizational policies and improved industry standards.",
				},
			],
		},
	],
	education: [
		{
			instituteName: "University of Pennsylvania",
			degree: "Bachelor of Applied Arts and Sciences (BAAS) - Leadership and Communication + Digital Strategies",
			year: "2024",
			id: 1,
		},
	],
	projects: [
		{
			projectName: "Safer Spaces Summit",
			description:
				"Organized a landmark industry summit convening 40+ major gaming event organizers to share strategies and establish best practices for safety and inclusivity in gaming spaces.",
			madeWith: ["Event Production", "Community Building", "Research", "Advocacy"],
			link: "https://github.com/ashleyriott",
		},
		{
			projectName: "elsewhere Research Reports",
			description:
				"Led comprehensive survey research at major global gaming events, gathering insights from 1,000+ participants to produce actionable reports that influenced organizational policies.",
			madeWith: ["Data Analysis", "Survey Design", "Report Writing", "Policy"],
			link: "https://github.com/ashleyriott",
		},
		{
			projectName: "Portfolio OS Theme",
			description:
				"This very portfolio! A creative Windows 10-inspired web experience built with React, featuring draggable windows, a taskbar, start menu, and simulated desktop applications.",
			madeWith: ["React", "Redux", "SCSS", "FluentUI"],
			link: "https://github.com/ashleyriott/Portfolio_OS_Theme",
		},
	],
	skills: [
		{
			name: "Strategy & Leadership",
			values: [
				"Program Management",
				"Strategic Planning",
				"Team Leadership",
				"Community Building",
				"Event Production",
			],
		},
		{
			name: "Digital & Creative",
			values: [
				"XR/VR/AR",
				"Digital Strategy",
				"Content Creation",
				"Social Media",
				"UX Research",
			],
		},
		{
			name: "Technical",
			values: [
				"React",
				"JavaScript",
				"HTML/CSS",
				"Data Analysis",
				"Survey Design",
			],
		},
	],
};

export default user;
