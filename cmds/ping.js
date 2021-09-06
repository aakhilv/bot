module.exports = {
	name: "ping",
	async exe(Discord, bot, msg, args) {
		await msg.channel.send(`\`${Date.now() - msg.createdTimestamp}ms\` 🏓`);
	},
};