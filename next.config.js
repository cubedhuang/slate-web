module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: "/invite",
				destination:
					"https://discord.com/oauth2/authorize?client_id=785196430796914758&permissions=339078215&scope=bot%20applications.commands",
				permanent: true
			}
		];
	}
};
