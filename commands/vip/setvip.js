const ms = require("parse-ms");
var lt = require('long-timeout')
const Discord = require('discord.js');
const {findMember} = require('../../script/utils')
const db = require('quick.db')

module.exports = {
    nome:"setvip",
    coolwdon:7000,
    alternativas: ["setvip"],
    run: async (client, message, args) => {

      const limite = new Discord.MessageEmbed()
      .setColor('5fa5e3')
      .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Para executar este comando precisa a permissão \`administrador\` !`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
        
      if (!message.member.permissions.has("ADMINISTRATOR")) return  message.reply({embeds:[limite]})



    
   
  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`gerenciar funções\` e de \`gerenciar canais\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})
    


    var name = args.join(' ').trim();

    let user = await findMember(message, name)
    
    let notuser = new Discord.MessageEmbed()
                    
                
                    .setDescription(`<:fechar:918747498984665108> | Mencione um usuário existente.`)
                    .setColor('5fa5e3')
    
                    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                    .setTimestamp();
    
    if (!user) return message.reply({embeds:[notuser]});
    
    let japossui = new Discord.MessageEmbed()
				
			
    .setDescription(`<:fechar:918747498984665108> | O usuário já possuí VIP.`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
if(db.get(`newvips_${message.guild.id}_${user.id}`))return message.reply({embeds:[japossui]})

    let pagename = args.slice(1).join(" ");
    
    const usagerr = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você precisa inserir o nome de um vip!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!pagename) return message.reply({embeds:[usagerr]})
    let verifidepag = db.get(`vips_${message.guild.id}_"${pagename}"`)


    const aee = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Este vip não existe!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!verifidepag) return message.reply({embeds:[aee]})

db.set(`newvips_${message.guild.id}_${user.id}`,{vipname:pagename,canal:null,cargo:null,vipdate:new Date(),duration:verifidepag.tempo})

let embed = new Discord.MessageEmbed()


.setTitle('<a:dima:918882750570823691> Vip Configurado <a:dima:918882750570823691>')
.setDescription(`<:branco_pessoaRDM:844417026059272232> O vip foi adicionado\n<:data:844416167077740564> ${verifidepag.tempo =='PERM'? 'Permanente':`Durante ${ms(verifidepag.tempo).days} dias`}\n<:b_roboxyz:844417254149718026> | Informações:\n<:branco_pessoaRDM:844417026059272232> Usuário : ${user}`)
.setColor("5fa5e3")
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


message.reply({embeds:[embed]}).then(msg=>{setTimeout(()=>{msg.delete()},8000)})
if(verifidepag.tempo !== 'PERM'){
lt.setTimeout(function() {
    let temvip = db.get(`newvips_${message.guild.id}_${user.id}`)
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

}, verifidepag.tempo)
}

    }
}