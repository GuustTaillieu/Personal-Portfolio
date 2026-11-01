export const LINKS = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'services',
		path: '/services',
	},
	{
		name: 'resume',
		path: '/resume',
	},
	{
		name: 'work',
		path: '/work',
	},
	{
		name: 'events',
		path: '/events',
	},
] as const;

export const RESUME_TABS = {
	ABOUT: 'about-me',
	EXPERIENCE: 'experience',
	EDUCATION: 'education',
	SKILLS: 'skills',
	WEBSITE: 'website',
} as const;

export type ResumeTab = (typeof RESUME_TABS)[keyof typeof RESUME_TABS];

export const normalizeResumeTab = (
	rawTab?: string | string[] | null
): ResumeTab => {
	if (!rawTab) return RESUME_TABS.ABOUT;
	const tab = (Array.isArray(rawTab) ? rawTab[0] : rawTab)
		.toLowerCase()
		.trim();
	if (
		tab === 'about' ||
		tab === 'about me' ||
		tab === 'about-me' ||
		tab === 'aboutme'
	) {
		return RESUME_TABS.ABOUT;
	}
	if (tab === 'experience') return RESUME_TABS.EXPERIENCE;
	if (tab === 'education') return RESUME_TABS.EDUCATION;
	if (tab === 'skills' || tab === 'skill') return RESUME_TABS.SKILLS;
	if (
		tab === 'website' ||
		tab === 'this-website' ||
		tab === 'this website' ||
		tab === 'thiswebsite'
	) {
		return RESUME_TABS.WEBSITE;
	}
	return RESUME_TABS.ABOUT;
};

export const ROUTES = {
	HOME: '/',
	CONTACT: '/contact',
	CONTACT_WITH_SERVICE: (service: string) => `/contact?service=${service}`,
	EVENTS: '/events',
	EVENT: (id: string) => `/events/${id}`,
	RESUME: '/resume',
	RESUME_WITH_TAB: (tab: string) => `/resume?tab=${tab}`,
	WORK: '/work',
	PROJECT: (id: string) => `/work/${id}`,
	WORK_WITH_PROJECT: (project: string) => `/work/${project}`,
} as const;
