import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

type Social = {
	icon: IconType;
	path: string;
};

const socialIcons = [
	{
		icon: FaGithub,
		path: 'https://github.com/GuustTaillieu',
	},
	{
		icon: FaLinkedinIn,
		path: 'https://www.linkedin.com/in/guust-taillieu/',
	},
] as Social[];

export { socialIcons };
