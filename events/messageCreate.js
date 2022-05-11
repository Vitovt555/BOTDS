module.exports = (client) => {
    const fs = require('fs')
    const {prefix} = require('../config.json');
    const commandFiles = fs.readdirSync('../commands/').filter(file => file.endsWith('.js'));
    Discord = require("discord.js")

    client.commands = new Discord.Collection();
   

    for(const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
        client.on("messageCreate", (message) => {
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            if(command === "help") {
                const helpEmbed = new Discord.MessageEmbed()
                .setTitle(`hello, ${message.author.username}, this HELP Menu`)
                .setColor(0xff0000)
                .addField('OOO', 'WWW')
                message.channel.send(helpEmbed)
            }
        
            if(message.author.bot || !message.content.startsWith(prefix)) return;
            if(command === "allo") client.commands.get('allo').execute(message,args);
            else message.channel.send("?")
        })
        
    
}