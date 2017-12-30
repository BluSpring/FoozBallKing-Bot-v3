const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require("./config.json")
const prefix = "|"
bot.on('message', (message) => {
	const msg = message.content.trim()
	if(msg.toLowerCase().startsWith(prefix + 'kiss')) {
		const kissList = [
			"https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif",
			"https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
			"https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
			"https://media.giphy.com/media/wf4UuPMYnwBck/giphy.gif",
			"https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif",
			"https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
			"https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif",
			"https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
			"https://media.giphy.com/media/K4VEsbuHfcj6g/giphy.gif",
			"https://media.giphy.com/media/xiOfpOVHblXOg/giphy.gif",
			"https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
			"https://media.giphy.com/media/oHZPerDaubltu/giphy.gif",
			"https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif",
			"https://media.giphy.com/media/7eQ8Ky3dAsRYA/giphy.gif"
		]
		const result = Math.floor((Math.random() * kissList.length) + 0)
		const kissThis = message.mentions.users.first()
		if(!kissThis) {
			message.channel.send('Aw, that\'s sad... You don\'t have anyone to kiss...')
		} else if(kissThis.id == bot.user.id) {
			message.channel.send('*Don\'t even try to kiss me... I\'m a bot...*')
		} else if(kissThis.id == message.author.id) {
			message.channel.send('Aw, you\'re lonely....')
		} else {
			const embed = new Discord.RichEmbed()
			.setColor([255, 0, 220])
			.setImage(kissList[result])
			message.channel.send(`:heart: ${kissThis} was kissed by ${message.author}! :heart:`)
			message.channel.send(embed)
		}
	}
	
	if(msg.toLowerCase().startsWith(prefix + 'modules')) {
		message.channel.send('(5/6) Affection module <:online:384541046262202369>')
	}
	
	if(msg.toLowerCase().startsWith(prefix + 'hug')) {
		const huggles = [
			"https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif",
			"https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
			"https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
			"https://media.giphy.com/media/yziFo5qYAOgY8/giphy.gif",
			"https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif",
			"https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
			"https://media.giphy.com/media/llmZp6fCVb4ju/giphy.gif",
			"https://media.giphy.com/media/3oEjI72YdcYarva98I/giphy.gif",
			"https://media.giphy.com/media/OiKAQbQEQItxK/giphy.gif",
			"https://media.giphy.com/media/l2JJOsEYzQbtvV0A0/giphy.gif",
			"https://media.giphy.com/media/l2JJySFVazmR38Lks/giphy.gif"
		]
		const result = Math.floor((Math.random() * huggles.length) + 0)
		const hugThis = message.mentions.users.first()
		if(!hugThis) {
			message.channel.send('Aw, that\'s sad... You don\'t have anyone to hug...')
		} else if(hugThis.id == bot.user.id) {
			const embed = new Discord.RichEmbed()
			.setColor([255, 0, 220])
			.setImage(huggles[result])
			message.channel.send('Yay, huggles :D')
			message.channel.send(embed)
		} else if(hugThis.id == message.author.id) {
			message.channel.send('Aw, you\'re lonely....')
		} else {
			const embed = new Discord.RichEmbed()
			.setColor([255, 0, 220])
			.setImage(huggles[result])
			message.channel.send(`:heart: ${hugThis} was hugged by ${message.author}! :heart:`)
			message.channel.send(embed)
		}
	}
	
	if(msg.toLowerCase().startsWith(prefix + 'poke')) {
		const embed = new Discord.RichEmbed()
		.setColor([255, 0, 0])
		.addField('**ERROR!**', 'This command is currently a W.I.P! (aka unfinished)*')
		message.channel.send(embed)
	}
})

bot.on('ready', () => {
	console.log('The FoozBallKing Bot Affection Module is now online!')
	console.log(`Logged in as ${bot.user.username} with ID ${bot.user.id}`)
})

bot.login(config.token)