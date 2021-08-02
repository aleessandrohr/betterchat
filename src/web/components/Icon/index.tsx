import { ICONS, IconsType } from "./assets/icons";

interface Props {
	icon: IconsType;
}

export const Icon = ({ icon }: Props) => {
	const IconComponent = ICONS[icon];

	return <IconComponent />;
};
