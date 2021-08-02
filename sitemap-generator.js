module.exports = {
	siteUrl: "https://betterchat.vercel.app",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		additionalSitemaps: ["https://betterchat.vercel.app/sitemap.xml"],
	},
};
