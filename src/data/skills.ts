import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaJava,
	FaReact,
	FaFigma,
	FaLaravel,
	FaGit,
	FaDocker,
	FaPython,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
	SiTanstack,
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiFirebase,
	SiPostgresql,
	SiKotlin,
	SiIntellijidea,
	SiAndroidstudio,
	SiLinux,
	SiDotnet,
	SiGithubcopilot,
	SiExpo,
} from 'react-icons/si';
import { VscTerminalPowershell, VscVscode, VscCopilot } from 'react-icons/vsc'
import { BiLogoAdobe, BiLogoGoLang } from "react-icons/bi";

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
			name: 'Tanstack Start',
			icon: SiTanstack,
		},
		{
			name: 'Expo',
			icon: SiExpo,
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
			name: 'Golang',
			icon: BiLogoGoLang,
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
			name: 'Github Copilot (AI Driven Development)',
			icon: SiGithubcopilot,
		},
		{
			name: 'Figma',
			icon: FaFigma,
		},
		{
			name: 'Adobe',
			icon: BiLogoAdobe,
		},
		{
			name: 'Git',
			icon: FaGit,
		},
		{
			name: 'Linux',
			icon: SiLinux,
		},
		{
			name: 'Powershell',
			icon: VscTerminalPowershell,
		},
		{
			name: 'Docker',
			icon: FaDocker,
		},
	] as Skill[],
} as const;
