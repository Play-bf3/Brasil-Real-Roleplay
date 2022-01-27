
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const {default_prefix,dev} = require("../config.json")
const cldw = new Map()
function terceira(client, message) {
   
  if (message.channel.type == 'DM') return;

 if (message.author.bot) return;
 if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
 let checkmanu = db.get(`manutençaocheck`)
 
 if(checkmanu != null )return;
  let tc1 = db.get(`levelschannel_${message.guild.id}_${message.channel.id}`) 


if (tc1 === true) return; 


  let sistelevel = db.get(`sistelevel_${message.guild.id}`);

if(sistelevel === null)  return;

let checkingBlacklistedMembers = db.fetch(`blacklist_${message.author.id}`)
   if (checkingBlacklistedMembers === null) checkingBlacklistedMembers === false
   

  
   if (checkingBlacklistedMembers === true) return;
   if (Date.now() - cldw.get(`leveldate_${message.guild.id}_${message.member.id}`) <cldw.get(`leveltime_${message.guild.id}_${message.member.id}`))return;
  

   let messagefetch2 = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
if(messagefetch2 === 100000){return;}
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
  let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
  
  let level = db.fetch(`level_${message.guild.id}_${message.author.id}`) || 0
  let level2 = level + 1
  let levels = level2 * 100
  let messages;

  if (messagefetch == levels) messages = levels; 
  
if (!isNaN(messages)) {
  db.add(`level_${message.guild.id}_${message.author.id}`, 1)
  let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
   
  let embed = new Discord.MessageEmbed()
  .setColor(`#5fa5e3`)
  
   
  .setDescription(`<a:estrela:918882750742810654> | Você atingiu o level ( ${levelfetch} )`)
 
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
  
  
  message.reply({embeds:[embed]})
  
  
    
  };
  cldw.set(`leveltime_${message.guild.id}_${message.member.id}`,14000)
  cldw.set(`leveldate_${message.guild.id}_${message.member.id}`, Date.now())
  let temvip = db.all().filter(data => data.ID.startsWith(`rolesporlevel_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  for (let i = 0; i < temvip.length; i++) {

 

    if(temvip[i].ID.startsWith(`rolesporlevel_${message.guild.id}_`)) {

  let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
    
  
  if(levelfetch == temvip[i].data.replace("\"","").replace("\"","")){
    
message.member.roles.add(temvip[i].ID.split("_")[2])


    }
  }
 
}


 }
async function removeafk(client,message){
  if (message.channel.type == 'DM') return;
  if (message.author.bot) return;  
  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
  let checkmanu = db.get(`manutençaocheck`)
 
  if(checkmanu != null )return;
  if(db.get(`afk_${message.member.id}`) !== null){
    const afk = new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    
    .setDescription(`<:chat:918754075703664671> | Bem vindo novamente ${message.member}, você estava AFK mas que bom ter voltado.  `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    message.reply({embeds:[afk]});
    db.delete(`afk_${message.member.id}`)

let name = message.member.displayName.replace('[AFK] ','')
    message.member.setNickname(name).catch(()=>{})
  }

}

function principal(client, message) {

if (message.channel.type == 'DM') return;
  if (message.author.bot) return;  


if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;


 let prefix = db.get(`prefix_${message.guild.id}`)
 if(prefix === null) prefix = default_prefix;

let mentionRegex = message.content.match(new RegExp(`^<@!?(${client.user.id})>`, "gi"))

   if(!message.content.toLowerCase().startsWith(prefix)&&!mentionRegex) return;

  
   let checkingBlacklistedMembers = db.fetch(`blacklist_${message.author.id}`)
   if (checkingBlacklistedMembers !== null) return;
   let swot;
   let args;
  if(message.content.toLowerCase().startsWith(prefix)){
swot = prefix
args = message.content
    
    .trim()
    .slice(swot.length)
    .split(" ");
  }else  if(mentionRegex){
swot = `${mentionRegex}`
args = message.content
    .slice(swot.length)
    .trim()
    .split(" ");
  }


    
 
    
    const command = args.shift().toLowerCase()
  
   
    let commandFile = client.comandos.get(command);
    if (!commandFile) commandFile = client.comandos.get(client.alternativas.get(command));

    if(commandFile !== undefined){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null&& !dev.includes(message.author.id) ){

    let embed212 = new Discord.MessageEmbed() 
    .setColor(`#fcb103`) 
  //  .setTitle('<:tempcallluni:843919091467157544> Sistema de Cooldown  Luni <:tempcallluni:843919091467157544>')
    .setDescription(`<a:aviso:867949958421184572>|O nosso bot está em **manutenção** devido a alguns problemas técnicos, caso queira saber o motivo basta adentrar no nosso servidor de suporte para mais informações.\n**Link do servidor de suporte :** [\`Clique Aqui\`](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  return message.reply({embeds:[embed212]}).then(msg => setTimeout(()=>{msg.delete()},7000))
 
  }
  
  if (Date.now() - cldw.get(`date_${message.member.id}`) <cldw.get(`time_${message.member.id}`)) {

    let time = ms(cldw.get(`time_${message.member.id}`) - (Date.now() - cldw.get(`date_${message.member.id}`)))
  
   if(time.seconds === 0 ) time.seconds = 1
  let embed212 = new Discord.MessageEmbed() 
    .setColor(`#5fa5e3`) 
    .setTitle('<:tempo:918748737197719572> Sistema de Cooldown  Luni <:tempo:918748737197719572>')
    .setDescription(`**Desculpe você precisa esperar \`${time.seconds}\` segundo(s) para executar este comando.**`)
    .setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  message.reply({embeds: [embed212]}).then(msg => setTimeout(()=>{msg.delete()},4000))
  
    }else{
   
    if (commandFile)  commandFile.run(client, message, args);

  cldw.set(`time_${message.member.id}`,commandFile.coolwdon)
    cldw.set(`date_${message.member.id}`, Date.now())
    let ch  = client.channels.cache.get('853720221055451157')
    if(message.attachments.first() !== undefined){
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`<a:b_terrainf:844417271538516008> COMANDO USADO`)
  .setDescription(`<:settings:844417921773862922> Comando : \n\`${message.content}\`\<:richPresence_RDF:844417541187305472> ID do comando :\n \`${message.id}\`\n<:branco_pessoaRDM:844417026059272232> Author :\n ${message.member.user.tag} (\`${message.member.id}\`)\n<:branco_escudoRDM:844417079662215201> Servidor :\n ${message.guild.name} (\`${message.guild.id}\`)\n<:invite:844416141538885662> Arquivo anexado : ${message.attachments.first().url}`)
  .setColor("#5fa5e3")
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  ch.send({embeds:[embed]})
    }else{
  
 
  let embed = new Discord.MessageEmbed()
  .setTitle(`<a:b_terrainf:844417271538516008> COMANDO USADO`)
  .setDescription(`<:settings:844417921773862922> Comando : \n\`${message.content}\`\n<:richPresence_RDF:844417541187305472> ID do comando :\n \`${message.id}\`\n<:branco_pessoaRDM:844417026059272232> Author :\n ${message.member.user.tag} (\`${message.member.id}\`)\n<:branco_escudoRDM:844417079662215201> Servidor :\n ${message.guild.name} (\`${message.guild.id}\`)`)
  .setColor("#5fa5e3")
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  ch.send({embeds:[embed]})

    }
    }

}

}
 

