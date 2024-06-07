import Photo from './Photo';
import Socials from './Socials';
import Stats from './Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
	return (
		<section className='h-full'>
			<div className='container mx-auto'>
				<div className='flex flex-col 2xl:flex-row items-center justify-between 2xl:pt-8 2xl:pb-24'>
					<div className='text-center 2xl:text-left order-2 2xl:order-none'>
						<span className='text-2xl'>Software Developer</span>
						<h1 className='h1 mb-6'>
							Hello, I'm <br />{' '}
							<span className='text-accent'>Guust Taillieu</span>
						</h1>
						<p className='max-w-[500px] mb-9 text-white/80'>
							I excel at crafting elegant digital experiences and
							I am proficient in various of programming languages
							and technologies
						</p>

						<div className='flex flex-col 2xl:flex-row items-center gap-8'>
							<Button
								variant='outline'
								size='lg'
								className='uppercase flex items-center gap-2'>
								<span className=''>Download CV</span>
								<FiDownload className='text-2xl' />
							</Button>
							<div className='mb-8 2xl:mb-0'>
								<Socials
									containerStyles='flex gap-6'
									iconStyles='size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
								/>
							</div>
						</div>
					</div>
					<div className='order-1 2xl:order-none mb-8 2xl:mb-0'>
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
}
