let Discord = require("discord.js");
let bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
let config = require("./config.json");

let app = require("express")();
let fs = require("fs");

bot.commands = new Discord.Collection();
let cmdfiles = fs.readdirSync("./cmds").filter(file => file.endsWith(".js"));
for (let file of cmdfiles) {
	let cmd = require(`./cmds/${file}`);
	bot.commands.set(cmd.name, cmd);
	console.log(`Loaded ${file}`);
};

bot.on("ready", async () => {
	console.log(`Loaded ${bot.user.username}`);
	bot.user.setActivity(`${bot.guilds.cache.get("835177989674762310").memberCount} members`);
	setInterval(() => { bot.user.setActivity(`${bot.guilds.cache.get("835177989674762310").memberCount} members`); }, 3.6e+6);
});

app.get("/", (req, res) => {
	res.send("Visit <a href=\"https://aakhilv.me\">aakhilv.me</a> for more info.");
});

bot.on("message", async msg => {
	if (msg.channel.id === "850361517269319711") {
		msg.react("👋");
	};

	if (!msg.member.roles.cache.has("850386222568046622")) return;

	if (msg.channel.type == "dm") return;

	if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

	let args = msg.content.slice(config.prefix.length).trim().split(/ +/);
	let cmd = args.shift().toLowerCase();

	if (!bot.commands.has(cmd)) return;

	try {
		bot.commands.get(cmd).exe(Discord, bot, msg, args);
	} catch (err) {
		console.error(err);
		msg.reply("There was an error executing this command.");
	};
});

bot.on("messageReactionAdd", async (react, user) => {
	if (!user.bot && react.message.channel.id == "850361812444774400") {
		if (react.emoji.name == "💎") {
			react.message.guild.member(user).roles.add("850381293015007232");
		} else if (react.emoji.id == "851108743004291133") {
			react.message.guild.member(user).roles.add("850724885143355453");
		} else if (react.emoji.id == "851108742921453568") {
			react.message.guild.member(user).roles.add("850724919678730260");
		} else if (react.emoji.id == "851108742464143411") {
			react.message.guild.member(user).roles.add("850724934698795010");
		} else if (react.emoji.id == "851108742870073354") {
			react.message.guild.member(user).roles.add("850724949353955339");
		} else if (react.emoji.id == "851108742837698560") {
			react.message.guild.member(user).roles.add("851106842804224060");
		} else if (react.emoji.id == "851108742891044874") {
			react.message.guild.member(user).roles.add("850724961051344896");
		} else if (react.emoji.id == "851108742929842196") {
			react.message.guild.member(user).roles.add("851106980398628925");
		};
	};
});

bot.on("messageReactionRemove", async (react, user) => {
	if (!user.bot && react.message.channel.id == "850361812444774400") {
		if (react.emoji.name == "💎") {
			react.message.guild.member(user).roles.remove("850381293015007232");
		} else if (react.emoji.id == "851108743004291133") {
			react.message.guild.member(user).roles.remove("850724885143355453");
		} else if (react.emoji.id == "851108742921453568") {
			react.message.guild.member(user).roles.remove("850724919678730260");
		} else if (react.emoji.id == "851108742464143411") {
			react.message.guild.member(user).roles.remove("850724934698795010");
		} else if (react.emoji.id == "851108742870073354") {
			react.message.guild.member(user).roles.remove("850724949353955339");
		} else if (react.emoji.id == "851108742837698560") {
			react.message.guild.member(user).roles.remove("851106842804224060");
		} else if (react.emoji.id == "851108742891044874") {
			react.message.guild.member(user).roles.remove("850724961051344896");
		} else if (react.emoji.id == "851108742929842196") {
			react.message.guild.member(user).roles.remove("851106980398628925");
		};
	};
});

app.listen(3000);
bot.login(config.token);