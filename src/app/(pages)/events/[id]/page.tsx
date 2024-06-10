'use client';

import { motion } from 'framer-motion';
import 'swiper/css';
import { useMemo, useRef } from 'react';
import { events } from '@/data/events';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import WorkSliderBtns from '../WorkSliderBtns';
import { notFound, useParams, useRouter } from 'next/navigation';
import { ROUTES } from '@/app/constants/routes';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {};

const EventPage = (props: Props) => {
	const params = useParams();
	const event = events.find((event) => event.num === params?.id);
	const windowSize = useRef(window.innerWidth);
	const router = useRouter();

	const slidesPerView = useMemo(() => {
		return Math.max(1, Math.floor(windowSize.current / 600));
	}, []);

	if (!event) return notFound();
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
					<Button
						size='default'
						variant='primary'
						className='text-accent hover:text-accent-hover px-0'
						onClick={() => router.push(ROUTES.EVENTS)}>
						<FaArrowLeft className='mr-2' />
						Back to events
					</Button>
					<Button
						size='default'
						variant='primary'
						className='text-accent hover:text-accent-hover px-0'
						onClick={() =>
							router.push(
								ROUTES.EVENT(
									events[events.indexOf(event) + 1]?.num ??
										events[0].num
								)
							)
						}>
						Next event
						<FaArrowRight className='ml-2' />
					</Button>
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
							<p
								className='text-white/60 xl:columns-2'
								dangerouslySetInnerHTML={{
									__html: event.description,
								}}>
								{/* {event.description} */}
							</p>
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
									key={image.src.src}
									className='w-full mb-14'>
									<div className='aspect-[16/9] relative group flex justify-center items-center bg-pink-50/20'>
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

export default EventPage;