function secundaria(client, message,args) {
  
 

    if (message.channel.type == 'DM') return;
    
  let antinvite = db.get(`antinvite_${message.guild.id}`);
  
  if(antinvite === null) {
  return;
    }
    let checkmanu = db.get(`manutençaocheck`)
 
  if(checkmanu != null )return;
    
   if(message.author.id === message.guild.ownerID) return;

   if(!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")||!message.guild.me.permissions.has("MANAGE_GUILD"))return;
    if(message.member && message.member.permissions.has("MANAGE_MESSAGES")&&message.member.permissions.has("MANAGE_GUILD")) {
 return;
    }
    
    let tc = db.get(`antivitechannel_${message.guild.id}_${message.channel.id}`) 
   
 
    if (tc === true) {return; }

  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    message.delete().catch(()=>{});



    let embed = new Discord.MessageEmbed()

    .setDescription(`${message.author} , Não é permitido enviar outros links de servidor aqui  `)
    .setColor("#5fa5e3")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    message.channel.send({embeds:[embed]}).then(msg=> setTimeout(()=>{msg.delete()},6000))
  
 
  
 
}} 
function secur(client, message){
  if (message.channel.type == 'DM') return;
  if (message.author.bot) return;  

  if(message.author.id==client.user.id)return;
  if (message.mentions) {

    message.mentions.users
    .map((user) => 
  { 

if(message.content.includes(`<@${user.id}>`)||message.content.includes(`<@!${user.id}>`)){
if(message.author.id==user.id)return;
      let msg = db.all().filter(data => data.ID.startsWith(`msgvip_${message.guild.id}_${user.id}`)).sort((a, b) => b.data - a.data);
      if (msg.length === 0 ) return;
      var rand1 = msg[Math.floor(Math.random() * msg.length)];
   
 
let msger = rand1.data.slice(1,rand1.data.length)

  const afk = new Discord.MessageEmbed()
  .setColor("#20fc03")
  .setDescription(`**"${message.member} ${msger}**`)
  
  
  message.channel.send({embeds:[afk]});
}   
})
  }
}

 function sec(client, message,args){
if (message.channel.type == 'DM') return;
  if (message.author.bot) return;
 
 
 let prefix = db.get(`prefix_${message.guild.id}`)
 if(prefix === null) prefix = default_prefix;


 let embed = new Discord.MessageEmbed() 
 .setColor(`#5fa5e3`) 
  .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
 .setDescription(`Olá sou a ${client.user.username}\nUse meu prefixo \`${prefix}\` se precisar de mim! Se caso precise de ajuda digite : \`${prefix}help/${prefix}ajuda\``)
 .setTimestamp();

 if(message.content==`<@${client.user.id}>`||message.content==`<@!${client.user.id}>`) {


  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null&& !dev.includes(message.author.id) ){

    let embed212 = new Discord.MessageEmbed() 
    .setColor(`#fcb103`) 
  //  .setTitle('<:tempcallluni:843919091467157544> Sistema de Cooldown  Luni <:tempcallluni:843919091467157544>')
    .setDescription(`<a:aviso:867949958421184572>|O nosso bot está em **manutenção** devido a alguns problemas técnicos, caso queira saber o motivo basta adentrar no nosso servidor de suporte para mais informações.\n**Link do servidor de suporte :** [\`Clique Aqui\`](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  return message.reply({embeds:[embed212]}).then(msg =>  setTimeout(()=>{msg.delete()},7000))
  }
 
  if (Date.now() - cldw.get(`date_${message.member.id}`) <cldw.get(`time_${message.member.id}`)) {

    let time = ms(cldw.get(`time_${message.member.id}`) - (Date.now() - cldw.get(`date_${message.member.id}`)))

if(time.seconds === 0 ) time.seconds = 1
  let embed212 = new Discord.MessageEmbed() 
.setColor(`#5fa5e3`) 
.setTitle('<:tempcallluni:843919091467157544> Sistema de Cooldown  Luni <:tempcallluni:843919091467157544>')
.setDescription(`**Desculpe você precisa esperar \`${time.seconds}\` segundo(s) para executar este comando.**`)
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  message.reply({embeds:[embed212]}).then(msg =>  setTimeout(()=>{msg.delete()},4000))
}else{
    let checkingBlacklistedMembers = db.fetch(`blacklist_${message.author.id}`)
    if (checkingBlacklistedMembers !== null) return;
   

  cldw.set(`time_${message.member.id}`,6000)
    cldw.set(`date_${message.member.id}`, Date.now())
 
  return message.reply({embeds:[embed]})

  }
 }

 }
