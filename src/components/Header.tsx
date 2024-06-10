import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import { ROUTES } from '@/app/constants/routes';
import MobileNav from './MobileNav';
import TransitionLink from './TransitionLink';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<TransitionLink href='/'>
					<h1 className='text-4xl font-semibold'>
						Guust<span className='text-accent'>.</span>
					</h1>
				</TransitionLink>

				{/* DESKTOP NAV */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<TransitionLink href={ROUTES.CONTACT}>
						<Button>Hire me</Button>
					</TransitionLink>
				</div>

				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
