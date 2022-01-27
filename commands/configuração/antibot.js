const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "antibot",
  coolwdon:14000,
  alternativas: ["antibot"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

const limite = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:fechar:918747498984665108> | Para usar este comando você precisa ser **posse** do servidor!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

if (await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id) return  message.reply({embeds:[limite]})

const ad = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`expulsar membros\` e \`ver registro de auditoria\` !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(!message.guild.me.permissions.has("KICK_MEMBERS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")) return  message.reply({embeds:[ad]})

let method = args[0]


if(method != "on" && method != "off") {
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setTitle("<:fechar:918747498984665108> Tente novamente")
.setDescription(`Use o comando : \`${prefix}antibot <on|off> !\``)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 

 }

if (method == "off") {
  let sistemadelevel = db.get(`antibot_${message.guild.id}`);
  if (sistemadelevel == null) {
    const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:down:918758244426600489> | O sistema de antibot já está desabilitado!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 
  
 }
db.delete(`antibot_${message.guild.id}`) 
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:correto:918747498707824681> | Sistema de antibot desabilitado com sucesso !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 

}




if (method == "on") {
let sistemadelevel = db.get(`antibot_${message.guild.id}`);
if (sistemadelevel == 'on') {
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:down:918758244426600489> | O sistema de antibot já está habilitado!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 

}




db.set(`antibot_${message.guild.id}`, 'on') 
const usagerr = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:correto:918747498707824681> | Sistema de antibot habilitado com sucesso !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[usagerr]}) 


}


  }
}
