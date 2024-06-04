'use client';

import stats from '@/data/stats';
import CountUp from 'react-countup';

type Props = {};

const Stats = (props: Props) => {
	return (
		<section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
					{stats.map((stat) => (
						<div
							className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
							key={stat.text}>
							<CountUp
								end={stat.number}
								duration={2}
								delay={2}
								className='text-4xl xl:text-6xl font-extrabold'
							/>
							<p
								className={`${
									stat.text.length < 15
										? 'max-w-[100px]'
										: 'max-w-[150px]'
								} leading-snug text-white/80`}>
								{stat.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
