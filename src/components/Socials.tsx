import { socialIcons } from '@/app/enums/socials';
import Link from 'next/link';

type Props = {
	containerStyles?: string;
	iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: Props) => {
	return (
		<div className={containerStyles}>
			{socialIcons.map((social) => (
				<Link
					key={social.path}
					href={social.path}
					className={iconStyles}>
					{<social.icon />}
				</Link>
			))}
		</div>
	);
};

export default Socials;
