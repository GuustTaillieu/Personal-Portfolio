'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import config from '../../../../tailwind.config';

type Props = {};

const Photo = (props: Props) => {
	return (
		<div className='w-full h-full relative'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						delay: 2,
						duration: 0.4,
						ease: 'easeIn',
					},
				}}>
				{/* IMAGE */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 2.4,
							duration: 0.4,
							ease: 'easeInOut',
						},
					}}
					className='w-[298px] aspect-square xl:w-[450px] absolute'>
					<Image
						src='/assets/profile.png'
						priority
						quality={100}
						fill
						alt='Profile Picture'
						className='object-contain'
					/>
				</motion.div>

				{/* CIRCLE */}
				<motion.svg
					className='w-[300px] aspect-square xl:w-[458px]'
					fill='transparent'
					viewBox='0 0 506 506'
					xmlns='http://www.w3.org/2000/svg'>
					<motion.circle
						cx='253'
						cy='253'
						r='250'
						stroke={config.theme.extend.colors.accent.DEFAULT}
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={3}
						initial={{ strokeDasharray: '24 10 0 0' }}
						animate={{
							strokeDasharray: [
								'15 120 25 25',
								'16 25 92 72',
								'4 250 22 22',
							],
							rotate: [120, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
