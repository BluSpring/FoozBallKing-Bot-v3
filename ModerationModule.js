const Discord = require("discord.js")
const bot = new Discord.Client()
const client = new Discord.Client()
const fs = require('fs')
const config = require('./config.json')
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
// /\ This must not be touched!

// \/ Don't change this!
const errorNoPermMod = new Discord.RichEmbed()
.setColor([179, 0, 0])
.addField('**ERROR!**', '*Honestly, why would you do that...*\n**__You have no permission to use this command!__**\nYou must have the "Moderator" role to use this command!')
// Don't change this /\

// \/ Don't change this!
const errorNoPermAdmin = new Discord.RichEmbed()
.setColor([179, 0, 0])
.addField('**ERROR!**', '*Honestly, why would you do that...*\n**__You have no permission to use this command!__**\nYou must have the "Admin" role to use this command!')
// Don't change this /\

// \/ Don't change this!
const errorNoChannel = new Discord.RichEmbed()
.setColor([179, 0, 0])
.addField('**ERROR!**', '**To use this command, you must have a channel called "#announcements"!**')
// Don't change this /\

const prefix = "|" // Change to your bot's prefix

bot.on("message", (message) => {
	const args = message.content.split(" ").slice(1)
	const kickBanArgs = message.content.slice(prefix.length).trim().split(/ +/g);
	const kickBanCmd = kickBanArgs.shift().toLowerCase();
	const msg = message.content.trim()
	
	if(msg.toLowerCase().startsWith(prefix + 'announce')) {
		let AdminRole = message.guild.roles.find("name", "Admin");
		if (!AdminRole) {
			const embed = new Discord.RichEmbed()
			.setColor([179, 0, 0])
			.addField('**ERROR!**', '**This server doesn\'t have the __"Admin"__ role!**')
			message.channel.send(embed)
		}
		if(message.member.roles.has(AdminRole.id)) {
		const announcement = args.join(" ")
		const channelannounce = member.guild.channels.find('name', 'announcements');
		if (!channelannounce) {
			message.channel.send(errorNoChannel)
		} else {
			message.delete()
			channelannounce.send(announcement)
		}
		} else {
			message.channel.send(errorNoPermAdmin)
		}
	}
	
	if(kickBanCmd.startsWith(prefix + "kick")) {
		let AdminRole = message.guild.roles.find("name", "Admin");
		if (!AdminRole) {
			const embed = new Discord.RichEmbed()
			.setColor([179, 0, 0])
			.addField('**ERROR!**', '**This server doesn\'t have the __"Admin"__ role!**')
			message.channel.send(embed)
		}
		let ModRole = message.guild.roles.find("name", "Moderator");
		if (!ModRole) {
			const embed = new Discord.RichEmbed()
			.setColor([179, 0, 0])
			.addField('**ERROR!**', '**This server doesn\'t have the __"Moderator"__ role!**')
			message.channel.send(embed)
		}
		if(message.member.roles.has(ModRole.id)) {
			let kickPerson = message.guild.member(message.mentions.users.first());
			let reason = kickBanArgs.slice(1).join(" ");
			kickPerson.kick(reason);
		} else if (message.member.roles.has(AdminRole.id)) {
			let kickPerson = message.guild.member(message.mentions.users.first());
			let reason = kickBanArgs.slice(1).join(" ");
			kickPerson.kick(reason);
		} else {
			message.channel.send(errorNoPermMod)
		}
	}
	
	if(kickBanCmd.startsWith(prefix + "ban")) {
		let AdminRole = message.guild.roles.find("name", "Admin");
		if (!AdminRole) {
			const embed = new Discord.RichEmbed()
			.setColor([179, 0, 0])
			.addField('**ERROR!**', '**This server doesn\'t have the __"Admin"__ role!**')
			message.channel.send(embed)
		}
		let ModRole = message.guild.roles.find("name", "Moderator");
		if (!ModRole) {
			const embed = new Discord.RichEmbed()
			.setColor([179, 0, 0])
			.addField('**ERROR!**', '**This server doesn\'t have the __"Moderator"__ role!**')
			message.channel.send(embed)
		}
		if(message.member.roles.has(ModRole.id)) {
			let kickPerson = message.guild.member(message.mentions.users.first());
			let reason = kickBanArgs.slice(1).join(" ");
			kickPerson.ban(reason);
		} else if (message.member.roles.has(AdminRole.id)) {
			let kickPerson = message.guild.member(message.mentions.users.first());
			let reason = kickBanArgs.slice(1).join(" ");
			kickPerson.ban(reason);
		} else {
			message.channel.send(errorNoPermMod)
		}
	}
	
	
})

bot.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'welcome-goodbyes');
  if (!channel) return;
  channel.send({embed: {
    color: 3447003,
    fields: [{
          name: "Welcome!",
          value: `Welcome, ${member} to ${member.guild.name}!`,
		  },
      ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© BluSpring 2017"
	}
  }
});
});

bot.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find('name', 'welcome-goodbyes');
  if (!channel) return;
  channel.send({embed: {
    color: 3447003,
    fields: [{
          name: "See you soon!",
          value: `Goodbye, ${member}! :tear:`,
		  },
      ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© BluSpring 2017"
	}
  }
});
});

bot.on("ready", () => {
	console.log(`The FoozBallKing Bot Moderation module is now online!`)
	console.log(`Logged in as "${bot.user.username}#${bot.user.discriminator}" with ID "${bot.user.id}"`)
})
bot.login(config.token)
