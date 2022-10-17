
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager } = require('discord.js');
const { record, chroll, stanby, guildId, character1, character2, character3, character4, character5, character6 } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문

module.exports = {
    name: "롤",
    async execute(message, args, client) {
      
      const arguments = args.shift(1)
      
      try {
         ///////파일저장 부분
const fs = require('node:fs');
var utag = message.author.username
var uid = message.author.id
const cfilePath = `./data/${uid}.json`;
!fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;

const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";

//////////////////
         let saveUser = {};
      
      if(message.guild.id == guildId && user.id == message.author.id)
         {
            console.log(message.guild.id)
            console.log(guildId)

            await message.channel.send('롤지는 한번만 받을 수 있습니다.')
            return;
         }
        if(message.guild.id === guildId && arguments != character1 && arguments != character2 && arguments != character3 && arguments != character4 && arguments != character5) 
        {
           await message.channel.send("롤 확인을 다시해 주세요")
           return;
        }
        if(message.guild.id === guildId) {
         //let role = await message.guild.roles.cache.find(r => r.name == '대기자')
         const rolecg = message.guild.roles.cache.find(role => role.name === '대기자')///1022087211266617344
         message.member.roles.add('1022087211266617344')/////.removeRole(options)
         await wait(1000);
         await message.member.setNickname(arguments)
         user1 = await message.author.username
         await message.author.send(arguments+"역의 롤지입니다.")
      
        await wait(1000)
         saveUser = {
            id : uid,
            name : utag,
            date : date,
            class : arguments
         }
         fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
         console.log('1')
         switch(arguments)
         {
            case character1 : 
            {
               console.log(arguments)
               await message.member.setNickname("0."+arguments)
               await message.author.send('당신은 탐정입니다. 롤지가 없습니다.');
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
            case character2 : 
            {
               console.log(arguments)
               await message.member.setNickname("1."+arguments)
               await message.author.send({ files: ['./roll/1.한호랑.pdf'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
            case character3 : 
            {
               console.log(arguments)
               await message.member.setNickname("2."+arguments)
               await message.author.send({ files: ['./roll/2.유수호.pdf'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
            case character4 : 
            {

               console.log(arguments)
               await message.member.setNickname("3."+arguments)
               await message.author.send({ files: ['./roll/3.오정성.pdf'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
            case character5 : 
            {
               console.log(arguments)
               await message.member.setNickname("4."+arguments)
               await message.author.send({ files: ['./roll/4.곽편집.pdf'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
         }
      }
} catch (err) {
  console.error(err);
  
  
}
},
};