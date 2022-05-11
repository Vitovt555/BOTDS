module.exports = {
    name: 'help',
    async execute(message, args) {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle(`hello, ${message.author.username}, this HELP Menu`)
        .setColor(0xff0000)
        .addField('OOO', 'WWW')
       await message.channel.send({embeds:[helpEmbed]})
    }
}