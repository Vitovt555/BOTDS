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
        client.on("messageCreate", async(message) => {
            
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
           
        
            if(message.author.bot || !message.content.startsWith(prefix)) return;
            else if(command === "allo") await client.commands.get('allo').execute(message,args);
            else if(command === "help") await client.commands.get('help').execute(message,args);
            else await message.channel.send("?")
        })
        
    
}