const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "anticapslock",
  coolwdon:8000,
  alternativas: ["anticapslock"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    const limite = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar mensagens\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return  message.reply({embeds:[limite]})
 
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar mensagens\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return  message.reply({embeds:[ad]})

let method = args[0]


if(method != "on" && method != "off") {
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setTitle("<:fechar:918747498984665108> Tente novamente")
.setDescription(`Use o comando : \`${prefix}anticapslock <on|off> !\``)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 

 }

if (method == "off") {
  let sistemadelevel = db.get(`anticapslock_${message.guild.id}`);
  if (sistemadelevel == null) {
    const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:down:918758244426600489> | O sistema de anticapslock já está desabilitado!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 
  
 }
db.delete(`anticapslock_${message.guild.id}`) 
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:correto:918747498707824681> | Sistema de anticapslock desabilitado com sucesso !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 

}




if (method == "on") {
let sistemadelevel = db.get(`anticapslock_${message.guild.id}`);
if (sistemadelevel == 'on') {
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:down:918758244426600489> | O sistema de anticapslock já está habilitado!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 

}




db.set(`anticapslock_${message.guild.id}`, 'on') 
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:correto:918747498707824681> | Sistema de anticapslock habilitado com sucesso !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 


}


  }
    }
