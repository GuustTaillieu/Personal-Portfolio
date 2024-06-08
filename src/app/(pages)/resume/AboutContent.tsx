import ReadMoreText from '@/components/ReadMoreText';
import { about } from '@/data/about';

type Props = {};

const AboutContent = (props: Props) => {
	return (
		<div className='flex flex-col gap-7'>
			<h3 className='text-4xl font-bold'>{about.title}</h3>
			<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
				{about.description}
			</p>
			<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mt-2'>
				{about.info.map((item) => (
					<li
						key={item.fieldName}
						className='flex flex-col justify-center xl:justify-start'>
						<span className='text-white/60 text-base'>
							{item.fieldName}:
						</span>
						{item.href ? (
							<a
								href={item.href}
								className='hover:text-accent transition-colors duration-300 group'>
								<span className='text-xl border-b border-white/60 group-hover:border-accent/60 transition-colors duration-300 pb-[1px] w-fit'>
									{item.fieldValue}
								</span>
							</a>
						) : (
							<span className='text-xl'>{item.fieldValue}</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AboutContent;
