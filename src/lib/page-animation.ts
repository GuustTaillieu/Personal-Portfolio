import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
	const stairs = document.querySelectorAll('.stair');

	if (stairs.length === 0) return;
	const tl = gsap.timeline();

	tl.set(stairs, { yPercent: 0 }).to(stairs, {
		yPercent: 100,
		duration: 0.3,
		stagger: 0.04,
		ease: 'power2.inOut',
	});
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
	const stairs = document.querySelectorAll('.stair');

	if (stairs.length === 0) return;
	const tl = gsap.timeline();

	tl.set(stairs, { yPercent: -100 }).to(stairs, {
		yPercent: 0,
		duration: 0.3,
		stagger: 0.04,
		ease: 'power2.inOut',
		onComplete: () => {
			router.push(href);
		},
	});
};
