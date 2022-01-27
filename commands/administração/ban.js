const Discord = require("discord.js");
const db = require('quick.db');
const path = require('path')
const {findUser,findMember} = require('../../script/utils')
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
  nome: "ban",
  coolwdon:4000,
  alternativas: ["ban"],
  run: async  (client, message, args) => {

    let memb = message.author.id
   
  const limite = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`ban membros\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
if(!await fetchRolePerm(message,message.member,"BAN_MEMBERS")){    
  if (!message.member.permissions.has("BAN_MEMBERS")) return  message.reply({embeds:[limite]})
}
   const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`ban membros\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return  message.reply({embeds:[ad]})
    var name = args.join(' ').trim();
   
    let checkguilds =await findUser(client,message, name)|| message.author;
    let checkserver =await findMember(message, checkguilds.id) 
if(!checkserver){


  let banck = await message.guild.bans.fetch();

  const sdadsad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Ops, este usuários tem algo de errado, parece que este usuário já está **banido**!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

if(banck.get(checkguilds.id))return message.reply({embeds:[sdadsad]})
  var motivo = args.slice(1).join(" ");
  if(!motivo) motivo = "Motivo não inserido"


  if(motivo.length > 1000) {

   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de banimento com mais de 1.000 caracteres.`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return message.reply({embeds:[ad]})
 
  }
   


  const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif');
  let banembed = new Discord.MessageEmbed()

  .setAuthor(`Confirme a ação a seguir:`,'attachment://exclmaocaoroxo.gif')
  
  
  .setDescription(`<:setar:918717053005873222>**Deseja realmente banir o usuário abaixo?**\nㅤ${checkguilds.username}(\`${checkguilds.id}\`)\n<:Reg:844417596081307689>**| Motivo inserido:**\nㅤ${motivo}`)
  
  .setColor('5fa5e3')
  .setFooter(`Comando requisitado por: ${message.author.username} `,message.author.displayAvatarURL({format: "png"}))

  let vsim = new Discord.MessageButton()
  .setLabel("Sim") 
.setStyle("SUCCESS")
 
  .setCustomId("vsim")

  let vnao =  new Discord.MessageButton()
  .setLabel("Não") 
 .setStyle("DANGER")
 
  .setCustomId("vnao")

  const row = new Discord.MessageActionRow()
  row.addComponents([vsim,vnao])


  message.reply({embeds:[banembed],components:[row],files:[attachment]}).then(msg => {


    const inf = (interaction) => interaction.user.id === memb 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{
  switch (i.customId) {
    case 'vsim':
  i.message.delete(banembed);
  
  db.add(`banidos_${message.author.id}`, 1);
  let banidos = db.get(`banidos_${message.author.id}`);
  if (banidos === null) banidos = 0;
  let user = message.author;

  let avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
    let gif = db.get(`gifban_${message.member.id}`)
    if(gif === null) gif =''
   
    const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/correct.png'), 'correct.png');
    
    let embed = new Discord.MessageEmbed()
  
    .setThumbnail(avatar)
  .setColor('5fa5e3')
   .setTitle(`**Sistema de punições | ${client.user.username}**`)
   .setDescription(`<:branco_pessoaRDM:844417026059272232>** | Usuário Banido: **\nㅤ<:setar:918717053005873222>**Tag: **\`${checkguilds.tag}\` \nㅤ<:setar:918717053005873222>**ID: **\`${checkguilds.id}\` \n<:branco_escudoRDM:844417079662215201>** | Autor do Banimento: **\nㅤ<:setar:918717053005873222>**Tag: **\`${message.author.tag}\`  \nㅤ<:setar:918717053005873222>**ID: **\`${message.author.id}\` \n<:Reg:844417596081307689>** | Motivo:**\nㅤ${motivo}`)     
   .setFooter(` ${message.author.username} já baniu ${banidos} usuários`, 'attachment://correct.png')
   .setImage(gif)

   i.message.channel.send({embeds:[embed]})
    
   var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
   if (!canal) {
    
   
    
    message.guild.members.ban(checkguilds.id,{days: 7,reason: `Sistema de Punições ${client.user.username}|Author do banimento:${message.author.tag}|Motivo:${motivo}`})
   
   } else {
    message.guild.members.ban(checkguilds.id,{days: 7,reason: `Sistema de Punições ${client.user.username}|Author do banimento:${message.author.tag}|Motivo:${motivo}`})

    canal.send({embeds:[embed],files:[attachment]})
   
   
  }
  i.deferUpdate()
  break;
  case 'vnao':
  
    i.message.delete(banembed);

   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:correto:918747498707824681> | Banimento cancelado com sucesso!    `)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   i.message.channel.send({embeds:[ad]})
   i.deferUpdate()
   break;
  }
 
 
 
    
  })
   });



}else{
   var membro = await findMember(message, name)
   let notuser = new Discord.MessageEmbed()
				
			
   .setDescription(`<:fechar:918747498984665108> | Mencione um usuário existente.`)
   .setColor('5fa5e3')

   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();

   if (!membro) return message.reply({embeds:[notuser]});
   if (membro === message.member){ 

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode se banir!    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
   if (membro.id === await message.guild.fetchOwner().then((data)=>data.id)){ 

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> | Você não pode banir a posse do servidor.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
   if(membro.user.id === client.user.id) { 

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> | Você não pode usar este comando em mim.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
    if(await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id){
     
   
   
   const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> | Você não pode banir um membro com cargo superior ao seu ou igual ao seu   `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if( message.member.roles.highest.position <=  membro.roles.highest.position) return message.reply({embeds:[ad]})
 
 }
 
   if( message.guild.me.roles.highest.position <=  membro.roles.highest.position) {
     
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> | O cargo do membro mencionado é maior ou igual ao meu. `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
    
   }

   var motivo = args.slice(1).join(" ");
   if(!motivo) motivo = "Motivo não inserido"
 

   if(motivo.length > 1000) {

    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode definir um motivo de banimento com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
  
   }
    


   const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif');
   let banembed = new Discord.MessageEmbed()
  
    .setAuthor(`Confirme a ação a seguir:`,'attachment://exclmaocaoroxo.gif')
   
   
   .setDescription(`<:setar:918717053005873222>**Deseja realmente banir o usuário abaixo?**\nㅤ${membro.user.username}(\`${membro.user.id}\`)\n<:Reg:844417596081307689>**| Motivo inserido:**\nㅤ${motivo}`)
   
   .setColor('5fa5e3')
   .setFooter(`Comando requisitado por: ${message.author.username} `,message.author.displayAvatarURL({format: "png"}))
 
   let vsim = new Discord.MessageButton()
   .setLabel("Sim")
 .setStyle("SUCCESS")
  
   .setCustomId("vsim")
 
   let vnao =  new Discord.MessageButton()
   .setLabel("Não") 
  .setStyle("DANGER")
  
   .setCustomId("vnao")
 
   const row = new Discord.MessageActionRow()
   row.addComponents([vsim,vnao])
 
 
   message.reply({embeds:[banembed],components:[row],files:[attachment]}).then((msg)=>{

    const inf = (interaction) => interaction.user.id === memb 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{
  switch (i.customId) {
    case 'vsim':
  i.message.delete(banembed);
   
  db.add(`banidos_${message.author.id}`, 1);
  let banidos = db.get(`banidos_${message.author.id}`);
  if (banidos === null) banidos = 0;
  let user = message.author;

  let avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
    let gif = db.get(`gifban_${message.member.id}`)
    if(gif === null) gif =''
   
    const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/correct.png'), 'correct.png');
    
    let embed = new Discord.MessageEmbed()
   
    .setThumbnail(avatar)
   .setColor('5fa5e3')
   .setTitle(`**Sistema de punições | ${client.user.username}**`)
   .setDescription(`<:branco_pessoaRDM:844417026059272232>** | Usuário Banido: **\nㅤ<:setar:918717053005873222>**Tag: **\`${membro.user.tag}\` \nㅤ<:setar:918717053005873222>**ID: **\`${membro.user.id}\` \n<:branco_escudoRDM:844417079662215201>** | Autor do Banimento: **\nㅤ<:setar:918717053005873222>**Tag: **\`${message.author.tag}\`  \nㅤ<:setar:918717053005873222>**ID: **\`${message.author.id}\` \n<:Reg:844417596081307689>** | Motivo:**\nㅤ${motivo}`)     
   .setFooter(` ${message.author.username} já baniu ${banidos} usuários`, 'attachment://correct.png')
   .setImage(gif)
   .setDescription(`<:branco_pessoaRDM:844417026059272232>** | Usuário Banido: **\nㅤ<:setar:918717053005873222>**Tag: **\`${membro.user.tag}\` \nㅤ<:setar:918717053005873222>**ID: **\`${membro.user.id}\` \n<:branco_escudoRDM:844417079662215201>** | Autor do Banimento: **\nㅤ<:setar:918717053005873222>**Tag: **\`${message.author.tag}\`  \nㅤ<:setar:918717053005873222>**ID: **\`${message.author.id}\` \n<:Reg:844417596081307689>** | Motivo:**\nㅤ${motivo}`)     
   membro.user.send({embeds:[embed],files:[attachment]})
   i.message.channel.send({embeds:[embed],files:[attachment]})
    
   var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
   if (!canal) {
 
     
    
 membro.ban({days: 7,reason: `Sistema de Punições ${client.user.username}|Author do banimento:${message.author.tag}|Motivo:${motivo}`}); 
   } else {
 membro.ban({days: 7,reason: `Sistema de Punições ${client.user.username}|Author do banimento:${message.author.tag}|Motivo:${motivo}`}); 
    canal.send({embeds:[embed],files:[attachment]})
   
   
   } 
   i.deferUpdate()

break;
case 'vnao':

  i.message.delete(banembed);


  const ad = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setDescription(`<:correto:918747498707824681> | Banimento cancelado com sucesso!    `)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
i.message.channel.send({embeds:[ad]})
i.deferUpdate()

break;
  }
})
   })    
}
  }
}