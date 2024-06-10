import { STAIR_AMOUNT } from '@/app/constants/stairs';
import { motion } from 'framer-motion';

const stairAnimation = {
	initial: {
		top: '0%',
	},
	animate: {
		top: '100%',
	},
	exit: {
		top: ['100%', '0%'],
	},
};

const reverseIndex = (index: number) => STAIR_AMOUNT - index - 1;

const Stairs = () => {
	return (
		<>
			{[...Array(STAIR_AMOUNT)].map((_, index) => (
				<motion.div
					key={index}
					variants={stairAnimation}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{
						duration: 0.4,
						ease: 'easeInOut',
						delay: reverseIndex(index) * 0.1,
					}}
					className='w-full h-full bg-primary-light relative'
				/>
			))}
		</>
	);
};

export default Stairs;
