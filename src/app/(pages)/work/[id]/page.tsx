import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';
import { Metadata } from 'next';

type Props = {
	params: Promise<{ id: string }> | { id: string };
};

export function generateStaticParams() {
	return projects.map((p) => ({
		id: p.id,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const resolvedParams = await params;
	const project = projects.find((p) => p.id === resolvedParams?.id);
	if (!project) return { title: 'Project Not Found | Guust - Portfolio' };

	return {
		title: `${project.title} (${project.company}) | Projects | Guust - Portfolio`,
		description: project.shortDescription,
	};
}

export default async function ProjectDetailPage({ params }: Props) {
	const resolvedParams = await params;
	const project = projects.find((p) => p.id === resolvedParams?.id);

	if (!project) return notFound();

	return <ProjectDetailClient projectId={project.id} />;
}
