type AboutInfo = {
	fieldName: string;
	fieldValue: string;
	href?: string;
};

export const about = {
	title: 'About me',
	description:
		'Hey there! I’m Guust Taillieu, a 23-year-old full-stack developer on a mission to conquer the digital world-while making sure I actually touch some grass now and then. I thrive on crafting user-friendly and functional software, juggling front-end and back-end development like a pro! When I’m not buried in code, you can find me bouldering my way to new heights, exploring nature, or building personal projects.', 
  info: [
		{
			fieldName: 'Name',
			fieldValue: 'Guust Taillieu',
		},
		{
			fieldName: 'Phone',
			fieldValue: '+32 496 07 70 61',
			href: 'tel:+32496077061',
		},
		{
			fieldName: 'Nationality',
			fieldValue: 'Belgian',
		},
		{
			fieldName: 'Email',
			fieldValue: 'guust@taillieusauw.net',
			href: 'mailto:guust@taillieusauw.net',
		},
		{
			fieldName: 'Status',
			fieldValue: 'Looking for a new challenge',
		},
		{
			fieldName: 'Languages',
			fieldValue: 'Dutch, English',
		},
	] as AboutInfo[],
} as const;
