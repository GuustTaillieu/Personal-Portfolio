import EventsClient from './EventsClient';
import { events } from '@/data/events';
import { Metadata } from 'next';

type Props = {
	searchParams?: Promise<{ id?: string; event?: string }> | { id?: string; event?: string };
};

export const metadata: Metadata = {
	title: 'Events & Talks | Guust - Portfolio',
	description:
		'Explore tech events, conferences, and workshops attended by Guust Taillieu.',
};

export default async function EventsPage({ searchParams }: Props) {
	const resolvedSearchParams = await searchParams;
	const eventQuery = resolvedSearchParams?.id || resolvedSearchParams?.event;
	const initialEventIndex = eventQuery
		? events.findIndex(
				(e) =>
					e.num === eventQuery ||
					e.num.toLowerCase() === eventQuery.toLowerCase()
		  )
		: 0;

	return (
		<EventsClient
			initialEventIndex={initialEventIndex >= 0 ? initialEventIndex : 0}
		/>
	);
}
