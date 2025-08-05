import ResumePDF from "./20241204172619.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";
import Freelance from ".././../assets/images/data/Freelance.png";
import PayPal from ".././../assets/images/data/PayPal.jpeg";

const user = {
	firstName: "Ashley 'ashleyriott'",
	lastName: "Blake",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "ashleyriott@gmail.com",
	linkedIn: "in/ashleyriott",
	gitHub: "ashleyriott",
	twitter: "ashleyriott",
	aboutMe: {
		intro: "XR evangelist, futurist, and strategist.",
		description:
			"I specialize in leadership, communication, and digital strategies to create meaningful connections and drive impactful change. With over 50 projects spanning gaming, emerging tech, and advocacy, I’m passionate about helping teams achieve their dreams while building a more inclusive and equitable world. 🌍",
		outro: "This space is where I showcase work that matters to me. Feel free to explore, reach out, or leave a comment—I’d love to connect! ✨",
	},
	experiences: [
		{
			organization: "elsewhere Not-For-Profit",
			organizationPicture: PayPal,
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
		{
			organization: "KloudGin",
			organizationPicture: KloudGin,
			isCurrent: false,
			startDate: "Jun 2019",
			endDate: "Oct 2021",
			positions: [
				{
					positionName: "Software Engineer",
					startDate: "May 2021",
					endDate: " Present",
					isPresent: true,
					description:
						"During this time, I worked on the redesigning and development of the new UI for the product using AngularJS.I also developed multiple APIs to support the GIS feature and also worked on the configuration of the GIS in the product.",
				},
				{
					positionName: "Associate Software Engineer",
					startDate: "May 2020",
					endDate: "April 2021",
					isPresent: false,
					description:
						"During this time, I designed and developed multiple APIs for the EAM Module and Inventory Management Module. For the EAM module, I also developed and implemented APIs for supporting new features in the product such as Asset Criticality, Purchase Order, and Material Order modules.",
				},
				{
					positionName: "Trainee Engineer",
					startDate: "June 2019",
					endDate: "April 2020",
					isPresent: false,
					description:
						"During this time, I developed and implemented the User Management Module including the development of the supporting APIs and configuration of the UI for the dashboard using Java and KloudGin Platform. I also worked on the API documentation using Swagger API.",
				},
			],
		},
		{
			organization: "Freelance Developer",
			startDate: "2017",
			endDate: "2019",
			organizationPicture: Freelance,
			isCurrent: false,
			positions: [
				{
					positionName: "Fullstack Developer",
					startDate: "2017",
					endDate: "2019",
					isPresent: false,
					description:
						"I was a freelance developer during my Bachelor's degree where I worked with different established companies like Prelude, Ediolon and Youngster's Worldwide.",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"University of Pennsylvania",
			degree: "Bachelor of Applied Arts and Sciences (BAAS) - Leadership and Communication + Digital Strategies",
			year: "2024",
			id: 1,
		},
		{
			instituteName: "O.D.M. Public School, Bhubaneswar",
			degree: "Intermediate",
			year: "2015",
			id: 2,
		},
		{
			instituteName: "Prabhujee English Medium School, Bhubaneswar",
			degree: "Matriculation",
			year: "2013",
			id: 3,
		},
	],
	projects: [
		{
			projectName: "MyShop",
			description:
				"A customizable eCommerce website where the user can customize different components of the application.",
			madeWith: ["React", "Node", "Firebase", "Firestore"],
			link: "hhttps://github.com/srinibasbiswal/My-Shop",
		},
		{
			projectName: "NoteStack",
			description:
				"A notes management platform/application where students can share their course notes easily with each other.",
			madeWith: ["React", "Java", "Firebase", "Firestore"],
			link: "https://github.com/srinibasbiswal/NoteStack",
		},
		{
			projectName: "Bus Management",
			description:
				"A bus management system for ITER, BBSR which helps to know different bus routes and makes easy to decode which route to take.",
			madeWith: ["Python", "TKinter", "Firebase"],
			link: "https://iter-bus.firebaseapp.com/",
		},
		{
			projectName: "Seat Swapper",
			description:
				"A train seat swapping system where we can get our desired train seat without any extra payment. This was a project for IBS hackathon.",
			madeWith: [
				"Java",
				"MySQL",
				"BlockChain",
				"HTML",
				"CSS",
				"JavaScript",
			],
			link: "https://github.com/srinibasbiswal/IBS-Hackathon",
		},
		{
			projectName: "Flight Ticket Saver",
			description:
				"A flight booking system which was dealing with the bumping of seats with the help of Etherium Smart Contract. This was a project for IATA Hackathon.",
			madeWith: ["Python", "DJANGO", "HTML", "CSS", "JavaScript"],
			link: "https://github.com/srinibasbiswal/IATA-Hackathon",
		},
	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"ReactJS",
				"JavaScript",
				"Node",
				"Python",
				"Java",
				"Firebase",
				"HTML",
				"CSS",
			],
		},
		{
			name: "Tools/IDE Proficiency",
			values: ["VSCode","XCode","Git", "PyCharm", "Eclipse", "IntelliJ IDEA", "Postman"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL", "MongoDB", "Firestore"],
		},
	],
};

export default user;
