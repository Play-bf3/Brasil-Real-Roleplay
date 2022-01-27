const Discord = require("discord.js");
const db = require("quick.db");

module.exports = async(client,guild) => {
 
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  try{
  let sistelevel = db.get(`unbanu_${guild.guild.id}`);
    
  if(sistelevel === null)  return;
  
    
  
    if(guild.guild.id !== guild.guild.id) return
  let id = db.fetch(`logban_${guild.guild.id}`)
    if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')


    const log = await guild.guild.fetchAuditLogs({
 type: "MEMBER_BAN_REMOVE"
    }).then(audit => audit.entries.first())
   
  const user = log.executor
  const member = log.target
  var embed = new Discord.MessageEmbed()
  .setTitle(`<:ban:844417732606427139> Membro Desbanido `)
  .setColor("5fa5e3")
  .setTimestamp()
  .setDescription(`<:Members_gifzada:844416125604200449> ${member.tag}(${member.id}) foi desbanido por ${user.tag}(${user.id}) `)
 
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