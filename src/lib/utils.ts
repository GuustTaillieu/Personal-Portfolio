import { type ClassValue, clsx } from 'clsx';
import { Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const anim = (variants: Variants) => ({
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	variants,
});
