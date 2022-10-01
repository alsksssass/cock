const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1, totalplayer } = require('../config.json');
const { title } = require('node:process');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";




module.exports = {
  name: "투표",
  async execute(message, args, client ) {
    const arguments = args.shift(1)
    const channel1 = client.channels.cache.get(chclue1);//윤새롬
    const channel2 = client.channels.cache.get(chclue2);//한호랑
    const channel3 = client.channels.cache.get(chclue3);//유수호
    const channel4 = client.channels.cache.get(chclue4);//오정성
    const channel5 = client.channels.cache.get(chclue5);//곽편집
    const channel6 = client.channels.cache.get(note1);//추리노트
         ////저장정보 불러오는 부분
         var cluedata = '0011005500'
         var voting = '00'
         var numtitle = '33'
         var database = message.guild.ownerId
         var uid = message.author.id
         const cfilePath = `./data/${uid}.json`;
         const dfilePath = `./data/${database}.json`;
         const efilePath = `./data/${cluedata}.json`;
         const vfilePath = `./data/${voting}.json`;
         const ffilePath = `./data/${numtitle}.json`;
         !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
         !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
         !fs.existsSync(efilePath) ? fs.writeFileSync(efilePath, JSON.stringify({})) : null;
         !fs.existsSync(vfilePath) ? fs.writeFileSync(vfilePath, JSON.stringify({})) : null;
         !fs.existsSync(ffilePath) ? fs.writeFileSync(ffilePath, JSON.stringify({})) : null;
         const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
         const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
         const clue = JSON.parse(fs.readFileSync(efilePath, "utf-8"));
         const vote = JSON.parse(fs.readFileSync(vfilePath, "utf-8"));
         const pnum = JSON.parse(fs.readFileSync(ffilePath, "utf-8"));
    ///////////
    ///////////console.log('1')
if (arguments != character1 && arguments != character2 && arguments != character3 && arguments != character4 && arguments != character5) {message.channel.send('이름을 다시 확인해주세요'); return; }
if(admin.round == 5 && vote.vchance1 ==1 && message.author.id == admin.playerid1) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case character1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case character3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case character5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case character6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : vote.votenum + 1,
    player1 : vote.player1,
    vote1 : vote.vote1 + vo1,
    vote2 : vote.vote1 + vo2,
    player2 : vote.player2,
    vote3 : vote.vote1 + vo3,
    player3 : vote.player3,
    vote4 : vote.vote1 + vo4,
    player4 : vote.player4,
    vote5 : vote.vote1 + vo5,
    player5 : vote.player5,
    vote6 : vote.vote1 + vo6,
    player6 : vote.player6,
    vchance1 : vote.vchance1*=0,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,
    

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));

saveUser = {
  id : user.id,
  name : user.name,
  date : user.date,
  class : user.class,
  vote : arguments,
  player1 : admin.player1,
  player2 : admin.player2,
  player3 : admin.player3,
  player4 : admin.player4,
  player5 : admin.player5,
  player6 : admin.player6,
  sdate : admin.starttime,
      edate : admin.endtime,
    ptitle : pnum.title1,
    pnum : pnum.playnum
}
fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
message.channel.send('투표완료!')
return;

  }
  if(admin.round == 5 && vote.vchance2 ==1 && message.author.id == admin.playerid2) {
    console.log('1')
    var vo1 = 0
    var vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case character1 : 
       {
        console.log('2')
        vo1 += 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character2 : 
        {
         vo1 == 0
         vo2 += 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case character3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 += 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 += 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case character5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 += 1
        vo6 == 0
          break;
        }
        case character6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 += 1
           break;
         }
    }
    console.log('3')
voting = {
    votenum : vote.votenum + 1,
    player1 : vote.player1,
    vote1 : vote.vote1 +vo1,
    vote2 : vote.vote1 +vo2,
    player2 : vote.player2,
    vote3 : vote.vote1 +vo3,
    player3 : vote.player3,
    vote4 : vote.vote1 +vo4,
    player4 : vote.player4,
    vote5 : vote.vote1 +vo5,
    player5 : vote.player5,
    vote6 : vote.vote1 +vo6,
    player6 : vote.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2*=0,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
console.log('4')
saveUser = {
  id : user.id,
  name : user.name,
  date : user.date,
  class : user.class,
  vote : arguments,
  player1 : admin.player1,
  player2 : admin.player2,
  player3 : admin.player3,
  player4 : admin.player4,
  player5 : admin.player5,
  player6 : admin.player6,
  sdate : admin.starttime,
      edate : admin.endtime,
    ptitle : pnum.title1,
    pnum : pnum.playnum
}
fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
console.log('5')
message.channel.send('투표완료!')
return;
  }
  if(admin.round == 5 && vote.vchance3 ==1 && message.author.id == admin.playerid3) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case character1 : 
       {
        console.log('2')
        vo1 += 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character2 : 
        {
         vo1 == 0
         vo2 += 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case character3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 += 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 += 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case character5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 += 1
        vo6 == 0
          break;
        }
        case character6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 += 1
           break;
         }
    }

