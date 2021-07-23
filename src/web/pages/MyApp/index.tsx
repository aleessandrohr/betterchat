import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import useDarkMode from "use-dark-mode";

import { SITE } from "configs/site";

import { LayoutWrapper } from "web/layouts/wrapper";

import { DARK } from "web/themes/dark";
import { LIGHT } from "web/themes/light";

import { GlobalStyle } from "./styles";

export const MyApp = ({ Component, pageProps }: AppProps) => {
	const darkMode = useDarkMode(false);
	const theme = darkMode.value ? DARK : LIGHT;

	return (
		<>
			<Head>
				<title>{SITE.name}</title>
			</Head>
			<ThemeProvider theme={{ ...theme, darkMode }}>
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
};
