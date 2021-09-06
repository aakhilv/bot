module.exports = {
	name: "ban",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("BAN_MEMBERS")) return;

		let member = msg.mentions.members.first();
		if (!member || !member.bannable) return msg.channel.send("Please specify a valid user.");

		let reason = args.slice(1).join(" ");
		if (!reason) reason = "No reason provided.";

		await msg.guild.members.ban(member, { reason }).then(() => {
			msg.channel.send(`Successfully banned **${member}**. 🔨`);

			let channel = bot.channels.cache.get("850363483408695366");

			let embed = new Discord.MessageEmbed()
				.setTitle(`${member.user.tag} was banned by ${msg.author.tag}`)
				.setDescription(reason)
				.setColor("#3B82F6")
				.setFooter("aakhilv.me")
				.setTimestamp();

			channel.send(embed);
		});
	},
};