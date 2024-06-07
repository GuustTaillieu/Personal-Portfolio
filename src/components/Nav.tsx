'use client';

import { LINKS } from '@/app/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

const Nav = (props: Props) => {
	const pathname = usePathname();

	return (
		<nav className='flex gap-8'>
			{LINKS.map((link) => {
				return (
					<Link
						href={link.path}
						key={link.path}
						className={`${
							pathname === link.path &&
							'text-accent border-b-[1px] border-accent'
						} capitalize font-medium hover:text-accent transition-all`}>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
