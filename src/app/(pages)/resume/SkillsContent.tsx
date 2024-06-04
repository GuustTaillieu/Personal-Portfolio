import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { skills } from '@/data/skills';

type Props = {};

const SkillsContent = (props: Props) => {
	return (
		<div className='flex flex-col gap-7'>
			<div className='flex flex-col gap-7 text-center xl:text-left'>
				<h3 className='text-4xl font-bold'>{skills.title}</h3>
				<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
					{skills.description}
				</p>
			</div>
			<ul className='grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 xl:gap-7'>
				{skills.skillList.map((item) => (
					<li key={item.name} className=''>
						<TooltipProvider delayDuration={100}>
							<Tooltip>
								<TooltipTrigger className='w-full aspect-square bg-primary-light/60 rounded-xl flex justify-center items-center group'>
									<item.icon className='text-6xl group-hover:text-accent transition-all duration-300' />
								</TooltipTrigger>
								<TooltipContent>
									<p className='capitalize'>{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsContent;