async function afksystem(client,message){
  if (message.channel.type == 'DM') return;
  if (message.author.bot) return;
  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
  let checkmanu = db.get(`manutençaocheck`)
 
  if(checkmanu != null )return;
  if (message.mentions) {
    message.mentions.users.map((user) => {
  if(user.id === message.member.id) return;
  if (db.get(`afk_${user.id}`)) {
    if (db.get(`afk_${user.id}`) !== null) {
  const afk = new Discord.MessageEmbed()
  .setColor("#5fa5e3")
  .setDescription(`<:streaming:852333495736467528> ${user} está AFK.\n<:emoji_5:845039261329653830> Motivo : ${db.get(`afk_${user.id}`)}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  message.reply({embeds:[afk]});
    }
  }
    })
  }


}

function hand(client, message) {
   
  if (message.channel.type == 'DM') return;

 if (message.author.bot) return;
 let sistemadelevel = db.get(`anticapslock_${message.guild.id}`);
 if (sistemadelevel == null) return;
 if (message.member.permissions.has("SEND_MESSAGES") && message.member.permissions.has("MANAGE_MESSAGES")) return;
 if(!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")||!message.guild.me.permissions.has("MANAGE_MESSAGES") ) return;
 let splitContent = message.content.split('')
 let caps = 0;
 //.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 const isUpper = char => char.toUpperCase() === char && char.toLowerCase() !== char
 for(let i = 0; i < splitContent.length; ++i) {
   
  if(isUpper(splitContent[i])) ++caps
}

let calc = Math.floor((splitContent.length*0.700)) 
if( caps >= calc ){
  message.delete().catch(()=>{});

  const caps = new Discord.MessageEmbed()
  .setColor("#5fa5e3")
  .setDescription(`<:emoji_5:845039261329653830><:W_aaaaBR:844415186474500166>${message.member}, Sua mensagem foi deletada pelo uso **"abusivo"** de Caps Lock`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  message.channel.send({embeds:[caps]}).catch(()=>{});

} 

}
//ycon123AAycon123AA
  
module.exports = (client , message) => {
 
  terceira(client , message) 
  removeafk(client,message)
 principal(client , message) 
 secundaria(client , message) 

 sec(client , message) 
    
 afksystem(client,message)
 secur(client, message)
 hand(client, message)

}




