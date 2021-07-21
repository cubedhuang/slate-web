const invite =
	"https://discord.com/oauth2/authorize?client_id=785196430796914758&permissions=339078215&scope=bot%20applications.commands";

module.exports = {
	reactStrictMode: true,

	env: {
		inviteLink: invite
	},

	async redirects() {
		return [
			{
				source: "/invite",
				destination: invite,
				permanent: true
			},
			{
				source: "/support",
				destination: "https://discord.gg/H4bndawejj",
				permanent: true
			}
		];
	}
};
