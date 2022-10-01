const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction, EmbedBuilder } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1, observer, chobserver } = require('../config.json');
const { createReadStream } = require('node:fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";
const dater ="" + today.getFullYear()+"년" + today.getMonth()+"월" + today.getDate()+"일" + today.getHours()+"시" + today.getMinutes()+"분";





module.exports = {
  name: "기록",
  async execute(message, args, client ) {
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

  arguments = args.shift(2)
  

  try {
    
    if(message.channel.id == chobserver)
    {
      const channel2 = client.channels.cache.get(chobserver);//관전방
      
    const playrecord = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('타로마스터')
    .setAuthor({ name: user.ptitle+" "+user.pnum+" 차", iconURL: 'https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png'})
    .setDescription('타로마스터 살인사건')
    .setThumbnail('https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png')
    .addFields(
      { name: `시작: ${user.sdate}`, value: `종료: ${user.edate}` },
      { name: '\u200B', value: '\u200B' },
      { name: '역할', value: user.class },
      { name: '\u200B', value: '\u200B' },
      { name: character1+"역", value: user.player1+" 님", inline: true },
      { name: character2+"역", value: user.player2+" 님", inline: true },
    )
    
      .addFields(
      { name: character3+"역", value: user.player3+" 님", inline: true },
      { name: character4+"역", value: user.player4+" 님", inline: true },
      )
      .addFields(
      { name: character5+"역", value: user.player5+" 님", inline: true },
      { name: character6+"역", value: user.player6+" 님", inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '투표 캐릭터', value: user.vote, inline: true },
      )

    .setFooter({ text: user.name+" 님의 기록입니다.", iconURL: 'https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png' });

    channel2.send({ embeds: [playrecord] })


  }


    else message.channel.send('이곳에서 사용 불가합니다. 관전 채널에서 사용해 주세요')



  } catch (error) {
    console.error(error);
    
  }
  

  }}
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
