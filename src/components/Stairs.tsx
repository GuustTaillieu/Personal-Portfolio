import { STAIR_AMOUNT } from '@/app/constants/stairs';

const Stairs = () => {
	return (
		<>
			{[...Array(STAIR_AMOUNT)].map((_, index) => (
				<div
					key={index}
					className='stair w-full h-full bg-primary-light relative'
				/>
			))}
		</>
	);
};

export default Stairs;
