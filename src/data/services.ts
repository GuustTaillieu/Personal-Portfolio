type Service = {
	num: string;
	title: string;
	description: string;
};

const services: Service[] = [
	{
		num: '01',
		title: 'Web Development',
		description:
			'We build websites that serve as the marketing hub for your business. A website is important because it helps you establish credibility as a business.',
	},
	{
		num: '02',
		title: 'Mobile App Development',
		description:
			'We develop mobile applications that allow your business to be streamlined and accessible to your customers at all times.',
	},
	{
		num: '03',
		title: 'Digital Marketing',
		description:
			'We help businesses develop a marketing strategy that will help them establish a strong online presence and reach potential customers.',
	},
	{
		num: '04',
		title: 'SEO Optimization',
		description:
			'We help businesses optimize their website to rank higher in search engines, making them more visible to potential customers.',
	},
];

export default services;
