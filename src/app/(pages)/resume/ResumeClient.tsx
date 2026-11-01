'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { education, experience } from '@/data/experience';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import SkillsContent from './SkillsContent';
import AboutContent from './AboutContent';
import WebsiteContent from './WebsiteContent';
import {
	RESUME_TABS,
	ResumeTab,
	ROUTES,
	normalizeResumeTab,
} from '@/app/constants/routes';

type Props = {
	initialTab: ResumeTab;
};

const TAB_CONFIG: { value: ResumeTab; label: string; delay: number }[] = [
	{ value: RESUME_TABS.ABOUT, label: 'About me', delay: 0.2 },
	{
		value: RESUME_TABS.EXPERIENCE,
		label: 'Experience',
		delay: 0.2 + 0.1 * 2,
	},
	{
		value: RESUME_TABS.EDUCATION,
		label: 'Education',
		delay: 0.2 + 0.1 * 3,
	},
	{ value: RESUME_TABS.SKILLS, label: 'Skills', delay: 0.2 + 0.1 * 4 },
	{
		value: RESUME_TABS.WEBSITE,
		label: 'This website',
		delay: 0.2 + 0.1 * 5,
	},
];

const ResumeClient = ({ initialTab }: Props) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [activeTab, setActiveTab] = useState<ResumeTab>(initialTab);

	useEffect(() => {
		const tabFromUrl = searchParams.get('tab');
		if (tabFromUrl) {
			const normalized = normalizeResumeTab(tabFromUrl);
			if (normalized !== activeTab) {
				setActiveTab(normalized);
			}
		}
	}, [searchParams, activeTab]);

	const handleTabChange = (val: string) => {
		const normalized = normalizeResumeTab(val);
		setActiveTab(normalized);
		router.replace(ROUTES.RESUME_WITH_TAB(normalized), { scroll: false });
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 0.2,
					duration: 0.4,
					ease: 'easeIn',
				},
			}}
			className='min-h-[80vh] flex items-start justify-center py-12 xl:py-0 xl:pt-6'>
			<div className='container mx-auto'>
				<Tabs
					value={activeTab}
					onValueChange={handleTabChange}
					className='flex flex-col xl:flex-row gap-[60px]'>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
						{TAB_CONFIG.map((tab) => (
							<motion.div
								key={tab.value}
								initial={{ x: -20 }}
								animate={{ x: 0 }}
								transition={{
									delay: tab.delay,
									ease: 'easeInOut',
								}}
								className='w-full'>
								<TabsTrigger
									value={tab.value}
									asChild
									className='w-full'>
									<Link
										href={ROUTES.RESUME_WITH_TAB(tab.value)}
										scroll={false}
										onClick={() => {
											handleTabChange(tab.value);
										}}>
										{tab.label}
									</Link>
								</TabsTrigger>
							</motion.div>
						))}
					</TabsList>

					{/* CONTENT */}
					<div className='min-h-[70vh] w-full mb-6'>
						<TabsContent
							value={RESUME_TABS.ABOUT}
							forceMount
							className='w-full text-center xl:text-left data-[state=inactive]:hidden'>
							<AboutContent />
						</TabsContent>

						<TabsContent
							value={RESUME_TABS.EXPERIENCE}
							forceMount
							className='w-full mb-6 data-[state=inactive]:hidden'>
							<div className='flex flex-col gap-7 text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>
									{experience.title}
								</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{experience.description}
								</p>
								<ScrollArea className='h-[480px] max-md:hidden'>
									<ExperienceList />
								</ScrollArea>
								<ExperienceList className='md:hidden' />
							</div>
						</TabsContent>

						<TabsContent
							value={RESUME_TABS.EDUCATION}
							forceMount
							className='w-full mb-6 data-[state=inactive]:hidden'>
							<div className='flex flex-col gap-7 text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>
									{education.title}
								</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{education.description}
								</p>
								<ScrollArea className='h-[400px] max-md:hidden'>
									<EducationList />
								</ScrollArea>
								<EducationList className='md:hidden' />
							</div>
						</TabsContent>

						<TabsContent
							value={RESUME_TABS.SKILLS}
							forceMount
							className='w-full h-full mb-6 data-[state=inactive]:hidden'>
							<SkillsContent />
						</TabsContent>

						<TabsContent
							value={RESUME_TABS.WEBSITE}
							forceMount
							className='w-full h-full mb-6 data-[state=inactive]:hidden'>
							<WebsiteContent />
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default ResumeClient;

