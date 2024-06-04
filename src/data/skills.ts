import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaJava,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaLaravel,
	FaAndroid,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiFirebase,
	SiAdobe,
	SiPostgresql,
} from 'react-icons/si';

export const skills = {
	title: 'My skills',
	description:
		'I have experience with a wide range of programming languages, frameworks, and tools. Here are a few of the technologies I have worked with:',
	skillList: [
		{
			name: 'HTML',
			icon: FaHtml5,
		},
		{
			name: 'CSS',
			icon: FaCss3,
		},
		{
			name: 'JavaScript',
			icon: FaJs,
		},
		{
			name: 'TypeScript',
			icon: SiTypescript,
		},
		{
			name: 'React',
			icon: FaReact,
		},
		{
			name: 'Next.js',
			icon: SiNextdotjs,
		},
		{
			name: 'Node.js',
			icon: FaNodeJs,
		},
		{
			name: 'Java',
			icon: FaJava,
		},
		{
			name: 'Laravel',
			icon: FaLaravel,
		},
		{
			name: 'MySQL',
			icon: SiPostgresql,
		},
		{
			name: 'MongoDB',
			icon: SiMongodb,
		},
		{
			name: 'Firebase',
			icon: SiFirebase,
		},
		{
			name: 'Android',
			icon: FaAndroid,
		},
		{
			name: 'Figma',
			icon: FaFigma,
		},
		{
			name: 'Adobe',
			icon: SiAdobe,
		},
	],
} as const;
