'use client';

import Nav from './Nav';
import { Button } from './ui/button';
import { ROUTES } from '@/app/constants/routes';
import MobileNav from './MobileNav';
import TransitionLink from './TransitionLink';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<TransitionLink href='/'>
					<div className='overflow-hidden'>
						<motion.h1
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							transition={{
								delay: 0.4,
								duration: 0.3,
								ease: 'easeInOut',
							}}
							className='text-4xl font-semibold'>
							Guust<span className='text-accent'>.</span>
						</motion.h1>
					</div>
				</TransitionLink>

				{/* DESKTOP NAV */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<div className='overflow-hidden'>
						<motion.div
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							transition={{
								delay: 1,
								duration: 0.3,
								ease: 'easeInOut',
							}}>
							<TransitionLink href={ROUTES.CONTACT}>
								<Button>Hire me</Button>
							</TransitionLink>
						</motion.div>
					</div>
				</div>

				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
