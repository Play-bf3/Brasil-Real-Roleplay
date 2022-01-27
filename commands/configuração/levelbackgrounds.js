const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require("../../config.json");
module.exports = {
    nome: "levelbackgrounds",
	coolwdon:8000,
    alternativas: ["levelbackgrounds"],
    run: async  (client, message, args) => {
		let prefix = db.get(`prefix_${message.guild.id}`)
		if(prefix === null) prefix = default_prefix;
	  
		 
		const limite = new Discord.MessageEmbed()
		.setColor('5fa5e3')
		.setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`gerenciar canais\` !`)
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
		.setTimestamp();
	  
		if (!message.member.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[limite]})
	 
		const ad = new Discord.MessageEmbed()
		.setColor('5fa5e3')
		.setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` !`)
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
		.setTimestamp();
	  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[ad]})
	 let sistelevel = db.get(`sistelevel_${message.guild.id}`);
	 if (sistelevel == null) {
		const ad = new Discord.MessageEmbed()
		.setColor('5fa5e3')
		.setDescription(`<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>Sistema de level está desabilitado ative o para poder executar esse comando!`)
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
		.setTimestamp();
   return  message.reply({embeds:[ad]})
}
		let embed = new Discord.MessageEmbed()
			.setTitle(`${client.user.username} | Backgrounds`)
			.setDescription(`Lista de background level, Escolha um reagindo ao emoji correspondente ao background.\n\n<:lunium:918729484365070376> Clique em : [para visualizar o background.](https://i.imgur.com/WUo2xvp.png)\n<:lunidois:918729484407029870> Clique em : [para visualizar o background.](https://i.imgur.com/sWibWOl.png)\n<:lunitres:918729484285411390> Clique em : [para visualizar o background.](https://i.imgur.com/nk2iFin.png)\n<:luniquatro:918729484318965810> Clique em : [para visualizar o background.](https://i.imgur.com/NAxybAT.png)\n<:lunicinco:918729740825788456> Clique em : [para visualizar o background.](https://i.imgur.com/KNsxjEe.png)`)
 .setImage("https://i.imgur.com/iWwzPCD.png")
			.setColor('5fa5e3');

			let butao1 = new Discord.MessageButton()
			.setEmoji('<:lunium:918729484365070376>')
		  .setStyle("SECONDARY")
		   .setCustomId("butao1")
		  
			let butao2 =  new Discord.MessageButton()
			.setEmoji('<:lunidois:918729484407029870>')
			.setStyle("SECONDARY")
			.setCustomId("butao2")
			  let butao3 =  new Discord.MessageButton()
			.setEmoji('<:lunitres:918729484285411390>')
			.setStyle("SECONDARY")
			.setCustomId("butao3")
			let butao4 =  new Discord.MessageButton()
			.setEmoji('<:luniquatro:918729484318965810>')
			.setStyle("SECONDARY")
			.setCustomId("butao4")
			let butao5 =  new Discord.MessageButton()
			.setEmoji('<:lunicinco:918729740825788456>')
			.setStyle("SECONDARY")
			.setCustomId("butao5")
		  
			const row = new Discord.MessageActionRow()
			row.addComponents([butao1,butao2,butao3,butao4,butao5])
		  
		  
					  
				  
					  message.reply({embeds:[embed],components:[row]}).then(msg => {
		
		
						const inf = (interaction) => interaction.user.id == message.member.id
					
					const collector = msg.createMessageComponentCollector({ filter:inf});
					collector.on('collect', async(r,u) =>{
					  switch (r.customId) {
						case 'butao1':
						
						
						r.deferUpdate()
						
						r.message.delete().catch(()=>{}); 
				
						  
				
				
					let background1 = db.get(`levelbackground_${message.guild.id}`)
					if(background1 === null) {
						const ad = new Discord.MessageEmbed()
						.setColor('5fa5e3')
						.setDescription(`<:fechar:918747498984665108> | Você já está usando esse background.	`)
						.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();
				   return  message.channel.send({embeds:[ad]})
					}
					const ad1 = new Discord.MessageEmbed()
					.setColor('5fa5e3')
					.setDescription(`<:correto:918747498707824681> | Background atualizado para : Background-1	`)
					.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
					.setTimestamp();
			  
						db.delete(`levelbackground_${message.guild.id}`);
						
					  message.channel.send({embeds:[ad1]})
						break;
						case 'butao2':
						   r.deferUpdate()
				
						   r.message.delete().catch(()=>{});  

							   let background2 = db.get(`levelbackground_${message.guild.id}`)
							   if(background2 === 1){
								   const ad = new Discord.MessageEmbed()
								   .setColor('5fa5e3')
								   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse background.	`)
								   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
								   .setTimestamp();
								   return  message.channel.send({embeds:[ad]})
							   }
							   const ad2= new Discord.MessageEmbed()
							   .setColor('5fa5e3')
							   .setDescription(`<:correto:918747498707824681> | Background atualizado para : Background-2	`)
							   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
							   .setTimestamp();
						 
							   
							   db.set(`levelbackground_${message.guild.id}`, 1);
							   message.channel.send({embeds:[ad2]})
							   break;
							   case 'butao3':
						   r.deferUpdate()
				
						   r.message.delete().catch(()=>{}); 
							   let background3 = db.get(`levelbackground_${message.guild.id}`)
							   if(background3 === 2) {
								   const ad = new Discord.MessageEmbed()
								   .setColor('5fa5e3')
								   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse background.	`)
								   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
								   .setTimestamp();
								   return  message.channel.send({embeds:[ad]})
		   
							   }
							   const ad3 = new Discord.MessageEmbed()
							   .setColor('5fa5e3')
							   .setDescription(`<:correto:918747498707824681> | Background atualizado para : Background-3	`)
							   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
							   .setTimestamp();
						 
						   
								   db.set(`levelbackground_${message.guild.id}`, 2);
								   message.channel.send({embeds:[ad3]})
								   break;
								  case 'butao4':
						   r.deferUpdate()
				
						   r.message.delete().catch(()=>{});
							   let background4 = db.get(`levelbackground_${message.guild.id}`)
							   if(background4 === 3) {
								   const ad = new Discord.MessageEmbed()
								   .setColor('5fa5e3')
								   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse background.	`)
								   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
								   .setTimestamp();
								   return  message.channel.send({embeds:[ad]})
							   }
							   const ad4 = new Discord.MessageEmbed()
							   .setColor('5fa5e3')
							   .setDescription(`<:correto:918747498707824681> | Background atualizado para : Background-4	`)
							   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
							   .setTimestamp();
						 
						   
									   db.set(`levelbackground_${message.guild.id}`, 3);
									   message.channel.send({embeds:[ad4]})
break;
									   case 'butao5':
										r.deferUpdate()
							 
										r.message.delete().catch(()=>{});  
											let background5 = db.get(`levelbackground_${message.guild.id}`)
											if(background5 === 4){
												const ad = new Discord.MessageEmbed()
												.setColor('5fa5e3')
												.setDescription(`<:fechar:918747498984665108> | Você já está usando esse background.	`)
												.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
												.setTimestamp();
												return  message.channel.send({embeds:[ad]})
											}
							
											const ad5 = new Discord.MessageEmbed()
											.setColor('5fa5e3')
											.setDescription(`<:correto:918747498707824681> | Background atualizado para : Background-5	`)
											.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
											.setTimestamp();
									  
													db.set(`levelbackground_${message.guild.id}`, 4);
													message.channel.send({embeds:[ad5]})
				
						}
					})
				})
		
	
  }
};
