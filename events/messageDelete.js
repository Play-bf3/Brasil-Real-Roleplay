const Discord = require("discord.js");
const db = require("quick.db");



module.exports = async (client,message,args) => {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 
try{
  let sistelevel = db.get(`msgdel_${message.guild.id}`);

  if(sistelevel === null)  return;

  if (message.author.bot) return;
    if(message.guild.id !== message.guild.id) return
  let id = db.fetch(`logdemsg_${message.guild.id}`)
    if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')
  if(message.content ==""&&message.attachments.first() === undefined)return;
  
    if(message.attachments.first() === undefined){

   
  
  
  var embed = new Discord.MessageEmbed()
  .setTitle("Messagem Deleteda")
  .setColor("5fa5e3")
  .setTimestamp()
  .setDescription(`<:Reg:844417596081307689>**Mensagem de texto deletada** \n \n <:chat:844778163493666857>**Canal de texto:** ${message.channel} \n \n <:Members_gifzada:844416125604200449>**Author da Messagem:** \n ${message.author.tag} \n \n **Messagem Deletada:** \n \`${message.content}\` `)
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
});
  
  }else{
   
  if(message.content === ''){
  var embed = new Discord.MessageEmbed()
  .setTitle("Messagem Deleteda")
  .setColor("5fa5e3")
  .setTimestamp()
  .setDescription(`<:Reg:844417596081307689>**Mensagem de texto deletada** \n \n <:chat:844778163493666857>**Canal de texto:** ${message.channel} \n \n <:Members_gifzada:844416125604200449>**Author da Messagem:** \n ${message.author.tag} \n \n **Messagem Deletada:** \n\`${message.attachments.first().url}\` `)
  
  const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
     embeds: [embed]
  });
  }else{
    var embed = new Discord.MessageEmbed()
    .setTitle("Messagem Deleteda")
    .setColor("5fa5e3")
    .setTimestamp()
    .setDescription(`<:Reg:844417596081307689>**Mensagem de texto deletada** \n \n <:chat:844778163493666857>**Canal de texto:** ${message.channel} \n \n <:Members_gifzada:844416125604200449>**Author da Messagem:** \n ${message.author.tag} \n \n **Messagem Deletada:** \n \`${message.content}\n${message.attachments.first().url}\` `)
    
    const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
 embeds: [embed]
  });
  }
  
  
  }
}catch(e){
  return;}
}  

  
  
