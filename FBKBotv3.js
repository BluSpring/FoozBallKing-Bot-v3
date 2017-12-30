const Discord = require("discord.js")
const bot = new Discord.Client()
const AdminIDs = ["245369326322843649", "379274926621720576", "249467130108575745", "240801604779900928"]
const fs = require("fs")
const config = require("./config.json")
const Music = require('discord.js-musicbot-addon');

const music = new Music(bot, {
  youtubeKey: 'AIzaSyBBq6-Zbsq6V3PLsXCb7NCdS2TKgOoMAXQ',
  prefix: "|",
  global: false,
  anyoneCanAdjust: true,
  anyoneCanSkip: true,
  ownerOverMember: true,
  botOwner: "368700038488129538"
});
// /\ Don't touch this!!!

const prefix = "|" // Edit to your bot's prefix

bot.on("message", (message) => {
	const msg = message.content.trim()
	const args = message.content.split(" ").slice(1)
	if(msg.toLowerCase().startsWith(prefix + "help")) {
		fs.readFile(".\\helpfbkbot.txt", "utf8", function(error, data) {
     if (error) {
       console.error("Read error:  " + error.message);
     } else {
       message.author.send(data);
     }		
    })
		if(AdminIDs.some(dd => message.author.id.includes(dd))) {
			fs.readFile(".\\helpfbkbotadmin.txt", "utf8", function(error, data) {
     if (error) {
       console.error("Read error:  " + error.message);
     } else {
       message.author.send(data);
     }
		
    })
		} else return
	}
	
	if(msg.toLowerCase().startsWith(prefix + "say")) {
		const saycmd = args.join(" ")
		message.delete()
		message.channel.send(saycmd)
	}
	
	if(msg.toLowerCase().startsWith(prefix + "guilds")) {
		bot.user.setGame(`Type ${prefix}help for help | ${bot.guilds.size} guilds`)
		message.channel.send(bot.guilds.size)
	}
	
	if(msg.toLowerCase().startsWith(prefix + "uptime")) {
		var days = Math.floor(bot.uptime / 86400000000000)
		var hours = Math.floor(bot.uptime / 3600000)
		var minutes = Math.floor((bot.uptime % 3600000) / 60000)
		var seconds = Math.floor(((bot.uptime % 360000) % 60000) / 1000)
		const embed = new Discord.RichEmbed()
		.setColor([0, 38, 255])
		.addField('Uptime', `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
		message.channel.send(embed)
	}
})

bot.on("ready", () => {
	console.log(`The FoozBallKing Bot Main Module is now online!`)
	console.log(`Logged in as "${bot.user.username}#${bot.user.discriminator}" with ID "${bot.user.id}"`)
	bot.user.setGame(`Type ${prefix}help for help | ${bot.guilds.size} guilds`)
})
bot.login(config.token)