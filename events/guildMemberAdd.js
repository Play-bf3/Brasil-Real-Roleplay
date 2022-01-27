const db = require("quick.db");
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
const Discord = require('discord.js')
function countador(client, member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 
  let conty = db.get(`contadorstatus_${member.guild.id}`);
  if(conty === null){
    return;
}
  let ashx = db.get(`countchannel_${member.guild.id}`);
 if(ashx === null){
  return;
}
   let numbertype = db.get(`numbertype_${member.guild.id}`)
  ;
    
  
 try{
  

   let count = member.guild.memberCount

   if(numbertype == null || numbertype == 0){
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

    let txt = db.get(`textcount_${member.guild.id}`)
    if(txt == null) txt =count
else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)


let timerement = 360000


if(client.countdown.get(member.guild.id) !== 0 && client.countdown.get(member.guild.id) !== undefined){ timerement = 360000-client.countdown.get(member.guild.id).remaining()

  client.countdown.get(member.guild.id).clear()
}


client.countdown.set(member.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));


  
}catch(e){
  return;}
  

}
async function mute(client,member){
  try{
if(db.get(`usersmuted_${message.guild.id}_${member.id}`)){

  let muterole = member.guild.roles.cache.find(x => x.name === `${client.user.username} Mute`)
  member.roles.add(muterole)
}
}catch(e){
  return;}
}



function autorole(client, member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;

try{
    let role = db.get(`autorole_${member.guild.id}`);

    let cargo = member.guild.roles.cache.get(role);
   
    if(role === null)
    {
    return;
    };
    member.roles.add(cargo); 
  }catch(e){
    return;}
}


async function antibot(client, member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 try{
  let ashx = db.get(`antibot_${member.guild.id}`);
   
  if(ashx === null){
  return;
  };

 if(member.user.bot === true) {
   
  const log = await member.guild.fetchAuditLogs({
    type: 'BOT_ADD'
  }).then(audit => audit.entries.first())
 if(log.executor.id == member.guild.ownerID)return;
  member.kick([`Sistema de Antibots ${client.user.username}`])

} 
}catch(e){
  return;}
  
}

async function invitelog(client, member){
  

  if(member.guild.id !== member.guild.id) return
  let sistelevel23 = db.get(`memberjoin_${member.guild.id}`);
  

 if(sistelevel23 === null)  return;

  const cachedInvites = client.invites.get(member.guild.id);

  const zhwe = await member.guild.invites.fetch();
  client.invites.set(member.guild.id, zhwe);
 
  if(member.guild.vanityURLCode != null){
  
   var gi = client.invites.get(member.guild.id);
  gi.set(member.guild.vanityURLCode,await member.guild.fetchVanityData());
    client.invites.set(member.guild.id, gi);
  }
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  const newInvites = await client.invites.get(member.guild.id);

 const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);

 if(usedInvite == undefined){
  let id = db.fetch(`logmemberjoin_${member.guild.id}`)
  if(!id) return;
   var canal = client.channels.cache.get(id)
   const hooks1 = await canal.fetchWebhooks();
   let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
   if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')
   const embed = await new Discord.MessageEmbed()
   .setColor("#5fa5e3")
   .setTitle(`<:enterguild:850137975911088129> | Entrada`)
  .setDescription(`${member} (${member.user.tag})\n<:date:850138352114991135> ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord\n<:invite:850138427252146246> Não foi possível encontrar quem o convidou`)
  const hooks = await canal.fetchWebhooks();
     let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
     webhook.send({
       username: client.user.username,
       avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
      embeds: [embed]
   });


 }else{

  if(usedInvite.code == member.guild.vanityURLCode ){

   let id = db.fetch(`logmemberjoin_${member.guild.id}`)
   if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')
    const embed = await new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    .setTitle(`<:enterguild:850137975911088129> | Entrada`)
   .setDescription(`${member} (${member.user.tag})\n<:date:850138352114991135> ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord\n<:invite:850138427252146246> Vanity invite **${member.guild.vanityURLCode}** `)
   const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
    });
  
  }else{
  db.add(`invitotal_${member.guild.id}_${usedInvite.inviter.id}`,1)


 
  let id = db.fetch(`logmemberjoin_${member.guild.id}`)
   if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')

    
 
   if (Math.floor((new Date() - member.user.createdAt) / 86400000) < 25){
     db.add(`fakesinvite_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`,1)
     db.set(`inviteby_${member.guild.id}_${member.user.id}`,usedInvite.inviter.id)

     db.set(`invitecode_${member.guild.id}_${member.user.id}`,usedInvite.code)
     let fakes = db.get(`fakesinvite_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
     let verdade = db.get(`invitesVerdadeiros_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
     let saida = db.get(`saidasinvites_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
     if(fakes===null) fakes='0'
     if(verdade ===null) verdade ='0'
     if(saida===null) saida ='0'
     let itotal = +fakes + +verdade + +saida
      const embed = await new Discord.MessageEmbed()
      .setColor("#5fa5e3")
      .setTitle(`<:enterguild:850137975911088129> | Entrada`)
     .setDescription(`${member} (${member.user.tag})\n<:date:850138352114991135> ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord(Conta fake)\n<:invite:850138427252146246> ${usedInvite.inviter.tag} ${verdade} (${saida} Saídas, ${fakes} Fakes, ${itotal})  `)
     const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
    });

  
   }else{

      db.add(`invitesVerdadeiros_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`,1)
      db.set(`inviteby_${member.guild.id}_${member.user.id}`,usedInvite.inviter.id)
  
      db.set(`invitecode_${member.guild.id}_${member.user.id}`,usedInvite.code)
      let fakes = db.get(`fakesinvite_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
      let verdade = db.get(`invitesVerdadeiros_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
      let saida = db.get(`saidasinvites_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
      
     if(fakes===null) fakes='0'
     if(verdade ===null) verdade ='0'
     if(saida===null) saida ='0'
   
     let itotal = +fakes + +verdade + +saida
    const embed = await new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    .setTitle(`<:enterguild:850137975911088129> | Entrada`)
   .setDescription(`${member} (${member.user.tag})\n<:date:850138352114991135> ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord\n<:invite:850138427252146246> ${usedInvite.inviter.tag} ${verdade} (${saida} Saídas, ${fakes} Fakes, ${itotal} Total)  `)
   const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
    });

     }
    }
    
  }
}
async function novo(client,member){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;

try{
    let role = db.get(`notroleregister_${member.guild.id}`);

    let cargo = member.guild.roles.cache.get(role);
   
    if(role === null)
    {
    return;
    };
    member.roles.add(cargo); 
  }catch(e){
    return;}
}
async function antifake(client,member) {

  let antikfake = db.get(`antifakes_${member.guild.id}`)

let antikfakedias = db.get(`antifakesdias_${member.guild.id}`)
if(antikfake){
  
  if(antikfakedias){

    if (Math.floor((new Date() - member.user.createdAt) / 86400000) < antikfakedias){
      member.kick([ `Sistema anti fake ${client.user.username}`]); 
    }

  }

}
}
module.exports = async (client, member) => {

invitelog(client, member)
  countador(client, member)
  mute(client,member)
  autorole(client, member)
  antibot(client, member)
  novo(client,member)
  antifake(client,member)
}

