type AboutInfo = {
	fieldName: string;
	fieldValue: string;
	href?: string;
};

export const about = {
	title: 'About me',
	description:
		'Hi there! I am Guust Taillieu, a 20-year-old full-stack developer studying Applied Informatics at Howest Bruges. I love creating user-friendly and functional software, with a focus on both front-end and back-end development. Outside of studying, I work on personal projects, hit the gym, take walks, and contribute to Zoomers and Storything.',
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
