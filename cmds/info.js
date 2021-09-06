module.exports = {
	name: "info",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("ADMINISTRATOR")) return;

		let lembed = new Discord.MessageEmbed()
			.setTitle("Important Links")
			.setDescription("► **Website** ~ https://aakhilv.me\n► **Discord** ~ https://discord.gg/GxgxafBKXa\n► **YouTube** ~ https://youtube.com/channel/UCDPfSx5TN8GgVmeG76XLmVA\n► **Twitter** ~ https://twitter.com/aakhilv_\n► **Email** ~ hello@aakhilv.me")
			.setColor("#3B82F6");

		let fembed = new Discord.MessageEmbed()
			.setTitle("Frequently Asked Questions")
			.setDescription("**How do I become a staff member?**\n> Typically when I am looking for staff members, I will post an application in <#850361702700679208>. I will not only select staff members based responses alone, but also based on your server activity and behavior.\n\n**How should I contact you personally for any inquiries?**\n> Please email me at `hello@aakhilv.me` or send a DM to <@575252669443211264> specifying that the message is for me. My DMs are turned off on all social medias.")
			.setColor("#3B82F6")
			.setFooter("aakhilv.me")
			.setTimestamp();

		await bot.channels.cache.get("850361782237003852").send(lembed);
		await bot.channels.cache.get("850361782237003852").send(fembed);
	},
};