voting = {
    votenum : vote.votenum + 1,
    player1 : vote.player1,
    vote1 : vote.vote1 +vo1,
    vote2 : vote.vote1 +vo2,
    player2 : vote.player2,
    vote3 : vote.vote1 +vo3,
    player3 : vote.player3,
    vote4 : vote.vote1 +vo4,
    player4 : vote.player4,
    vote5 : vote.vote1 +vo5,
    player5 : vote.player5,
    vote6 : vote.vote1 +vo6,
    player6 : vote.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3*=0,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
  }
  fs.writeFileSync(vfilePath, JSON.stringify(voting));
  console.log('4')
  saveUser = {
    id : user.id,
    name : user.name,
    date : user.date,
    class : user.class,
    vote : arguments,
    player1 : admin.player1,
    player2 : admin.player2,
    player3 : admin.player3,
    player4 : admin.player4,
    player5 : admin.player5,
    player6 : admin.player6,
    sdate : admin.starttime,
        edate : admin.endtime,
    ptitle : pnum.title1,
    pnum : pnum.playnum
  }
  fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
  console.log('5')
  message.channel.send('투표완료!')
  return;
  }
  if(admin.round == 5 && vote.vchance4 ==1 && message.author.id == admin.playerid4) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case character1 : 
       {
        console.log('2')
        vo1 += 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character2 : 
        {
         vo1 == 0
         vo2 += 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case character3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 += 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 += 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case character5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 += 1
        vo6 == 0
          break;
        }
        case character6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 += 1
           break;
         }
    }

voting = {
    votenum : vote.votenum + 1,
    player1 : vote.player1,
    vote1 : vote.vote1 +vo1,
    vote2 : vote.vote1 +vo2,
    player2 : vote.player2,
    vote3 : vote.vote1 +vo3,
    player3 : vote.player3,
    vote4 : vote.vote1 +vo4,
    player4 : vote.player4,
    vote5 : vote.vote1 +vo5,
    player5 : vote.player5,
    vote6 : vote.vote1 +vo6,
    player6 : vote.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4*=0,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
  }
  fs.writeFileSync(vfilePath, JSON.stringify(voting));
  console.log('4')
  saveUser = {
    id : user.id,
    name : user.name,
    date : user.date,
    class : user.class,
    vote : arguments,
    player1 : admin.player1,
    player2 : admin.player2,
    player3 : admin.player3,
    player4 : admin.player4,
    player5 : admin.player5,
    player6 : admin.player6,
    sdate : admin.starttime,
        edate : admin.endtime,
    ptitle : pnum.title1,
    pnum : pnum.playnum
  }
  fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
  console.log('5')
  message.channel.send('투표완료!')
  return;
  }
  if(admin.round == 5 && vote.vchance5 ==1 && message.author.id == admin.playerid5) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case character1 : 
       {
        console.log('2')
        vo1 += 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character2 : 
        {
         vo1 == 0
         vo2 += 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case character3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 += 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 += 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case character5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 += 1
        vo6 == 0
          break;
        }
        case character6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 += 1
           break;
         }
    }
voting = {
    votenum : vote.votenum + 1,
    player1 : vote.player1,
    vote1 : vote.vote1 +vo1,
    vote2 : vote.vote1 +vo2,
    player2 : vote.player2,
    vote3 : vote.vote1 +vo3,
    player3 : vote.player3,
    vote4 : vote.vote1 +vo4,
    player4 : vote.player4,
    vote5 : vote.vote1 +vo5,
    player5 : vote.player5,
    vote6 : vote.vote1 +vo6,
    player6 : vote.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5*=0,
    vchance6 : vote.vchance6,

    
   
  }
  fs.writeFileSync(vfilePath, JSON.stringify(voting));
  console.log('4')
  saveUser = {
    id : user.id,
    name : user.name,
    date : user.date,
    class : user.class,
    vote : arguments,
    player1 : admin.player1,
    player2 : admin.player2,
    player3 : admin.player3,
    player4 : admin.player4,
    player5 : admin.player5,
    player6 : admin.player6,
    sdate : admin.starttime,
    edate : admin.endtime,
    ptitle : pnum.title1,
    pnum : pnum.playnum
  
  }
  fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
  console.log('5')
  message.channel.send('투표완료!')
  return;
  }
  if(admin.round == 5 && vote.vchance6 ==1 && message.author.id == admin.playerid6) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case character1 : 
       {
        console.log('2')
        vo1 += 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character2 : 
        {
         vo1 == 0
         vo2 += 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case character3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 += 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case character4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 += 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case character5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 += 1
        vo6 == 0
          break;
        }
        case character6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 += 1
           break;
         }
    }
voting = {
    votenum : vote.votenum + 1,
    player1 : vote.player1,
    vote1 : vote.vote1 +vo1,
    vote2 : vote.vote1 +vo2,
    player2 : vote.player2,
    vote3 : vote.vote1 +vo3,
    player3 : vote.player3,
    vote4 : vote.vote1 +vo4,
    player4 : vote.player4,
    vote5 : vote.vote1 +vo5,
    player5 : vote.player5,
    vote6 : vote.vote1 +vo6,
    player6 : vote.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6*=0,

    
   
  }
  fs.writeFileSync(vfilePath, JSON.stringify(voting));
  console.log('4')
  saveUser = {
    id : user.id,
    name : user.name,
    date : user.date,
    class : user.class,
    vote : arguments,
    player1 : admin.player1,
    player2 : admin.player2,
    player3 : admin.player3,
    player4 : admin.player4,
    player5 : admin.player5,
    player6 : admin.player6,
    sdate : admin.starttime,
        edate : admin.endtime,
    ptitle : pnum.title1,
    pnum : pnum.playnum
  }
  fs.writeFileSync(cfilePath, JSON.stringify(saveUser));
  console.log('5')
  message.channel.send('투표완료!')
  return;
  }
  if(vote.vchance1 == 0 || vote.vchance2 == 0 || vote.vchance3 == 0 || vote.vchance4 == 0 || vote.vchance5 == 0 || vote.vchance6 == 0 ) message.channel.send('이미 투표 하셧습니다.') 
  console.log('6')
}
}
