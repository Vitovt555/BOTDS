module.exports = {
    name: 'allo',
    async execute(message, args) {
        await message.channel.send('Sho?');
   }
}