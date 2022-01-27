const {findMember} = require('../../script/utils')
const db = require("quick.db");

const Discord = require('discord.js');
module.exports = {
    nome:"deletevip",
    coolwdon:12000,
    alternativas: ["deletevip"],
    run: async (client, message, args) => {
      const limite = new Discord.MessageEmbed()
      .setColor('5fa5e3')
      .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`administrador\` !`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
        
      if (!message.member.permissions.has("ADMINISTRATOR")) return  message.reply({embeds:[limite]})
  
  
  
  
 
    const ad = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`administrador\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})
  var name = args.join(' ').trim();
  let user=await findMember(message, name)


let ivmember = new Discord.MessageEmbed()
				
			
.setDescription(`<:fechar:918747498984665108> | Usuário inválido, tente **novamente.** `  )
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(!user)return message.reply({embeds:[ivmember]})
let temvip = db.get(`newvips_${message.guild.id}_${user.id}`)
    
    let notpossui = new Discord.MessageEmbed()
				
			
    .setDescription(`<:emoji_5:845039334625247252> | O usuário não possuí tag VIP.` )
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if (!temvip) return message.reply({embeds:[notpossui]});

   
    let embed = new Discord.MessageEmbed()

    
    .setTitle('<a:dima:918882750570823691> Vip Deletado <a:dima:918882750570823691>')
    .setDescription(`<:branco_pessoaRDM:844417026059272232> O vip foi deletado\n<:b_roboxyz:844417254149718026> | **Informações :**\n<:branco_pessoaRDM:844417026059272232> Usuário : ${message.author}`)
    .setColor("#5fa5e3")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    message.reply({embeds:[embed]})
if(temvip.canal){
  message.guild.channels.cache.get(temvip.canal).delete()
}
if(temvip.cargo){
  message.guild.roles.cache.get(temvip.cargo).delete()
}
db.delete(`newvips_${message.guild.id}_${user.id}`)
let vir = db.get(`vips_${message.guild.id}_"${temvip.vipname}"`)
if(vir.cargo){
 
user.roles.remove(vir.cargo) 
}


    }
    
}
    