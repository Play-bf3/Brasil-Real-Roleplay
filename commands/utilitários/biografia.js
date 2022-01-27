const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require("../../config.json");


module.exports = {
	nome: "biografia",
	coolwdon:7000,
	alternativas: ["biografia"],
	run: async(client, message, args) => {

		let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
		let aaa = args.join(' ');
		const embed = new Discord.MessageEmbed()
			
		.setColor('#5fa5e3')
	   .setDescription(`<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>Digite o que irá mostrar no perfil.`)
	   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
	   .setTimestamp();
	   if (!aaa)return message.reply({embeds:[embed]})
	

			
			  const msg = args.join(' ')

			  if(msg.length > 150) {
				const embed = new Discord.MessageEmbed()
			
				.setColor('#5fa5e3')
			   .setDescription(`<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>A sua biografia não pode ter mais de " 150 caracteres "`)
			   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();  
			   return message.reply({embeds:[embed]})
			  }
	  
			  const embed1 = new Discord.MessageEmbed()
			
	   .setColor('#5fa5e3')
	  .setTitle(`<:correto:918747498707824681> <:W_aaaaBR:844415186474500166> Perfil atualizado`)
	  .setDescription(`💬 Sua biografia : **" ${aaa} "**\n<:setar:918717053005873222> Use ${prefix}profile para ver alterações!`)
	  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
	  .setTimestamp();
	  message.reply({embeds:[embed1]})

		db.set(`aaa_${message.author.id}`, aaa);
	}
};
