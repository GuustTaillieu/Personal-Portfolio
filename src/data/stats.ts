type Stat = {
	text: string;
	number: number;
};

const stats = [
	{
		text: 'Year of experience',
		number: new Date().getFullYear() - 2021,
	},
	{
		text: 'Projects in production',
		number: 6,
	},
	{
		text: 'Happy clients',
		number: 6,
	},
	{
		text: 'Companies worked',
		number: 4,
	},
] as Stat[];

export default stats;
