'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

type Props = {
	containerStyles?: string;
	btnStyles?: string;
	iconStyles?: string;
	amountVisible?: number;
};

const WorkSliderBtns = ({
	containerStyles,
	btnStyles,
	iconStyles,
	amountVisible,
}: Props) => {
	const swiper = useSwiper();
	const [isBeginning, setIsBeginning] = useState(
		swiper.isBeginning || swiper.slides.length <= 1
	);
	const [isEnd, setIsEnd] = useState(
		swiper.isEnd || swiper.slides.length <= 1
	);
	swiper.on('slideChange', () => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	});

	return (
		<div className={cn('', containerStyles)}>
			<button
				style={{
					opacity: isBeginning ? 0.5 : 1,
				}}
				className={cn('', btnStyles)}
				onClick={() => !swiper.isBeginning && swiper.slidePrev()}>
				<PiCaretLeftBold className={cn('', iconStyles)} />
			</button>
			<button
				style={{
					opacity: isEnd ? 0.5 : 1,
				}}
				className={cn('', btnStyles)}
				onClick={() => !swiper.isEnd && swiper.slideNext()}>
				<PiCaretRightBold className={cn('', iconStyles)} />
			</button>
		</div>
	);
};

export default WorkSliderBtns;
