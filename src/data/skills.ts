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
	SiLinux,
	SiDotnet,
	SiGithubcopilot,
	SiExpo,
} from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc'
import { BiLogoAdobe, BiLogoGoLang } from "react-icons/bi";

type Skill = {
	name: string;
	icon: IconType;
};

export const skills = {
	title: 'My skills',
	description:
		'I specialize in modern full-stack web and cross-platform mobile development, combining frontend frameworks like React Native (Expo), Next.js, and TanStack Start with robust backends in Go (Golang), PostgreSQL, and Node/NestJS. I leverage AI-assisted development tools to ship features rapidly, backed by a strong focus on cybersecurity principles and clean code architecture.',
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
