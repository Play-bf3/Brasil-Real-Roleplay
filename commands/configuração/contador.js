const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const ms = require('ms')
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
module.exports = {
  nome: "contador",
  coolwdon:9000,
  alternativas: ["contador"],
  run: async   (client, message, args) => {
    

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


  let contadorstatus = db.get(`contadorstatus_${message.guild.id}`)
if(contadorstatus == null) contadorstatus = '<:Desligado:906795288797257778>'
else contadorstatus = '<:Ligado:906795236011933726>'


let l1 = db.get(`countchannel_${message.guild.id}`)
if(l1 == null) l1 = '\`Nenhum canal setado\`'
else l1 = `<#${l1}>`

let contadorcha = db.get(`countchannel_${message.guild.id}`)
if(contadorcha == null) contadorcha = '\`Nenhum canal setado\`'
else contadorcha = `<#${contadorcha}>` 
    
let msgdocount = db.get(`textcount_${message.guild.id}`)
if(msgdocount == null) msgdocount = `\`Padrão\``  

   

    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de contador")    
    .setColor('5fa5e3')
    .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de contador abaixo!\n\n<:lunium:918729484365070376> Sistema de contador : ${contadorstatus}\n<:lunidois:918729484407029870> Canal do contador : ${contadorcha}\n<:lunitres:918729484285411390> Mensagem do contador : **" ${msgdocount} "**\n<:luniquatro:918729484318965810> Salvar configuração`)
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
    let butao4 =  new Discord.MessageButton()
    .setEmoji('<:luniquatro:918729484318965810>')
    .setStyle("SECONDARY")
    .setCustomId("butao4")

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3,butao4])
  
 message.reply({embeds:[embed],components:[row]}).then(msg => {
  setTimeout(()=>{msg.delete()},180000)


   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':
    r.deferUpdate()
    if(contadorstatus === '<:Desligado:906795288797257778>'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`<:correto:918747498707824681> | Sistema de contador **habilitado.**`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
 
  contadorstatus = '<:Ligado:906795236011933726>'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de contador")    
  .setColor('5fa5e3')
  .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de contador abaixo!\n\n<:lunium:918729484365070376> Sistema de contador : ${contadorstatus}\n<:lunidois:918729484407029870> Canal do contador : ${contadorcha}\n<:lunitres:918729484285411390> Mensagem do contador : **" ${msgdocount} "**\n<:luniquatro:918729484318965810> Salvar configuração`)
   
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     

     
  r.message.edit({embeds:[embed2b1]})
  }else if(contadorstatus === '<:Ligado:906795236011933726>'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`<:correto:918747498707824681> | Sistema de contador **desabilitado.**`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
  contadorstatus = '<:Desligado:906795288797257778>'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de contador")    
  .setColor('5fa5e3')
  .setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de contador abaixo!\n\n<:lunium:918729484365070376> Sistema de contador : ${contadorstatus}\n<:lunidois:918729484407029870> Canal do contador : ${contadorcha}\n<:lunitres:918729484285411390> Mensagem do contador : **" ${msgdocount} "**\n<:luniquatro:918729484318965810> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
    
  r.message.edit({embeds:[embed2b1]})
  }
  break;
  case 'butao2':
    r.deferUpdate()
    if(contadorstatus=== '<:Desligado:906795288797257778>'){
 let ccategori = new Discord.MessageEmbed()
 .setDescription(`<:fechar:918747498984665108> Hey, ${message.member} Você precisa abilitar o sistema de contador `)
 .setColor('5fa5e3')
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
  
  
 
 return  message.channel.send({embeds:[ccategori]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
}


 let ccategori = new Discord.MessageEmbed()
.setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} ! Mencione um canal válido.`)
.setColor('5fa5e3')
  
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
  
  

let sg = await message.channel.send({embeds:[ccategori]})

setTimeout(()=>{sg.delete()},30000)
const filter9 = res => {
return res.author.id === message.author.id && res.content.length;
};
const categoryCollector = await message.channel.awaitMessages({
  filter:filter9,
max: 1,
time: 30000
});


    
let category = categoryCollector.first().mentions.channels.first() ||message.guild.channels.cache.get(categoryCollector.first().content)


let cnh123 = new Discord.MessageEmbed()
.setDescription(`<:tentenovamente:918755014690893884> | Tente novamente \nEste canal é inválido `)
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  

if(!category) return categoryCollector.first().reply({embeds:[cnh123]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})
let j123 = new Discord.MessageEmbed()
.setDescription(`<:fechar:918747498984665108> | Hey, ${message.member} ! Mencione um canal de texto na proxima vez. ` )
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(category.type !== 'GUILD_TEXT') return categoryCollector.first().reply({embeds:[j123]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})


contadorcha = category
let embed2b1 = new Discord.MessageEmbed()
.setTitle("Sistema de contador")    
.setColor('5fa5e3')
.setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de contador abaixo!\n\n<:lunium:918729484365070376> Sistema de contador : ${contadorstatus}\n<:lunidois:918729484407029870> Canal do contador : ${contadorcha}\n<:lunitres:918729484285411390> Mensagem do contador : **" ${msgdocount} "**\n<:luniquatro:918729484318965810> Salvar configuração`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  

r.message.edit({embeds:[embed2b1]})

let dadasdsadasda = new Discord.MessageEmbed()


.setDescription(`<:correto:918747498707824681> | Canal setado com sucesso!`)
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


categoryCollector.first().reply({embeds:[dadasdsadasda]})  .then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)}) 



  
break;

