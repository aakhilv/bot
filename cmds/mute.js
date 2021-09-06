module.exports = {
	name: "mute",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;

		let member = msg.mentions.members.first();
		if (!member) return msg.channel.send("Please specify a valid user.");

		if (!member.roles.cache.has("851165991063912488")) {
			await member.roles.add("851165991063912488").then(() => {
				msg.channel.send(`Successfully muted **${member}**. 🤐`);

				let channel = bot.channels.cache.get("850363483408695366");

				let embed = new Discord.MessageEmbed()
					.setTitle(`${member.user.tag} was muted by ${msg.author.tag}`)
					.setColor("#3B82F6")
					.setFooter("aakhilv.me")
					.setTimestamp();

				channel.send(embed);
			});
		} else {
			await member.roles.remove("851165991063912488").then(() => {
				msg.channel.send(`Successfully unmuted **${member}**. 🤐`);

				let channel = bot.channels.cache.get("850363483408695366");

				let embed = new Discord.MessageEmbed()
					.setTitle(`${member.user.tag} was unmuted by ${msg.author.tag}`)
					.setColor("#3B82F6")
					.setFooter("aakhilv.me")
					.setTimestamp();

				channel.send(embed);
			});
		};
	},
};