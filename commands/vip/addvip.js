
const db = require("quick.db");
const {findMember} = require('../../script/utils')
const Discord = require('discord.js');
module.exports = {
    nome:"addvip",
    coolwdon:10000,
    alternativas: ["addvip"],
    run: async (client, message, args) => {
        let temvip = db.get(`newvips_${message.guild.id}_${message.member.id}`)
        let vir = db.get(`vips_${message.guild.id}_"${temvip.vipname}"`)
        let botvip = new Discord.MessageEmbed()
                    
                
        .setDescription(`<:fechar:918747498984665108> | Você não é um membro VIP!`)
        .setColor('5fa5e3')
    
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    
        if (!temvip) return message.reply({embeds:[botvip]});

       if(!temvip.cargo||!vir.permcr){

        let botvip = new Discord.MessageEmbed()
                    
                
        .setDescription(`<:fechar:918747498984665108> | Você não posssui tag VIP!`)
        .setColor('5fa5e3')
    
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    
     return message.reply({embeds:[botvip]});


       }
   let cargovip = message.guild.roles.cache.get(temvip.cargo)
   var name = args.join(' ').trim();
   let user=await findMember(message, name)
   let notuser = new Discord.MessageEmbed()
				
			
				.setDescription(`<:fechar:918747498984665108> | Mencione um usuário existente.`)
				.setColor('5fa5e3')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();

if (!user) return message.reply({embeds:[notuser]});

   let no1tuser = new Discord.MessageEmbed()
				
			
   .setDescription(`<:emoji_4:845039315946831892> | Este usuário ja possui Tag VIP !   `)
   .setColor('5fa5e3')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   if (user.roles.cache.has(cargovip.id)) 
    return message.reply({embeds:[no1tuser]})


    let embed = new Discord.MessageEmbed()

  
    .setTitle('<a:dima:918882750570823691> VIP Adicionado! <a:dima:918882750570823691>')
    .setDescription(`**Cargo :** ${cargovip}\n**Usuário :** ${user}`)
    .setColor("#5fa5e3")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   
  
    message.reply({embeds:[embed]}).then(async(msg)=>{

        setTimeout(()=>{
            msg.delete()
        },6000)
    })

    user.roles.add(cargovip.id) 
    
}
    
}