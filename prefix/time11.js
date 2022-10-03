const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction, EmbedBuilder } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1, observer } = require('../config.json');
const { createReadStream } = require('node:fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문





module.exports = {
  name: "체크시간",
  async execute(message, args, client ) {
    const today = new Date();
    const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";
    const dater ="" + today.getFullYear()+"년" + today.getMonth()+"월" + today.getDate()+"일" + today.getHours()+"시" + today.getMinutes()+"분";
    
    await today.setMinutes(today.getMinutes() + 15);

	const dlck = "" + today.getHours() + "시" + today.getMinutes() + "분";
console.log('시간')
message.channel.send(dlck)
message.channel.send(date)


  }}
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
