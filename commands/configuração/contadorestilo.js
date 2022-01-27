const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
module.exports = {
  nome: "contadorestilo",
  coolwdon:9000,
  alternativas: ["contadorestilo"],
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
if(contadorstatus ==null){
    let ccategori = new Discord.MessageEmbed()
    .setDescription(`<:fechar:918747498984665108> Hey, ${message.member} Você precisa abilitar o sistema de contador `)
    .setColor('5fa5e3')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();


    
    return  message.reply({embeds:[ccategori]})
}

let sadasdasd = db.get(`countchannel_${message.guild.id}`)
if(sadasdasd ==null){
    let ccategori = new Discord.MessageEmbed()
    .setDescription(`<:e_fixadoTDN:844359619886579732> Hey, ${message.member} Você precisa setar o canal de contador `)
    .setColor('5fa5e3')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();


    
    return  message.reply({embeds:[ccategori]})
}


  let countstile = db.get(`numbertype_${message.guild.id}`)
  if(countstile == null)countstile = '<a:zero:863920130466512916>'
  else if(countstile == 1)countstile = '<a:n1:861805356895305758>'
  else if(countstile == 2)countstile = '<a:emoji2:861793401970884608>'
  else if(countstile == 3)countstile = '<a:3gold:863942949520015360>'
  else if(countstile == 4)countstile = '<a:4gradient:863935347569721355>'
  else if(countstile == 5)countstile = '<a:5_3dblack:863932702876368956>'
  else if(countstile == 6)countstile = '<a:6_3dred:863932703744589834>'
  else if(countstile == 7)countstile = '<a:7_3dgold:863932768262029333>'
  else if(countstile == 8)countstile = '<a:blue8:861806205038231572>'
  else if(countstile == 9)countstile = '<a:9n:863982403293806632>'
  const embed = new Discord.MessageEmbed()
.setTitle(`${client.user.username} | Estilo do contador`)
  .setDescription(`Estilo atual:\n${countstile}\n\nContadores disponíveis: \n <a:zero:863920130466512916> <a:n1:861805356895305758> <a:emoji2:861793401970884608> <a:3gold:863942949520015360> <a:4gradient:863935347569721355>\n <a:5_3dblack:863932702876368956> <a:6_3dred:863932703744589834> <a:7_3dgold:863932768262029333> <a:blue8:861806205038231572> <a:9n:863982403293806632>\n\nLista de estilo de contador, Escolha um emoji que corresponde ao estilo do contador. `)
//.setImage("https://media.discordapp.net/attachments/845717339252326480/848954153715892275/lunibackgrounds.png")
  .setColor('5fa5e3');


  const butao = new Discord.MessageSelectMenu({
    customId:`aaa`,
    placeholder: 'Clique para visualizar os estilos de contador',
  }).addOptions([
{
label: `Emoji Dark Led`,
emoji:'<a:zero:863920130466512916>',
value: `emoji1`,
},{

label: `Emoji Purple Expansive`,
emoji:'<a:n1:861805356895305758>',
value: `emoji2`},{
  label: `Emoji Purple Chrome`,
  emoji:'<a:emoji2:861793401970884608>',
  value: `emoji3`,
  },{
    label: `Emoji Fire Expansive`,
    emoji:'<a:3gold:863942949520015360>',
    value: `emoji4`,
    },{
      label: `Emoji Red Gradient`,
      emoji:'<a:4gradient:863935347569721355>',
      value: `emoji5`,
      },{
        label: `Emoji Black Piano`,
        emoji:'<a:5_3dblack:863932702876368956>',
        value: `emoji6`,
        },{
          label: `Emoji Red And White`,
          emoji:'<a:6_3dred:863932703744589834>',
          value: `emoji7`,
          },{
            label: `Emoji Gold And White`,
            emoji:'<a:7_3dgold:863932768262029333>',
            value: `emoji8`,
            },{
              label: `Emoji Blue Led`,
              emoji:'<a:blue8:861806205038231572>',
              value: `emoji9`,
              },{
                label: `Emoji Blue Matte`,
                emoji:'<a:9n:863982403293806632>',
                value: `emoji10`,
                }
])
const row = new Discord.MessageActionRow()
row.addComponents([butao])
message.reply({embeds : [embed], components: [row]})

.then((msg)=>{

const inf = (interaction) => interaction.user.id === message.author.id 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{

switch (i.values.toString()) {
case 'emoji1':{
 
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === null) {
   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return  i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:zero:863920130466512916>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.delete(`numbertype_${message.guild.id}`);
 i.message.channel.send({embeds:[ad1]})


 let ashx = db.get(`countchannel_${message.guild.id}`);
    

 
 //  try{
 
  let count = message.guild.memberCount
     
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
  
   
   let txt = db.get(`textcount_${message.guild.id}`)
   if(txt == null) txt =count
   else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
   let timerement = 360000


  
  
  if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(member.guild.id).remaining()
  
  client.countdown.get(message.guild.id).clear()
  }
  
  client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;
case 'emoji2':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === 1) {
   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return  i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:n1:861805356895305758>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.set(`numbertype_${message.guild.id}`,1)
   i.message.channel.send({embeds:[ad1]})


 let ashx = db.get(`countchannel_${message.guild.id}`);
    

 
 //  try{
 
   
  let count = message.guild.memberCount
   
    
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
 
 
   
   let txt = db.get(`textcount_${message.guild.id}`)
   if(txt == null) txt =count
   else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
   let timerement = 360000


  
  
  if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(member.guild.id).remaining()
  
  client.countdown.get(message.guild.id).clear()
  }
  
  client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
}break;
case 'emoji3':{

  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 2) {
 const ad = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel.send({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:emoji2:861793401970884608>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,2)
 i.message.channel.send({embeds:[ad1]})


let ashx = db.get(`countchannel_${message.guild.id}`);


//  try{

 
let count = message.guild.memberCount
 
 
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
 
 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));




client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;

case 'emoji4':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === 3) {
   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:3gold:863942949520015360>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.set(`numbertype_${message.guild.id}`,3)
   i.message.channel.send({embeds:[ad1]})


 
 let ashx = db.get(`countchannel_${message.guild.id}`);
    
   
   
 
 //  try{
 
   
  let count = message.guild.memberCount
   
  
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
  
    
   
   
   let txt = db.get(`textcount_${message.guild.id}`)
   if(txt == null) txt =count
   else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
   let timerement = 360000


   if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
   
 client.countdown.get(message.guild.id).clear()
   }
   
   client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
}break;
case 'emoji5':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === 4) {
   const ad = new Discord.MessageEmbed()
   .setColor('5fa5e3')
   .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('5fa5e3')
    .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:4gradient:863935347569721355>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.set(`numbertype_${message.guild.id}`,4)
   i.message.channel.send({embeds:[ad1]})

 
   let ashx = db.get(`countchannel_${message.guild.id}`);
  
   
   //  try{
   
 
    let count = message.guild.memberCount
 
  
 
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
 
 
 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
   client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;

case 'emoji6':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 5) {
 const ad = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel.send({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:5_3dblack:863932702876368956>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,5)
 i.message.channel.send({embeds:[ad1]})

let ashx = db.get(`countchannel_${message.guild.id}`);

//  try{

 
let count = message.guild.memberCount
 

 
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
 
 
 
 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
//i.message.channel.send
}break;

case 'emoji7':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 6) {
 const ad = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel.send({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:6_3dred:863932703744589834>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,6)
 i.message.channel.send({embeds:[ad1]})

let ashx = db.get(`countchannel_${message.guild.id}`);
  

//  try{s

 
let count = message.guild.memberCount
 

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
 
 
 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;

case 'emoji8':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 7) {
 const ad = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel.send({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:7_3dgold:863932768262029333>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,7)
 i.message.channel.send({embeds:[ad1]})

let ashx = db.get(`countchannel_${message.guild.id}`);

 

//  try{

 
let count = message.guild.memberCount
 

 
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

 
 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;

case 'emoji9':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 8) {
 const ad = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:blue8:861806205038231572>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,8)
 i.message.channel({embeds:[ad1]})

let ashx = db.get(`countchannel_${message.guild.id}`);
  

        
//  try{
  
let count = message.guild.memberCount
 
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

 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
}break;

case 'emoji10':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 9) {
 const ad = new Discord.MessageEmbed()
 .setColor('5fa5e3')
 .setDescription(`<:fechar:918747498984665108> | Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('5fa5e3')
  .setDescription(`<:correto:918747498707824681> | Estilo do contador atualizado para : <a:9n:863982403293806632>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,9)
 i.message.channel({embeds:[ad1]})


 let ashx = db.get(`countchannel_${message.guild.id}`);


 //  try{

  let count = message.guild.memberCount


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

}

count = numberreaplce.letterTrans(`${count}`, numberstyle)

 

let txt = db.get(`textcount_${message.guild.id}`)
if(txt == null) txt =count
else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 
let timerement = 360000


if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()

 client.countdown.get(message.guild.id).clear()
}

client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
 

}break;


}


})
})

  }
}