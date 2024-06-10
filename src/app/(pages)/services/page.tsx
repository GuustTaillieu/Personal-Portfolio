'use client';

import { ROUTES } from '@/app/constants/routes';
import services from '@/data/services';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

type Props = {};

const ServicesPage = (props: Props) => {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<motion.div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
					{services.map((service) => (
						<div
							className='flex-1 flex flex-col justify-center gap-6 group'
							key={service.num}>
							{/* TOP */}
							<div className='w-full flex justify-between items-center'>
								<div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
									{service.num}
								</div>
								<Link
									href={ROUTES.CONTACT_WITH_SERVICE(
										service.num
									)}
									className='flex justify-center items-center hover:-rotate-[45deg] border-white border size-14 rounded-full group-hover:border-accent  transition-all duration-500'>
									<BsArrowDownRight className='text-white text-2xl group-hover:text-accent transition-all duration-500' />
								</Link>
							</div>

							{/* HEADING */}
							<h2 className='text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
								{service.title}
							</h2>

							{/* DESCRIPTION */}
							<p className='text-white/60'>
								{service.description}
							</p>

							{/* BORDER */}
							<div className='border-b border-white/20'></div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesPage;
