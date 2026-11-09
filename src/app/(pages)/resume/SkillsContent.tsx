'use client';

import { useState } from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { skills } from '@/data/skills';

type Props = {};

const SkillsContent = (_props: Props) => {
	const [openSkill, setOpenSkill] = useState<string | null>(null);

	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-7 text-center xl:text-left'>
				<h3 className='text-4xl font-bold'>{skills.title}</h3>
				<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
					{skills.description}
				</p>
			</div>

			<TooltipProvider delayDuration={100}>
				<div className='flex flex-col gap-8'>
					{skills.categories.map((category) => (
						<div key={category.id} className='flex flex-col gap-3.5'>
							<h4 className='flex items-center justify-center xl:justify-start gap-2.5 text-sm font-mono uppercase tracking-wider text-white/80'>
								<span
									aria-hidden='true'
									className='size-[6px] rounded-full bg-accent shrink-0'
								/>
								<span>{category.title}</span>
							</h4>

							<ul
								role='list'
								className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 md:gap-4'>
								{category.items.map((item) => {
									const isControlledOpen = openSkill === item.name;
									return (
										<li key={item.name}>
											<Tooltip
												open={isControlledOpen ? true : undefined}
												onOpenChange={(isOpen) => {
													if (!isOpen && isControlledOpen) {
														setOpenSkill(null);
													}
												}}>
												<TooltipTrigger
													type='button'
													aria-label={item.name}
													onClick={() =>
														setOpenSkill((prev) =>
															prev === item.name ? null : item.name
														)
													}
													className='w-full aspect-square bg-primary-light/60 border border-white/5 hover:border-accent/40 hover:bg-primary-light/90 rounded-xl flex justify-center items-center group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary'>
													<item.icon
														aria-hidden='true'
														className='text-3xl sm:text-4xl group-hover:text-accent group-focus-visible:text-accent transition-all duration-300'
													/>
													<span className='sr-only'>{item.name}</span>
												</TooltipTrigger>
												<TooltipContent>
													<p>{item.name}</p>
												</TooltipContent>
											</Tooltip>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
			</TooltipProvider>

			{/* Architecture, Testing & APIs Pill Badges */}
			<div className='flex flex-col gap-4 pt-6 border-t border-white/10'>
				<h4 className='flex items-center justify-center xl:justify-start gap-2.5 text-sm font-mono uppercase tracking-wider text-white/80'>
					<span
						aria-hidden='true'
						className='size-[6px] rounded-full bg-accent shrink-0'
					/>
					<span>Architecture, Testing &amp; APIs</span>
				</h4>

				<div className='flex flex-col gap-3.5'>
					{skills.concepts.map((group) => (
						<div
							key={group.category}
							className='flex flex-col xl:flex-row xl:items-baseline gap-2 xl:gap-4 text-center xl:text-left'>
							<span className='text-xs font-mono text-white/50 xl:w-40 shrink-0'>
								{group.category}
							</span>
							<ul
								role='list'
								className='flex flex-wrap justify-center xl:justify-start gap-2 min-w-0'>
								{group.items.map((concept) => (
									<li
										key={concept}
										className='text-xs px-3 py-1.5 rounded-lg bg-primary-light/60 border border-white/10 text-white/85 font-mono hover:border-accent/40 hover:text-accent transition-colors duration-300'>
										{concept}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsContent;
