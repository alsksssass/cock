const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction, EmbedBuilder } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1, observer, playcode1, playcode2 ,playcode3, playcode4, chstan } = require('../config.json');
const { createReadStream } = require('node:fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";
const dater ="" + today.getFullYear()+"년" + today.getMonth()+"월" + today.getDate()+"일" + today.getHours()+"시" + today.getMinutes()+"분";





module.exports = {
  name: "재진입",
  async execute(message, args, client ) {
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
/////////////
if(message.channel.id != chstan) return;
else if(admin.playerid1 == user.id)
{
    message.guild.members.cache.get(admin.playerid1).roles.add(playcode).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
		await wait(500)
		message.guild.members.cache.get(admin.playerid1).roles.remove(stanby).catch(console.warn = () => {});

    }
    else if (admin.playerid2 == user.id && message.channel.id == chstan)
    {
        message.guild.members.cache.get(admin.playerid2).roles.add(playcode1).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid2).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
    }
    else if (admin.playerid3 == user.id && message.channel.id == chstan)
    {
        message.guild.members.cache.get(admin.playerid3).roles.add(playcode2).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid3).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
    }
    else if (admin.playerid4 == user.id && message.channel.id == chstan)
    {
        message.guild.members.cache.get(admin.playerid4).roles.add(playcode3).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid4).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
    }
    else if (admin.playerid5 == user.id && message.channel.id == chstan)
    {
        message.guild.members.cache.get(admin.playerid5).roles.add(playcode4).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid5).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
    }
    else if (admin.playerid6 == user.id && message.channel.id == chstan)
    {
        message.guild.members.cache.get(admin.playerid6).roles.add(playcode).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid6).roles.remove(stanby).catch(console.warn = () => {});
		await wait(2000)
    }

    else 
    {
message.channel.send('이곳에서 사용불가한 명령어 입니다.')
    }
  }}


  a
// var voting = '00'
// var numtitle = '33'
// var database = message.guild.ownerId
// var uid = message.author.id
// const cfilePath = `./data/${uid}.json`;
// const dfilePath = `./data/${database}.json`;
// const efilePath = `./data/${cluedata}.json`;
// const vfilePath = `./data/${voting}.json`;
// const ffilePath = `./data/${numtitle}.json`;
// !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
// !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
// !fs.existsSync(efilePath) ? fs.writeFileSync(efilePath, JSON.stringify({})) : null;
// !fs.existsSync(vfilePath) ? fs.writeFileSync(vfilePath, JSON.stringify({})) : null;
// !fs.existsSync(ffilePath) ? fs.writeFileSync(ffilePath, JSON.stringify({})) : null;
// const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
// const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
// const clue = JSON.parse(fs.readFileSync(efilePath, "utf-8"));
// const vote = JSON.parse(fs.readFileSync(vfilePath, "utf-8"));
// const pnum = JSON.parse(fs.readFileSync(ffilePath, "utf-8"));

//   try {
//     message.guild.members.cache.get(admin.playerid1).roles.add(observer).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
// 		message.guild.members.cache.get(admin.playerid1).roles.remove(playcode).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid2).roles.add(observer).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid2).roles.remove(playcode).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid3).roles.add(observer).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid3).roles.remove(playcode).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid4).roles.add(observer).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid4).roles.remove(playcode).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid5).roles.add(observer).catch(console.warn = () => {});
// 		message.guild.members.cache.get(admin.playerid5).roles.remove(playcode).catch(console.warn = () => {});
//   } catch (error) {
//     console.error(error);
    
//   }
  

//   }}
//     const arguments = args.shift(1)
//     console.log(arguments)
   
//       const connection = joinVoiceChannel({
//           channelId: message.member.voice.channelId,
//           guildId: message.guildId,
//           adapterCreator: message.guild.voiceAdapterCreator,
//           selfDeaf: false,
//       })


//       const player = createAudioPlayer()
//       const resource = createAudioResource('./music/.mp3', {
//         metadata: {
//           title: 'A good song!',
//         },
//       });
      
//       // Not recommended - listen to errors from the audio player instead for most usecases!
//       resource.playStream.on('error', error => {
//         console.error('Error:', error.message, 'with track', resource.metadata.title);
//       });
      
//       player.play(resource);
//       await wait(5000)
// connection.destroy();
//   }
// }

         

        //await client.user.setUsername(botplay);
        
    //   ////저장정보 불러오는 부분
    //   var database = owner
    //   var uid = message.author.id
    //   const cfilePath = `./data/${uid}.json`;
    //   const dfilePath = `./data/${database}.json`;
    //   !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
    //   !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
    //  const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
    //   const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));s
