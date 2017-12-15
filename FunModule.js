const Discord = require("discord.js")
const bot = new Discord.Client()
const AdminIDs = ["245369326322843649", "379274926621720576", "249467130108575745", "240801604779900928"]
const fs = require("fs")
const config = require("./config.json")
// /\ Don't touch this!!!
const prefix = "|"
bot.on('message', (message) => {
	const msg = message.content.trim()
	if(msg.toLowerCase().startsWith(prefix + '8ball')) {
		var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.channel.send(`The magical 8ball says...\n__**${sayings[result]}**__`);
	}
	
})

bot.on('ready', () => {
	console.log(`The FoozBallKing Bot Fun terminal is now online!`)
	console.log(`Logged in as "${bot.user.username}#${bot.user.discriminator}" with ID "${bot.user.id}"`)
})
bot.login(config.token)