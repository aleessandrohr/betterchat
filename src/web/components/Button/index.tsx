import { ReactNode, ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isOutlined?: boolean;
}

export const Button = ({ children, ...props }: Props) => (
	<Container {...props}>{children}</Container>
);
