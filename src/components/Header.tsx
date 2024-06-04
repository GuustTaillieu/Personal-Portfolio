import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import { ROUTES } from '@/app/enums/routes';
import MobileNav from './MobileNav';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Guust<span className='text-accent'>.</span>
					</h1>
				</Link>

				{/* DESKTOP NAV */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Link href={ROUTES.HOME}>
						<Button>Hire me</Button>
					</Link>
				</div>

				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
