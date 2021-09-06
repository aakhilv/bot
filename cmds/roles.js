module.exports = {
	name: "roles",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("ADMINISTRATOR")) return;

		let cembed = new Discord.MessageEmbed()
			.setTitle("Colors")
			.setDescription("React with the appropriate emoji to get the role color from the list below.\n\n<:red:851108743004291133> ~ <@&850724885143355453>\n\n<:yellow:851108742921453568> ~ <@&850724919678730260>\n\n<:green:851108742464143411> ~ <@&850724934698795010>\n\n<:blue:851108742870073354> ~ <@&850724949353955339>\n\n<:indigo:851108742837698560> ~ <@&851106842804224060>\n\n<:purple:851108742891044874> ~ <@&850724961051344896>\n\n<:pink:851108742929842196> ~ <@&851106980398628925>")
			.setColor("#3B82F6")
			.setFooter("aakhilv.me")
			.setTimestamp();

		let nembed = new Discord.MessageEmbed()
			.setTitle("Notifications")
			.setDescription("React with 💎 below to get the notification ping role.")
			.setColor("#3B82F6")
			.setFooter("aakhilv.me")
			.setTimestamp();

		await bot.channels.cache.get("850361812444774400").send(cembed).then(async sent => {
			await sent.react("851108743004291133");
			await sent.react("851108742921453568");
			await sent.react("851108742464143411");
			await sent.react("851108742870073354");
			await sent.react("851108742837698560");
			await sent.react("851108742891044874");
			await sent.react("851108742929842196");
		});

		await bot.channels.cache.get("850361812444774400").send(nembed).then(async sent => {
			await sent.react("💎");
		});
	},
};