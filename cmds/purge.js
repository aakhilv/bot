module.exports = {
	name: "purge",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;

		let count = parseInt(args[0], 10);
		if (!count || count < 1 || count > 100) return msg.channel.send("Please specify a number between 1 and 100.");

		await msg.delete().then(async () => {
			await msg.channel.bulkDelete(count).then(() => {
				msg.channel.send(`Purged **${count}** messages. 🗑️`).then(async msgs => {
					msgs.delete({ timeout: 2500 });
				});

				let channel = bot.channels.cache.get("850363483408695366");

				let embed = new Discord.MessageEmbed()
					.setTitle(`#${msg.channel.name} was purged by ${msg.author.tag}`)
					.setDescription(`${count} message(s)`)
					.setColor("#3B82F6")
					.setFooter("aakhilv.me")
					.setTimestamp();

				channel.send(embed);
			});
		});
	},
};