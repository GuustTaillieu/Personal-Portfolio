import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

type Social = {
	icon: IconType;
	path: string;
};

const socialIcons = [
	{
		icon: FaGithub,
		path: '',
	},
	{
		icon: FaLinkedinIn,
		path: '',
	},
] as Social[];

export { socialIcons };
