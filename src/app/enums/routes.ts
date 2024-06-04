export const LINKS = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'about',
		path: '/about',
	},
	{
		name: 'services',
		path: '/services',
	},
	{
		name: 'projects',
		path: '/projects',
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
		name: 'contact',
		path: '/contact',
	},
] as const;

export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	CONTACT: '/contact',
	PROJECTS: '/projects',
	RESUME: '/resume',
	WORK: '/work',
} as const;
