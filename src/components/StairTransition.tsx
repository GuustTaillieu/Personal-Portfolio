'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

type Props = {};

const StairTransition = (props: Props) => {
	const pathname = usePathname();

	return (
		<>
			<AnimatePresence mode='wait'>
				<div key={pathname}>
					<div className='h-screen w-screen fixed inset-0 pointer-events-none z-40 flex'>
						<Stairs />
					</div>

					<motion.div
						className='fixed bg-primary inset-0 pointer-events-none'
						initial={{ opacity: 1 }}
						animate={{
							opacity: 0,
							transition: {
								duration: 0.4,
								delay: 1,
								ease: 'easeInOut',
							},
						}}
					/>
				</div>
			</AnimatePresence>
		</>
	);
};

export default StairTransition;
