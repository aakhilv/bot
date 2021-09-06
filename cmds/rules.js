module.exports = {
	name: "rules",
	async exe(Discord, bot, msg, args) {
		if (!msg.member.hasPermission("ADMINISTRATOR")) return;

		let rembed = new Discord.MessageEmbed()
			.setTitle("Server Rules")
			.setDescription("In order create an environment that is welcoming for everyone, please review and follow the rules below.\n\n**1.** Treat all users with respect.\n**2.** No profanity or inappropriate language/images/videos/links.\n**3.** When discussing religion, politics, instruments, or other similar topics, please remain objective and avoid voicing strong opinions.\n**4.** Do not spam or flood any text channels, and do not scream or make disturbing sounds in voice channels.\n**5.** Please do not ping nor DM <@699010127977513081> or <@&850386222568046622>.\n**6.** Try not to name-drop (using a real name without permission), and do not dox another user.\n**7.** No witch-hunting (requests of kicks or bans for other users).\n**8.** Do not use multiple accounts within this Server, unless specifically permitted.\n**9.** Do not advertise other servers or paid services with which you have an affiliation in channels other than <#850361977510690826>.\n\nViolations of these rules may result in mutes, kicks, or for serious cases, bans.")
			.setColor("#3B82F6");

		let membed = new Discord.MessageEmbed()
			.setDescription("Thanks for reading the rules, feel free to grab some roles in <#850361812444774400> and start chatting in <#850360685850132501>.\n\nIf you have questions, please read <#850361782237003852> before sending a message in <#852238221098483723> or DMing <@575252669443211264> to contact our staff team.")
			.setColor("#3B82F6")
			.setFooter("aakhilv.me")
			.setTimestamp();

		await bot.channels.cache.get("850361463486021702").send(rembed);
		await bot.channels.cache.get("850361463486021702").send(membed);
	},
};