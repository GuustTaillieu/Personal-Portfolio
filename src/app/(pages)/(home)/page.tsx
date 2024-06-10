'use client';

import { motion } from 'framer-motion';
import Photo from './Photo';
import Socials from './Socials';
import Stats from './Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
	return (
		<section className='h-full min-h-[60vh] flex items-center'>
			<div className='container mx-auto'>
				<div className='flex flex-col 2xl:flex-row items-center justify-between 2xl:pt-8 2xl:pb-24'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.6,
							duration: 0.5,
							ease: 'easeInOut',
						}}
						className='text-center 2xl:text-left order-2 2xl:order-none'>
						<span className='text-2xl'>Software Developer</span>
						<h1 className='h1 mb-6'>
							Hello, I&apos;m <br />{' '}
							<span className='text-accent'>Guust Taillieu</span>
						</h1>
						<p className='max-w-[500px] text-base mb-9 text-white/80'>
							Crafting innovative digital solutions with expertise
							in cutting-edge technologies.
						</p>

						<div className='flex flex-col 2xl:flex-row items-center gap-8'>
							<a href='/2024_Guust-CV.pdf' download>
								<Button
									variant='outline'
									size='md'
									className='uppercase flex items-center gap-2'>
									<span className=''>Download CV</span>
									<FiDownload className='text-xl' />
								</Button>
							</a>
							<span className='mb-8 2xl:mb-0'>
								<Socials
									containerStyles='flex gap-6'
									linkStyles='size-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
									iconStyles='text-xl'
								/>
							</span>
						</div>
					</motion.div>
					<div className='order-1 2xl:order-none mb-8 2xl:mb-0'>
						<Photo />
					</div>
				</div>
				<Stats />
			</div>
		</section>
	);
}
