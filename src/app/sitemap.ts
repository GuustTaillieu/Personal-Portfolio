import { MetadataRoute } from 'next';
import { events } from '@/data/events';
import { RESUME_TABS } from '@/app/constants/routes';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || 'https://taillieusauw.net';

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/resume`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/events`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	];

	// Individual resume tabs for crawlers
	const resumeTabRoutes: MetadataRoute.Sitemap = Object.values(
		RESUME_TABS
	).map((tab) => ({
		url: `${baseUrl}/resume?tab=${tab}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	// Individual event pages
	const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
		url: `${baseUrl}/events/${event.num}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7,
	}));

	return [...staticRoutes, ...resumeTabRoutes, ...eventRoutes];
}

