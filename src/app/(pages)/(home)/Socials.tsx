import TransitionLink from '@/components/TransitionLink';
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
				<TransitionLink
					key={social.path}
					href={social.path}
					className={linkStyles}>
					<social.icon className={iconStyles} />
				</TransitionLink>
			))}
		</div>
	);
};

export default Socials;
