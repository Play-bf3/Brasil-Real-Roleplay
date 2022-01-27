const Discord = require("discord.js"); 

const {
  version
} = require("discord.js");
const { mem, cpu, os } = require('node-os-utils');
const { default_prefix } = require("../../config.json");
const moment = require("moment"); 
const db = require("quick.db")

moment.locale('pt-BR')
module.exports = {
  nome: "info",
  coolwdon:7000,
  alternativas: ["botinfo"],
  run: async  (client, message, args) => {
    	
  let createdate = moment.utc(client.user.createdAt).format('DD/MMM/YYYY');
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  const { totalMemMb, usedMemMb } = await mem.info();

  let embed = new Discord.MessageEmbed()
  .setColor("#5fa5e3")
    
  .setDescription(`Olá, sou a ${client.user.username}\nFui criado para moderar seu servidor! \n**Veja nosso GUIA aqui :**\n\n<:forma:918749758632378408> Suporte :[Clique Aqui](https://discord.gg/h9kG23wX2R)\n<:forma:918749758632378408> Me Adicione :[Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\n<:forma:918749758632378408> Vote em mim :[Clique Aqui](https://top.gg/bot/853108013656571944)\n\n<:graf:847305141513879592>  Estatísticas:\n<:maismember:846839725058031687>  Servidores: \`${client.guilds.cache.size}\` \n<:chat:844778163493666857> Canais: \`${client.channels.cache.size}\` \n<:Members_gifzada:844416125604200449> Usuários: \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\`\n<:data:844416167077740564> Criado em: \`${createdate}\`\n<:botone:846841629636952067> CPU INFO:\n<:microchip:871582127320358972> Modelo: \`${cpu.model()}\`\n<:cores:871583521926439002> Cores: \`${cpu.count()}\`\n\n<:ran:919035481814106172> **RAM INFO:**\n<:maistotal:919035481705021510> Total: \`${totalMemMb} MB\`\n<:usado:919035481717633044> Usado: \`${usedMemMb} MB\`\n\n<:info:919035481713414164> **INFORMAÇÕES:**\n<:prefixo:919035481696665620> Prefixo padrão: \`${default_prefix}\`\n<:dev:865403007398445067> Desenvolvido pelo: <@853064402307252231>\n<:js:871575509765595146> Linguagem: Javascript\n<:nodejs:871575884165955626> Versão do Node.js: \`${process.version}\`\n<:discordjs:871576422425169920> Versão do Discord.js: \`${version}\`\n<:host:919038908866629642> Hospedagem: \`Vps\`\n<:ethernet:871577596083712030> Ping: \`${client.ws.ping}\`\n\nTodo os direitos reservados para Luni®`)
    .setImage(`https://i.imgur.com/7SJ0kWl.png`)


    message.reply({embeds:[embed]})
}
}