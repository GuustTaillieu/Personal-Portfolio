import { events } from '@/data/events';
import { notFound } from 'next/navigation';
import EventDetailClient from './EventDetailClient';
import { Metadata } from 'next';

type Props = {
	params: Promise<{ id: string }> | { id: string };
};

export function generateStaticParams() {
	return events.map((event) => ({
		id: event.num,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const resolvedParams = await params;
	const event = events.find((e) => e.num === resolvedParams?.id);
	if (!event) return { title: 'Event Not Found | Guust - Portfolio' };

	return {
		title: `${event.title} | Guust - Portfolio`,
		description: event.shortDescription,
	};
}

export default async function EventPage({ params }: Props) {
	const resolvedParams = await params;
	const event = events.find((e) => e.num === resolvedParams?.id);

	if (!event) return notFound();

	return <EventDetailClient event={event} />;
}
