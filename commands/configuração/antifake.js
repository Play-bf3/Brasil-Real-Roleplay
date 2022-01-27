const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "antifake",
  coolwdon:6000,
  alternativas: ["antifake"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
  const limite = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Para usar este comando você precisa ser **posse** do servidor!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  if (await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id) return  message.reply({embeds:[limite]})
  
  const ad = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`expulsar membros\` e \`ver registro de auditoria\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  if(!message.guild.me.permissions.has("BAN_MEMBERS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")) return  message.reply({embeds:[ad]})

let antikfake = db.get(`antifakes_${message.guild.id}`)
if(antikfake == null) antikfake = '<:Desligado:906795288797257778>'
else antikfake = '<:Ligado:906795236011933726>'

let antikfakedias = db.get(`antifakesdias_${message.guild.id}`)
  
    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de anti fake")    
    .setColor('5fa5e3')
    .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de anti fake abaixo!\n\n<:lunium:918729484365070376> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<:lunidois:918729484407029870> Sistema anti fake : ${antikfake}\n<:lunitres:918729484285411390> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
 
   
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

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3])
  
 message.reply({embeds:[embed],components:[row]}).then(msg => {
  setTimeout(()=>{msg.delete()},180000)

   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':
    r.deferUpdate()

    let vv123 = new Discord.MessageEmbed()
    .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} ! Insira uma quantidade de dias valido entre 2 a 180 dias.`)
    .setColor('5fa5e3')
      
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      
      
    
   let zupirar = await message.channel.send({embeds:[vv123]})
   setTimeout(()=>{zupirar.delete()},30000)
 
    const bafylter = res => {
    return res.author.id === message.author.id && res.content.length;
    };
    const daysCollector = await message.channel.awaitMessages({
      filter:bafylter,
    max: 1,
    time: 30000
    });
    
    
        
    let nviptorolea =parseInt(daysCollector.first().content.toUpperCase())

 
    if (isNaN(nviptorolea) ) { 
    let nvision = new Discord.MessageEmbed()
    .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nEsta quantia de dias e invalida! `)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    
      
    
    return daysCollector.first().reply({embeds:[nvision]}).then((msg)=>{
      zupirar.delete() 
     setTimeout(()=>{
      daysCollector.first().delete()
      msg.delete()},5000)})
     }
     if (nviptorolea<2 || nviptorolea>180) { 
      let nvision = new Discord.MessageEmbed()
      .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nA quantia de dias inserida tem quer ser entre 2 a 180! `)
      .setColor('5fa5e3')
      
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
      
      
        
      
      return daysCollector.first().reply({embeds:[nvision]}).then((msg)=>{
        zupirar.delete() 
       setTimeout(()=>{
        daysCollector.first().delete()
        msg.delete()},5000)})
       }
       

       antikfakedias = nviptorolea
   const eqweqweqe312 = new Discord.MessageEmbed ()

   .setTitle("Sistema de anti fake")    
   .setColor('5fa5e3')
   .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de anti fake abaixo!\n\n<:lunium:918729484365070376> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<:lunidois:918729484407029870> Sistema anti fake : ${antikfake}\n<:lunitres:918729484285411390> Salvar configuração`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp()

   r.message.edit({embeds:[eqweqweqe312]})

   let bsvds2312 = new Discord.MessageEmbed()
    

   .setDescription(`<:correto:918747498707824681> | Dias setados com sucesso!`)
   .setColor('5fa5e3')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   
   daysCollector.first().reply({embeds:[bsvds2312]}).then((msg)=>{
    zupirar.delete() 
    setTimeout(()=>{
      daysCollector.first().delete()
     msg.delete()},5000)})



break;
case'butao2':
r.deferUpdate()
if(antikfake === '<:Desligado:906795288797257778>'){
    if(!antikfakedias){
    let dadsad = new Discord.MessageEmbed()
    .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} Você precisa setar uma quantidade de dias `)
    .setColor('5fa5e3')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
return message.channel.send({embeds:[dadsad]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})}
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`<:correto:918747498707824681> | Sistema de anti fake **habilitado.**`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
 message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
 
 antikfake = '<:Ligado:906795236011933726>'
  let embed2b1 = new Discord.MessageEmbed()
 

  .setTitle("Sistema de anti fake")    
   .setColor('5fa5e3')
   .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de anti fake abaixo!\n\n<:lunium:918729484365070376> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<:lunidois:918729484407029870> Sistema anti fake : ${antikfake}\n<:lunitres:918729484285411390> Salvar configuração`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp()

     
 
     
  r.message.edit({embeds:[embed2b1]})
  }else if(antikfake === '<:Ligado:906795236011933726>'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`<:correto:918747498707824681> | Sistema de anti fake **desabilitado.**`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  antikfake = '<:Desligado:906795288797257778>'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de anti fake")    
  .setColor('5fa5e3')
  .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de anti fake abaixo!\n\n<:lunium:918729484365070376> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<:lunidois:918729484407029870> Sistema anti fake : ${antikfake}\n<:lunitres:918729484285411390> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()

  r.message.edit({embeds:[embed2b1]})
  }
break;
case'butao3':
if(antikfake == '<:Desligado:906795288797257778>'){
    db.delete(`antifakes_${message.guild.id}`)
      }else{
    db.set(`antifakes_${message.guild.id}`,'on')
    
      }
      if(antikfakedias){
          db.set(`antifakesdias_${message.guild.id}`,antikfakedias)
      }
      let ds3 = new Discord.MessageEmbed()
  
  
      .setDescription(`<:correto:918747498707824681> | Configuração salva com sucesso!`)
      .setColor('5fa5e3')
      
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
    message.channel.send({embeds:[ds3]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  r.message.delete()
break;

 }
    })
})
  }
}