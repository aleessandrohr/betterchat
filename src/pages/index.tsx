import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Home } from "web/pages/Home";

import { LayoutsEnum } from "types/enums/layouts";

Home.layout = LayoutsEnum.DEFAULT;

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, ["common", "home"])),
	},
});
