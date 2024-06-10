import { socialIcons } from '@/data/socials';

type Props = {
	containerStyles?: string;
	linkStyles?: string;
	iconStyles?: string;
};

const Socials = ({ containerStyles, linkStyles, iconStyles }: Props) => {
	return (
		<div className={containerStyles}>
			{socialIcons.map((social) => (
				<a
					key={social.path}
					href={social.path}
					target='_blank'
					className={linkStyles}>
					<social.icon className={iconStyles} />
				</a>
			))}
		</div>
	);
};

export default Socials;
