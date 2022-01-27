const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "cargoperm",
  coolwdon:8000,
  alternativas: ["cargoperm"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
  const limite = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`Administrador\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (!message.member.permissions.has("ADMINISTRATOR")) return  message.reply({embeds:[limite]})
   
  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`admininistrador\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return  message.reply({embeds:[ad]})

    
let roles = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first()

if(!roles) { 
    const norh = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:e_fixadoTDN:844359619886579732> <:W_aaaaBR:844415186474500166>Por favor mencione um cargo !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  return  message.reply({embeds:[norh]})
  
  }


  let banperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  let kickperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  let advperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
 let muteperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
 let lockperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

 if(banperm) banperm = `<:Ligado:906795236011933726>`
 else banperm = `<:Desligado:906795288797257778>`
 if(kickperm) kickperm = `<:Ligado:906795236011933726>`
 else kickperm = `<:Desligado:906795288797257778>`
 if(advperm) advperm = `<:Ligado:906795236011933726>`
 else advperm = `<:Desligado:906795288797257778>`
 if(muteperm) muteperm = `<:Ligado:906795236011933726>`
 else muteperm = `<:Desligado:906795288797257778>`
 if(lockperm) lockperm = `<:Ligado:906795236011933726>`
 else lockperm = `<:Desligado:906795288797257778>`

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setAuthor(`Sistema de permissão - ${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
//
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
let butao5 =  new Discord.MessageButton()
.setEmoji('<:lunicinco:918729740825788456>')
.setStyle("SECONDARY")
.setCustomId("butao5")


const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])


message.reply({embeds:[seilaaaaaaaaa],components:[row]}).then(msg => {
setTimeout(()=>{msg.delete()},180000)

const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {
case 'butao1':
r.deferUpdate()
if(banperm == `<:Ligado:906795236011933726>`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `<:Ligado:906795236011933726>`
 else banperm = `<:Desligado:906795288797257778>`
 if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
 else kickperm = `<:Desligado:906795288797257778>`
 if(advpermv1) advperm = `<:Ligado:906795236011933726>`
 else advperm = `<:Desligado:906795288797257778>`
 if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
 else muteperm = `<:Desligado:906795288797257778>`
 if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
 else lockperm = `<:Desligado:906795288797257778>`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(banperm == `<:Desligado:906795288797257778>`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `<:Ligado:906795236011933726>`
else banperm = `<:Desligado:906795288797257778>`
if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
else kickperm = `<:Desligado:906795288797257778>`
if(advpermv1) advperm = `<:Ligado:906795236011933726>`
else advperm = `<:Desligado:906795288797257778>`
if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
else muteperm = `<:Desligado:906795288797257778>`
if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
else lockperm = `<:Desligado:906795288797257778>`


const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}
break;
case 'butao2':
r.deferUpdate()
if(kickperm == `<:Ligado:906795236011933726>`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `<:Ligado:906795236011933726>`
 else banperm = `<:Desligado:906795288797257778>`
 if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
 else kickperm = `<:Desligado:906795288797257778>`
 if(advpermv1) advperm = `<:Ligado:906795236011933726>`
 else advperm = `<:Desligado:906795288797257778>`
 if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
 else muteperm = `<:Desligado:906795288797257778>`
 if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
 else lockperm = `<:Desligado:906795288797257778>`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(kickperm == `<:Desligado:906795288797257778>`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `<:Ligado:906795236011933726>`
else banperm = `<:Desligado:906795288797257778>`
if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
else kickperm = `<:Desligado:906795288797257778>`
if(advpermv1) advperm = `<:Ligado:906795236011933726>`
else advperm = `<:Desligado:906795288797257778>`
if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
else muteperm = `<:Desligado:906795288797257778>`
if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
else lockperm = `<:Desligado:906795288797257778>`


const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

r.message.edit({embeds:[seilaaaaaaaaa]})

}
break;
case 'butao3':
r.deferUpdate()
if(advperm == `<:Ligado:906795236011933726>`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `<:Ligado:906795236011933726>`
 else banperm = `<:Desligado:906795288797257778>`
 if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
 else kickperm = `<:Desligado:906795288797257778>`
 if(advpermv1) advperm = `<:Ligado:906795236011933726>`
 else advperm = `<:Desligado:906795288797257778>`
 if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
 else muteperm = `<:Desligado:906795288797257778>`
 if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
 else lockperm = `<:Desligado:906795288797257778>`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(advperm == `<:Desligado:906795288797257778>`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `<:Ligado:906795236011933726>`
else banperm = `<:Desligado:906795288797257778>`
if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
else kickperm = `<:Desligado:906795288797257778>`
if(advpermv1) advperm = `<:Ligado:906795236011933726>`
else advperm = `<:Desligado:906795288797257778>`
if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
else muteperm = `<:Desligado:906795288797257778>`
if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
else lockperm = `<:Desligado:906795288797257778>`


const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})


}
break;
case 'butao4':
r.deferUpdate()
if(muteperm == `<:Ligado:906795236011933726>`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `<:Ligado:906795236011933726>`
 else banperm = `<:Desligado:906795288797257778>`
 if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
 else kickperm = `<:Desligado:906795288797257778>`
 if(advpermv1) advperm = `<:Ligado:906795236011933726>`
 else advperm = `<:Desligado:906795288797257778>`
 if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
 else muteperm = `<:Desligado:906795288797257778>`
 if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
 else lockperm = `<:Desligado:906795288797257778>`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(muteperm == `<:Desligado:906795288797257778>`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `<:Ligado:906795236011933726>`
else banperm = `<:Desligado:906795288797257778>`
if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
else kickperm = `<:Desligado:906795288797257778>`
if(advpermv1) advperm = `<:Ligado:906795236011933726>`
else advperm = `<:Desligado:906795288797257778>`
if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
else muteperm = `<:Desligado:906795288797257778>`
if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
else lockperm = `<:Desligado:906795288797257778>`

const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})


}
break;
case 'butao5':
r.deferUpdate()
if(lockperm == `<:Ligado:906795236011933726>`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `<:Ligado:906795236011933726>`
 else banperm = `<:Desligado:906795288797257778>`
 if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
 else kickperm = `<:Desligado:906795288797257778>`
 if(advpermv1) advperm = `<:Ligado:906795236011933726>`
 else advperm = `<:Desligado:906795288797257778>`
 if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
 else muteperm = `<:Desligado:906795288797257778>`
 if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
 else lockperm = `<:Desligado:906795288797257778>`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(lockperm == `<:Desligado:906795288797257778>`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`,true)
 banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
 kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
 advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
 mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
 lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `<:Ligado:906795236011933726>`
else banperm = `<:Desligado:906795288797257778>`
if(kickpermv1) kickperm = `<:Ligado:906795236011933726>`
else kickperm = `<:Desligado:906795288797257778>`
if(advpermv1) advperm = `<:Ligado:906795236011933726>`
else advperm = `<:Desligado:906795288797257778>`
if(mutepermv1) muteperm = `<:Ligado:906795236011933726>`
else muteperm = `<:Desligado:906795288797257778>`
if(lockpermv1) lockperm = `<:Ligado:906795236011933726>`
else lockperm = `<:Desligado:906795288797257778>`

const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('5fa5e3')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<:lunium:918729484365070376> Permissão de ban: ${banperm}\n<:lunidois:918729484407029870> Permissão de kick: ${kickperm}\n<:lunitres:918729484285411390> Permissão de adv: ${advperm}\n<:luniquatro:918729484318965810> Permissão de mute: ${muteperm}\n<:lunicinco:918729740825788456> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})


}
break;
}
})
})


  }
}