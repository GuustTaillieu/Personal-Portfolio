'use client';

import { motion } from 'framer-motion';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { useState } from 'react';
import { Event, events } from '@/data/events';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import Image from 'next/image';
import WorkSliderBtns from './WorkSliderBtns';
import TransitionLink from '@/components/TransitionLink';

type Props = {};

const EventsPage = (props: Props) => {
	const [event, setEvent] = useState<Event>(events[0]);

	const handleSlideChange = (swiper: SwiperType) => {
		const currentIndex = swiper.activeIndex;
		setEvent(events[currentIndex]);
	};

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
			className='min-h-[80vh] flex flex-col py-12 xl:px-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row xl:gap-7'>
					<div className='w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
						<div className='flex flex-col gap-7 h-1/2'>
							<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
								{event.num}
							</div>
							<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
								{event.title}
							</h2>
							<p className='text-base text-white/60'>
								{event.shortDescription}
							</p>
							<p className='text-base text-accent'>
								{event.date} · {event.location}
							</p>

							<div className='border border-white/20' />
							<div className='w-fit'>
								<TransitionLink href={`/events/${event.num}`}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className='size-14 rounded-full bg-white/5 flex justify-center items-center group'>
												<BsArrowUpRight className='text-white text-2xl group-hover:text-accent' />
											</TooltipTrigger>
											<TooltipContent>
												<p className=''>See details</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</TransitionLink>
							</div>
						</div>
					</div>
					<div className='w-full xl:w-1/2'>
						<Swiper
							spaceBetween={30}
							lazyPreloadPrevNext={2}
							slidesPerView={1}
							className='mb-12'
							onSlideChange={handleSlideChange}>
							{events.map((event) => (
								<SwiperSlide
									key={event.num}
									className='w-full mb-14'>
									<div className='aspect-[16/9] relative group flex justify-center items-center bg-pink-50/20'>
										<div className='absolute inset-0 bg-black/10 z-10' />
										<div className='relative w-full h-full'>
											<Image
												src={event.thumbnail}
												alt={event.title}
												fill
												priority
												className='object-cover'
											/>
										</div>
									</div>
								</SwiperSlide>
							))}
							<WorkSliderBtns
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

export default EventsPage;
