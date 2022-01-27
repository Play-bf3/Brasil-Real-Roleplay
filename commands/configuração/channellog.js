const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "channellog",
  coolwdon:8000,
  alternativas: ["channellog"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
  const limite = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar canais\`,\`gerenciar webhooks\` e \`ver registro de auditoria\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (!message.member.permissions.has("MANAGE_CHANNELS")||!message.member.permissions.has("VIEW_AUDIT_LOG")||!message.member.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[limite]})
   
  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\`,\`gerenciar webhooks\` e \`ver registro de auditoria\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")||!message.guild.me.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[ad]})
let l1 = db.get(`logchannel_${message.guild.id}`)
if(l1 == null) l1 = '\`Nenhum canal setado\`'
else l1 = `<#${l1}>`

    let msglog = db.get(`logchannel_${message.guild.id}`)
    if(msglog == null) msglog = '\`Nenhum canal setado\`'
    else msglog = `<#${msglog}>`
    let msglogdel = db.get(`channeldel_${message.guild.id}`)
    if(msglogdel == null) msglogdel = '<:Desligado:906795288797257778>'
    else msglogdel = '<:Ligado:906795236011933726>'
    let msglogedit= db.get(`channelcreate_${message.guild.id}`)
    if(msglogedit == null) msglogedit = '<:Desligado:906795288797257778>'
    else msglogedit = '<:Ligado:906795236011933726>'
    
    
   
    
    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de channel log")    
    .setColor('5fa5e3')
    .setDescription(`<a:estrela:918882750742810654> Configure nosso canal de log abaixo!\n\n<:lunium:918729484365070376> Canal de log : ${msglog}\n<:lunidois:918729484407029870> Sistema de cannal criado : ${msglogedit}\n<:lunitres:918729484285411390> Sistema de canal deletado : ${msglogdel}\n<:luniquatro:918729484318965810> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
 
   
    let butao1 = new Discord.MessageButton()
    .setEmoji('<:lunium:918729484365070376>')
  .setStyle("SECONDARY")
   .setCustomId("butao1")
  
    let butao2 =  new Discord.MessageButton()
    .setEmoji('<:lunidois:918729484407029870>')
    .setStyle("SECONDARY")
    .setCustomId("butao2")
  let butao3 =  new Discord.MessageButton()
    .setEmoji('<:lunitres:918729484285411390>')
    .setStyle("SECONDARY")
    .setCustomId("butao3")
    let butao4 =  new Discord.MessageButton()
    .setEmoji('<:luniquatro:918729484318965810>')
    .setStyle("SECONDARY")
    .setCustomId("butao4")

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3,butao4])
  
 message.reply({embeds:[embed],components:[row]}).then(msg => {
  setTimeout(()=>{msg.delete()},180000)

   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':
    r.deferUpdate()
    let ccategori = new Discord.MessageEmbed()
    .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} ! Mencione um canal válido.`)
    .setColor('5fa5e3')
  
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  
    
  let sg = await message.channel.send({embeds:[ccategori]})
   setTimeout(()=>{sg.delete()},30000)
  const filter9 = res => {
    return res.author.id === message.author.id && res.content.length;
  };
  const categoryCollector = await message.channel.awaitMessages( {filter :filter9,
    max: 1,
    time: 30000
  });
 
   
    
 let category = categoryCollector.first().mentions.channels.first() ||message.guild.channels.cache.get(categoryCollector.first().content)
   
    
 let cnh123 = new Discord.MessageEmbed()
    .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nEste canal é inválido `)
    .setColor('5fa5e3')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();




if(!category) return categoryCollector.first().reply({embeds:[cnh123]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})
let j123 = new Discord.MessageEmbed()
.setDescription(`<:fechar:918747498984665108> | Hey, ${message.member} ! Mencione um canal de texto na proxima vez. ` )
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(category.type !== 'GUILD_TEXT') return categoryCollector.first().reply({embeds:[j123]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})


msglog = category
let embed2b1 = new Discord.MessageEmbed()
.setTitle("Sistema de channel log")    
.setColor('5fa5e3')
.setDescription(`<a:estrela:918882750742810654> Configure nosso canal de log abaixo!\n\n<:lunium:918729484365070376> Canal de log : ${msglog}\n<:lunidois:918729484407029870> Sistema de cannal criado : ${msglogedit}\n<:lunitres:918729484285411390> Sistema de canal deletado : ${msglogdel}\n<:luniquatro:918729484318965810> Salvar configuração`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  
    
r.message.edit({embeds:[embed2b1]})

let dadasdsadasda = new Discord.MessageEmbed()
    

.setDescription(`<:correto:918747498707824681> | Canal setado com sucesso!`)
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


categoryCollector.first().reply({embeds:[dadasdsadasda]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})
break;
case 'butao2':
    r.deferUpdate()
    if(msglogedit === '<:Desligado:906795288797257778>'){
  let dadsad = new Discord.MessageEmbed()
  .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} Você precisa setar o canal de channel log `)
  .setColor('5fa5e3')
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(msglog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
    let dadasdsadasda = new Discord.MessageEmbed()
    
    
  .setDescription(`<:correto:918747498707824681> | Sistema de canal criado **habilitado.**`)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
   
    msglogedit = '<:Ligado:906795236011933726>'
    let embed2b1 = new Discord.MessageEmbed()
    .setTitle("Sistema de channel log")    
    .setColor('5fa5e3')
    .setDescription(`<a:estrela:918882750742810654> Configure nosso canal de log abaixo!\n\n<:lunium:918729484365070376> Canal de log : ${msglog}\n<:lunidois:918729484407029870> Sistema de cannal criado : ${msglogedit}\n<:lunitres:918729484285411390> Sistema de canal deletado : ${msglogdel}\n<:luniquatro:918729484318965810> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   
   
    r.message.edit({embeds:[embed2b1]})
    }else if(msglogedit === '<:Ligado:906795236011933726>'){
    
    let dadasdsadasda = new Discord.MessageEmbed()
    
    
  .setDescription(`<:correto:918747498707824681> | Sistema de canal criado **desabilitado.**`)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
    msglogedit = '<:Desligado:906795288797257778>'
    let embed2b1 = new Discord.MessageEmbed()
    .setTitle("Sistema de channel log")    
    .setColor('5fa5e3')
    .setDescription(`<a:estrela:918882750742810654> Configure nosso canal de log abaixo!\n\n<:lunium:918729484365070376> Canal de log : ${msglog}\n<:lunidois:918729484407029870> Sistema de cannal criado : ${msglogedit}\n<:lunitres:918729484285411390> Sistema de canal deletado : ${msglogdel}\n<:luniquatro:918729484318965810> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   
   
    r.message.edit({embeds:[embed2b1]})
    }
    break;
    case 'butao3':
 r.deferUpdate()
 if(msglogdel === '<:Desligado:906795288797257778>'){
   let dadsad = new Discord.MessageEmbed()
   .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} Você precisa setar o canal de channel log `)
   .setColor('5fa5e3')
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 if(msglog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
   let dadasdsradasda = new Discord.MessageEmbed()
   
   
 .setDescription(`<:correto:918747498707824681> | Sistema de canal deletado **habilitado.**`)
 .setColor('5fa5e3')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   message.channel.send({embeds:[dadasdsradasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
  
   msglogdel = '<:Ligado:906795236011933726>'
   let embed32b1 = new Discord.MessageEmbed()
   .setTitle("Sistema de channel log")    
   .setColor('5fa5e3')
   .setDescription(`<a:estrela:918882750742810654> Configure nosso canal de log abaixo!\n\n<:lunium:918729484365070376> Canal de log : ${msglog}\n<:lunidois:918729484407029870> Sistema de cannal criado : ${msglogedit}\n<:lunitres:918729484285411390> Sistema de canal deletado : ${msglogdel}\n<:luniquatro:918729484318965810> Salvar configuração`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp()
   
  
  r.message.edit({embeds:[embed32b1]})
     
    }else if(msglogdel === '<:Ligado:906795236011933726>'){
   let dadasdsadasda = new Discord.MessageEmbed()
   
   
 .setDescription(`<:correto:918747498707824681> | Sistema de canal deletado **desabilitado.**`)
 .setColor('5fa5e3')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
   msglogdel = '<:Desligado:906795288797257778>'
   let embed2b1 = new Discord.MessageEmbed()
   .setTitle("Sistema de channel log")    
   .setColor('5fa5e3')
   .setDescription(`<a:estrela:918882750742810654> Configure nosso canal de log abaixo!\n\n<:lunium:918729484365070376> Canal de log : ${msglog}\n<:lunidois:918729484407029870> Sistema de cannal criado : ${msglogedit}\n<:lunitres:918729484285411390> Sistema de canal deletado : ${msglogdel}\n<:luniquatro:918729484318965810> Salvar configuração`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp()
   
  
  r.message.edit({embeds:[embed2b1]})
    }
break;
case 'butao4':
  r.deferUpdate()
 
  if(msglog !== l1){
    if(msglog == '\`Nenhum canal setado\`'){
  db.delete(`logchannel_${message.guild.id}`)
    }else{
  db.set(`logchannel_${message.guild.id}`,msglog.id)
  
    }
  }
    if(msglogdel == '<:Desligado:906795288797257778>'){
  db.delete(`channeldel_${message.guild.id}`)
    }else{
  db.set(`channeldel_${message.guild.id}`,'on')
  
    }
    if(msglogedit == '<:Desligado:906795288797257778>'){
  db.delete(`channelcreate_${message.guild.id}`)
    }else{
  db.set(`channelcreate_${message.guild.id}`,'on')
  
    }
    let ds3 = new Discord.MessageEmbed()
  
   
    .setDescription(`<:correto:918747498707824681> | Configuração salva com sucesso!`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[ds3]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
r.message.delete()
break;
    
    }

 
 })
    })

   
  }
    }
