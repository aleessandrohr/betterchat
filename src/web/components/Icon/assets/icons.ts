import { BsPeopleCircle } from "react-icons/bs";

import { Google, Logo } from "assets/images/svgs";

export const ICONS = {
	google: Google,
	logo: Logo,
	peopleCircle: BsPeopleCircle,
};

export type IconsType = keyof typeof ICONS;
