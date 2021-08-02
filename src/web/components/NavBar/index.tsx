import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import NextImage from "next/image";
import NextLink from "next/link";

import { useState } from "react";

import { Icon } from "web/components/Icon";

import { Menu } from "./components/Menu";

import { Container, Header, Nav, LogoContainer, Avatar } from "./styles";

export const NavBar = () => {
	const { t } = useTranslation();
	const [session] = useSession();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container>
			<Header>
				<Nav>
					<LogoContainer>
						<NextLink href="/">
							<a aria-label={t("components.navBar.links.home")}>
								<Icon icon="logo" />
							</a>
						</NextLink>
					</LogoContainer>
					<Avatar onClick={() => setIsOpen(true)}>
						{session && (
							<NextImage
								src={session.user?.image as string}
								alt={session.user?.name as string}
								width={40}
								height={40}
							/>
						)}
						{!session && <Icon icon="peopleCircle" />}
					</Avatar>
					<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
				</Nav>
			</Header>
		</Container>
	);
};
