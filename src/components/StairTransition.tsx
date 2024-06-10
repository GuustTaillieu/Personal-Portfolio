'use client';

type Props = {};

const StairTransition = (props: Props) => {
	return (
		<div className='h-screen w-screen fixed inset-0 pointer-events-none z-40 flex'>
			<div
				className='stair w-[calc((100%_/_6)_+_2px)] h-full bg-primary-light fixed left-0'
				id='banner1'
			/>
			<div
				className='stair w-[calc((100%_/_6)_+_2px)] h-full bg-primary-light fixed left-[calc((100%_/_6))]'
				id='banner2'
			/>
			<div
				className='stair w-[calc((100%_/_6)_+_2px)] h-full bg-primary-light fixed left-[calc((100%_/_6)_*_2)]'
				id='banner3'
			/>
			<div
				className='stair w-[calc((100%_/_6)_+_2px)] h-full bg-primary-light fixed left-[calc((100%_/_6)_*_3)]'
				id='banner4'
			/>
			<div
				className='stair w-[calc((100%_/_6)_+_2px)] h-full bg-primary-light fixed left-[calc((100%_/_6)_*_4)]'
				id='banner5'
			/>
			<div
				className='stair w-[calc((100%_/_6)_+_2px)] h-full bg-primary-light fixed left-[calc((100%_/_6)_*_5)]'
				id='banner6'
			/>
		</div>
	);
};

export default StairTransition;
