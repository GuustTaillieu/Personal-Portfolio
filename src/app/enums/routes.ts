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
		name: 'projects',
		path: '/projects',
	},
	// {
	// 	name: 'work',
	// 	path: '/work',
	// },
	// {
	// 	name: 'contact',
	// 	path: '/contact',
	// },
] as const;

export const ROUTES = {
	HOME: '/',
	CONTACT: '/contact',
	PROJECTS: '/projects',
	RESUME: '/resume',
	WORK: '/work',
} as const;
