const fs = require('node:fs');
const path = require('node:path');
const today = new Date();
var date = "" + today.getFullYear() + today.getMonth() + today.getDate() + today.getHours() + today.getMinutes();
var dater ="" + today.getFullYear()+"년" + today.getMonth()+"월" + today.getDate()+"일" + today.getHours()+"시" + today.getMinutes()+"분";

const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits, Message, MessageMentions, EmbedBuilder, MessageFlags, RoleManager, ActivityType } = require('discord.js');
const { token, prefix, totalplayer, stanby, record, playcode, playcode1, playcode2, playcode3, playcode4, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1, observer, chstan, clientId, vplay, vstan } = require('./config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { RESTJSONErrorCodes } = require('discord.js');
const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates] });

module.exports = {
    name: "1차조사",
    async execute(message, args, guild) {
        //if (!client.users.cache.find(user => user.id === '317655426868969482')) return message.channel.send('권한 없음')////유저롤
        //if(!message.member.roles.cache.has('1021443417135382660')) return message.channel.send('권한 없음')///관리자롤 
        const channel1 = client.channels.cache.get(chclue1);//1차증거
        const channel2 = client.channels.cache.get(chclue2);//2차증거
        const channel3 = client.channels.cache.get(chclue3);//추가증거
        const channel4 = client.channels.cache.get(chclue4);//
        const channel5 = client.channels.cache.get(chclue5);//
        const channel6 = client.channels.cache.get(note1);//추리노트
    try{
    console.log(message.author.id)
        console.log(message.guild.ownerId)
    const amount = parseInt(args.shift(1));
    console.log(amount)
     if (isNaN(amount)) {
         return message.channel.send('숫자만 입력!');
     } else if (amount < 30 || amount > 60) {
         return message.channel.send('30이상 60이하의 숫자만 입력');
     }
     else if (amount>29 || amount < 61){
       channel1.send('1차조사증거')
       wait(amount)
       channel1.send('1차조사증거')
       wait(amount)
       channel1.send('1차조사증거')
       wait(amount)
       channel1.send('1차조사증거')
       wait(amount)
       channel1.send('1차조사증거')
       wait(amount)
       channel1.send('1차조사증거')
       wait(amount)
       channel1.send('1차조사증거')
       wait(amount)
     }
    }
    
    catch (err) {
        console.error(err);
    }
    
    

    }
}

   