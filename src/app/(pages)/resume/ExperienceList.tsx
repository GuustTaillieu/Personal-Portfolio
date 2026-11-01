import { experience } from '@/data/experience';
import { cn } from '@/lib/utils';
import TransitionLink from '@/components/TransitionLink';
import { ROUTES } from '@/app/constants/routes';
import { BsArrowDownRight } from 'react-icons/bs';

type Props = {
	className?: string;
};

const ExperienceList = ({ className }: Props) => (
	<ul className={cn('grid grid-cols-1 lg:grid-cols-2 gap-7', className)}>
		{experience.items.map((item) => (
			<li
				key={item.position + (item.companyName ?? '')}
				className='bg-primary-light/60 min-h-[184px] py-6 px-8 rounded-xl flex flex-col justify-between items-start gap-4 group transition-all duration-300 hover:bg-primary-light/90 relative'>
				<div className='flex flex-col gap-2 w-full'>
					{/* Top row: Period and circular rotating Project Link */}
					<div className='flex items-center justify-between w-full gap-2'>
						<span className='text-accent text-sm font-mono'>{item.period}</span>
						{item.projectId && (
							<TransitionLink
								href={ROUTES.WORK_WITH_PROJECT(item.projectId)}
								title='View project case study'
								className='size-8 rounded-full border border-white/20 hover:border-accent hover:bg-accent flex items-center justify-center transition-all duration-500 group/btn shrink-0'>
								<BsArrowDownRight className='text-base text-white group-hover/btn:text-primary group-hover/btn:-rotate-45 transition-all duration-500' />
							</TransitionLink>
						)}
					</div>
					<h3 className='text-xl max-w-[280px] text-left font-semibold leading-snug'>
						{item.position}
					</h3>
				</div>

				{/* Bottom row: Company Name */}
				<div className='flex items-center gap-2 pt-2 border-t border-white/10 w-full'>
					<span className='size-[6px] rounded-full bg-accent shrink-0'></span>
					<p className='text-white/70 text-sm'>
						{item.companyName ?? 'Freelance'}
					</p>
				</div>
			</li>
		))}
	</ul>
);

export default ExperienceList;
