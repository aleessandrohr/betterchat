import { ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

interface Props {
	children: ReactNode;
}

export const LoadingContainer = ({ children }: Props) => (
	<SkeletonTheme color="var(--gray-100)" highlightColor="var(--primary)">
		{children}
	</SkeletonTheme>
);
