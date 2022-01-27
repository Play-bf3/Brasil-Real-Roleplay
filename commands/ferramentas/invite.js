const Discord = require("discord.js");

module.exports = {
  nome: "invite",
  coolwdon:2000,
  alternativas: ["convite"],
  run: async  (client, message, args) => {
  	

  const embed = new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    .setThumbnail("https://media.discordapp.net/attachments/867604144059580416/871768856409026640/850138427252146246.png")
    .setTitle('Meus Convites')
.setDescription(`**<:forma:918749758632378408> Click em [Luni Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) para me adicionar\n<:forma:918749758632378408> Click em [Luni/Suporte](https://discord.gg/h9kG23wX2R) para entrar no meu server de suporte\n<:forma:918749758632378408> Click em [Votar](https://top.gg/bot/853108013656571944) para votar em mim**`)  
 .setTimestamp()
await message.reply({embeds:[embed]})
  
  }
};
