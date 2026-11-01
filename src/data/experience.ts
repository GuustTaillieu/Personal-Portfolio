export type ExperienceItem = {
	companyName?: string;
	position: string;
	period: string;
	projectId?: string;
};

export const experience = {
	title: 'My experience',
	description:
		'I started my coding journey at age 13 with HTML, CSS, JavaScript, and PHP. Over the years, I combined a strong foundation in visual design with advanced software engineering and cybersecurity studies. I’ve built mobile and web products for agencies, student clients, and personal projects, while also spending 4 years mentoring and tutoring students in programming online.',
	items: [
		{
			companyName: undefined,
			position: 'Online Tech Tutor & Mentor',
			period: '2022 – Present',
		},
		{
			companyName: 'BrightAnalytics',
			position: 'Trainee Full Stack Developer',
			period: '2025 (3 months)',
			projectId: 'brightanalytics',
		},
		{
			companyName: 'Sweet Mustard',
			position: 'Trainee Backend Developer',
			period: '2024 (3 months)',
			projectId: 'sweet-mustard',
		},
		{
			companyName: 'TapUp',
			position: 'App Engineer & Designer',
			period: '2023 - 2024',
			projectId: 'tapup',
		},
		{
			companyName: 'Storything',
			position: 'Full Stack Developer',
			period: '2024 - 2025',
			projectId: 'tapup',
		},
		{
			companyName: 'Zoomers',
			position: 'Designer',
			period: '2021 - 2024',
			projectId: 'zoomers',
		},
	] as ExperienceItem[],
} as const;

export const education = {
	title: 'My education',
	description:
		'I hold a background of 4.5 years in IT higher education, specializing in Software Engineering and Cybersecurity at Howest Bruges. In 2023, I spent 6 months studying abroad at IBA Denmark via Erasmus+, gaining international experience in software development and cross-cultural teamwork. My studies combine deep application architecture with hands-on system security and visual design.',
	items: [
		{
			school: 'Howest Bruges',
			course: 'Bachelor Cybersecurity',
			period: '2025 - 2026',
		},
		{
			school: 'Howest Bruges',
			course: 'Bachelor Software Engineer',
			period: '2022 - 2024',
		},
		{
			school: 'IBA Denmark',
			course: 'Study Abroad with Erasmus+',
			period: '2023 (6 months)',
		},
		{
			school: 'Athena Heule',
			course: 'Multimedia Option: Visual',
			period: '2019 - 2021',
		},
	],
} as const;
