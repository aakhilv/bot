module.exports = {
	name: "kick",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("KICK_MEMBERS")) return;

		let member = msg.mentions.members.first();
		if (!member || !member.kickable) return msg.channel.send("Please specify a valid user.");

		let reason = args.slice(1).join(" ");
		if (!reason) reason = "No reason provided.";

		await member.kick(reason).then(() => {
			msg.channel.send(`Successfully kicked **${member}**. 🦶`);

			let channel = bot.channels.cache.get("850363483408695366");

			let embed = new Discord.MessageEmbed()
				.setTitle(`${member.user.tag} was kicked by ${msg.author.tag}`)
				.setDescription(reason)
				.setColor("#3B82F6")
				.setFooter("aakhilv.me")
				.setTimestamp();

			channel.send(embed);
		});
	},
};