case 'butao3':
  r.deferUpdate()
  let dadsad5454 = new Discord.MessageEmbed()
  .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} Você precisa setar o canal de contador `)
  .setColor('5fa5e3')
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
if(contadorcha == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad5454]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
let messagir = new Discord.MessageEmbed()
.setDescription(`<:e_fixadoTDN:844359619886579732> | Defina uma mensagem para o contador de membros.\n**Exemplo :** Temos {CONTADOR} membros. `)
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();



  let sti =  await message.channel.send({embeds:[messagir]})
const filter4 = res => { return res.author.id === message.author.id && res.content.length; };
const umbrarrmsg = await message.channel.awaitMessages({
  filter : filter4,
  max: 1,
  time: 30000
});

msgdocount = umbrarrmsg.first().content



if(umbrarrmsg.first().content.length > 3000) {

  let vd33dfdf = new Discord.MessageEmbed()


  .setDescription(`<:fechar:918747498984665108> | A mensagem definida para o contador não pode conter mais de 300 caracteres.    `)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
return     umbrarrmsg.first().reply({embeds:[vd33dfdf]}).then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  umbrarrmsg.first().delete()
   msg.delete()},5000)}) 
}


if(!umbrarrmsg.first().content.includes('{CONTADOR}')) {

  let vd33dfdf = new Discord.MessageEmbed()


  .setDescription(`<:e_fixadoTDN:844359619886579732> | Hey, ${message.member}. Insira {CONTADOR} na mensagem para utilizar como contador.     `)
  .setColor('5fa5e3')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
return     umbrarrmsg.first().reply({embeds:[vd33dfdf]}) .then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  umbrarrmsg.first().delete()
   msg.delete()},5000)})
}

let embed2brur1 = new Discord.MessageEmbed()
.setTitle("Sistema de contador")    
.setColor('5fa5e3')
.setDescription(`<a:estrela:918882750742810654> Configure nosso sistema de contador abaixo!\n\n<:lunium:918729484365070376> Sistema de contador : ${contadorstatus}\n<:lunidois:918729484407029870> Canal do contador : ${contadorcha}\n<:lunitres:918729484285411390> Mensagem do contador : **" ${msgdocount} "**\n<:luniquatro:918729484318965810> Salvar configuração`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()


r.message.edit({embeds:[embed2brur1]})

let vd33dfdf = new Discord.MessageEmbed()


.setDescription(`<:correto:918747498707824681> | Mensagem alterada para : **" ${umbrarrmsg.first().content} "**  `)
.setColor('5fa5e3')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

umbrarrmsg.first().reply({embeds:[vd33dfdf]})   .then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  umbrarrmsg.first().delete()
   msg.delete()},5000)})

break;
case 'butao4':
  r.deferUpdate()
  if(contadorstatus == '<:Desligado:906795288797257778>'){
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.delete(`contadorstatus_${message.guild.id}`)
   }else{
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.set(`contadorstatus_${message.guild.id}`,'on')
    
   }
   
   if(msgdocount == '\`Padrão\`'){
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.delete(`textcount_${message.guild.id}`)
   }else{
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.set(`textcount_${message.guild.id}`,msgdocount)
    
   }

   if(contadorcha !== l1){
    if(contadorcha == '\`Nenhum canal setado\`'){
if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
}
db.delete(`countchannel_${message.guild.id}`)
    }else{
db.set(`countchannel_${message.guild.id}`,contadorcha.id)


    }
   }

   if(contadorstatus == '<:Desligado:906795288797257778>'){
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
  db.delete(`contadorstatus_${message.guild.id}`)
     }else{
     
  db.set(`contadorstatus_${message.guild.id}`,'on')
  let conty = db.get(`contadorstatus_${message.guild.id}`);
 
if(conty === null){
return;
    }
let ashx = db.get(`countchannel_${message.guild.id}`);
 
 if(ashx === null){
return;
    }
let numbertype = db.get(`numbertype_${message.guild.id}`)



//  try{

    
let count = message.guild.memberCount
    
if(numbertype == null){
const numberstyle = {
0:'<a:zero:863920130466512916>',
1:'<a:um:861808666612334592>',
2:'<a:dois:861808729220972544>',
3:'<a:tres:861808778101784576>',
4:'<a:quatro:861808842505322496>',
5:'<a:cinco:861808905376890880>',
6:'<a:seis:861808945286479873>',
7:'<a:sete:861809133073858573>',
8:'<a:oito:861809066498195487>',
9:'<a:nove:861809218445246515>'

    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}else if(numbertype ==1 ){
    
const numberstyle = {
0:'<a:n0:861805308233252864>',
1:'<a:n1:861805356895305758>',
2:'<a:n2:861805488219881493>',
3:'<a:n3:861805544749400076>',
4:'<a:n4:861805636673470466>',
5:'<a:n5:861805759457525811>',
6:'<a:n6:861805779321618433>',
7:'<a:n7:861805792024854608>',
8:'<a:n8:861805805343211530>',
9:'<a:n9:861805826868248606>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}
else if(numbertype ==2 ){
    
const numberstyle = {
0:'<a:emoji0:861793341922213889>',
1:'<a:emoji1:861793376781074442>',
2:'<a:emoji2:861793401970884608>',
3:'<a:emoji3:861793435852603404>',
4:'<a:emoji4:861793468526624778>',
5:'<a:emoji5:861793500290744360>',
6:'<a:emoji6:861793537166409738>',
7:'<a:emoji7:861793569127792640>',
8:'<a:emoji8:861793605966233610>',
9:'<a:emoji9:861793639767998494>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}
else if(numbertype ==3 ){
    
const numberstyle = {
0:'<a:0gold:863941823554912267>',
1:'<a:1gold:863942688218284033>',
2:'<a:2gold:863942688226148362>',
3:'<a:3gold:863942949520015360>',
4:'<a:4gold:863943310955380737>',
5:'<a:5gold:863943929766740038>',
6:'<a:6gold:863944763963211807>',
7:'<a:7gold:863944764008824862>',
8:'<a:8gold:863947575034642442>',
9:'<a:9gold:863947767407575060>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}
else if(numbertype ==4 ){
    
const numberstyle = {
0:'<a:0gradient:863935254741909514>',
1:'<a:1gradient:863935254871670855>',
2:'<a:2gradient:863935254666805248>',
3:'<a:3gradient:863935254439919618>',
4:'<a:4gradient:863935347569721355>',
5:'<a:5gradient:863935255051239435> ',
6:'<a:6gradient:863935254447128598>',
7:'<a:7gradient:863935255018864671>',
8:'<a:8gradient:863935255160422430>',
9:'<a:9gradient:863935347536429066>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}else if(numbertype ==5 ){
    
const numberstyle = {
0:'<a:0_3dblack:863932702674780200>',
1:'<a:1_3dblack:863932701953753088>',
2:'<a:2_3dblack:863932702474108928>',
3:'<a:3_3dblack:863932702624710656>',
4:'<a:4_3dblack:863932702682775563>',
5:'<a:5_3dblack:863932702876368956>',
6:'<a:6_3dblack:863932702570184706>',
7:'<a:7_3dblack:863932702869028864>',
8:'<a:8_3dblack:863932703022514208>',
9:'<a:9_3dblack:863932703196184586>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}
else if(numbertype ==6 ){
    
const numberstyle = {
0:'<a:0_3dred:863932700230811648>',
1:'<a:1_3dred:863932700746579989>',
2:'<a:2_3dred:863932702109204521>',
3:'<a:3_3dred:863932702109466665>',
4:'<a:4_3dred:863932702041440277>',
5:'<a:5_3dred:863932702965497877>',
6:'<a:6_3dred:863932703744589834>',
7:'<a:7_3dred:863932702998659123>',
8:'<a:8_3dred:863932703547850772>',
9:'<a:9_3dred:863932703217156126>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}
else if(numbertype ==7 ){
    
const numberstyle = {
0:'<a:0_3dgold:863932769759526933>',
1:'<a:1_3dgold:863932703631081512>',
2:'<a:2_3dgold:863932703502237727>',
3:'<a:3_3dgold:863932703959023636>',
4:'<a:4_3dgold:863932704126140476>',
5:'<a:5_3dgold:863932767514132530>',
6:'<a:6_3dgold:863932767979700224>',
7:'<a:7_3dgold:863932768262029333>',
8:'<a:8_3dgold:863932768093601813>',
9:'<a:9_3dgold:863932768752369674>'
    
};

count = numberreaplce.letterTrans(count, numberstyle)
}
else if(numbertype ==8 ){
    
const numberstyle = {
0:'<a:blue0:861805948611723281>',
1:'<a:blue1:861805933453508658>',
2:'<a:blue2:861805969842241566>',
3:'<a:blue3:861806141990502410>',
4:'<a:blue4:861806157802635304>',
5:'<a:blue5:861806169403031553>',
6:'<a:blue6:861806176860635147>',
7:'<a:blue7:861806191390097428>',
8:'<a:blue8:861806205038231572>',
9:'<a:blue9:861806215272857620>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)
}else if(numbertype ==9 ){
    
const numberstyle = {
0:'<a:0n:863982337665794048>',
1:'<a:1n:863982337859780628>',
2:'<a:2n:863982339012034570>',
3:'<a:3n:863982337985740811>',
4:'<a:4n:863982338538995722>',
5:'<a:5n:863982338480668703>',
6:'<a:6n:863982338747531325>',
7:'<a:7n:863982338736521256>',
8:'<a:8n:863982402711453764>',
9:'<a:9n:863982403293806632>'
    
};

count = numberreaplce.letterTrans(`${count}`, numberstyle)

}
    
let txt = db.get(`textcount_${message.guild.id}`)
if(txt == null) txt =count
    else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
    let timerement = 360000


    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
    
client.countdown.get(message.guild.id).clear()
    }
    
    
    client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement))


  
     }
   
    let ds3 = new Discord.MessageEmbed()
    

    .setDescription(`<:correto:918747498707824681> | Configuração salva com sucesso!`)
    .setColor('5fa5e3')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   message.channel.send({embeds:[ds3]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
r.message.delete().catch(()=>{});


break;
 }

    })
  })
   
  
  }

}