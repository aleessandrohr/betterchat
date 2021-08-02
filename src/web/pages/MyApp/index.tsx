import { Provider } from "next-auth/client";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";

import { SITE } from "configs/site";

import { LayoutWrapper } from "web/layouts/wrapper";

import { GlobalStyle } from "./styles";

export const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider enableSystem>
		<Provider session={pageProps.session}>
			<Head>
				<title>{SITE.name}</title>
			</Head>
			<LayoutWrapper>
				<Component {...pageProps} />
			</LayoutWrapper>
			<GlobalStyle />
		</Provider>
	</ThemeProvider>
);
