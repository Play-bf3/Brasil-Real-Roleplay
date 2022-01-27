const Discord = require('discord.js')
const {UserFlags} = require('discord.js')
const {findUser,findMember} = require('../../script/utils')

const { dev } = require("../../config.json");



module.exports = {
    nome: "userinfo",
    coolwdon:6000,
    
    alternativas: ["userinfo"],
    run: async (client, message, args) => { 

      


 

    var name = args.join(' ').trim();
   
   
    let checkguilds =await findUser(client,message, name)|| message.author;
    let checkserver =await findMember(message, checkguilds.id) 
if(!checkserver){

    
		let createdate = `<t:${Math.trunc(checkguilds.createdTimestamp/1000)}:R>`
   
    
		
   
  
		let avatar = checkguilds.displayAvatarURL({ dynamic: true, size: 1024 });
    let list = [];

    const userflags = await checkguilds.fetchFlags();
    const flags = new UserFlags(userflags.bitfield).serialize();
    if (dev.includes(checkguilds.id)) {
  list.push('<:developer:877999368018489384>');
    }
    
    if (flags.HOUSE_BRAVERY){
   
    
  list.push('<:bravery:865394378397712434>');
    
   }else   if (flags.HOUSE_BRILLIANCE){
 
    
    list.push('<:brilliance:865394378426941440>');
    
   }else if (flags.HOUSE_BALANCE){
     
     
  list.push('<:balance:865394378369662996>');
  }
    
    
  if (flags.EARLY_SUPPORTER){
  
  list.push('<:porco:865398173857218601>')
    }
  
   if (flags.EARLY_VERIFIED_BOT_DEVELOPER){
  list.push('<:dev:865403007398445067>')
    }
  if (flags.HYPESQUAD_PARTNER){
    
  list.push('<:hypersquadpatner:870449616020181022>')
    }
     
    list = list.join(",")

  let   badgis = `` 
    if(list.split(",")[0]){
    for (let i = 0; i < list.split(",").length; i++) {
 const entity = list.split(",")[i]
  
    
    
 
    
 badgis+= entity
    
  
  
    }
    }
     

    let embed = new Discord.MessageEmbed()
 .setAuthor(checkguilds.tag, avatar)
		.setThumbnail(avatar)

			.setColor('#5fa5e3')
			.setDescription(`**<:branco_pessoaRDM:844417026059272232> Nome:**\n\`${checkguilds.username}\`${badgis}\n<:graf:847305141513879592> **ID:**\n\`${checkguilds.id}\`\n**<:data:844416167077740564> Conta criada em:**\n${createdate}`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  
   .setImage(await checkguilds.bannerURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
    

  
 return   message.reply({embeds:[embed]})

   }
   const member =  await findMember(message, name) ||message.member;
    var permissions = []; 

   	 let status;   
      if(!member.presence){
 status = "**<:off:846813357687177217> Offline**";

      }else{
    switch (member.presence.status) {
    case "online":
   status = "**<:online:846812883458195506> Online**";
   break;
    case "dnd":
   status = "**<:dnd:846813044964196352> Não pertube**";
   break;
    case "idle":
   status = "**<:ausente:846813446951272488> Ausente**";
   break;
    case "offline":
   status = "**<:off:846813357687177217> Offline**";
   break;
   case "streaming":
  status = "**<:streaming:852333495736467528> Streamando**";
  break;
    
    
    
    
    }   
      }


 if(member.permissions.has("KICK_MEMBERS")){
    permissions.push("\`Expulsar membros\`");
    }
    
    if(member.permissions.has("BAN_MEMBERS")){
    permissions.push("\`Banir membros\`");
    }
    
    if(member.permissions.has("ADMINISTRATOR")){
    permissions.push("\`Administrador\`");
    }

    if(member.permissions.has("MANAGE_MESSAGES")){
    permissions.push("\`Gerenciar mensagens\`");
    }
    
    if(member.permissions.has("MANAGE_CHANNELS")){
    permissions.push("\`Gerenciar canais\`");
  }
  
    if(member.permissions.has("MANAGE_NICKNAMES")){
    permissions.push("\`Gerenciar apelidos\`");
    }

    if(member.permissions.has("MANAGE_ROLES")){
    permissions.push("\`Gerenciar cargos\`");
    }

    if(member.permissions.has("MANAGE_WEBHOOKS")){
    permissions.push("\`Gerenciar webhooks\`");
    }

    if(member.permissions.has("MANAGE_EMOJIS_AND_STICKERS")){
    permissions.push("\`Gerenciar emojis é stickers\`");
    }

    if(permissions.length == 0){ 
    permissions.push("\`Nenhuma permissão detectada\`");
    }





   

		

		let createdate = `<t:${Math.trunc(member.user.createdTimestamp/1000)}:R>`
    let joindate = `<t:${Math.trunc(member.joinedTimestamp/1000)}:R>`
    

    
		let avatar = await member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
  

    let list = [];

    const userflags = await member.user.fetchFlags();
    const flags = new UserFlags(userflags.bitfield).serialize();
   
    if (dev.includes(member.id)) {
  list.push('<:developer:877999368018489384>');
    }
    
    if (flags.HOUSE_BRAVERY){
   
    
  list.push('<:bravery:865394378397712434>');
    
   }else   if (flags.HOUSE_BRILLIANCE){
 
    
    list.push('<:brilliance:865394378426941440>');
    
   }else if (flags.HOUSE_BALANCE){
     
     
  list.push('<:balance:865394378369662996>');
  }
    
    
  if (flags.EARLY_SUPPORTER){
  
  list.push('<:porco:865398173857218601>')
    }
  
   if (flags.EARLY_VERIFIED_BOT_DEVELOPER){
  list.push('<:dev:865403007398445067>')
    }
  if (flags.HYPESQUAD_PARTNER){
    
  list.push('<:hypersquadpatner:870449616020181022>')
    }
     
    list = list.join(",")

  let   badgis = `` 
    if(list.split(",")[0]){
    for (let i = 0; i < list.split(",").length; i++) {
 const entity = list.split(",")[i]
  
    
    
 
    
 badgis+= entity
    
  
  
    }
    }
    let booster = ''
    if(member.premiumSinceTimestamp){
      booster=  `\n**<:booster:893368978049736758> Impulsionando desde :**\n<t:${Math.trunc(member.premiumSinceTimestamp/1000)}:R>`
     
    }
    let embed = new Discord.MessageEmbed()
 .setAuthor(member.user.tag, avatar)
			.setThumbnail(avatar)

			.setColor('#5fa5e3')
			.setDescription(`<:branco_pessoaRDM:844417026059272232> **Nome:**\n\`${member.user.username}\`${badgis}\n<:graf:847305141513879592> **ID:**\n\`${member.user.id}\`\n<:data:844416167077740564> **Conta criada em:**\n${createdate} \n**<:entrada:893376500324241449> Entrou em:**\n${joindate}${booster}\n<:chat:844778163493666857> **STATUS:**\n${status}`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   
  
    .setImage(await member.user.bannerURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    let embed2 = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, avatar)
			.setThumbnail(avatar)
			
			.setColor('#5fa5e3')
			.setDescription(`<:branco_escudoRDM:844417079662215201> **CARGOS:**\n ${member.roles.cache.filter(r => r.id !== message.guild.id).sorted((r1, r2) => r2.position - r1.position).map(roles => `${roles}`).join(', ') || 'Nenhum cargo'}\n<:branco_escudoRDM:844417079662215201> **Permissões:**\n${permissions.join(', ')}`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

  
    
    const butao = new Discord.MessageSelectMenu({
    customId:`aaa`,
    placeholder: 'Clique para visualizar as paginas de informações de usuário',
    }).addOptions([
{
label: `Principal`,
description: `Clique para voltar a pagina inicial do informações de usuário`,
value: `ini`,
},{

label: `Permissões`,
description: `Clique para visualizar a pagina secundário do informações de usuário`,
value: `perm`,
}
])
const row = new Discord.MessageActionRow()
row.addComponents([butao])
message.reply({embeds : [embed], components: [row]})

.then((msg)=>{

  setTimeout(()=>{msg.delete().catch(()=>{});},140000)

const inf = (interaction) => interaction.user.id === message.author.id 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{

switch (i.values.toString()) {
case 'ini':
    i.message.edit({embeds : [embed]})
i.deferUpdate()
break;
case 'perm':
  

i.message.edit({embeds : [embed2]})
i.deferUpdate()
break;

}

});

})


}


}
 

