module.exports = {
	name: "help",
	async exe(Discord, bot, msg, args) {
		let embed = new Discord.MessageEmbed()
			.setTitle("Help Menu")
			.setDescription("`.help`, `.ping`, `.kick`, `.ban`, `.purge`, `.mute`, `.slowmode`")
			.setColor("#3B82F6")
			.setFooter("aakhilv.me")
			.setTimestamp();

		msg.channel.send(embed);
	},
};