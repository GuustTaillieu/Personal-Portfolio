'use client';

import { animatePageOut } from '@/lib/page-animation';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type Props = typeof Link extends React.FC<infer P> ? P : never;

const TransitionLink = (props: Props) => {
	const pathname = usePathname();
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (props.href === pathname) return;
		animatePageOut(props.href.toString(), router);
	};

	return <Link {...props} onClick={handleClick} />;
};

export default TransitionLink;
