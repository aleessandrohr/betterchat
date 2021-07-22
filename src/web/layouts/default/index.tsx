import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => <>{children}</>;
