import { LayoutsEnum } from "types/enums/layouts";

export interface Layout {
	layout?: LayoutsEnum;
}

export type FCWithLayout = Layout & (() => void);
