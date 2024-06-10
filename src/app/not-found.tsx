'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ROUTES } from './constants/routes';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
	const router = useRouter();

	return (
		<section className='container mx-auto flex flex-col items-center justify-center min-h-[60vh]'>
			<h1 className='text-[12rem] leading-[11rem] font-bold '>404</h1>
			<p className='text-[2.4rem] opacity-80'>Page not found</p>

			<Button
				size='default'
				variant='outline'
				className='mt-16'
				onClick={() => router.back()}>
				<FiArrowLeft className='mr-2' />
				Go back to safety
			</Button>
		</section>
	);
}
