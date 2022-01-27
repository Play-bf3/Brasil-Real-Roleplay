const Discord = require("discord.js");
const db = require("quick.db");
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
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
   let numbertype = db.get(`numbertype_${member.guild.id}`) ;
    
  
   try{
  

   let count = member.guild.memberCount

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
async function b123(client,member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  let sistelevel = db.get(`memberjoinlog_${member.guild.id}`);

  if(sistelevel === null)  return;
  let id = db.fetch(`systemlogs_${member.guild.id}`)
    if(!id) return;
    

  let invicode = db.get(`invitecode_${member.guild.id}_${member.user.id}`)
  let conferi = db.get(`inviteby_${member.guild.id}_${member.user.id}`)
  if(conferi===null)return;
  db.add(`saidasinvites_${member.guild.id}_${invicode}_${conferi}`,1)
  db.delete(`inviteby_${member.guild.id}_${member.user.id}`)
  db.delete(`invitecode_${member.guild.id}_${member.user.id}`)

}
async function kicklog(client,member){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;



    let sistelevel = db.get(`kicku_${member.guild.id}`);
 
    if(sistelevel === null)  return;
   
  
    
  if(member.guild.id !== member.guild.id) return
    let id = db.fetch(`logkick_${member.guild.id}`)
  if(!id) return;
  var canal = client.channels.cache.get(id)
  const hooks1 = await canal.fetchWebhooks();
  let webhook1 = hooks1.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
  if(webhook1 === undefined )canal.createWebhook('Luni (Event Log)')
  const log = await member.guild.fetchAuditLogs({
    type: "MEMBER_KICK"
  }).then(audit => audit.entries.first())
   if(member.id != log.target.id) return;

 
  let razao = log.reason
if(razao == null ) razao = 'A razão não foi inserida'

const user = log.executor
const membro = log.target
var embed = new Discord.MessageEmbed()
.setTitle(`<:ban:844417732606427139> Membro expulso `)
.setColor("5fa5e3")
.setTimestamp()
.setDescription(`<:Members_gifzada:844416125604200449> ${membro.tag}(${membro.id}) foi expulso por ${user.tag}(${user.id})\n<:richPresence_RDF:844417541187305472> Motivo : ${razao}  `)

const hooks = await canal.fetchWebhooks();
let webhook = hooks.find(a => a.name === 'Luni (Event Log)' && a.owner.id === client.user.id);
webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
 embeds: [embed]
});



}
async function antipirvkick(client,member){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;



    let sistelevel = db.get(`antikickpriv_${member.guild.id}`);
 
    if(sistelevel === null)  return;
   
  
    
  if(member.guild.id !== member.guild.id) return
 
  const log = await member.guild.fetchAuditLogs({
    type: "MEMBER_KICK"
  }).then(audit => audit.entries.first())
   if(member.id != log.target.id) return;
   const user = log.executor
   let usergt =  member.guild.members.cache.get(user.id)

   if(usergt.user.bot){
     if(!db.get(`bloqbotkick_${member.guild.id}`)){
       return;
     }
   }
   if( usergt.guild.me.roles.highest.position <=  usergt.roles.highest.position) return;
   if(user.id === await usergt.guild.fetchOwner().then((data)=>data.id)) return;
   if(client.user.id === user.id) return;
   usergt.ban({days: 7,reason: `Sistema de anti privatização de kick ${client.user.username}|Motivo:${user.tag}(${user.id}) tentou privatizar uma expulsão`}); 
}
module.exports = (client,member) => {
  countador(client, member)
 b123(client,member)
 kicklog(client,member)
 antipirvkick(client,member)

}
 