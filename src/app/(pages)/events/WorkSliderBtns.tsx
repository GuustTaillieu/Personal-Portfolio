'use client';

import { cn } from '@/lib/utils';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

type Props = {
	containerStyles?: string;
	btnStyles?: string;
	iconStyles?: string;
};

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }: Props) => {
	const swiper = useSwiper();
	return (
		<div className={cn('', containerStyles)}>
			<button
				className={cn('', btnStyles)}
				onClick={() => swiper.slidePrev()}>
				<PiCaretLeftBold className={cn('', iconStyles)} />
			</button>
			<button
				className={cn('', btnStyles)}
				onClick={() => swiper.slideNext()}>
				<PiCaretRightBold className={cn('', iconStyles)} />
			</button>
		</div>
	);
};

export default WorkSliderBtns;
