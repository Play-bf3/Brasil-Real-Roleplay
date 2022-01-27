const Discord = require("discord.js");
const db = require("quick.db");



module.exports = async(client,channel ) => {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 try{
  if(channel.type === 'DM')return;

 
  let sistelevel = db.get(`channelcreate_${channel.guild.id}`);

  if(sistelevel === null)  return;
  
    if(channel.guild.id !== channel.guild.id) return
  let id = db.fetch(`logchannel_${channel.guild.id}`)
    if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')
    let type = ``;
    if(channel.type === 'text') {type = `Texto`;
    }else if(channel.type === 'voice'){
    type = `Voz`
    }else if(channel.type === 'news'){
    type = `Anúncios`
    }
    const log = await channel.guild.fetchAuditLogs({
 type: 'CHANNEL_CREATE'
    }).then(audit => audit.entries.first())
  var embed = new Discord.MessageEmbed()
  .setTitle(`<:Reg:844417596081307689> Canal ${type} Criado`)
  .setColor("5fa5e3")
  .setTimestamp()
  .setDescription(`<:forma:918749758632378408> Criado por : ${log.executor} \n<:forma:918749758632378408> Nome do canal : \`${channel.name}\` \n<:forma:918749758632378408> ID do canal : \`${channel.id}\` `)
    
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
  }catch(e){
    return;}
  }
 