export type Event = {
	num: string;
	title: string;
	shortDescription: string;
	description: string;
	date: `${string}/${string}/${string}`;
	thumbnail: string;
	images: {
		src: string;
		alt: string;
	}[];
};

export const events: Event[] = [
	{
		num: '01',
		title: 'Project 1',
		shortDescription: 'Short description of project 1',
		description: 'Long description of project 1',
		date: '01/01/2024',
		thumbnail: '/assets/events/01/cover.webp',
		images: [
			{
				src: '/assets/events/01/cover.webp',
				alt: 'Image 1',
			},
			{
				src: '/assets/events/01/image1.webp',
				alt: 'Image 2',
			},
		],
	},
	{
		num: '02',
		title: 'Project 1',
		shortDescription: 'Short description of project 1',
		description: 'Long description of project 1',
		date: '01/01/2024',
		thumbnail: '/assets/events/02/cover.webp',
		images: [
			{
				src: '/assets/events/02/cover.webp',
				alt: 'Image 1',
			},
			{
				src: '/assets/events/02/image.jpeg',
				alt: 'Image 2',
			},
			{
				src: '/assets/events/02/image1.webp',
				alt: 'Image 3',
			},
			{
				src: '/assets/events/02/image2.webp',
				alt: 'Image 4',
			},
			{
				src: '/assets/events/02/image3.webp',
				alt: 'Image 5',
			},
		],
	},
	{
		num: '03',
		title: 'Project 1',
		shortDescription: 'Short description of project 1',
		description: 'Long description of project 1',
		date: '01/01/2024',
		thumbnail: '/assets/events/03/cover.webp',
		images: [
			{
				src: '/assets/events/03/cover.webp',
				alt: 'Image 1',
			},
			{
				src: '/assets/events/03/image1.jpg',
				alt: 'Image 2',
			},
			{
				src: '/assets/events/03/image2.jpg',
				alt: 'Image 3',
			},
		],
	},
];
