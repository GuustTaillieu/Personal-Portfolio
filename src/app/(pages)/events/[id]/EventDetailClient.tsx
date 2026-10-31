'use client';

import { motion } from 'framer-motion';
import 'swiper/css';
import { useEffect, useMemo, useState } from 'react';
import { Event, events } from '@/data/events';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import WorkSliderBtns from '../WorkSliderBtns';
import { ROUTES } from '@/app/constants/routes';
import TransitionLink from '@/components/TransitionLink';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
	event: Event;
};

const EventDetailClient = ({ event }: Props) => {
	const [windowWidth, setWindowWidth] = useState<number>(1200);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const slidesPerView = useMemo(() => {
		return Math.max(1, Math.floor(windowWidth / 600));
	}, [windowWidth]);

	const currentIndex = events.findIndex((e) => e.num === event.num);
	const nextEvent = events[(currentIndex + 1) % events.length] ?? events[0];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 0.4,
					duration: 0.4,
					ease: 'easeIn',
				},
			}}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
			<div className='container mx-auto'>
				<div className='flex gap-4 justify-between mb-12 xl:mb-20'>
					<TransitionLink
						href={ROUTES.EVENTS}
						className='text-accent hover:text-accent-hover px-0 inline-flex items-center text-sm font-medium'>
						<FaArrowLeft className='mr-2' />
						Back to events
					</TransitionLink>
					<TransitionLink
						href={ROUTES.EVENT(nextEvent.num)}
						className='text-accent hover:text-accent-hover px-0 inline-flex items-center text-sm font-medium'>
						Next event
						<FaArrowRight className='ml-2' />
					</TransitionLink>
				</div>
				<div className='flex flex-col gap-7'>
					<div className='w-full flex flex-col xl:justify-between xl:order-none'>
						<div className='flex flex-col gap-7 h-1/2'>
							<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
								{event.num}
							</div>
							<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
								{event.title}
							</h2>
							<div
								className='text-white/60 xl:columns-2'
								dangerouslySetInnerHTML={{
									__html: event.description,
								}}
							/>
							<p className='text-base text-accent'>
								{event.date} · {event.location}
							</p>

							<div className='border border-white/20' />
						</div>
					</div>
					<div className='w-full'>
						<Swiper spaceBetween={30} slidesPerView={slidesPerView}>
							{event.images.map((image) => (
								<SwiperSlide
									key={typeof image.src === 'string' ? image.src : image.src.src}
									className='w-full mb-14'>
									<div className='aspect-[16/9] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden'>
										<div className='absolute inset-0 bg-black/10 z-10' />
										<div className='relative w-full h-full'>
											<Image
												src={image.src}
												alt={image.alt}
												fill
												placeholder='blur'
												className='object-cover'
											/>
										</div>
									</div>
								</SwiperSlide>
							))}
							<WorkSliderBtns
								amountVisible={slidesPerView}
								containerStyles='flex gap-2 absolute ring-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full max-xl:justify-between xl:w-max'
								btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all'
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default EventDetailClient;

