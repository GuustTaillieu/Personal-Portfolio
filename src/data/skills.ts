import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaJava,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaLaravel,
	FaGit,
	FaDocker,
	FaPython,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiFirebase,
	SiAdobe,
	SiPostgresql,
	SiKotlin,
	SiVisualstudiocode,
	SiIntellijidea,
	SiAndroidstudio,
	SiLinux,
	SiPowershell,
	SiDotnet,
} from 'react-icons/si';

type Skill = {
	name: string;
	icon: IconType;
};

export const skills = {
	title: 'My skills',
	description:
		'I have experience with various technologies, including Java, JavaScript, Vue.js, Node.js, HTML5, CSS3, Laravel, Git, Docker, and Unix. Here are some of the technologies I have worked with:',
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
			name: 'Python',
			icon: FaPython,
		},
		{
			name: 'Java',
			icon: FaJava,
		},
		{
			name: 'Kotlin',
			icon: SiKotlin,
		},
		{
			name: 'Laravel',
			icon: FaLaravel,
		},
		{
			name: 'Dotnet',
			icon: SiDotnet,
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
			name: 'Figma',
			icon: FaFigma,
		},
		{
			name: 'Adobe',
			icon: SiAdobe,
		},
		{
			name: 'Git',
			icon: FaGit,
		},
		{
			name: 'VS Code',
			icon: SiVisualstudiocode,
		},
		{
			name: 'IntelliJ',
			icon: SiIntellijidea,
		},
		{
			name: 'Android Studio',
			icon: SiAndroidstudio,
		},
		{
			name: 'Linux',
			icon: SiLinux,
		},
		{
			name: 'Powershell',
			icon: SiPowershell,
		},
		{
			name: 'Docker',
			icon: FaDocker,
		},
	] as Skill[],
} as const;
