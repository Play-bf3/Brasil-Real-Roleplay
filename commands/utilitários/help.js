const Discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const ms = require('ms')
const path = require('path')


module.exports = {
  nome: "help",
  coolwdon:10000,
  alternativas: ["ajuda"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  

   let memb = message.author.id

 
  const embed = new Discord.MessageEmbed ()
	

  .setTitle("<:painel:918712303325687818> PAINEL DE ACESSO")


.setImage('https://i.imgur.com/kRMAYi1.png')
	.setColor('5fa5e3')
 //.setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    .setDescription(`<:setar:918717053005873222> Veja abaixo nossas opções principais de comandos. De acordo com os emojis escolha a página na que tenha interesse :\n<:lunium:918729484365070376> **| Admininstração**\n Use para visualizar comandos de admininstração.\n<:lunidois:918729484407029870> **| Utilitários**\nUse para visualizar comandos de utilitários.\n<:lunitres:918729484285411390> **| Vip**\nUse para visualizar comandos de vip.\n<:luniquatro:918729484318965810> **| Registro**\nUse para visualizar comandos de registro.\n<:lunicinco:918729740825788456> **| Ferramentas**\nUse para visualizar comandos de ferramentas.\n<:luniseis:918729740477665322> **| Configuração**\nUse para visualizar comandos de configuração de sistemas.\n\n<:setar:918717053005873222> Servidor suporte : [Clique Aqui](https://discord.gg/h9kG23wX2R)  \n<:setar:918717053005873222> Convite do bot : [Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\n<:setar:918717053005873222> Votar em mim : [Clique Aqui](https://top.gg/bot/853108013656571944)`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
     
   
	

    const embed1 = new Discord.MessageEmbed ()
    .setTitle("<:ponto:918736074845618176> Comandos de Administração:")
  //.setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    .setDescription(`<a:loop:918709187146559538> **Comandos de banimento/expulsão**\n**${prefix}ban** <usuario> para banir usuario.\n**${prefix}unban** <ID do usuário> desbanir um usuário. \n**${prefix}kick** <usuário> para expulsar usuário.\n\n<a:loop:918709187146559538> **Comandos de Mute**\n**${prefix}mute** <usuario> <tempo> para mutar usuário.\n**${prefix}unmute** <usuario> para desmutar usuário. \n\n<a:loop:918709187146559538> **Comandos de Advertência**\n**${prefix}adv** <usuario> <motivo> setar advertencia.\n**${prefix}radv** <usuario> <motivo> retirar advertencia.\n\n<a:loop:918709187146559538> **Comandos de Canais**\n**${prefix}lock** para bloquear um canal.\n**${prefix}unlock** para desbloquear um canal.\n\n<a:loop:918709187146559538> **Emoji**\n**${prefix}addemoji** <emoji> ou <nome e arquivo jpeg/gif/png> para adicionar emoji `)
    .setImage('https://i.imgur.com/Hncmfql.png')
    .setColor('5fa5e3')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

  const embed2 = new Discord.MessageEmbed ()

    
    .setTitle("<:ponto:918736074845618176> Comandos de Utilitários:")
   // .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    
    .setDescription(`<a:loop:918709187146559538>  **Informações de usuário:**\n**${prefix}avatar** avatar de seu perfil ou outra pessoa mencionada.\n**${prefix}afk** para entrar em modo afk.\n**${prefix}userinfo** use para saber informações sobre sua conta ou outra pessoa mencionada.\n**${prefix}banner** banner de seu perfil ou outra pessoa mencionada.\n\n<a:loop:918709187146559538> **Interação entre servidor**\n**${prefix}serverinfo** obter informações do servidor.\n**${prefix}servericon** obter avatar do servidor.\n**${prefix}serverbanner** obter banner do servidor.\n**${prefix}serverinvitebanner** obter banner de invite do servidor.\n\n<a:loop:918709187146559538> **Interação para ban gif / kick gif**\n**${prefix}gifban** <imagem> ou <linkdaimagem> personalizar gif ao banir.\n**${prefix}gifkick** <imagem> ou <linkdaimagem> personalizar gif ao expulsar.\n\n<a:loop:918709187146559538> **Interação entre usuários**\n**${prefix}marry** pedir um usuário em casamento.\n**${prefix}divorce** pedir divórcio do casamento.\n**${prefix}shippar** <usuario1> <usuario2> shippar usuários.\n**${prefix}kiss** <usuario1> <usuario2> interação para beijar outro usuário.\n**${prefix}hug** <usuario1> <usuario2> interação para abraçar outro usuário. \n**${prefix}tapa** Interação para dar tapa outro usuário.\n\n<a:loop:918709187146559538> **Interação para perfil**\n**${prefix}profile** abre seu perfil por completo.\n**${prefix}biografia** descreva uma biografia.\n**${prefix}rank** veja o rank de level.\n**${prefix}level** veja seu level ou de outro usuário.\n**${prefix}rep** <usuario> para adiciomar rep em um membro.\n\n<a:loop:918709187146559538> **Comandos de Invite/convite**\n**${prefix}div** veja seus convites ou de outro usuário.\n**${prefix}divs** veja o rank de invites.\n\n<a:loop:918709187146559538> **Comandos de Call**\n**${prefix}tempo** veja seu tempo em call ou de outro usuário.\n**${prefix}rtempo** veja o rank de tempo em call.\n\n<a:loop:918709187146559538> **Comandos de registro**\n**${prefix}registro** veja seus registros ou de outro usuário.\n**${prefix}registros** veja o rank de registro.`)
    
    
  .setImage('https://i.imgur.com/ai860zP.png')
    .setColor('5fa5e3')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    const embed3 = new Discord.MessageEmbed ()

    .setTitle("<:ponto:918736074845618176> Comandos de Vip:")
 // .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    .setImage('https://i.imgur.com/KCOUKru.png')
    .setDescription(`<a:loop:918709187146559538>  **Setar permissão VIP ou Remover permissão VIP e Configurar VIP:**\n**${prefix}vipsetup <create|config|delete|list> <nome do vip>** utilize este comando para criar deletar ou configurar VIPS.\n**${prefix}setvip <usuário> <nome do vip>** utilize este comando para setar VIP a um usuário.\n**${prefix}deletevip** deletar VIP do proprietário do vip.\n**${prefix}vip** configurar o seu VIP.\n\n<a:loop:918709187146559538> ** Adicionar e Remover VIP :**\n**${prefix}addvip <usuário>** adicionar tag VIP em um usuário.\n**${prefix}removevip <usuário>** remover tag VIP de um usuário.\n**${prefix}addvipc <usuário>** adicionar permissão VIP em um usuário.\n**${prefix}removevipc <usuário>** remover permissão VIP de um usuário.`)
    .setColor('5fa5e3')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    const embed4 = new Discord.MessageEmbed ()

    .setTitle("<:ponto:918736074845618176>  Comandos de Registro:")
//  .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    .setImage('https://i.imgur.com/Jk9C4p6.png')
    .setDescription(`<a:loop:918709187146559538>  **Registrar usuário:**\n**${prefix}registrar <usuário>** para registrar um usuário.\n<a:loop:918709187146559538> ** Configuração do Sistema de Registro:**\n**${prefix}regiseter config** configurar o sistema de registro.\n**${prefix}register reaction <on|off>** para ativar ou desativar o sistema de registro por reação.\n**${prefix}register reaction create <nomedapagina>** criar uma página de registro por reação.\n**${prefix}register reaction page <nomedapagina>** visualizar uma página de registro por reação.`)
    .setColor('5fa5e3')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();


	
   const embed5 = new Discord.MessageEmbed ()
   
    .setTitle("<:ponto:918736074845618176> Comandos de Ferramentas:")
  // .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    .setImage('https://i.imgur.com/fMvRA28.png')
    .setDescription(`<a:loop:918709187146559538> **Informações e configurações sobre o bot:**\n**${prefix}botinfo** para se informar sobre a ${client.user.username}.\n**${prefix}prefix <prefix>** para mudar prefixo do bot.\n**${prefix}ping** para ver ping do bot.  `)
   	.setColor('5fa5e3')

     .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
     .setTimestamp();

	const embed6 = new Discord.MessageEmbed ()
  
    .setTitle("<:ponto:918736074845618176> Comandos de Configuração:")
 // .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
    .setImage('https://i.imgur.com/cPIGHL7.png')
.setDescription(`<a:loop:918709187146559538> **Cargo de entrada e contador de membros :**\n**${prefix}autorole** <cargo> adicionar cargo quando um membro entrar.\n**${prefix}contador** configurar sistema de contador de membros\n**${prefix}contadorestilo** configurar estilo de contador \n\n<a:loop:918709187146559538> **Log de moderação**\n**${prefix}anticonvite** <on|off> para ativar o anti invite.\n**${prefix}ac** <add|info|delete> <canal> os canais que poderá enviar invite.\n**${prefix}advchannel** <add|info|delete> <canal> para registrar o canal de log.\n**${prefix}punichannel** <add|info|delete> <canal> para registrar canais de punições como ( kick & ban )\n\n<a:loop:918709187146559538> **Log de canais/cargos/mensagem**\n・Nosso sistema de logs da luni está abaixo será opção sua ativá-lo ou não. \n**${prefix}memberjoin** configurar o sistema de log de membros entrando.\n**${prefix}channellog** para configurar o sistema de log sobre canais.\n**${prefix}msglog** configurar o sistema de log sobre mensagens apagadas/editadas.\n**${prefix}rolelog** <on|off> configurar o sistema de log sobre cargos.\n**${prefix}bansystem** configurar o sistema de ban\n**${prefix}kicksystem** configurar o sistema de kick\n\n<a:loop:918709187146559538> **Log canais de voz**\n**${prefix}voicesystem** configurar sistema de voz\n\n<a:loop:918709187146559538>** Outros a mais**\n・Configure o level da luni e os canais de leveis.\n**${prefix}levelup** <on|off> ativar a contagem de level.\n**${prefix}cl** <add|info|delete> <cargo> <level> configurar cargos por level.\n**${prefix}lc** <add|info|delete> <canal> os canais que contam ou não level.\n**${prefix}tc** <add|info|delete> <canal> os canais que contam ou não tempo em call.\n**${prefix}levelbackgrounds** ver background.\n**${prefix}antibot** para ativar ou desativar filtro contra entrada de bots.\n**${prefix}anticapslock** para ativar ou desativar filtro contra uso "abusivo" de capslock.\n**${prefix}tp** <add|info|delete> <cargo>  configurar cargos que contam tempo em call.\n**${prefix}cargoperm** <cargo> configurar permissões de um cargo.\n**${prefix}reset** para resetar o nosso banco de dados.\n**${prefix}antifake** para configurar o sistema anti fake.\n**${prefix}logbooster** para configurar o nosso sistema de log de booster.`)
    .setColor('5fa5e3')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    
    const butao = new Discord.MessageSelectMenu({
					customId:`aaa`,
					placeholder: 'Clique para visualizar a lista de paginas de ajuda',
				}).addOptions([
  {
    label: `Página inicial`,
    emoji:'<:seta1:918722214046605363>',
    description: `Clique para voltar a página inicial`,
    value: `init`,
  },{

    label: `Admininstração`,
    emoji:"<:lunium:918729484365070376>",
    description: `Clique para visualizar a página de comandos de admininstração.`,
    value: `adm`},{
     label: `Utilitários`,
    emoji:"<:lunidois:918729484407029870>",
    description: `Clique para visualizar a página de comandos de utilitários.`,
    value: `uti`},{

 label: `Vip`,
    emoji:"<:lunitres:918729484285411390>",
    description: `Clique para visualizar a página de comandos de vip.`,
    value: `vip`

    },
    {

      label: `Registro`,
         emoji:"<:luniquatro:918729484318965810>",
         description: `Clique para visualizar a página de comandos de registro.`,
         value: `regstro`
     
         },
    {

 label: `Ferramentas`,
    emoji:"<:lunicinco:918729740825788456>",
    description: `Clique para visualizar a página de comandos de ferramentas.`,
    value: `tools`

    },{

 label: `Configuração`,
    emoji:"<:luniseis:918729740477665322>",
    description: `Clique para visualizar a página de comandos configuração.`,
    value: `setting`

    }
  
    ])
    const row = new Discord.MessageActionRow()
    row.addComponents([butao])
    message.reply({embeds : [embed], components: [row], ephemeral: true})
    
    .then((msg)=>{
      setTimeout(()=>{msg.delete()},120000)

    const inf = (interaction) => interaction.user.id === memb 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{


  switch (i.values.toString()) {
    case 'init':
//      i.reply({embeds : [embed1], components: [row], ephemeral: true})
i.message.edit({embeds:[embed]})
i.deferUpdate()
break;
case 'adm':
i.message.edit({embeds : [embed1]})
i.deferUpdate()
break;
case 'uti':
i.message.edit({embeds:[embed2]})
i.deferUpdate()
break;
case 'vip':
i.message.edit({embeds:[embed3]})
i.deferUpdate()
break;
case 'regstro':
i.message.edit({embeds:[embed4]})
i.deferUpdate()
break;
case 'tools':
i.message.edit({embeds:[embed5]})
i.deferUpdate()
break;
case 'setting':
i.message.edit({embeds:[embed6]})
i.deferUpdate()
break;
}

});

    })


 
    }
  }