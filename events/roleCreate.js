const Discord = require("discord.js");
const db = require("quick.db");



module.exports = async(client,role ) => {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  
try{

  let sistelevel = db.get(`rolecreate_${role.guild.id}`);

  if(sistelevel === null)  return;
 
  
    if(role.guild.id !== role.guild.id) return
  let id = db.fetch(`logrole_${role.guild.id}`)
    if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
  
    let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')
    
  

    const log = await role.guild.fetchAuditLogs({
  type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
  if(log.target.id != role.id)return;
  var embed = new Discord.MessageEmbed()
  .setTitle("<:Reg:844417596081307689> Cargo criado")
  .setColor("5fa5e3")
  .setTimestamp()
  .setDescription(`<:forma:918749758632378408> Criado por : ${log.executor} \n<:forma:918749758632378408> Nome do cargo : \`${role.name}\` \n<:forma:918749758632378408> ID do cargo : \`${role.id}\` `)


  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });

  }catch(e){
    return;}
  }
 