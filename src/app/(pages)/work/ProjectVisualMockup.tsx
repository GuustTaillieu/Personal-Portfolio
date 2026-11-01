'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project, ProjectPreview } from '@/data/projects';
import {
	FaLock,
	FaAward,
	FaMobileAlt,
	FaFigma,
	FaExternalLinkAlt,
	FaImage,
} from 'react-icons/fa';
import {
	BsArrowUpRight,
	BsChevronLeft,
	BsChevronRight,
} from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { cn } from '@/lib/utils';

type Props = {
	project: Project;
};

function isVideoFile(src?: string): boolean {
	if (!src) return false;
	return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

function normalizePreview(item: string | ProjectPreview): ProjectPreview {
	return typeof item === 'string' ? { src: item } : item;
}

function extractHostname(url?: string): string {
	if (!url) return '';
	try {
		const parsed = new URL(url);
		return parsed.hostname.replace(/^www\./, '');
	} catch {
		return url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
	}
}

export const ProjectVisualMockup = ({ project }: Props) => {
	const rawImages = project.images || [];
	const previews: ProjectPreview[] = rawImages.map(normalizePreview);
	const hasImages = previews.length > 0;

	const [activeIndex, setActiveIndex] = useState(0);
	const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

	const currentPreview = previews[activeIndex] || previews[0];
	const isMobileProject =
		project.deviceType === 'mobile' || project.id === 'tapup';

	// Compute display URL for address bar
	const displayUrl =
		currentPreview?.displayUrl ||
		extractHostname(currentPreview?.url) ||
		(project.isInternal
			? `${project.company.toLowerCase().replace(/\s+/g, '')}.internal`
			: `${project.id}.app`);

	// 1. MOBILE PHONE FRAME (e.g. TapUp micro-learning mobile app)
	if (isMobileProject && hasImages) {
		return (
			<div className='w-full rounded-2xl bg-[#141318] border border-white/10 shadow-2xl relative overflow-hidden py-10 px-4 md:px-8 flex flex-col items-center justify-center gap-6'>
				{/* Top Mobile Bar */}
				<div className='w-full max-w-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/60 pb-2 border-b border-white/10'>
					<div className='flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10'>
						<FaMobileAlt className='text-accent' />
						<span>iOS & Android · React Native Client</span>
					</div>

					<div className='flex items-center gap-2'>
						<span className='text-white font-sans font-medium truncate max-w-[220px]'>
							{currentPreview?.title || 'App Screen'}
						</span>
					</div>
				</div>

				{/* Phone Showcase with Navigation Arrows */}
				<div className='flex items-center justify-center gap-4 sm:gap-8 w-full my-2'>
					{/* Left Arrow Button */}
					<button
						type='button'
						onClick={() => swiperRef?.slidePrev()}
						disabled={activeIndex === 0}
						className='size-11 sm:size-12 rounded-full border border-white/20 bg-primary-light/50 hover:bg-accent hover:border-accent hover:text-primary text-white flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none shrink-0 shadow-lg'
						aria-label='Previous screen'>
						<BsChevronLeft className='text-lg' />
					</button>

					{/* Realistic Phone Chassis */}
					<div className='relative w-[280px] sm:w-[320px] aspect-[390/844] rounded-[40px] p-3.5 bg-[#1e1d24] border-[4px] border-[#2f2e37] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] select-none shrink-0'>
						{/* Hardware Side Buttons */}
						<span className='absolute -left-[7px] top-28 w-[3px] h-10 bg-[#3a3944] rounded-l' />
						<span className='absolute -left-[7px] top-44 w-[3px] h-10 bg-[#3a3944] rounded-l' />
						<span className='absolute -right-[7px] top-32 w-[3px] h-14 bg-[#3a3944] rounded-r' />

						{/* Dynamic Island */}
						<div className='absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none'>
							<span className='size-2 rounded-full bg-[#151515] border border-white/10' />
						</div>

						{/* Screen Content Container */}
						<div className='relative w-full h-full rounded-[30px] overflow-hidden bg-black shadow-inner'>
							<Swiper
								onSwiper={(swiper) => setSwiperRef(swiper)}
								onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
								slidesPerView={1}
								className='w-full h-full'>
								{previews.map((preview, idx) => (
									<SwiperSlide
										key={preview.src}
										className='relative w-full h-full bg-black flex items-center justify-center'>
										{isVideoFile(preview.src) ? (
											<video
												src={preview.src}
												autoPlay
												loop
												muted
												playsInline
												className='w-full h-full object-cover object-top bg-black'
											/>
										) : (
											<Image
												src={preview.src}
												alt={
													preview.title ||
													`${project.title} screen ${idx + 1}`
												}
												fill
												sizes='(max-width: 640px) 280px, 320px'
												className='object-cover object-top'
												priority={idx === 0}
											/>
										)}
									</SwiperSlide>
								))}
							</Swiper>

							{/* Home Indicator Bar */}
							<div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-30 pointer-events-none' />
						</div>
					</div>

					{/* Right Arrow Button */}
					<button
						type='button'
						onClick={() => swiperRef?.slideNext()}
						disabled={activeIndex === previews.length - 1}
						className='size-11 sm:size-12 rounded-full border border-white/20 bg-primary-light/50 hover:bg-accent hover:border-accent hover:text-primary text-white flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none shrink-0 shadow-lg'
						aria-label='Next screen'>
						<BsChevronRight className='text-lg' />
					</button>
				</div>

				{/* Pagination Dots */}
				<div className='flex items-center gap-2 mt-1'>
					{previews.map((_, idx) => (
						<button
							key={idx}
							type='button'
							onClick={() => swiperRef?.slideTo(idx)}
							className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
								? 'w-7 bg-accent'
								: 'w-2 bg-white/20 hover:bg-white/40'
								}`}
							aria-label={`Jump to screen ${idx + 1}`}
						/>
					))}
				</div>

				<p className='text-xs text-white/40 font-mono'>
					Swipe or use arrows to navigate through the mobile flow
				</p>
			</div>
		);
	}

	// 2. DESKTOP APPLE macOS WINDOW (e.g. Zoomers, Sundo, Internal enterprise tools)
	return (
		<div className='w-full rounded-2xl bg-[#141318] border border-white/10 shadow-2xl relative overflow-hidden'>
			{/* Apple macOS Window Header */}
			<div className='relative flex items-center justify-between px-5 py-3.5 border-b border-white/10 text-xs text-white/50 bg-white/[0.02] min-h-[48px]'>
				{/* Traffic Light Dots */}
				<div className='flex items-center gap-2 shrink-0 z-10'>
					<span className='size-3 rounded-full bg-[#ff5f56] inline-block shadow-sm' />
					<span className='size-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm' />
					<span className='size-3 rounded-full bg-[#27c93f] inline-block shadow-sm' />
				</div>

				{/* Dynamic Browser Address Bar (Always Centered) */}
				<div className='absolute left-1/2 -translate-x-1/2 max-w-[200px] xs:max-w-[260px] sm:max-w-sm md:max-w-md w-full flex items-center justify-center font-mono pointer-events-none z-20 px-2'>
					{project.isInternal ? (
						<div className='flex items-center gap-2 text-white/60 bg-white/5 px-3 py-1 rounded-md border border-white/10 text-xs truncate pointer-events-auto max-w-full'>
							<FaLock className='text-accent text-[11px] shrink-0' />
							<span className='truncate'>{displayUrl}</span>
						</div>
					) : currentPreview?.url ? (
						<a
							href={currentPreview.url}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 px-3.5 py-1 rounded-md text-white/80 hover:text-accent transition-all group/url text-xs truncate shadow-sm pointer-events-auto max-w-full'
							title={`Visit ${currentPreview.url}`}>
							<span
								className={cn(
									'size-1.5 rounded-full shrink-0',
									currentPreview.online ? 'bg-accent' : 'bg-red-500'
								)}
							/>
							<span className='truncate'>{displayUrl}</span>
							<FaExternalLinkAlt className='text-[10px] text-white/40 group-hover/url:text-accent transition-colors shrink-0' />
						</a>
					) : (
						<div className='flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-md text-white/60 text-xs truncate pointer-events-auto max-w-full'>
							<span className='size-1.5 rounded-full bg-white/30 shrink-0' />
							<span className='truncate'>{displayUrl}</span>
						</div>
					)}
				</div>

				{/* Right Side Action or Tag */}
				<div className='flex items-center gap-2 shrink-0 z-10'>
					{currentPreview?.url ? (
						<a
							href={currentPreview.url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-[10px] uppercase font-mono tracking-wider bg-accent/10 hover:bg-accent hover:text-primary text-accent border border-accent/20 px-2.5 py-1 rounded transition-all inline-flex items-center gap-1.5 font-medium'>
							<span className='hidden xs:inline'>Visit Site</span>
							<BsArrowUpRight className='text-[10px]' />
						</a>
					) : (
						<span className='text-[10px] uppercase font-mono tracking-wider bg-white/5 px-2.5 py-1 rounded text-white/60'>
							{project.isInternal
								? 'NDA Protected'
								: project.category.split('·')[0].trim()}
						</span>
					)}
				</div>
			</div>

			{/* Window Content */}
			{hasImages ? (
				<div className='relative w-full bg-black/40 overflow-hidden group/window'>
					{previews.length === 1 ? (
						<div className='relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-black flex items-center justify-center'>
							{isVideoFile(previews[0].src) ? (
								<video
									src={previews[0].src}
									autoPlay
									loop
									muted
									playsInline
									controls
									className='w-full h-full object-contain bg-black'
								/>
							) : (
								<Image
									src={previews[0].src}
									alt={previews[0].title || project.title}
									fill
									sizes='(max-width: 1280px) 100vw, 1200px'
									className='object-cover object-top'
									priority
								/>
							)}
						</div>
					) : (
						<div className='relative w-full'>
							<Swiper
								onSwiper={(swiper) => setSwiperRef(swiper)}
								onSlideChange={(swiper) =>
									setActiveIndex(swiper.activeIndex)
								}
								spaceBetween={20}
								slidesPerView={1}
								className='w-full aspect-video md:aspect-[16/10]'>
								{previews.map((preview, idx) => (
									<SwiperSlide
										key={preview.src}
										className='relative w-full h-full bg-black overflow-hidden flex items-center justify-center'>
										{isVideoFile(preview.src) ? (
											<video
												src={preview.src}
												autoPlay
												loop
												muted
												playsInline
												controls
												className='w-full h-full object-contain bg-black'
											/>
										) : (
											<Image
												src={preview.src}
												alt={
													preview.title ||
													`${project.title} preview ${idx + 1}`
												}
												fill
												sizes='(max-width: 1280px) 100vw, 1200px'
												className='object-cover object-top'
												priority={idx === 0}
											/>
										)}
									</SwiperSlide>
								))}
							</Swiper>

							{/* Previous Slide Button */}
							<button
								type='button'
								onClick={() => swiperRef?.slidePrev()}
								disabled={activeIndex === 0}
								className='absolute left-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/70 hover:bg-accent hover:text-primary text-white border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-xl'
								aria-label='Previous Preview'>
								<BsChevronLeft className='text-lg' />
							</button>

							{/* Next Slide Button */}
							<button
								type='button'
								onClick={() => swiperRef?.slideNext()}
								disabled={activeIndex === previews.length - 1}
								className='absolute right-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/70 hover:bg-accent hover:text-primary text-white border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-xl'
								aria-label='Next Preview'>
								<BsChevronRight className='text-lg' />
							</button>

							{/* Bottom Info Bar Overlay */}
							<div className='absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6 flex items-center justify-between text-xs font-mono text-white/70'>
								<div className='flex items-center gap-2'>
									<span className='text-accent font-semibold'>
										{String(activeIndex + 1).padStart(2, '0')}
									</span>
									<span className='text-white/30'>/</span>
									<span>{String(previews.length).padStart(2, '0')}</span>
									{currentPreview?.title && (
										<>
											<span className='text-white/30'>·</span>
											<span className='text-white font-sans font-medium'>
												{currentPreview.title}
											</span>
										</>
									)}
								</div>

								{/* Pagination Dots */}
								<div className='flex items-center gap-1.5'>
									{previews.map((_, idx) => (
										<button
											key={idx}
											type='button'
											onClick={() => swiperRef?.slideTo(idx)}
											className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
												? 'w-6 bg-accent'
												: 'w-1.5 bg-white/30 hover:bg-white/60'
												}`}
											aria-label={`Jump to slide ${idx + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className='p-8 md:p-14 flex flex-col items-center justify-center text-center gap-5'>
					{project.isInternal ? (
						<>
							<div className='size-20 md:size-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-3xl md:text-4xl shadow-lg shadow-accent/10'>
								<FaLock />
							</div>

							<div className='flex flex-col gap-2 max-w-lg'>
								<span className='text-accent font-mono text-xs uppercase tracking-wider font-semibold'>
									Confidential Enterprise Project
								</span>
								<h4 className='text-xl md:text-2xl font-bold text-white'>
									Not Publicly Visible
								</h4>
								<p className='text-white/60 text-sm leading-relaxed'>
									This project was developed for internal operations under non-disclosure agreements (NDA). Source code, internal workflows, and visual interfaces are proprietary and cannot be shared publicly.
								</p>
							</div>
						</>
					) : (
						<>
							{project.id === 'sundo' && (
								<div className='flex flex-col items-center gap-4 max-w-lg'>
									<div className='size-20 md:size-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-3xl md:text-4xl shadow-lg shadow-accent/10'>
										<FaAward />
									</div>
									<div className='flex flex-col gap-2'>
										<span className='text-accent font-mono text-xs uppercase tracking-wider font-semibold'>
											DesignRush Award Winner
										</span>
										<h4 className='text-xl md:text-2xl font-bold text-white'>
											Website of the Month Recognition
										</h4>
										<p className='text-white/60 text-sm leading-relaxed'>
											Interactive scrollytelling platform featuring a 360° 3D sunscreen dispenser image sequence, engineered entirely in pure Vanilla JavaScript, HTML5 & CSS3 with trilingual localization (NL · FR · EN).
										</p>
									</div>
									<div className='flex flex-wrap gap-2 justify-center mt-1'>
										<span className='text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono'>
											🏆 Website of the Month
										</span>
										<span className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono'>
											3D Image Sequence
										</span>
										<span className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono'>
											Vanilla JS (No Frameworks)
										</span>
									</div>
								</div>
							)}

							{project.id === 'tapup' && (
								<div className='flex flex-col items-center gap-4 max-w-lg w-full'>
									<div className='size-20 md:size-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-3xl md:text-4xl shadow-lg shadow-accent/10'>
										<FaMobileAlt />
									</div>
									<div className='flex flex-col gap-2'>
										<span className='text-accent font-mono text-xs uppercase tracking-wider font-semibold'>
											End-to-End Mobile Product
										</span>
										<h4 className='text-xl md:text-2xl font-bold text-white'>
											Micro-Learning Stories & Quizzes
										</h4>
										<p className='text-white/60 text-sm leading-relaxed'>
											Instagram stories-style workplace equipment training (e.g., forklift certification). Full product ownership from Figma design to React Native mobile client and dedicated Java Spring Boot VPS backend.
										</p>
									</div>
									<div className='flex flex-wrap gap-2 justify-center mt-1'>
										<span className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono'>
											iOS & Android
										</span>
										<span className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono'>
											React Native
										</span>
										<span className='text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono'>
											Spring Boot on VPS
										</span>
									</div>
									<div className='w-full mt-2 border border-dashed border-white/15 hover:border-accent/40 rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-xs font-mono text-white/40 bg-white/[0.02] transition-colors'>
										<FaImage className='text-accent/60 shrink-0' />
										<span>Ready for screenshots · Place in /public/assets/projects/tapup/</span>
									</div>
								</div>
							)}

							{project.id === 'zoomers' && (
								<div className='flex flex-col items-center gap-4 max-w-lg w-full'>
									<div className='size-20 md:size-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-3xl md:text-4xl shadow-lg shadow-accent/10'>
										<FaFigma />
									</div>
									<div className='flex flex-col gap-2'>
										<span className='text-accent font-mono text-xs uppercase tracking-wider font-semibold'>
											Visual & Interaction Design
										</span>
										<h4 className='text-xl md:text-2xl font-bold text-white'>
											4+ Years UI/UX Design Systems
										</h4>
										<p className='text-white/60 text-sm leading-relaxed'>
											3+ years contributing UI/UX design, component libraries, design systems, and interface remakes in Figma for diverse client applications.
										</p>
									</div>
									<div className='flex flex-wrap gap-2 justify-center mt-1'>
										<span className='text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono'>
											4+ Years UI/UX Craft
										</span>
										<span className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono'>
											Figma Design Systems
										</span>
										<span className='text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono'>
											Interface Remakes
										</span>
									</div>
									<div className='w-full mt-2 border border-dashed border-white/15 hover:border-accent/40 rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-xs font-mono text-white/40 bg-white/[0.02] transition-colors'>
										<FaImage className='text-accent/60 shrink-0' />
										<span>Ready for screenshots · Place in /public/assets/projects/zoomers/</span>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
};
