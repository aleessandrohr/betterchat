import "styled-components";

import { DarkMode } from "use-dark-mode";

import { DARK } from "web/themes/dark";
import { LIGHT } from "web/themes/light";

type Theme = typeof DARK &
	typeof LIGHT & {
		darkMode: DarkMode;
	};

declare module "styled-components" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends Theme {}
}
