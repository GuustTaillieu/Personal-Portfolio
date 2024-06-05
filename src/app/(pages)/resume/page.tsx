'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { experience } from '@/data/experience';
import { motion } from 'framer-motion';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import SkillsContent from './SkillsContent';
import AboutContent from './AboutContent';

type Props = {};

const ResumePage = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: 'easeIn',
				},
			}}
			className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
						<TabsTrigger value='experience'>Experience</TabsTrigger>
						<TabsTrigger value='education'>Education</TabsTrigger>
						<TabsTrigger value='skills'>Skills</TabsTrigger>
						<TabsTrigger value='about me'>About me</TabsTrigger>
					</TabsList>

					{/* CONTENT */}
					<div className='min-h-[70vh] w-full'>
						<TabsContent value='experience' className='w-full'>
							<div className='flex flex-col gap-7 text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>
									{experience.title}
								</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{experience.description}
								</p>
								<ScrollArea className='h-[400px] max-md:hidden'>
									<ExperienceList />
								</ScrollArea>
								<ExperienceList className='md:hidden' />
							</div>
						</TabsContent>
						<TabsContent value='education' className='w-full'>
							<div className='flex flex-col gap-7 text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>
									{experience.title}
								</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{experience.description}
								</p>
								<ScrollArea className='h-[400px] max-md:hidden'>
									<EducationList />
								</ScrollArea>
								<EducationList className='md:hidden' />
							</div>
						</TabsContent>
						<TabsContent value='skills' className='w-full h-full'>
							<SkillsContent />
						</TabsContent>
						<TabsContent
							value='about me'
							className='w-full text-center xl:text-left'>
							<AboutContent />
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default ResumePage;
