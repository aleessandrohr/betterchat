import { useSession, signOut, signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";

import { Dispatch, SetStateAction } from "react";
import Loading from "react-loading-skeleton";

import { SwipeableDrawer, Switch } from "@material-ui/core";

import { Button } from "web/components/Button";
import { Icon } from "web/components/Icon";
import { LoadingContainer } from "web/components/LoadingContainer";

import {
	Container,
	User,
	Avatar,
	Name,
	Email,
	Login,
	Row,
	SwitchContainer,
} from "./styles";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ isOpen, setIsOpen }: Props) => {
	const [session, isLoading] = useSession();
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<SwipeableDrawer
			open={isOpen}
			onOpen={() => setIsOpen(true)}
			onClose={() => setIsOpen(false)}
			disableSwipeToOpen
			anchor="right"
		>
			<Container>
				{session && (
					<User>
						<Avatar
							src={session?.user?.image as string}
							alt={session?.user?.name as string}
							width={72}
							height={72}
						/>
						<Name>{session?.user?.name}</Name>
						<Email>{session?.user?.email}</Email>
					</User>
				)}
				{!session && !isLoading && (
					<Login onClick={() => signIn("google")}>
						{t("components.navBar.components.menu.buttons.login")}{" "}
						<Icon icon="google" />
					</Login>
				)}
				<Row>
					{session && (
						<Button onClick={() => signOut()} isOutlined>
							{t("components.navBar.components.menu.buttons.logout")}
						</Button>
					)}
					{isLoading && (
						<LoadingContainer>
							<Loading />
						</LoadingContainer>
					)}
					{theme && (
						<SwitchContainer>
							{t("components.navBar.components.menu.switch.text")}
							<Switch
								onChange={() => setTheme(theme === "light" ? "dark" : "light")}
								checked={theme === "dark"}
								color="default"
								inputProps={{
									"aria-label": t(
										"components.navBar.components.menu.switch.ariaLabel",
									),
								}}
							/>
						</SwitchContainer>
					)}
				</Row>
			</Container>
		</SwipeableDrawer>
	);
};
