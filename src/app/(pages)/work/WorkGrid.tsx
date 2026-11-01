'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ROUTES } from '@/app/constants/routes';
import TransitionLink from '@/components/TransitionLink';
import { BsArrowDownRight } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

export const WorkGrid = () => {
	const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

	const toggleSkillExpand = (projectId: string, e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setExpandedSkills((prev) => ({
			...prev,
			[projectId]: !prev[projectId],
		}));
	};

	return (
		<motion.div
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
			<div className='container mx-auto flex flex-col gap-10'>
				{/* Clean Header */}
				<div className='flex flex-col gap-3 text-center xl:text-left'>
					<h1 className='text-4xl xl:text-5xl font-bold text-white'>
						Featured <span className='text-accent'>Projects</span>
					</h1>
					<p className='text-white/60 text-sm md:text-base leading-relaxed'>
						A collection of production platforms, enterprise tools, mobile applications, and design systems engineered during my higher education studies.
					</p>
				</div>

				{/* All Projects At A Glance Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
					{projects.map((project, index) => {
						const isExpanded = !!expandedSkills[project.id];
						const visibleTechs = isExpanded
							? project.technologies
							: project.technologies.slice(0, 4);
						const remainingCount = project.technologies.length - 4;

						return (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										delay: 0.1 * index,
										duration: 0.4,
										ease: 'easeInOut',
									},
								}}>
								<TransitionLink
									href={ROUTES.PROJECT(project.id)}
									className='h-full rounded-2xl p-6 bg-primary-light/40 border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between gap-6 group hover:bg-primary-light/70 cursor-pointer block'>
									<div className='flex flex-col gap-4'>
										{/* Card Top: Number and Hover-Rotating Arrow */}
										<div className='flex items-center justify-between'>
											<div className='text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 select-none'>
												{project.num}
											</div>

											{/* Rotating Arrow Indicator */}
											<div className='size-11 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shrink-0'>
												<BsArrowDownRight className='text-xl text-white group-hover:text-primary group-hover:-rotate-45 transition-all duration-500' />
											</div>
										</div>

										{/* Company & subtle NDA indicator */}
										<div className='flex items-center justify-between gap-2 text-xs'>
											<span className='text-accent font-mono font-medium text-sm'>
												{project.company}
											</span>
											{project.isInternal && (
												<span className='inline-flex items-center gap-1 text-[11px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded'>
													<FaLock className='text-[9px] text-accent/80' />
													<span>NDA</span>
												</span>
											)}
										</div>

										{/* Title & Role */}
										<div>
											<h2 className='text-xl font-bold text-white group-hover:text-accent transition-colors duration-500 leading-snug'>
												{project.title}
											</h2>
											<p className='text-xs text-white/50 mt-1 font-mono'>
												{project.role}
											</p>
										</div>

										{/* Short Description */}
										<p className='text-white/60 text-xs leading-relaxed'>
											{project.shortDescription}
										</p>
									</div>

									{/* Technologies Tag Row with Subtle Interactive +X Expand */}
									<div className='flex flex-wrap gap-1.5 pt-4 border-t border-white/10 items-center'>
										{visibleTechs.map((tech) => (
											<span
												key={tech.name}
												className='text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/5 font-mono'>
												{tech.name}
											</span>
										))}

										{remainingCount > 0 && (
											<button
												type='button'
												onClick={(e) => toggleSkillExpand(project.id, e)}
												title={isExpanded ? 'Show fewer technologies' : 'Show all technologies'}
												className='text-[10px] px-2 py-0.5 rounded bg-white/5 hover:bg-accent/10 text-white/50 hover:text-accent font-mono border border-white/10 hover:border-accent/30 transition-all cursor-pointer'>
												{isExpanded ? '− less' : `+${remainingCount}`}
											</button>
										)}
									</div>
								</TransitionLink>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};
