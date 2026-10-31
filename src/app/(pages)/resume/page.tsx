import { Suspense } from 'react';
import ResumeClient from './ResumeClient';
import {
	RESUME_TABS,
	ResumeTab,
	normalizeResumeTab,
} from '@/app/constants/routes';
import { Metadata } from 'next';

type Props = {
	searchParams?: Promise<{ tab?: string | string[] }> | { tab?: string | string[] };
};

const TAB_TITLES: Record<ResumeTab, string> = {
	[RESUME_TABS.ABOUT]: 'About Me',
	[RESUME_TABS.EXPERIENCE]: 'Experience',
	[RESUME_TABS.EDUCATION]: 'Education',
	[RESUME_TABS.SKILLS]: 'Skills',
	[RESUME_TABS.WEBSITE]: 'This Website',
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const resolvedSearchParams = await searchParams;
	const tab = normalizeResumeTab(resolvedSearchParams?.tab);
	return {
		title: `${TAB_TITLES[tab]} | Guust - Portfolio`,
		description: `Guust Taillieu's resume and portfolio - ${TAB_TITLES[tab]}`,
	};
}

export default async function ResumePage({ searchParams }: Props) {
	const resolvedSearchParams = await searchParams;
	const initialTab = normalizeResumeTab(resolvedSearchParams?.tab);

	return (
		<Suspense fallback={<div className='min-h-[80vh]' />}>
			<ResumeClient initialTab={initialTab} />
		</Suspense>
	);
}
