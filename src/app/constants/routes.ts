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
		name: 'events',
		path: '/events',
	},
	// {
	// 	name: 'work',
	// 	path: '/work',
	// },
	{
		name: 'contact',
		path: '/contact',
	},
] as const;

export const ROUTES = {
	HOME: '/',
	CONTACT: '/contact',
	CONTACT_WITH_SERVICE: (service: string) => `/contact?service=${service}`,
	EVENTS: '/events',
	EVENT: (id: string) => `/events/${id}`,
	RESUME: '/resume',
	WORK: '/work',
} as const;
