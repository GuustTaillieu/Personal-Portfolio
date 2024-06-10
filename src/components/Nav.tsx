'use client';

import { LINKS } from '@/app/constants/routes';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';

type Props = {};

const Nav = (props: Props) => {
	const pathname = usePathname();

	return (
		<nav className='flex gap-8'>
			{LINKS.map((link) => {
				return (
					<TransitionLink
						href={link.path}
						key={`link-${link.path}`}
						className={`${
							pathname === link.path &&
							'text-accent border-b-[1px] border-accent'
						} capitalize font-medium hover:text-accent transition-all`}>
						{link.name}
					</TransitionLink>
				);
			})}
		</nav>
	);
};

export default Nav;
