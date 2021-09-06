module.exports = {
	name: "slowmode",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("MANAGE_CHANNELS")) return;

		await msg.channel.setRateLimitPerUser(1).then(async () => {
			msg.channel.send("Set channel cooldown to **1** second. ⏰");

			let channel = bot.channels.cache.get("850363483408695366");

			let embed = new Discord.MessageEmbed()
				.setTitle(`#${msg.channel.name} was changed by ${msg.author.tag}`)
				.setDescription("Slowmode set to 1 second.")
				.setColor("#3B82F6")
				.setFooter("aakhilv.me")
				.setTimestamp();

			channel.send(embed);
		});
	},
};