'use client';

import { motion } from 'framer-motion';
import { Project, projects } from '@/data/projects';
import { ROUTES } from '@/app/constants/routes';
import TransitionLink from '@/components/TransitionLink';
import { ProjectVisualMockup } from '../ProjectVisualMockup';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
	projectId: string;
};

const ProjectDetailClient = ({ projectId }: Props) => {
	const project = projects.find((p) => p.id === projectId);
	if (!project) return null;

	const currentIndex = projects.findIndex((p) => p.id === project.id);
	const nextProject = projects[(currentIndex + 1) % projects.length] ?? projects[0];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 0.2,
					duration: 0.4,
					ease: 'easeInOut',
				},
			}}
			className='min-h-[80vh] flex flex-col py-10 xl:py-16'>
			<div className='container mx-auto flex flex-col gap-10 max-w-4xl'>
				{/* Top Navigation */}
				<div className='flex items-center justify-between border-b border-white/10 pb-6'>
					<TransitionLink
						href={ROUTES.WORK}
						className='text-accent hover:text-accent-hover inline-flex items-center gap-2 text-sm font-medium transition-colors group'>
						<FaArrowLeft className='text-xs group-hover:-translate-x-1 transition-transform' />
						<span>Back to all projects</span>
					</TransitionLink>

					<TransitionLink
						href={ROUTES.PROJECT(nextProject.id)}
						className='text-accent hover:text-accent-hover inline-flex items-center gap-2 text-sm font-medium transition-colors group'>
						<span>Next: {nextProject.company}</span>
						<FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform' />
					</TransitionLink>
				</div>

				{/* Project Header: Number and Title Side-by-Side */}
				<div className='flex flex-col gap-4'>
					<div className='flex items-start md:items-center gap-5 md:gap-7'>
						<span className='text-5xl md:text-7xl font-extrabold text-transparent text-outline shrink-0 leading-none select-none'>
							{project.num}
						</span>
						<h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-white leading-tight'>
							{project.title}
						</h1>
					</div>

					{/* Metadata row */}
					<div className='flex flex-col gap-1 text-xs md:text-sm font-mono'>
						<div className='flex items-center gap-2.5 text-white/50'>
							<span className='text-accent font-semibold font-sans'>{project.company}</span>
							<span className='text-white/30'>·</span>
							<span>{project.period}</span>
						</div>
						{project.role && (
							<p className='text-white/70 font-sans'>
								{project.role}
							</p>
						)}
					</div>

					{/* Clean Study Context Subtitle (no bulky hat banner) */}
					<p className='text-white/60 text-sm md:text-base leading-relaxed'>
						{project.studyContext}
					</p>
				</div>

				{/* Apple macOS Design Window Preview */}
				<div className='w-full my-2'>
					<ProjectVisualMockup project={project} />
				</div>

				{/* Full-Width Narrative Sections (Resume page typography layout) */}
				<div className='flex flex-col gap-10'>
					{/* The Challenge */}
					<div className='flex flex-col gap-2.5'>
						<h3 className='text-xl md:text-2xl font-bold text-white'>
							The Challenge
						</h3>
						<p className='text-white/60 text-sm md:text-base leading-relaxed'>
							{project.problem}
						</p>
					</div>

					{/* The Solution */}
					<div className='flex flex-col gap-2.5'>
						<h3 className='text-xl md:text-2xl font-bold text-white'>
							The Solution & Architecture
						</h3>
						<p className='text-white/60 text-sm md:text-base leading-relaxed'>
							{project.solution}
						</p>
					</div>

					{/* Proven Impact & Success */}
					{project.successDescription && (
						<div className='flex flex-col gap-3'>
							<h3 className='text-xl md:text-2xl font-bold text-white'>
								{project.successTitle ?? 'Proven Impact & Success'}
							</h3>
							<p className='text-white/60 text-sm md:text-base leading-relaxed'>
								{project.successDescription}
							</p>

							{/* Accurate Metrics Pills when available (e.g. Sweet Mustard, Sundo, TapUp, Zoomers) */}
							{project.metrics && (
								<div className='grid grid-cols-2 md:grid-cols-4 gap-3 pt-2'>
									{project.metrics.map((m) => (
										<div
											key={m.label}
											className='bg-primary-light/60 border border-white/5 rounded-xl p-4 flex flex-col'>
											<span className='text-accent font-bold text-lg font-mono'>
												{m.value}
											</span>
											<span className='text-white/50 text-xs mt-1 leading-tight'>
												{m.label}
											</span>
										</div>
									))}
								</div>
							)}
						</div>
					)}

					{/* Technologies Used */}
					<div className='flex flex-col gap-3 pt-4 border-t border-white/10'>
						<h3 className='text-xl md:text-2xl font-bold text-white'>
							Technologies & Tools
						</h3>
						<div className='flex flex-wrap gap-2.5'>
							{project.technologies.map((tech) => (
								<span
									key={tech.name}
									className='inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-primary-light/60 border border-white/10 text-white/90'>
									{tech.icon && <tech.icon className='text-accent text-base' />}
									<span>{tech.name}</span>
								</span>
							))}
						</div>
					</div>

					{/* Confidentiality Notice */}
					<div className='text-xs text-white/40 italic bg-white/5 p-4 rounded-xl border border-white/5'>
						{project.confidentialityNote}
					</div>
				</div>

				{/* Bottom Next Project Link */}
				<div className='flex items-center justify-between border-t border-white/10 pt-8 mt-4'>
					<TransitionLink
						href={ROUTES.WORK}
						className='text-accent hover:text-accent-hover text-sm font-medium'>
						← Back to all projects
					</TransitionLink>

					<TransitionLink
						href={ROUTES.PROJECT(nextProject.id)}
						className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-hover transition-colors'>
						<span>Next: {nextProject.title}</span>
						<FaArrowRight className='text-xs' />
					</TransitionLink>
				</div>
			</div>
		</motion.section>
	);
};

export default ProjectDetailClient;
