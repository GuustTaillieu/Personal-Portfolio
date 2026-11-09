import {
	FaJs,
	FaReact,
	FaFigma,
	FaLaravel,
	FaGit,
	FaDocker,
	FaPython,
	FaTerminal,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
	SiTanstack,
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiPostgresql,
	SiKotlin,
	SiLinux,
	SiDotnet,
	SiGithubcopilot,
	SiExpo,
	SiApachekafka,
	SiSpringboot,
	SiNestjs,
	SiEffect,
	SiRedis,
	SiNodedotjs,
	SiSqlite,
	SiVuedotjs,
	SiGithubactions,
	SiOwasp,
	SiBurpsuite,
	SiOpenid,
	SiKalilinux,
	SiWireshark,
	SiJetpackcompose,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { BiLogoGoLang } from 'react-icons/bi';

export type Skill = {
	name: string;
	icon: IconType;
};

export type SkillCategory = {
	id: string;
	title: string;
	items: Skill[];
};

export type ConceptGroup = {
	category: string;
	items: string[];
};

export const skills = {
	title: 'My skills',
	description:
		'I specialize in modern full-stack web and cross-platform mobile development, combining frontend frameworks like React Native (Expo), Next.js, and TanStack Start with robust backends in Go (Golang), PostgreSQL, and Node/NestJS. I leverage AI-assisted development tools to ship features rapidly, backed by a strong focus on cybersecurity principles and clean code architecture.',
	categories: [
		{
			id: 'backend',
			title: 'Backend, Systems & Data',
			items: [
				{
					name: 'Go (Golang)',
					icon: BiLogoGoLang,
				},
				{
					name: 'Spring Boot',
					icon: SiSpringboot,
				},
				{
					name: 'NestJS',
					icon: SiNestjs,
				},
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Effect.ts',
					icon: SiEffect,
				},
				{
					name: '.NET',
					icon: SiDotnet,
				},
				{
					name: 'Apache Kafka',
					icon: SiApachekafka,
				},
				{
					name: 'PostgreSQL',
					icon: SiPostgresql,
				},
				{
					name: 'Redis',
					icon: SiRedis,
				},
				{
					name: 'Node.js',
					icon: SiNodedotjs,
				},
				{
					name: 'Python',
					icon: FaPython,
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
					name: 'MongoDB',
					icon: SiMongodb,
				},
				{
					name: 'SQLite',
					icon: SiSqlite,
				},
			],
		},
		{
			id: 'devops-security',
			title: 'DevOps, Security & Tooling',
			items: [
				{
					name: 'Docker',
					icon: FaDocker,
				},
				{
					name: 'GitHub Actions (CI/CD)',
					icon: SiGithubactions,
				},
				{
					name: 'Microsoft Azure',
					icon: VscAzure,
				},
				{
					name: 'OWASP',
					icon: SiOwasp,
				},
				{
					name: 'Burp Suite',
					icon: SiBurpsuite,
				},
				{
					name: 'OAuth 2.0 / OIDC / JWT',
					icon: SiOpenid,
				},
				{
					name: 'Kali Linux',
					icon: SiKalilinux,
				},
				{
					name: 'Wireshark',
					icon: SiWireshark,
				},
				{
					name: 'Linux',
					icon: SiLinux,
				},
				{
					name: 'Bash',
					icon: FaTerminal,
				},
				{
					name: 'Git',
					icon: FaGit,
				},
				{
					name: 'GitHub Copilot (AI-Driven Development)',
					icon: SiGithubcopilot,
				},
			],
		},
		{
			id: 'frontend',
			title: 'Frontend, Mobile & Design',
			items: [
				{
					name: 'React',
					icon: FaReact,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'TanStack Start',
					icon: SiTanstack,
				},
				{
					name: 'Vue.js',
					icon: SiVuedotjs,
				},
				{
					name: 'Expo (React Native)',
					icon: SiExpo,
				},
				{
					name: 'Jetpack Compose (Android Native with Kotlin)',
					icon: SiJetpackcompose,
				},
				{
					name: 'JavaScript',
					icon: FaJs,
				},
				{
					name: 'Figma',
					icon: FaFigma,
				},
			],
		},
	] as SkillCategory[],
	concepts: [
		{
			category: 'Architecture',
			items: [
				'Domain-Driven Design (DDD)',
				'Hexagonal / Clean Architecture',
				'Event-Driven Microservices',
			],
		},
		{
			category: 'Testing & Quality',
			items: [
				'Test-Driven Development (TDD)',
				'Integration Testing',
				'Contract Testing',
			],
		},
		{
			category: 'APIs & Protocols',
			items: ['REST', 'gRPC', 'WebSockets', 'GraphQL'],
		},
	] as ConceptGroup[],
} as const;
