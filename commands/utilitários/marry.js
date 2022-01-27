const discord = require('discord.js')
require("moment-duration-format");
const db = require("quick.db");
const moment = require("moment");
const {findMember} = require('../../script/utils')

module.exports = {
    nome: "marry",
	coolwdon:10000,
    alternativas: ["marry"],
    run: async (client, message, args) => {

		var name = args.join(' ').trim();

		let member = await findMember(message, name)
		
  
		let marry = await db.get(`marry_${message.author.id}`);	
		if (marry !== null){
		
			let time  = await  db.fetch(`timemarry_${message.author.id}`);
		let cdtime = 	moment.duration(new Date() - time).format(`Y[ Anos], M[ Meses] W[ Semanas] D[ Dias] H[ Horas], m [Minutos] [e] s[ Segundos]`);

			let embeda  = new discord.MessageEmbed()
			.setTitle('<:anel:918893220522508388> | **Suas informações **')
		
		   .setDescription(`Você está casado com <@${marry}>\nCasados á **${cdtime}**`)
						.setColor('5fa5e3')
						
						.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();

			 return message.reply({embeds:[embeda]});
		}
		let solteiro = new discord.MessageEmbed()
		.setTitle('<:anel:918893220522508388> | Suas informações :')
		
		.setDescription(`😣 | Você está solteiro`)
		.setColor('5fa5e3')
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();


		if (!member) return message.reply({embeds:[solteiro]})
		let bot = new discord.MessageEmbed()
			.setColor('5fa5e3')
			.setDescription('<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>Você não pode se casar comigo bobinho.')
			
			.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
			.setTimestamp();

				let c1 = new discord.MessageEmbed()
				.setTitle('<:anel:918893220522508388> | Informações :')
			
				.setDescription(`💍 <@${member.user.id}> está casado com <@${db.get(`marry_${member.user.id}`)}>`)
				.setColor('5fa5e3')
				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();

			
			
				let vc = new discord.MessageEmbed()

				.setDescription(`<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>Infelizmente você não pode casar com sigo mesmo`)
				.setColor('5fa5e3')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();

				let nobot = new discord.MessageEmbed()
				

				.setDescription(`<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>Infelizmente você não pode casar se casar com um bot`)
				.setColor('5fa5e3')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();

		if (member.id === client.user.id) return message.reply({embeds:[bot]});
		if(member.user.bot === true) return  message.reply({embeds:[nobot]});
		if (member.id === message.author.id) return message.reply({embeds:[vc]});



		let marry2 = await db.fetch(`marry_${member.user.id}`);
		if (marry2 !== null) return message.reply({embeds:[c1]});
		if (marry === null) { 
		
			
			
		
			let casar = new discord.MessageEmbed()
				.setColor('5fa5e3')
				.setTitle(' 💍 Pedido de casamento')
				.setDescription(`${member}, **aceita se casar com ${message.author}?\nDigite \`sim\` para aceitar se casar ou\nDigite \`não\` para não aceitar.**`)
				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();


			

			let stv  =await message.reply({embeds:[casar]}) 
setTimeout(()=>{stv.delete()},90000)
			
			const filter = (m) =>m.author.id === member.user.id
    const collector = message.channel.createMessageCollector({  filter , time : 90000}); 

    collector.on("collect", collected => { 
			
   if (collected.content.toLowerCase() === "sim"){ 
					let casar2 = new discord.MessageEmbed()
					.setColor('5fa5e3')
					.setTitle(`**Pedido de casamento aceito!**`)
					.setDescription(`**Agora ${message.author.tag} e ${member.user.tag} estão casados.**`)
					.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();

					collected.reply({embeds:[casar2]}).then((msg)=>{
						stv.delete()
						setTimeout(()=>{
						 collected.delete()
						msg.delete()},6000)})
						collector.stop(true)
			
					 db.set(`marry_${message.author.id}`, member.user.id);
					 db.set(`marry_${member.user.id}`, message.author.id);
					 db.set(`timemarry_${member.user.id}`,Date.now())
					 db.set(`timemarry_${message.member.id}`,Date.now())
  } else if (collected.content.toLowerCase() === "nao"||collected.content.toLowerCase() === "não"){ 
  let casar3 = new discord.MessageEmbed()
					.setColor('5fa5e3')
					.setTitle(`**Pedido de Casamento recusado**`)
					.setDescription(`${message.author}, seu pedido de casamento foi recusado.`)
				
					.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
					.setTimestamp();

					collected.reply({embeds:[casar3]}).then((msg)=>{
						stv.delete()
						setTimeout(()=>{
						 collected.delete()
						msg.delete()},6000)})
						collector.stop(true)		
  }
					
					
    })
			
		

}
}
}
