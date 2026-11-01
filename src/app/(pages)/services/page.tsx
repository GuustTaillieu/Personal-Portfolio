'use client';

import { ROUTES } from '@/app/constants/routes';
import TransitionLink from '@/components/TransitionLink';
import services from '@/data/services';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

type Props = {};

const ServicesPage = (props: Props) => {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<motion.div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
					{services.map((service, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay: 0.2 + index * 0.2,
									duration: 0.5,
									ease: 'easeInOut',
								},
							}}
							key={service.num}>
							<TransitionLink
								href={ROUTES.CONTACT_WITH_SERVICE(service.num)}
								className='flex-1 flex flex-col justify-center gap-6 group cursor-pointer block'>
								{/* TOP */}
								<div className='w-full flex justify-between items-center'>
									<div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 select-none'>
										{service.num}
									</div>
									<div className='flex justify-center items-center border border-white/20 size-14 rounded-full group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500'>
										<BsArrowDownRight className='text-white text-2xl group-hover:text-primary group-hover:-rotate-45 transition-all duration-500' />
									</div>
								</div>

								{/* HEADING */}
								<h2 className='text-[28px] sm:text-3xl xl:text-4xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500'>
									{service.title}
								</h2>

								{/* DESCRIPTION */}
								<p className='text-white/60 leading-relaxed text-sm sm:text-base'>
									{service.description}
								</p>

								{/* BORDER */}
								<div className='border-b border-white/20 group-hover:border-accent/50 transition-colors duration-500'></div>
							</TransitionLink>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesPage;
