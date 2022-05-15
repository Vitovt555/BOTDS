const fs = require('fs')
const path = require('path');
const pathToCommands = path.resolve(__dirname, '../commands/');
const {prefix} = require('../config.json');
const commandFiles = fs.readdirSync(pathToCommands).filter(file => file.endsWith('.js'));
Discord = require("discord.js")



module.exports = (client) => {
    client.commands = new Discord.Collection();

    for(const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
    }
    client.on('interactionCreate', async interaction => {
            
            const {commandName} = interaction
            
        
            if (!interaction.isCommand()) return;
            else if(commandName === "allo") await client.commands.get('allo').execute(interaction);
            else if(commandName === "ping") await client.commands.get('ping').execute(interaction);
            else if(commandName === "flip") await client.commands.get('flip').execute(interaction);
            else if(commandName === "help") await client.commands.get('help').execute(interaction);
            


        })
        
    
}