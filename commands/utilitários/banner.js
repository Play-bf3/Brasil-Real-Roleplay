const Discord = require("discord.js"); 
const {findUser} = require('../../script/utils')
module.exports = {
  nome: "banner",
  coolwdon:4000,
  alternativas: ["banner"],
  run: async (client, message, args) => {
    var name = args.join(' ').trim();

    let user = await findUser(client,message, name)||await  message.author;
   

    
  let banner = await user.bannerURL({ dynamic: true, format: "png", size: 1024 });

  let notbanner = new Discord.MessageEmbed()
				
			.setTitle(`<a:b_loadinginf:844417216597590026> | Preste atenção `)
				.setDescription(`Este usuário não possuí um banner.`)
				.setColor('5fa5e3')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


   if(banner === null) return message.reply({embeds:[notbanner]})
  let embed = new Discord.MessageEmbed() 
    .setColor(`#5fa5e3`) 
  .setTitle(`<a:estrela:918882750742810654> Banner do usuário ${user.username}`) 
  .setDescription(`**[Clique aqui](${banner}) para fazer o download da imagem!**`)
  .setImage(banner)
    

 await message.reply({embeds:[embed]}); 
  }
};
