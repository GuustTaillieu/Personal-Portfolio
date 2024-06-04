import { experience } from '@/data/experience';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

const ExperienceList = ({ className }: Props) => (
	<ul className={cn('grid grid-cols-1 lg:grid-cols-2 gap-7', className)}>
		{experience.items.map((item) => (
			<li
				key={item.companyName}
				className='bg-primary-light/60 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
				<span className='text-accent'>{item.period}</span>
				<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
					{item.position}
				</h3>
				<div className='flex items-center gap-3'>
					<span className='text-accent size-[6px] rounded-full bg-accent'></span>
					<p className='text-white/60'>{item.companyName}</p>
				</div>
			</li>
		))}
	</ul>
);

export default ExperienceList;
