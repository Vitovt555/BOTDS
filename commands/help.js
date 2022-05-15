module.exports = {
    name: 'help',
    async execute(interaction) {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle(`hello, ${interaction.user.username}, this HELP Menu`)
        .setColor("GREEN")
        .addField('Welcome to server JS', 'Commands list')
        .addField('!allo  !ping  !help !flip' , '=================', true)
        .setTimestamp()
        .setImage('https://www.bing.com/images/search?view=detailV2&ccid=RpKRLYtO&id=660D14F31BAAA9010F6D0CD2EA5807BC4A045531&thid=OIP.RpKRLYtOb8OIuuGI9F4axQHaGw&mediaurl=https%3A%2F%2Fwinx-fan.ru%2Fwp-content%2Fuploads%2Frisovat-smajliki-kartinki_97.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4692912d8b4e6fc388bae188f45e1ac5%3Frik%3DMVUESrwHWOrSDA%26pid%3DImgRaw%26r%3D0&exph=547&expw=600&q=kartinki+smailikow&simid=608036046510840646&form=IRPRST&ck=00D9D61B9115EF43081009612465562F&selectedindex=39&ajaxhist=0&ajaxserp=0&vt=2&sim=15,16&ajaxhist=0&ajaxserp=0')
       await interaction.reply({embeds:[helpEmbed]})
       
        
    }
}