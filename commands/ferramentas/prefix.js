const db = require("quick.db")
const Discord =require('discord.js')
const { default_prefix } = require("../../config.json")

module.exports = {
  nome: "prefix",
   coolwdon:7000,
  alternativas: ["prefix"],
  run: async  (client, message, args) => {
    
  
    const limite = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar servidor\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_GUILD")) return  message.reply({embeds:[limite]})
 if(!args[0]) {
  let setch = new Discord.MessageEmbed()
				
			
  .setDescription(`<:retornar:918752289886453770> | Digite o prefixo que deseja inserir no bot `)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  
  
  return message.reply({embeds:[setch]})
 }
    if(args[1]) {
  let setch = new Discord.MessageEmbed()
				
			
  .setDescription(`<:fechar:918747498984665108> | O prefixo não pode conter espaços`)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  
  
  return message.reply({embeds:[setch]})
    
    }
 if(args[0].length > 5) {
   let setch = new Discord.MessageEmbed()
				
			
.setDescription(`<:fechar:918747498984665108> | Você não pode enviar prefixos com mais de **5 caracteres** ! Tente novamente`)
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();



return message.reply(setch)
 
    }
    if(args.join("") === default_prefix) {
  db.delete(`prefix_${message.guild.id}`)
  if(args[0].length > 5) {
    let setch = new Discord.MessageEmbed()
     
   
 .setDescription(`<:correto:918747498707824681> | Prefixo redefinido com sucesso ! `)
 .setColor('5fa5e3')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
 
 return message.reply({embeds:[setch]})
  }
    }
    db.set(`prefix_${message.guild.id}`, args[0])
    let setch = new Discord.MessageEmbed()
     
   
    .setDescription(`<:correto:918747498707824681> | Prefixo do BOT definido com sucesso para : \`${args[0]}\` `)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    
    
    return message.reply({embeds:[setch]})
  
  }

}
