const Discord = require("discord.js")
const PREFIX = "|"
const heroCmd = "hero"
const eventCmd = "event"
const mapCmd = "map"
const platformCmd = "platform"
/**
 * @param {Client} bot - The discord.js client
*/

bot.on('message', (message) => {
	const msg = message.content.trim();

		// Check if the message is a command.
		if (msg.toLowerCase().startsWith(PREFIX.toLowerCase())) {
			// Get the command and suffix.
			const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
			const suffix = message.substring(PREFIX.length + command.length).trim();

			// Process the commands.
			switch (command) {
				case heroCmd:
					return getHero(msg, suffix);
				case eventCmd:
					return getEvent(msg, suffix);
				case mapCmd:
					return getMap(msg, suffix);
				case platformCmd:
					return getPlatforms(msg)
			}
		}
})

/**
	 * Commands
	 *
	 * @param {Message} message - Original message.
	 * @param {string} suffix - Command suffix.
	 * @returns {<promise>} - The response edit.
	 */

function getHero(msg, suffix) {
	
}

module.exports = OverwatchModule