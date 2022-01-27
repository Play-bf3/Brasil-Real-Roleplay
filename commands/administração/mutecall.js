const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")
var lt = require('long-timeout')
const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
  nome: "mutecall",
  coolwdon:13000,
  alternativas: ["mutecall"],
  run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  
     

    const limite = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    if(!await fetchRolePerm(message,message.member,"MUTE_MEMBERS")){
    if (!message.member.permissions.has("MUTE_MEMBERS")) return  message.reply({embeds:[limite]})}
 
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MUTE_MEMBERS")) return  message.reply({embeds:[ad]})
    

    var name = args.join(' ').trim();
    
    var member  = await findMember(message, name);



 let notuser = new Discord.MessageEmbed()
				
			
 .setDescription(`<:fechar:918747498984665108> | Mencione um usuário existente.`)
 .setColor('5fa5e3')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if (!member) return message.reply({embeds:[notuser]})


 if(db.get(`usersmutedcall_${message.guild.id}_${member.id}`)&&db.get(`usersmutedcall_${message.guild.id}_${member.id}`).timemute!==0){

 let notuser = new Discord.MessageEmbed()
				
			
 .setDescription(`<:microphone:844417949406462053> | Este usuário já está mutado! `)
 .setColor('5fa5e3')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 return message.reply({embeds:[notuser]})}
 if (member === message.member){ 

  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Você não pode se mutar!    `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})}
  if (member.id === await message.guild.fetchOwner().then((data)=>data.id)){ 

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> | Você não pode mutar a posse do servidor.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:ad})}

   
  if(member.user.id === client.user.id) { 

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> | Você não pode usar este comando em mim.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
    if(await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id){
     
   
   
  const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:block:918884825652420698> | Você não pode mutar um membro com cargo superior ao seu ou igual ao seu   `)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   if( message.member.roles.highest.position <=  member.roles.highest.position) return message.reply({embeds:[ad]})
    
    }
    
  if( message.guild.me.roles.highest.position <=  member.roles.highest.position) {
    
   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:block:918884825652420698> | O cargo do membro mencionado é maior ou igual ao meu. `)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return message.reply({embeds:[ad]})
   

 
  }

    
  const vad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`Quando irá expirar espirar a punição do usuário?\nUse o formato de **(time [s/m/h/d])**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 let vaco =await message.reply({embeds:[vad]})
  
  const filter = (m) =>m.author.id === message.author.id
  const collector1 = message.channel.createMessageCollector({  filter , time : 90000}); 

  collector1.on("collect", async(collected) => { 
  let time = collected.content
 if (!isNaN(ms(time))){ 
vaco.delete()

  const vad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`Qual sera o motivo da punição?\n__Obs : __ Caso não queira informar use **"pular"**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 let sacu =await message.channel.send({embeds:[vad]})
 collector1.stop(true)
 
  
  const filter = (m) =>m.author.id === message.author.id
  const collector = message.channel.createMessageCollector({  filter , time : 90000}); 

  collector.on("collect", collected => { 

    if(collected.content.length > 1000) {

      const ad = new Discord.MessageEmbed()
      .setColor('5fa5e3')
      .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de mute com mais de 1.000 caracteres.\nTente novamente!`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
      return collected.reply({embeds:[ad]})
    
     }
sacu.delete()
		 collector.stop(true)
     let reason;
     if(collected.content.toLowerCase() == 'pular'){

      reason = "Motivo não inserido"
     }else{
      reason = collected.content
     }

     

    
if(reason.length > 1000) {

  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de mute com mais de 1.000 caracteres.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return collected.reply({embeds:[ad]})

 }
 let gif = db.get(`gifmute_${message.member.id}`)
 if(gif === null) gif =''

const muteembed = new Discord.MessageEmbed()
  .setTitle(`Sistema de Punições | ${client.user.username}`)

  .setColor('#5fa5e3')
  .setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário Mutado Em Call:\nㅤ<:setar:918717053005873222>Tag: \`${member.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${member.user.id}\` \nㅤ<:setar:918717053005873222>Tempo: **\`${time}\`** \n<:branco_escudoRDM:844417079662215201> | Author do Mute:\nㅤ<:setar:918717053005873222>Tag: \`${message.author.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${message.author.id}\` \n<:Reg:844417596081307689> | Motivo:** \nㅤ${reason}`)
  .setImage(gif)
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setTimestamp()
  
const unmuteembed = new Discord.MessageEmbed()
.setTitle(`Sistema de Punições | ${client.user.username}`)

.setColor('#5fa5e3')
.setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário Desmutado Em Calll:\nㅤ<:setar:918717053005873222>Tag: \`${member.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${member.user.id}\` \n<:Reg:844417596081307689> | Motivo:** \nㅤtempo de punição expirada.`) 

 
.setThumbnail(member.user.displayAvatarURL({dynamic : true}))
.setTimestamp()
  
  member.user.send({embeds:[muteembed]})
  collected.reply({embeds:[muteembed]})
db.set(`usersmutedcall_${message.guild.id}_${member.id}`,{date:new Date(),timemute:ms(time)})
if(member.voice.channel){
    member.voice.setMute(true)
}
var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {



} else {

canal.send({embeds:[muteembed]})


}
lt.setTimeout(function() {


if(member.voice.channel){
    member.voice.setMute(false)
    db.delete(`usersmutedcall_${message.guild.id}_${member.id}`)
}
var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {
  
} else {

  canal.send({embeds:[unmuteembed]})
  member.user.send({embeds:[unmuteembed]})
 
}}, ms(time))


  })


  }else{
    const usagerr = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setTitle("<:fechar:918747498984665108> Tente novamente")
    .setDescription(`Formato de tempo invalido \nUse o formato de **(time [s/m/h/d])** `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return   collected.reply({embeds:[usagerr]})
  }
  })


  /* 
  var time = args[1];

  if(!time || isNaN(ms(time))){ 
  
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não mencionou o tempo, forma de usar **(time [s/m/h/d])**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
 

 let reason = args.slice(2).join(" ")
 if(!reason) reason = "Motivo não inserido"


    
if(reason.length > 1000) {

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de mute com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
  
   }

 const muteembed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Punições | ${client.user.username}`)
 
    .setColor('#5fa5e3')
    .setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário Mutado:\nㅤ<:setar:918717053005873222>Tag: \`${member.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${member.user.id}\` \nㅤ<:setar:918717053005873222>Tempo: **\`${time}\`** \n<:branco_escudoRDM:844417079662215201> | Author do Mute:\nㅤ<:setar:918717053005873222>Tag: \`${message.author.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${message.author.id}\` \n<:Reg:844417596081307689> | Motivo:** \nㅤ${reason}`)
 
  .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTimestamp()
    
 const unmuteembed = new Discord.MessageEmbed()
 .setTitle(`Sistema de Punições | ${client.user.username}`)
 
 .setColor('#5fa5e3')
 .setDescription(`**<:branco_pessoaRDM:844417026059272232>  | Usuário Desmutado:\nㅤ<:setar:918717053005873222>Tag: \`${member.user.tag}\` \nㅤ<:setar:918717053005873222>ID: \`${member.user.id}\` \n<:gra_relogio:844417639857258516> | Tempo mutado:\nㅤ<:setar:918717053005873222>Tempo: **\`${time}\`** \n<:Reg:844417596081307689> | Motivo:** \nㅤtempo de punição expirada.`)
   
 
   
 .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
 .setTimestamp()
    
    member.roles.add(muteRole.id) 
 message.reply({embeds:[muteembed]})
 db.set(`usersmuted_${message.guild.id}_${member.id}`,{date:new Date(),timemute:ms(time)})

 var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
 if (!canal) {



 } else {

  canal.send({embeds:[muteembed]})
 
 
}
lt.setTimeout(function() {
db.delete(`usersmuted_${message.guild.id}_${member.id}`)
  member.roles.remove(muteRole.id)
 var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
 if (!canal) {
    
  } else {

    canal.send({embeds:[unmuteembed]})
   
   
  }}, ms(time))
*/
    }
  }