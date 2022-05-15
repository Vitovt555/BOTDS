const {Client,Intents} = require("discord.js");
const {token} = require('./config.json');
const messageCreate = require('./events/messageCreate')
// const deployCommands = require('./deployCommands')
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES
] });


client.on("ready", () => console.log("started!!!!!!!!!!!!!!!!!!!!!!"))
messageCreate(client)
// deployCommands()
// client.on('interactionCreate', async interaction => {
// 	if (!interaction.isCommand()) return;

// 	const { commandName } = interaction;

// 	if (commandName === 'ping') {
// 		await interaction.reply('Pong!');
// 	} else if (commandName === 'server') {
// 		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
// 	} else if (commandName === 'user') {
// 		await interaction.reply('User info.');
// 	}
// });



client.login(token)