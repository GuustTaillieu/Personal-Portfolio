'use client';

import { AnimatePresence } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

const Context = ({ children }: Props) => {
	return <AnimatePresence mode='wait'></AnimatePresence>;
};

export default Context;
