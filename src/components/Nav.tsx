'use client';

import { LINKS } from '@/app/constants/routes';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import { motion } from 'framer-motion';

type Props = {};

const Nav = (props: Props) => {
	const pathname = usePathname();

	return (
		<nav className='flex gap-8'>
			{LINKS.map((link, index) => {
				return (
					<div key={`link-${link.path}`} className='overflow-hidden'>
						<motion.div
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							transition={{
								delay: 0.4 + 0.1 * index,
								duration: 0.3,
								ease: 'easeInOut',
							}}>
							<TransitionLink
								href={link.path}
								className={`${
									pathname === link.path &&
									'text-accent border-b-[1px] border-accent'
								} capitalize font-medium hover:text-accent transition-all overflow-hidden`}>
								{link.name}
							</TransitionLink>
						</motion.div>
					</div>
				);
			})}
		</nav>
	);
};

export default Nav;
