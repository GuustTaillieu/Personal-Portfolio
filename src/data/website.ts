import { FaFigma, FaNodeJs, FaGit } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
	SiTypescript,
	SiNextdotjs,
	SiVisualstudiocode,
	SiTailwindcss,
	SiFramer,
	SiVercel,
	SiShadcnui,
	SiAdobephotoshop,
	SiGreensock,
} from 'react-icons/si';

type Skill = {
	name: string;
	icon: IconType;
};

export const website = {
	title: 'How I build this website',
	description:
		'I began this website by creating a stylescape to establish the desired vibe. Using my old portfolio (taillieusauw.net) as a reference, I aimed to make it more modern and built it with a framework. Here are some technologies I used:',
	skillList: [
		{
			name: 'TypeScript',
			icon: SiTypescript,
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
			name: 'Figma',
			icon: FaFigma,
		},
		{
			name: 'Photoshop',
			icon: SiAdobephotoshop,
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
			name: 'TailwindCSS',
			icon: SiTailwindcss,
		},
		{
			name: 'Framer Motion',
			icon: SiFramer,
		},
		{
			name: 'Vercel',
			icon: SiVercel,
		},
		{
			name: 'Shadcn/ui',
			icon: SiShadcnui,
		},
		{
			name: 'GSAP',
			icon: SiGreensock,
		},
	] as Skill[],
} as const;
