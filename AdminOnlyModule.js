const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require('fs')
const config = require('./config.json')
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
// /\ This must not be touched!

const AdminIDs = ["245369326322843649", "379274926621720576", "249467130108575745", "240801604779900928"] // Change to your admins' IDs.

// \/ Don't change this!
const errorNoPerm = new Discord.RichEmbed()
.setColor([179, 0, 0])
.addField('**ERROR!**', '*Honestly, why would you do that...*\n**__You have no permission to use this command!__**')
// Don't change this /\

const prefix = "|" // Change to your bot's prefix

bot.on("message", (message) => {
	const msg = message.content.trim()
	const args = message.content.split(" ").slice(1)
	if(msg.toLowerCase().startsWith(prefix + "eval")) {
		// Makes the command not case sensitive. So you can type "|EvAL"
		if(AdminIDs.some(id => message.author.id.includes(id))) {
			// Tries to check if the author's ID is included in the AdminIDs list
			try {
				const code = args.join(" ");
				let evaled = eval(code);

				if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);

				message.channel.send(clean(evaled), {code:"xl"});
			} catch (err) {
				message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
			}
		} else {
			message.channel.send(errorNoPerm)
			// Sends the No Permission error
		}
	}
	
	// New commands to be added.
	// How to add Admin Only commands:
	/*
		if(msg.toLowerCase().startsWith(prefix + "your command name")) {
			if(AdminIDs.some(id => message.author.id.includes(id))) {
				// All your code
			} else {
				message.channel.send(errorNoPerm)
				// Sends the "No Permission" error
			}
		}
	*/
})

bot.login(config.token)
bot.on("ready", () => {
	console.log(`The FoozBallKing Bot Admin Only terminal is now online!`)
	console.log(`Logged in as "${bot.user.username}#${bot.user.discriminator}" with ID "${bot.user.id}"`)
})