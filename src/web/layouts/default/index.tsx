import { ReactNode } from "react";

import { NavBar } from "web/components/NavBar";

interface Props {
	children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => (
	<>
		<NavBar />
		{children}
	</>
);
