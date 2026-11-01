import { IconType } from 'react-icons';
import {
	SiVuedotjs,
	SiLaravel,
	SiPhp,
	SiSpringboot,
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiFirebase,
	SiJavascript,
	SiHtml5,
	SiCss,
} from 'react-icons/si';
import { FaJava, FaFigma, FaServer } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

export type ProjectPreview = {
	src: string;
	url?: string;
	online?: boolean;
	displayUrl?: string;
	title?: string;
};

export type Project = {
	id: string;
	num: string;
	title: string;
	company: string;
	category: string;
	period: string;
	role: string;
	studyContext: string;
	shortDescription: string;
	problem: string;
	solution: string;
	successTitle?: string;
	successDescription?: string;
	metrics?: { label: string; value: string }[];
	isInternal: boolean;
	confidentialityNote: string;
	technologies: {
		name: string;
		icon?: IconType;
	}[];
	deviceType?: 'desktop' | 'mobile';
	images?: (string | ProjectPreview)[];
};

export const projects: Project[] = [
	{
		id: 'brightanalytics',
		num: '01',
		title: 'Custom Internal Time-Registration Platform',
		company: 'BrightAnalytics',
		category: 'Internship · Full-Stack Web App',
		period: '2025 (3 months)',
		role: 'End-to-End Product Owner (UI/UX Design, Vue.js Frontend, Laravel Backend)',
		studyContext:
			'Built during my 3-month internship at BrightAnalytics while completing my Software Engineering bachelor degree at Howest Bruges.',
		shortDescription:
			'Custom internal time-registration web application built from scratch to replace a rigid table layout with an intuitive drag-and-drop calendar interface.',
		problem:
			'Before I arrived, everyone was frustrated with the existing time-tracking software because it forced employees to manually type start times, end times, and break durations into a rigid table layout that was hard to read and painful to update when people got busy.',
		solution:
			'I owned the project end-to-end across two-week sprints, handling the UI/UX design, the Vue.js frontend, and the Laravel backend. Instead of another form-heavy table, I designed and built an interactive calendar interface where employees could simply drag and drop time slots, save favorite recurring blocks, sync directly with Google Calendar, and check teammates’ schedules. Focusing on shipping a working, production-ready increment at the end of every sprint meant stakeholders could test it immediately and steer the UX around their actual daily habits.',
		successTitle: 'How Did We Know It Worked? What Did Success Actually Look Like?',
		successDescription:
			'Last time I heard, the tool was still being used internally across the entire company. The company ran two internal polls after launch, and the feedback consistently came back that it made logging hours way faster and significantly less frustrating. Turning a repetitive task that used to require manual typing multiple times a day into a simple two-second drag-and-drop action is what real success and good UX look like to me.',
		isInternal: true,
		confidentialityNote:
			'Internal Enterprise Software: Developed under corporate NDA for internal operations at BrightAnalytics. Source code and live UI screenshots are proprietary and cannot be shared publicly, but the system is verified and proven in production.',
		technologies: [
			{ name: 'Vue.js', icon: SiVuedotjs },
			{ name: 'Laravel', icon: SiLaravel },
			{ name: 'PHP', icon: SiPhp },
			{ name: 'TailwindCSS', icon: SiTailwindcss },
			{ name: 'Figma (UI/UX)', icon: FaFigma },
			{ name: 'Google Calendar API' },
		],
	},
	{
		id: 'sweet-mustard',
		num: '02',
		title: 'Visitor Onboarding Reception Tablet App',
		company: 'Sweet Mustard',
		category: 'Internship · Hexagonal Architecture',
		period: '2024 (3 months)',
		role: 'Backend Developer (99% Backend in Spring Boot, flexible on Frontend)',
		studyContext:
			'Developed during my 3-month internship at Sweet Mustard, coached by Cronos Group professionals during my higher education studies.',
		shortDescription:
			'Interactive tablet onboarding application installed at reception to guide office visitors smoothly and notify their hosts automatically.',
		problem:
			'Many visitors arriving at the Sweet Mustard office often felt lost or confused upon arrival, needing assistance to locate and reach their contact person in a large, bustling office environment.',
		solution:
			'Together with a team of four other student developers, we created a dedicated onboarding application deployed on a tablet in the reception area. I focused 99% on backend engineering with Spring Boot while remaining flexible to assist with the React frontend when needed. We implemented Hexagonal Architecture (Ports and Adapters) for clean decoupling and enterprise maintainability, deploying the services on Microsoft Azure.',
		successTitle: 'Agile Teamwork, Hexagonal Architecture & Spring Boot',
		successDescription:
			'The project was managed in a strict Scrum and Agile environment with daily stand-ups, retrospectives, and two-week sprints. The internship provided deep insights into effective teamwork among software developers, maximizing team efficiency, implementing Hexagonal Architecture with Spring Boot, and shipping production-ready enterprise code with coaching from Cronos Group mentors.',
		metrics: [
			{ label: 'Team Size', value: '5 Trainees' },
			{ label: 'Architecture', value: 'Hexagonal' },
			{ label: 'My Role', value: 'Backend Developer' },
			{ label: 'Cloud Infrastructure', value: 'Microsoft Azure' },
		],
		isInternal: true,
		confidentialityNote:
			'Internal Enterprise Tablet Kiosk: Built under Sweet Mustard / Cronos Group confidentiality for office reception operations. In accordance with internal IP policies, visual assets and internal repositories cannot be distributed publicly.',
		technologies: [
			{ name: 'Spring Boot', icon: SiSpringboot },
			{ name: 'Java', icon: FaJava },
			{ name: 'Hexagonal Architecture' },
			{ name: 'React', icon: SiReact },
			{ name: 'Azure Cloud', icon: VscAzure },
			{ name: 'Scrum / Agile' },
		],
	},
	{
		id: 'tapup',
		num: '03',
		title: 'TapUp Micro-Learning Mobile Application',
		company: 'TapUp (Storything)',
		category: 'Student Venture · Mobile & Backend',
		period: '2023 - 2024',
		role: 'End-to-End Product Engineer & Designer',
		deviceType: 'mobile',
		studyContext:
			'Engineered as a student project under Storything, taking full ownership of product thinking, Figma UI/UX, React Native frontend, and Spring Boot backend.',
		shortDescription:
			'End-to-end micro-learning mobile app formatted like Instagram stories to train company employees on heavy equipment and warehouse tools.',
		problem:
			'Companies often lack the time and resources to train employees one-on-one on how to operate heavy machinery (such as forklifts in retail warehouses like Colruyt) or specialized tools. Traditional training methods were slow, paper-based, and hard to verify.',
		solution:
			'I developed TapUp as an end-to-end mobile learning product. I handled everything alone: concept ideation, feature scoping, Figma UI/UX design, and mobile development in React Native. The app delivers bite-sized chapters structured like Instagram stories with short instructional videos. After completing a chapter, employees take a quiz. If they fail, they re-watch the material; once all quizzes are passed, they earn a verified qualification medal confirming they are certified to use the machinery.',
		successTitle: 'Architectural Evolution: From Client SDK to Spring Boot VPS',
		successDescription:
			'Initially, the product owner suggested using React Native directly with the Firebase client SDK. However, as the app grew, running all logic and data handling on the client made the mobile app heavy and sluggish. I recommended a clean architectural separation, extracted the business logic, and rewrote a dedicated backend from scratch using Java Spring Boot, which I deployed on a custom VPS. The app was built and tested for both iOS and Android. It was a complete end-to-end journey in product design, performance optimization, and full-stack mobile architecture.',
		metrics: [
			{ label: 'Ownership', value: '100% End-to-End' },
			{ label: 'Platforms', value: 'iOS & Android' },
			{ label: 'Backend Refactor', value: 'Spring Boot' },
			{ label: 'Learning Format', value: 'Videos & Quizzes' },
		],
		isInternal: false,
		confidentialityNote:
			'Student Agency Venture: Built under Storything (where I also handled bug fixes and maintenance). Development concluded after the product was built and budget cycled out.',
		technologies: [
			{ name: 'React Native', icon: SiReact },
			{ name: 'Spring Boot', icon: SiSpringboot },
			{ name: 'Java', icon: FaJava },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Firebase', icon: SiFirebase },
			{ name: 'Figma (UI/UX)', icon: FaFigma },
			{ name: 'VPS Deployment', icon: FaServer },
		],
		images: [
			{
				src: '/assets/projects/tapup/WelcomeScreen.jpg',
				title: 'Welcome & Onboarding Flow',
			},
			{
				src: '/assets/projects/tapup/HomeScreen.jpg',
				title: 'Global User Home Screen',
			},
			{
				src: '/assets/projects/tapup/HomeScreenCompany.jpg',
				title: 'Employee Home Screen',
			},
			{
				src: '/assets/projects/tapup/ChapterScreen.jpg',
				title: 'Micro-Learning Chapters',
			},
			{
				src: '/assets/projects/tapup/QuizScreen.jpg',
				title: 'Interactive Knowledge Quiz',
			},
			{
				src: '/assets/projects/tapup/ProfileScreen.jpg',
				title: 'Profile Screen',
			},
		],
	},
	{
		id: 'sundo',
		num: '04',
		title: 'Sundo Scrollytelling Web Experience',
		company: 'Sundo',
		category: 'Client Project · Award Winner',
		period: '2021',
		role: 'Solo Web Developer & UI/UX Designer',
		studyContext:
			'Created during my first year of higher education programming studies (2021), entirely engineered in Vanilla HTML, CSS, and JavaScript.',
		shortDescription:
			'Award-winning interactive scrollytelling website featuring a 3D-object image sequence for a smart sunscreen dispenser, recognized by DesignRush.',
		problem:
			'Sundo invented a smart sunscreen dispenser that dispenses lotion based on real-time UV and temperature data. They needed an innovative website to showcase their hardware and tell their story in an unforgettable way, but had no prior digital presence.',
		solution:
			'Working completely solo early in my studies before learning modern frameworks, I designed the visual concept and built the entire site in pure Vanilla HTML, CSS, and JavaScript. I created a custom scrollytelling experience: visitors land on an interactive page with the sun in the center; as they scroll, the sun rises, narrative typography appears, and they transition to a 3D model of the dispenser. The 3D dispenser smoothly rotates 360 degrees via an image sequence driven by the scroll position, dynamically updating feature highlights in sync with each angle. I also engineered full trilingual support (Dutch, French, and English) and a custom contact form.',
		successTitle: 'DesignRush Website of the Month Award',
		successDescription:
			'The founders were immensely proud of the launch, and the website was honored with a Website of the Month Award by DesignRush (designrush.com). Building a seamless, high-performance 3D-rotation scrollytelling experience in pure vanilla JavaScript without external animation libraries was a massive technical milestone that ignited my passion for creative development.',
		metrics: [
			{ label: 'DesignRush Winner', value: 'Website Of The Month' },
			{ label: 'Core Technology', value: 'Vanilla JS' },
			{ label: '3D Interaction', value: 'Image Sequence' },
			{ label: 'Accessibility', value: 'Language Switcher' },
		],
		isInternal: false,
		confidentialityNote:
			'Award-Winning Client Website: Recognized by DesignRush for excellence in creative web design and interactive scrollytelling.',
		technologies: [
			{ name: 'Vanilla JavaScript', icon: SiJavascript },
			{ name: 'HTML5', icon: SiHtml5 },
			{ name: 'CSS3', icon: SiCss },
			{ name: '3D Image Sequence' },
			{ name: 'Scrollytelling' },
			{ name: 'Figma (UI/UX)', icon: FaFigma },
			{ name: 'Custom Language Switcher' },
			{ name: 'Custom Animation Scripts' },
		],
		images: [
			{
				src: '/assets/projects/sundo/sundo.mp4',
				title: 'Sundo Scrollytelling Web Experience',
				url: 'https://www.sundodispensers.com',
				displayUrl: 'sundodispensers.com',
				online: true,
			},
		],
	},
	{
		id: 'zoomers',
		num: '05',
		title: 'UI/UX & Visual Design Portfolio',
		company: 'Zoomers',
		category: 'Student Agency · 4+ Years UI/UX',
		period: '2021 - 2024 (3+ years)',
		role: 'UI/UX & Visual Designer',
		deviceType: 'desktop',
		studyContext:
			'Crafted over 3+ years as a visual and UI/UX designer with the Zoomers student agency, beginning in my first year of programming studies and building 4+ years of UI/UX craft.',
		shortDescription:
			'Over 3 years of digital design, interface remakes, wireframing, and design systems in Figma for diverse client applications.',
		problem:
			'Clients partnering with the agency frequently presented fragmented visual identities, outdated interfaces, or clumsy user flows that hurt product engagement.',
		solution:
			'Over three continuous years with Zoomers, I served as visual and UI/UX designer. I designed countless interface remakes, mapped intuitive user journeys, and constructed reusable design systems in Figma. I specialized in establishing clean typography hierarchies, cohesive color tokens, and interactive component libraries bridging design and engineering seamlessly.',
		successTitle: '4+ Years of Deep UI/UX Design Experience',
		successDescription:
			'Working as a visual designer alongside my software engineering studies gave me a distinctive dual perspective: I don’t just write code, I understand visual hierarchy, user psychology, and accessible interaction design. Over 4 years of hands-on Figma and UI/UX work across multiple client platforms has made design an intuitive second nature in everything I build.',
		metrics: [
			{ label: 'Experience', value: '4+ Years UI/UX' },
			{ label: 'Projects', value: '25+ Projects' },
			{ label: 'Primary Tool', value: 'Figma' },
			{ label: 'Core Output', value: 'Web & Mobile Design' },
		],
		isInternal: false,
		confidentialityNote:
			'Design Agency Work: UI/UX assets, component systems, and interface remakes created across client engagements with Zoomers.',
		technologies: [
			{ name: 'Figma', icon: FaFigma },
			{ name: 'UI/UX Design' },
			{ name: 'Design Systems' },
			{ name: 'Wireframing' },
			{ name: 'Visual Design' },
			{ name: 'Prototyping' },
		],
		images: [
			{
				src: '/assets/projects/zoomers/HELDer.jpg',
				url: 'https://held-er.com/',
				online: false,
				displayUrl: 'held-er.com',
				title: 'HELDer Client Platform',
			},
			{
				src: '/assets/projects/zoomers/FlandersGameHub.jpg',
				online: true,
				url: 'https://www.flandersgamehub.be/',
				displayUrl: 'flandersgamehub.be',
				title: 'Flanders Game Hub',
			},
		],
	},
];
