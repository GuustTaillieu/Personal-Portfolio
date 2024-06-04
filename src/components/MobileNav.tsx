'use client';

import { LINKS, ROUTES } from '@/app/enums/routes';
import { usePathname, useRouter } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';

type Props = {};

const MobileNav = (props: Props) => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const router = useRouter();

	function delayedNavigate(event: MouseEvent<any>, href: string): void {
		event.preventDefault();
		setOpen(false);
		setTimeout(() => {
			router.push(href);
		}, 300);
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[2rem] text-accent' />
			</SheetTrigger>

			<SheetContent side='full' className='flex flex-col'>
				<div className='mt-32 mb-40 text-center text-2xl'>
					<Link
						href={ROUTES.HOME}
						onClick={(e) => delayedNavigate(e, ROUTES.HOME)}>
						<h1 className='text-4xl font-semibold'>
							Guust<span className='text-accent'>.</span>
						</h1>
					</Link>
				</div>

				<nav className='flex flex-col justify-center items-center gap-8'>
					{LINKS.map((link) => (
						<Link
							href={link.path}
							key={link.path}
							onClick={(e) => delayedNavigate(e, link.path)}
							className={`${
								pathname === link.path &&
								'text-accent border-b-[1px] border-accent'
							} text-xl capitalize hover:text-accent transition-all`}>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
