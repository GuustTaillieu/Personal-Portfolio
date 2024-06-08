import { socialIcons } from '@/data/socials';
import Link from 'next/link';

type Props = {
	containerStyles?: string;
	linkStyles?: string;
	iconStyles?: string;
};

const Socials = ({ containerStyles, linkStyles, iconStyles }: Props) => {
	return (
		<div className={containerStyles}>
			{socialIcons.map((social) => (
				<Link
					key={social.path}
					href={social.path}
					className={linkStyles}>
					<social.icon className={iconStyles} />
				</Link>
			))}
		</div>
	);
};

export default Socials;
