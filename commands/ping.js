module.exports = {
    name: 'ping',
    execute(interaction) {
        interaction.reply(`${Date.now() - interaction.createdTimestamp}ms`)
   }
}