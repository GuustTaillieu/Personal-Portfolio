import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
	title: 'Guust - Portfolio',
	description: "Guust's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={jetbrainsMono.variable}>
				<Header />
				{children}
			</body>
		</html>
	);
}
