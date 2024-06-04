'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {
	children: React.ReactNode;
};

const PageTransition = ({ children }: Props) => {
	const pathname = usePathname();

	return (
		<AnimatePresence>
			<div key={pathname}>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: {
							duration: 0.4,
							delay: 1,
							ease: 'easeInOut',
						},
					}}
					className='fixed bg-primary inset-0 pointer-events-none'
				/>
				{children}
			</div>
		</AnimatePresence>
	);
};

export default PageTransition;
