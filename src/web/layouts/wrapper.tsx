import { ReactNode } from "react";

import { LayoutsEnum } from "types/enums/layouts";

import { Layout } from "types/interfaces/layout";

import { DefaultLayout } from "./default";

interface Props {
	children: ReactNode & { type: Layout };
}

const getLayout = (layout?: LayoutsEnum) => {
	switch (layout) {
		case LayoutsEnum.DEFAULT:
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper = ({ children }: Props) => {
	// eslint-disable-next-line @typescript-eslint/no-shadow
	const Layout = getLayout(children.type.layout);

	return <Layout>{children}</Layout>;
};
