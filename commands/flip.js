const wait = require('node:timers/promises').setTimeout;
module.exports = {
    name: 'flip',
    async execute(interaction) {
        const num = Math.floor(Math.random()*10+1)
        if(num>5) interaction.reply(":full_moon_with_face:");
        if(num<5) interaction.reply(":new_moon_with_face:");
        if(num==5) interaction.reply(":first_quarter_moon:");      
   }
}