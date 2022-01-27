
const db = require("quick.db");
const Discord = require('discord.js');
const ms = require("parse-ms");
const msv = require("ms")
const { default_prefix } = require("../../config.json");
module.exports = {
    nome:"vipsetup",
    coolwdon:14000,
    alternativas: ["vipsetup"],
    run: async (client, message, args) => {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(prefix === null) prefix = default_prefix;

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

let type = args[0]

if(type == 'create'){




    let pagina = args.slice(1).join(" ");


    const usagerr = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Voce precisa inserir o nome de um vip!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!pagina) return message.reply({embeds:[usagerr]})
  
  let verifidepag = db.get(`vips_${message.guild.id}_"${pagina}""`)
  
  
  const aee = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Este vip ja existe!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 if(verifidepag) return message.reply({embeds:[aee]})
  let paginas = db.all().filter(data => data.ID.startsWith(`vips_${message.guild.id}`)).sort((a, b) => b.data - a.data);
  
  if(paginas.length ==10 ){
    const aee = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:fechar:918747498984665108> | Você atingiu o limite de vips !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[aee]})
  
  }
  
  if(pagina.includes('_')){
  
    const da4343 = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode utilizar o caractere **"_"** como nome de um vip !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
     return message.reply({embeds:[da4343]})
    
  
  }
  if(pagina.includes('.')){
  
    const da4343 = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:fechar:918747498984665108> | Você não pode utilizar o caractere **"."** como nome de um vip !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
     return message.reply({embeds:[da4343]})
    
  
  }
  if(pagina.length > 20) {
    const embed = new Discord.MessageEmbed()

    .setColor('#5fa5e3')
   .setDescription(`<:fechar:918747498984665108> <:W_aaaaBR:844415186474500166>O nome do vip não pode conter mais de " 20 caracteres "`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();  
   return message.reply({embeds:[embed]})
  }






  db.set(`vips_${message.guild.id}_"${pagina}"`,{categoria:null,cargo:null,permch:null,permcr:null,cargoc:null,autoesconder:null,contadorcall:null,tempo:2592000000})
  
  
  const da4343 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Vip criado com sucesso!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
   return message.reply({embeds:[da4343]})
  




}else if(type=='config'){
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
   


    let l1;
    if(verifidepag.categoria) l1 = `<#${verifidepag.categoria}>`
    else l1 = `\`Nenhuma categoria setada\``
    
    let l2;
    if(verifidepag.cargo) l2 = `<@&${verifidepag.cargo}>`
    else l2 = `\`Nenhuma cargo setado\``
    
    let l3;
    if(verifidepag.permch) l3 = `<:Ligado:906795236011933726>`
    else l3 = `<:Desligado:906795288797257778>`
    
    let l4;
    if(verifidepag.permcr) l4 = `<:Ligado:906795236011933726>`
    else l4 = `<:Desligado:906795288797257778>`
    
    let l5;
    if(verifidepag.cargoc) l5 = `<@&${verifidepag.cargoc}>`
    else l5 = `\`Nenhuma cargo setado\``
    let l6;
    if(verifidepag.autoesconder) l6 = `<@&${verifidepag.autoesconder}>`
    else l6 = `\`Nenhuma cargo setado\``
    let l7;
    if(verifidepag.contadorcall) l7 = `<@&${verifidepag.contadorcall}>`
    else l7 = `\`Nenhuma cargo setado\``

   //contadorcall:null

let categoria;
if(verifidepag.categoria) categoria = `<#${verifidepag.categoria}>`
else categoria = `\`Nenhuma categoria setada\``

let cargo;
if(verifidepag.cargo) cargo = `<@&${verifidepag.cargo}>`
else cargo = `\`Nenhuma cargo setado\``

let permch;
if(verifidepag.permch) permch = `<:Ligado:906795236011933726>`
else permch = `<:Desligado:906795288797257778>`

let permcr;
if(verifidepag.permcr) permcr = `<:Ligado:906795236011933726>`
else permcr = `<:Desligado:906795288797257778>`

let cargoac;
if(verifidepag.cargoc) cargoac = `<@&${verifidepag.cargoc}>`
else cargoac = `\`Nenhuma cargo setado\``

let autoesconder;
if(verifidepag.autoesconder) autoesconder = `<:Ligado:906795236011933726>`
else autoesconder = `<:Desligado:906795288797257778>`


let contadorcall;
if(verifidepag.contadorcall) contadorcall = `<:Ligado:906795236011933726>`
else contadorcall = `<:Desligado:906795288797257778>`

let tempo;
if(tempo!='PERM'){
  tempo = verifidepag.tempo
}

    const embed = new Discord.MessageEmbed ()
    
    .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
    .setColor('5fa5e3')
    .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
     
  
  
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
  let butao6 =  new Discord.MessageButton()
  .setEmoji('<:luniseis:918729740477665322>')
  .setStyle("SECONDARY")
  .setCustomId("butao6")
  let butao7 =  new Discord.MessageButton()
  .setEmoji('<:lunisete:918729740393779253>')
  .setStyle("SECONDARY")
  .setCustomId("butao7")
  let butao8 =  new Discord.MessageButton()
  .setEmoji('<:lunioito:918729740381208617>')
  .setStyle("SECONDARY")
  .setCustomId("butao8")
  let butao9 =  new Discord.MessageButton()
  .setEmoji('<:luninove:918729740708368414>')
  .setStyle("SECONDARY")
  .setCustomId("butao9")
  const row = new Discord.MessageActionRow()
  row.addComponents([butao1,butao2,butao3,butao4,butao5])
    
    
  const row1 = new Discord.MessageActionRow()
  row1.addComponents([butao6,butao7,butao8,butao9])
    
    

  
   
  message.reply({embeds:[embed],components:[row,row1]}).then(msg => {

    setTimeout(()=>{msg.delete().catch(()=>{});},160000)
  
    
    const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
  switch (r.customId) {
    case 'butao1':
   r.deferUpdate()
   let ccategori = new Discord.MessageEmbed()
   .setDescription(`<:e_fixadoTDN:844359619886579732> | Forneça o ID da categoria correta !     `)
   .setColor('5fa5e3')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   
   
   let usu = await  message.channel.send({embeds:[ccategori]})   
   
   setTimeout(()=>{usu.delete()},30000)
     const filter9 = res => {
  return res.author.id === message.author.id && res.content.length;
     };
     const categoryCollector = await message.channel.awaitMessages({filter :filter9,
  max: 1,
  time: 80000
     });
    
  
 
    let category =  message.guild.channels.cache.get(categoryCollector.first().content)
     
    
    let cnh123 = new Discord.MessageEmbed()
   .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nEsta categoria é inválida `)
   .setColor('5fa5e3')

   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();


   

if(!category) return categoryCollector.first().reply({embeds:[cnh123]}).then((msg)=>{
  usu.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})
let j123 = new Discord.MessageEmbed()
.setDescription(`<:e_fixadoTDN:844359619886579732> | Forneça o ID de uma categoria da próxima vez ! ` )
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(category.type !== 'GUILD_CATEGORY') return categoryCollector.first().reply({embeds:[j123]}).then((msg)=>{
  usu.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})

   categoria = category
   const embed1 = new Discord.MessageEmbed ()
    
   .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
   .setColor('5fa5e3')
   .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   r.message.edit({embeds:[embed1]})
   let dadasdsadasda = new Discord.MessageEmbed()
   
 
   .setDescription(`<:correto:918747498707824681> | Categoria setada com sucesso.`)
   .setColor('5fa5e3')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   
   categoryCollector.first().reply({embeds:[dadasdsadasda]}).then((msg)=>{
     usu.delete() 
    setTimeout(()=>{
      categoryCollector.first().delete()
      msg.delete()},5000)})
   break;
   case 'butao2':
    r.deferUpdate()





    let csdsa323 = new Discord.MessageEmbed()
    .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} ! Mencione um cargo válido.`)
    .setColor('5fa5e3')
      
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      
      
    
   let zup = await message.channel.send({embeds:[csdsa323]})
   setTimeout(()=>{zup.delete()},30000)
 
    const filter12332 = res => {
    return res.author.id === message.author.id && res.content.length;
    };
    const novatoCollector = await message.channel.awaitMessages({
      filter:filter12332,
    max: 1,
    time: 30000
    });
    
    
        
    let novatorole = novatoCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(novatoCollector.first().content)
    
    
    let da22 = new Discord.MessageEmbed()
    .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nEste cargo é inválido `)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    
      
    
    if(!novatorole) return novatoCollector.first().reply({embeds:[da22]}).then((msg)=>{
      zup.delete() 
     setTimeout(()=>{
      novatoCollector.first().delete()
      msg.delete()},5000)})
      const permacime120 = new Discord.MessageEmbed()
      .setColor('5fa5e3')
      .setDescription(`<:block:918884825652420698> | O cargo mencionado é **igual** ou **maior** que o meu!`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
     
      if( message.guild.me.roles.highest.position <=  novatorole.position) return novatoCollector.first().reply({embeds:[permacime120]}).then((msg)=>{
        zup.delete() 
       setTimeout(()=>{
        novatoCollector.first().delete()
        msg.delete()},5000)})
      if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
      const notacime120 = new Discord.MessageEmbed()
      .setColor('5fa5e3')
      .setDescription(`<:block:918884825652420698> | O cargo mencionado é **igual** ou **maior** que o seu!`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
     
      if ( novatorole.position >=  message.member.roles.highest.position) {
        if (message.author.id) return novatoCollector.first().reply({embeds:[notacime120]}).then((msg)=>{
          zup.delete() 
         setTimeout(()=>{
          novatoCollector.first().delete()
          msg.delete()},5000)})
     }
     }

   cargo = novatorole
   const embed2 = new Discord.MessageEmbed ()
    
   .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
   .setColor('5fa5e3')
   .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   r.message.edit({embeds:[embed2]})

   let ewqeq12e21 = new Discord.MessageEmbed()
    

   .setDescription(`<:correto:918747498707824681> | Cargo setado com sucesso!`)
   .setColor('5fa5e3')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   
   novatoCollector.first().reply({embeds:[ewqeq12e21]}).then((msg)=>{
     zup.delete() 
    setTimeout(()=>{
     novatoCollector.first().delete()
     msg.delete()},5000)})

   break;

   case 'butao3':
    r.deferUpdate()
    if(permch === '<:Desligado:906795288797257778>'){
      
     
          let dadasdsadasda = new Discord.MessageEmbed()
          
          
        .setDescription(`<:correto:918747498707824681> | Permissão de criar canal vip **habilitado.**`)
        .setColor('5fa5e3')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
          message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
         
          permch = '<:Ligado:906795236011933726>'
          const embed2 = new Discord.MessageEmbed ()
    
   .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
   .setColor('5fa5e3')
   .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   r.message.edit({embeds:[embed2]})
          }else if(permch === '<:Ligado:906795236011933726>'){
          
          let dadasdsadasda = new Discord.MessageEmbed()
          
          
        .setDescription(`<:correto:918747498707824681> | Permissão de criar canal vip **desabilitado.**`)
        .setColor('5fa5e3')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
          message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
          permch = '<:Desligado:906795288797257778>'
         
          const embed2 = new Discord.MessageEmbed ()
    
          .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
          .setColor('5fa5e3')
          .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
          r.message.edit({embeds:[embed2]})
          }

    break;

    case 'butao4':
        r.deferUpdate()
        if(permcr === '<:Desligado:906795288797257778>'){
          
         
              let dadasdsadasda = new Discord.MessageEmbed()
              
              
            .setDescription(`<:correto:918747498707824681> | Permissão de criar cargo vip **habilitado.**`)
            .setColor('5fa5e3')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
             
              permcr = '<:Ligado:906795236011933726>'
              const embed2 = new Discord.MessageEmbed ()
        
       .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
       .setColor('5fa5e3')
       .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
       r.message.edit({embeds:[embed2]})
              }else if(permcr === '<:Ligado:906795236011933726>'){
              
              let dadasdsadasda = new Discord.MessageEmbed()
              
              
            .setDescription(`<:correto:918747498707824681> | Permissão de criar cargo vip **desabilitado.**`)
            .setColor('5fa5e3')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
              permcr = '<:Desligado:906795288797257778>'
             
              const embed2 = new Discord.MessageEmbed ()
        
              .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
              .setColor('5fa5e3')
              .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
              .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
              .setTimestamp();
              r.message.edit({embeds:[embed2]})
              }
    
        break;
        case 'butao5':

        r.deferUpdate()


        let ww3232 = new Discord.MessageEmbed()
        .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} ! Mencione um cargo válido.`)
        .setColor('5fa5e3')
          
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
          
          
        
       let zupir = await message.channel.send({embeds:[ww3232]})
       setTimeout(()=>{zupir.delete()},30000)
     
        const filter1232232 = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const nvipCollector = await message.channel.awaitMessages({
          filter:filter1232232,
        max: 1,
        time: 30000
        });
        
        
            
        let nviptorole = nvipCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(nvipCollector.first().content)
        
        
        let da222 = new Discord.MessageEmbed()
        .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nEste cargo é inválido `)
        .setColor('5fa5e3')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
          
        
        if(!nviptorole) return nvipCollector.first().reply({embeds:[da222]}).then((msg)=>{
            zupir.delete() 
         setTimeout(()=>{
            nvipCollector.first().delete()
          msg.delete()},5000)})
        const permacime1200 = new Discord.MessageEmbed()
        .setColor('5fa5e3')
        .setDescription(`<:block:918884825652420698> | Não e possível criar cargos acima do mencionado!`)
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
       
        if( message.guild.me.roles.highest.position <=  nviptorole.position+1) return nvipCollector.first().reply({embeds:[permacime1200]}).then((msg)=>{
            zupir.delete() 
         setTimeout(()=>{
            nvipCollector.first().delete()
          msg.delete()},5000)})
        if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
        const notacime1200 = new Discord.MessageEmbed()
        .setColor('5fa5e3')
        .setDescription(`<:block:918884825652420698> | Você não possui a permissão de criar cargos acima do cargo mencionado!`)
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
       
        if ( nviptorole.position+1 >=  message.member.roles.highest.position) {
          if (message.author.id) return nvipCollector.first().reply({embeds:[notacime1200]}).then((msg)=>{
            zupir.delete() 
           setTimeout(()=>{
            novatoCollector.first().delete()
            msg.delete()},5000)})
       }
       }
       cargoac = nviptorole
       const embed22 = new Discord.MessageEmbed ()
        
       .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
       .setColor('5fa5e3')
       .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
       r.message.edit({embeds:[embed22]})
    
       let rrr2323 = new Discord.MessageEmbed()
        
    
       .setDescription(`<:correto:918747498707824681> | Cargo setado com sucesso!`)
       .setColor('5fa5e3')
       
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
       
       
       nvipCollector.first().reply({embeds:[rrr2323]}).then((msg)=>{
        zupir.delete() 
        setTimeout(()=>{
            nvipCollector.first().delete()
         msg.delete()},5000)})
    
       break;
       case 'butao6':
        r.deferUpdate()
        if(autoesconder === '<:Desligado:906795288797257778>'){
          
         
              let dadasdsadasda = new Discord.MessageEmbed()
              
              
            .setDescription(`<:correto:918747498707824681> | Canal oculto quando vazio **habilitado.**`)
            .setColor('5fa5e3')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
             
              autoesconder = '<:Ligado:906795236011933726>'
              const embed2 = new Discord.MessageEmbed ()
        
       .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
       .setColor('5fa5e3')
       .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
       r.message.edit({embeds:[embed2]})
              }else if(autoesconder === '<:Ligado:906795236011933726>'){
              
              let dadasdsadasda = new Discord.MessageEmbed()
              
              
            .setDescription(`<:correto:918747498707824681> | Canal oculto quando vazio **desabilitado.**`)
            .setColor('5fa5e3')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
              autoesconder = '<:Desligado:906795288797257778>'
             
              const embed2 = new Discord.MessageEmbed ()
        
              .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
              .setColor('5fa5e3')
              .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
              .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
              .setTimestamp();
              r.message.edit({embeds:[embed2]})
              }
    
        break;
       case 'butao7':
        r.deferUpdate()
        if(contadorcall === '<:Desligado:906795288797257778>'){
          
         
              let dadasdsadasda = new Discord.MessageEmbed()
              
              
            .setDescription(`<:correto:918747498707824681> | Contar hora em call **habilitado.**`)
            .setColor('5fa5e3')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
             
              contadorcall = '<:Ligado:906795236011933726>'
              const embed2 = new Discord.MessageEmbed ()
        
       .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
       .setColor('5fa5e3')
       .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
       r.message.edit({embeds:[embed2]})
              }else if(contadorcall === '<:Ligado:906795236011933726>'){
              
              let dadasdsadasda = new Discord.MessageEmbed()
              
              
            .setDescription(`<:correto:918747498707824681> | Contar hora em call **desabilitado.**`)
            .setColor('5fa5e3')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
              contadorcall = '<:Desligado:906795288797257778>'
             
              const embed2 = new Discord.MessageEmbed ()
        
              .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
              .setColor('5fa5e3')
              .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
              .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
              .setTimestamp();
              r.message.edit({embeds:[embed2]})
              }
    
        break;

        case 'butao8':
    r.deferUpdate()
          















    let vv123 = new Discord.MessageEmbed()
    .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} ! Insira uma quantidade de dias valido entre 2 a 120 dias ou digite **"perm"** para que o vip seja permanente.`)
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
    
    
        
    let nviptorolea =daysCollector.first().content.toUpperCase()

    if(nviptorolea!='PERM'){
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
     if (nviptorolea<2 || nviptorolea>120) { 
      let nvision = new Discord.MessageEmbed()
      .setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nA quantia de dias inserida tem quer ser entre 2 a 120! `)
      .setColor('5fa5e3')
      
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
      
      
        
      
      return daysCollector.first().reply({embeds:[nvision]}).then((msg)=>{
        zupirar.delete() 
       setTimeout(()=>{
        daysCollector.first().delete()
        msg.delete()},5000)})
       }
       
     
     nviptorolea = msv(`${parseInt(nviptorolea)} d`)
 }

   tempo = nviptorolea
   const eqweqweqe312 = new Discord.MessageEmbed ()
    
   .setTitle("<a:dima:918882750570823691> Sistema Vip <a:dima:918882750570823691>")    
   .setColor('5fa5e3')
   .setDescription(`<:lunium:918729484365070376> **Categoria :** ${categoria}\n<:lunidois:918729484407029870> **Cargo :** ${cargo}\n<:lunitres:918729484285411390> **Permissão de crir um canal vip :** ${permch}\n<:luniquatro:918729484318965810> **Permissão de criar cargo vip :** ${permcr}\n<:lunicinco:918729740825788456> **Cargo VIP criado acima de:** ${cargoac}\n<:luniseis:918729740477665322> **Canal oculto quando vazio:** ${autoesconder}\n<:lunisete:918729740393779253> **Contar hora em call:** ${contadorcall}\n<:lunioito:918729740381208617> **Duração:** ${tempo =='PERM'? 'Permanente':`${ms(tempo).days} dias`}\n<:luninove:918729740708368414> **Salvar vip**`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
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
case 'butao9':

        r.deferUpdate()
        r.message.delete().catch(()=>{});
let v1;
let v2;
let v3;
let v4;
let v5;
let v6;
let v7;

if(categoria !==l1){
    v1 = categoria.id
  
}else{
    v1 = verifidepag.categoria
}
if(cargo !==l2){
    v2 = cargo.id
   
}else{
    v2 = verifidepag.cargo
}
if(permch !==l3){
    if(permch =='<:Ligado:906795236011933726>'){
    v3 = true
}else{
    v3 = null  
}
}else{
    v3 = verifidepag.permch
}
if(permcr !==l4){
    if(permcr =='<:Ligado:906795236011933726>'){
    v4 = true
}else{
    v4 = null  
}
}else{
    v4 = verifidepag.permcr
}
if(cargoac !==l5){
    v5 = cargoac.id
}else{
    v5 = verifidepag.cargoac
}



if(autoesconder !==l6){
  if(autoesconder =='<:Ligado:906795236011933726>'){
    v6 = true
}else{
  v6 = null  
}
}else{
  v6 = verifidepag.autoesconder
}



if(contadorcall !==l7){
  if(contadorcall =='<:Ligado:906795236011933726>'){
    v7 = true
}else{
  v7 = null  
}
}else{
  v7 = verifidepag.contadorcall
}


let vipconfigured = new Discord.MessageEmbed()


   .setDescription(`<:correto:918747498707824681> | VIP configurado com sucesso! `  )
   .setColor('5fa5e3')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 

  message.channel.send({ embeds:[vipconfigured]}).then(msg=>{setTimeout(()=>{msg.delete()},8000)})
  db.set(`vips_${message.guild.id}_"${pagename}"`,{categoria:v1,cargo:v2,permch:v3,permcr:v4,cargoc:v5,autoesconder:v6,contadorcall:v7,tempo:tempo})
        break;

  }
})
  })
    
}else if(type=='delete'){
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
  let paginas = db.all().filter(data => data.ID.startsWith(`newvips_${message.guild.id}`)).sort((a, b) => b.data - a.data)

  for (let i = 0; i < paginas.length; i++) {
let dados = db.get(paginas[i].ID)

if(dados.vipname == pagename){
let user = message.guild.members.cache.get(paginas[i].ID.split("_")[2])


  if(dados.canal){
    message.guild.channels.cache.get(dados.canal).delete()
  }
  if(dados.cargo){
    message.guild.roles.cache.get(dados.cargo).delete()
  }
  db.delete(`newvips_${message.guild.id}_${user.id}`)
  let vir = db.get(`vips_${message.guild.id}_"${dados.vipname}"`)
  if(vir.cargo){
   
  user.roles.remove(vir.cargo) 
  }
  
}

  }
 db.delete(`vips_${message.guild.id}_"${pagename}"`)
 const da4343 = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:correto:918747498707824681> | Vip deletado com sucesso!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
  return message.reply({embeds:[da4343]})
 
}else if(type =='list'){
  let paginas = db.all().filter(data => data.ID.startsWith(`vips_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    
  let cargosadicionads = []
  for (let i = 0; i < paginas.length; i++) {
    cargosadicionads.push(paginas[i].ID.split("_")[2].slice(1,paginas[i].ID.split("_")[2].length-1))
  }
 

  let dadasdsadasda = new Discord.MessageEmbed()
    .setTitle(`Sistema Vip-${client.user.username}`)

  .setDescription(`**Lista de vips criadao:**\n${!cargosadicionads || cargosadicionads ==''? 'Nenhum vip':cargosadicionads.join(', ')}\n\n**${paginas.length} vips de 10 vips**`)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  message.reply({embeds:[dadasdsadasda]})

}else{
  const usagerr = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setTitle("<:fechar:918747498984665108> Tente novamente")
  .setDescription(`Use o comando : \`${prefix}vipsetup <create|config|delete|list> <nome da pagina>!\``)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[usagerr]}) 
}





    }
}