import { projects } from '@/data/projects';
import { WorkGrid } from './WorkGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects & Work | Guust - Portfolio',
	description:
		'Explore software engineering projects, internal enterprise tools, mobile apps, and UI/UX design systems created by Guust Taillieu during his studies.',
};

export default function WorkPage() {
	return <WorkGrid />;
}
