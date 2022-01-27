
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale("pt-br")
module.exports = {
    nome: "serverinfo",
    coolwdon:6000,
    alternativas: ["serverinfo"],
    run: async (client, message, args) => {
 
let GUILD = client.guilds.cache.get(args[0]) || message.guild

		let channels = GUILD.channels;
		let text = channels.cache.filter(r => r.type === 'GUILD_TEXT').size,
			vc = channels.cache.filter(r => r.type === 'GUILD_VOICE').size,
			category = channels.cache.filter(r => r.type === 'GUILD_CATEGORY').size
			totalchan = channels.cache.size;

            let variable = GUILD.members.cache.filter(m => m.presence !== null)
let off = GUILD.members.cache.filter(m => m.presence == null)

let created = `<t:${Math.trunc(GUILD.createdTimestamp/1000)}:R>`
   
  
  
    //console.log(GUILD.features)
    //splashURL
    let BannerURL = GUILD.bannerURL({ dynamic: true, format: "png", size: 1024 })
    const embed = new MessageEmbed()
    .setThumbnail(GUILD.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setColor('#5fa5e3')
    .setTitle(`${GUILD.name} SERVER INFO`)
  	.setDescription(`<:coroa:846838168246419537> **DONO:**\n\`${await GUILD.fetchOwner().then((data)=>data.user.tag)}\`\n\`${await GUILD.fetchOwner().then((data)=>data.id)}\`\n<:chat:844778163493666857> **Total de Canais:**\n**Cetegorias:\`${category}\`**\n**Canais de Texto:\`${text}\`**\n**Canais de Voz:\`${vc}\`**\n**Total:\`${totalchan}\`**\n<:maismember:846839725058031687> **Total de Membros:**\n<:online:846812883458195506> ${variable.filter(m => m.presence.status == "online").size}\n<:dnd:846813044964196352> ${variable.filter(m => m.presence.status == "dnd").size}\n<:streaming:852333495736467528> ${variable.filter(m => m.presence.status == "streaming").size}\n<:ausente:846813446951272488> ${variable.filter(m => m.presence.status == "idle").size}\n<:off:846813357687177217> ${off.size}\n<:setar:918717053005873222> ${GUILD.memberCount}  \n<:botone:846841629636952067> **Total de Bots:**\n\`${GUILD.members.cache.filter(m => m.user.bot).size} Bots!\`\n<:cale:846847200604585984> **Data de Criação:** \n${created}` )
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setImage(BannerURL)
 .setTimestamp();
    await message.reply({embeds:[embed]})
    }
}

