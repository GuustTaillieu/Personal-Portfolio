import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from './ui/button';

type Props = {
	text: string;
};

const ReadMoreText = ({ text }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<span className={cn(!open && 'line-clamp-5 xl:line-clamp-4')}>
				{text}
			</span>
			<Button
				size='default'
				variant='primary'
				className='text-accent/80 p-0 h-fit rounded-none block text-sm pt-1 max-xl:mx-auto'
				onClick={() => setOpen(!open)}>
				{open ? 'Read less' : 'Read more'}
			</Button>
		</>
	);
};

export default ReadMoreText;
