const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const {findMember} = require('../../script/utils')
const {fetchRolePerm} = require('../../script/permission')
const path = require('path')
module.exports = {
  nome: "radv",
  coolwdon:13000,
  alternativas: ["radv"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    
    
    const limite = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!await fetchRolePerm(message,message.member,"ADV_MEMBERS")){
    if (!message.member.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[limite]})}
 
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})
  
   
    let advchannel = db.get(`advchannel_${message.guild.id}`);

    if (advchannel == null) {
  const limite = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Não encontrei nenhum canal de adv! Utilize ${prefix}advchannel add para selecionar o canal.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  return message.reply({embeds:[limite]});
   }
   let adv1 = message.guild.roles.cache.find(x => x.name === `${client.user.username} Advertência 1`)
   let adv2 = message.guild.roles.cache.find(x => x.name === `${client.user.username} Advertência 2`)

   var name = args.join(' ').trim();
   var user  = await findMember(message, name);

   
   let notuser = new Discord.MessageEmbed()
				
			
   .setDescription(`<:fechar:918747498984665108> | Mencione um usuário existente.`)
   .setColor('5fa5e3')

   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();

   if (!user) return message.reply({embeds:[notuser]})


    
    const reason = args.slice(1).join(" ")
    if(!reason){


  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> |Lembres-se de colocar um motivo. `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})
    }
  if(reason.length > 1000) {
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de advertência com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
    }
  
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`) 
    if(warnings === null) {


  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | O usuário não possui advertências!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})
    }
    if(warnings === 1){ 
  const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif')
  let msg1 = new Discord.MessageEmbed()
    .setAuthor(` Acão |1ª Advertência Removida:`,'attachment://exclmaocaoroxo.gif')

    .setColor('#5fa5e3')
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))

    .setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário :\nㅤ<:setar:918717053005873222>Tag: \`${user.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${user.user.id}\` \n<:branco_escudoRDM:844417079662215201> | Removida por:\nㅤ<:setar:918717053005873222>Tag: \`${message.author.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${message.author.id}\` \n<:Reg:844417596081307689> | Motivo:** \nㅤ${reason}`)
 
  
  .setTimestamp()
   
    message.reply({embeds:[msg1],files:[attachment]})
    user.user.send({embeds:[msg1],files:[attachment]})
    client.channels.cache.get(advchannel).send({embeds:[msg1],files:[attachment]})
    db.subtract(`warnings_${message.guild.id}_${user.id}`, 1)  
  user.roles.remove(adv1)
    };
  
    if(warnings === 2){ 
  const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif')
  let msg2 = new Discord.MessageEmbed()
    .setAuthor(` Acão |2ª Advertência Removida:`,'attachment://exclmaocaoroxo.gif')

    .setColor('#5fa5e3')
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
     
    .setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário :\nㅤ<:setar:918717053005873222>Tag: \`${user.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${user.user.id}\` \n<:branco_escudoRDM:844417079662215201> | Removida por:\nㅤ<:setar:918717053005873222>Tag: \`${message.author.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${message.author.id}\` \n<:Reg:844417596081307689> | Motivo:** \nㅤ${reason}`)
 
  
  .setTimestamp()
  user.user.send({embeds:[msg2],files:[attachment]})
    message.reply({embeds:[msg2],files:[attachment]})

    client.channels.cache.get(advchannel).send({embeds:[msg2],files:[attachment]})
    db.subtract(`warnings_${message.guild.id}_${user.id}`, 1)
    user.roles.remove(adv2)
};
    }
}