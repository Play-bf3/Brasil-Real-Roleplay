const Discord = require('discord.js')
const db = require("quick.db")
const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
  nome: "unmutecall",
  coolwdon:16000,
  alternativas: ["unmutecall"],
  run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  
     
  
   

    const limite = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!await fetchRolePerm(message,message.member,"MUTE_MEMBERS")){
    if (!message.member.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[limite]})}
 
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})

  let reason = args.slice(1).join(" ")
    
   var name = args.join(' ').trim();
   var member  = await findMember(message, name);

   
    let notuser = new Discord.MessageEmbed()
				
			
 .setDescription(`<:fechar:918747498984665108> | Mencione um usuário existente.`)
 .setColor('5fa5e3')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if (!member) return message.reply({embeds:[notuser]})
  if(!reason) reason = "Motivo não inserido"
  if(reason.length > 1000) {
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de banimento com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
    }
  
 
    if (!db.get(`usersmutedcall_${message.guild.id}_${member.id}`)) {



  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | O usuário não esta mutado!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})
    }  

    
    if (db.get(`usersmutedcall_${message.guild.id}_${member.id}`).timemute==0) {
    
        
        
          const ad = new Discord.MessageEmbed()
          .setColor('5fa5e3')
          .setDescription(`<:fechar:918747498984665108> | O usuário não esta mutado!`)
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
          return message.reply({embeds:[ad]})
            }  
    if(member.voice.channel){

        member.voice.setMute(false)
        db.delete(`usersmutedcall_${message.guild.id}_${member.id}`)
    }else{

        db.set(`usersmutedcall_${message.guild.id}_${member.id}`,{date: db.get(`usersmutedcall_${message.guild.id}_${member.id}`).date,timemute:0})
    }


 
    let unmuteembed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Punições | ${client.user.username}`)
 
    .setColor('#5fa5e3')
    .setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário Desmutado:\nㅤ<:setar:918717053005873222>Tag: \`${member.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${member.user.id}\` \n<:branco_escudoRDM:844417079662215201> | Author do Desmute:\nㅤ<:setar:918717053005873222>Tag: \`${message.author.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${message.author.id}\` \n <:Reg:844417596081307689> | Motivo:** \nㅤ${reason}`)
  
    
  
    .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
    .setTimestamp()
    message.reply({embeds:[unmuteembed]})
    member.user.send({embeds:[unmuteembed]})
  var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
  if (!canal) {
  } else {  canal.send(unmuteembed)
  }
    }
    }