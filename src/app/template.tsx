'use client';

import StairTransition from '@/components/StairTransition';
import { animatePageIn } from '@/lib/page-animation';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
	children: React.ReactNode;
};

export default function template({ children }: Props) {
	const pathname = usePathname();
	useEffect(() => {
		animatePageIn();
	}, [pathname]);

	return (
		<div>
			<StairTransition />
			{children}
		</div>
	);
}
