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
const message = require('./prefix/message');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const prefixFiles = fs.readdirSync('./prefix').filter(file => file.endsWith('.js'));



	  for (const file of prefixFiles) {
	const prefixs = require(`./prefix/${file}`);
	client.commands.set(prefixs.name, prefixs);
}
// When the client is ready, run this code (only once)
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

///시간
var htt = ''
var mtt = ''
//////케릭터 이름



//////

client.once('ready', () => {
  console.log('준비됨');
});

client.on('messageCreate', async (message) => { 
				///
	////if(!message.member.permissions.has('Administrator')) return;
	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	/////????????????????? if (message.guild.ownerId) return
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift();
	const coget = client.commands.get(command);
	if(!client.commands.has(command)) return

	try{
		coget.execute(message, args, client);
		
	}
	catch(error){
		
console.error(error);
	}
});


client.on('messageCreate', async (message) => { 

	
	///
////if(!message.member.permissions.has('Administrator')) return;
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
/////????????????????? if (message.guild.ownerId) return
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift();
if(!client.commands.has(command)) return
var hhhh = 0

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

//////////저장소
/////////레디부분
if(admin.readynum == 1){
	if(message.author.bot) return;
	const channel = client.channels.cache.get(chstan);
	await channel.send("15초안에 모두 준비를 마쳐주세요")
	if (totalplayer == 5) await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"})
	if (totalplayer == 6) await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"+character6+"역"+"\n"+admin.player6+"님"+"\n"+"\n"})
	await wait(1000);
	await channel.send("14초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("13초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("12초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("11초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("10초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("9초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("8초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("7초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("6초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("5초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("4초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("3초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("2초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	await channel.send("1초안에 모두 준비를 마쳐주세요")
	await wait(1000);
	
	
	}
	if(admin.readynum == 2){
		if(message.author.bot) return;
		const channel = client.channels.cache.get(chstan);
		await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
		}
		if(admin.readynum == 3){
			if(message.author.bot) return;
			const channel = client.channels.cache.get(chstan);
			await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
			}
			if(admin.readynum == 4){
				if(message.author.bot) return;
				const channel = client.channels.cache.get(chstan);
				await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
				}
				if(admin.readynum == 5 && admin.round == 0){
					if(message.author.bot) return;
					const channel = client.channels.cache.get(chstan);
					await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
					}
					if(admin.readynum == 6 && admin.round == 0){
						if(message.author.bot) return;
						const channel = client.channels.cache.get(chstan);
						await channel.send({ content: ">>> "+character1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+character2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+character3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+character4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+character5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"+character6+"역"+"\n"+admin.player6+"님"+"\n"+"\n" })
						}
		
	
		if(admin.readynum != totalplayer && message.channel.id == stanby && totalplayer == admin.readynum && admin.round == 0) {
		  console.log("오너파일 덮어쓰기")
			database = {
				readynum : 0,
				class1 : "미지정",
				player1 : "미지정",
				class2 : "미지정",
				player2 : "미지정",
				class3 : "미지정",
				player3 : "미지정",
				class4 : "미지정",
				player4 : "미지정",
				class5 : "미지정",
				player5 : "미지정",
				class6 : "미지정",
				player6 : "미지정",
				playerid1 : "미지정",
				playerid2 : "미지정",
				playerid3 : "미지정",
				playerid4 : "미지정",
				playerid5 : "미지정",
				playerid6 : "미지정",
				round : 0,
				starttime : 0,
				endtime : 0,
				vpoint : 0
			   
			 }
		 fs.writeFileSync(dfilePath, JSON.stringify(database));
		await message.channel.send("실패!!! 다시 시도해 주세요")
		}
					
if(admin.readynum == totalplayer && totalplayer == 5 && admin.round == 0){
	await wait(1000);
	console.log("성공")
	const dday = new Date();
	var daiy = dday.getHours() + "시" + dday.getMinutes() + "분, " + dday.toDateString();
database = {
	readynum : admin.readynum,
		class1 : admin.class1,
		player1 : admin.player1,
		class2 : admin.class2,
		player2 : admin.player2,
		class3 : admin.class3,
		player3 : admin.player3,
		class4 : admin.class4,
		player4 : admin.player4,
		class5 : admin.class5,
		player5 : admin.player5,
		class6 : admin.class6,
		player6 : admin.player6,
		playerid1 : admin.playerid1,
		playerid2 : admin.playerid2,
		playerid3 : admin.playerid3,
		playerid4 : admin.playerid4,
		playerid5 : admin.playerid5,
		playerid6 : admin.playerid6,
        round : (admin.round *= 0) +1,
		starttime : daiy,
		endtime : admin.endtime,
		vpoint : admin.vpoint
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));

	 numtitle = {
		title1 : pnum.title1,
		playnum : pnum.playnum + 1,
		
		 }
		 fs.writeFileSync(ffilePath, JSON.stringify(numtitle));

	 console.log(admin.readynum+"성공")
	 try{
		const channel = client.channels.cache.get(chstan);
				await channel.send('가베당에 오신 여러분들 환영합니다!')
				const channel13 = client.channels.cache.get(note1);
				const connection = joinVoiceChannel({
    channelId: vstan,
    guildId: message.guildId,
    adapterCreator: message.guild.voiceAdapterCreator
    
})


const player = createAudioPlayer()
const resource = createAudioResource('./music/cubamg.mp3')/////추리방으로 옮겨주세요


player.play(resource, {seek: 0, volume: 1.0})
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => {
  connection.destroy();
});
				client.user.setActivity("삭월의 밤", {
				type: ActivityType.Playing,
  				});
				  await wait(500)
				client.user.setAvatar(botplay);
				message.guild.members.cache.get(clientId).setNickname('삭월의 밤')
				await wait(500)
				message.guild.members.cache.get(admin.playerid1).roles.add(playcode).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
				await wait(500)
				message.guild.members.cache.get(admin.playerid1).roles.remove(stanby).catch(console.warn = () => {});
		
				await wait(500)
				message.guild.members.cache.get(admin.playerid2).roles.add(playcode1).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid2).roles.remove(stanby).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid3).roles.add(playcode2).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid3).roles.remove(stanby).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid4).roles.add(playcode3).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid4).roles.remove(stanby).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid5).roles.add(playcode4).catch(console.warn = () => {});
				await wait(500)
				message.guild.members.cache.get(admin.playerid5).roles.remove(stanby).catch(console.warn = () => {});
		await wait(2000)
		await channel13.send('자기소개 진행후 ``!1차조사 숫자`` (숫자는 단서가 올라오는 텀 시간ex.30 을 넣으면 30초마다 올라옴)을쳐주세요.')
		await channel13.send('숫자의 최소값은 30, 최대값은 60입니다.')
		await channel13.send('음성단서가 있을시 텀은 자동으로 2분이 됩니다.')
		await wait(2000)
		await channel.send('이 메시지를 본 준비를 마친 플레이어가 있다면 진입실패 오류이니 ``!재진입``명령어를 사용해주세요!')

	}
	catch (err) {
		console.error(err);
	}
}
	 
				


if(admin.readynum == totalplayer && totalplayer == 6 && admin.round == 0){
	await wait(1000);
	console.log("성공")
	const dday = new Date();
	var daiy = dday.getHours() + "시" + dday.getMinutes() + "분, " + dday.toDateString();
database = {
	readynum : admin.readynum,
		class1 : admin.class1,
		player1 : admin.player1,
		class2 : admin.class2,
		player2 : admin.player2,
		class3 : admin.class3,
		player3 : admin.player3,
		class4 : admin.class4,
		player4 : admin.player4,
		class5 : admin.class5,
		player5 : admin.player5,
		class6 : admin.class6,
		player6 : admin.player6,
		playerid1 : admin.playerid1,
		playerid2 : admin.playerid2,
		playerid3 : admin.playerid3,
		playerid4 : admin.playerid4,
		playerid5 : admin.playerid5,
		playerid6 : admin.playerid6,
        round : (admin.round *= 0) +1,
		starttime : daiy,
		endtime : admin.endtime,
		vpoint : admin.vpoint
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 console.log(admin.readynum+"성공")
	
	 numtitle = {
		title1 : pnum.title1,
		playnum : pnum.playnum + 1,
		
		 }
		 fs.writeFileSync(ffilePath, JSON.stringify(numtitle));
	 try{
		const channel = client.channels.cache.get(chstan);
				await channel.send('가베당에 오신 여러분들 환영합니다!')
				
				const channel13 = client.channels.cache.get(note1);
			const connection = joinVoiceChannel({
    channelId: vstan,
    guildId: message.guildId,
    adapterCreator: message.guild.voiceAdapterCreator
    
})


const player = createAudioPlayer()
const resource = createAudioResource('./music/cubamg.mp3')///추리방으로 옮겨주세요


player.play(resource, {seek: 0, volume: 1.0})
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => {
  connection.destroy();
});
				client.user.setActivity("삭월의 밤", {
				type: ActivityType.Playing,
	 		 	});
	  			await wait(500)
				client.user.setAvatar(botplay);
				message.guild.members.cache.get('1036176408390668340').setNickname('삭월의 밤')
				await wait(500)
				message.guild.members.cache.get(admin.playerid1).roles.add(playcode).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
		await wait(500)
		message.guild.members.cache.get(admin.playerid1).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid2).roles.add(playcode1).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid2).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid3).roles.add(playcode2).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid3).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid4).roles.add(playcode3).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid4).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid5).roles.add(playcode4).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid5).roles.remove(stanby).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid6).roles.add(playcode).catch(console.warn = () => {});
		await wait(500)
		message.guild.members.cache.get(admin.playerid6).roles.remove(stanby).catch(console.warn = () => {});
		await wait(2000)
		await channel13.send('자기소개 진행후 ``!1차조사 숫자`` (숫자는 단서가 올라오는 텀 시간ex.30 을 넣으면 30초마다 올라옴)을쳐주세요.')
		await channel13.send('숫자의 최소값은 30, 최대값은 60입니다.')
		await channel13.send('음성단서가 있을시 텀은 자동으로 2분이 됩니다.')
		await wait(2000)
		await channel.send('이 메시지를 본 준비를 마친 플레이어가 있다면 진입실패 오류이니 ``!재진입``명령어를 사용해주세요!')

	}
	catch (err) {
		console.error(err);
	}
	 
				

}

})

client.on('messageCreate', async (message) => { 
if(message.author.bot) return;
/////????????????????? if (message.guild.ownerId) return
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift();
const coget = client.commands.get(command);
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
if(!client.commands.has(command)) return

try{


if(admin.round == 2 && admin.vpoint == 0 && admin.readynum == totalplayer){/////1차조사종료
    const today1 = new Date();

	await today1.setMinutes(today1.getMinutes() + 15);
	var dlck = "" + today1.getHours() + "시" + today1.getMinutes() + "분";
	

	const channel5 = client.channels.cache.get(note1);//추리노트
	await channel5.send('1차 조사가 모두 끝났습니다. 토론시간을 가지신후 2차조사를 시작하시려면 ```!2차조사 숫자```라고 쳐주세요.')
	await channel5.send(dlck+"후에 2차조사를 시작 하세요. 조사가 끝나면 ``!확인``을 쳐주세요")

	database = {
		readynum : admin.readynum,
		class1 : admin.class1,
		player1 : admin.player1,
		class2 : admin.class2,
		player2 : admin.player2,
		class3 : admin.class3,
		player3 : admin.player3,
		class4 : admin.class4,
		player4 : admin.player4,
		class5 : admin.class5,
		player5 : admin.player5,
		class6 : admin.class6,
		player6 : admin.player6,
		playerid1 : admin.playerid1,
		playerid2 : admin.playerid2,
		playerid3 : admin.playerid3,
		playerid4 : admin.playerid4,
		playerid5 : admin.playerid5,
		playerid6 : admin.playerid6,
        round : (admin.round *= 0) +3 ,
		starttime : admin.starttime,
		endtime : admin.endtime,
		vpoint : admin.vpoint *= 0
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 await today1.setMinutes(today1.getMinutes() - 15);
}
if(admin.round == 4 && admin.vpoint == 0 && admin.readynum == totalplayer){////2차조사종료
    const today1 = new Date();
	await today1.setMinutes(today1.getMinutes() + 15);

	var dlckk = "" + today1.getHours() + "시" + today1.getMinutes() + "분";
	

	const channel5 = client.channels.cache.get(note1);//추리노트
	const channel6 = client.channels.cache.get('1039057454098559016');//투표1
	const channel7 = client.channels.cache.get('1039057500374310932');//투표2
	const channel8 = client.channels.cache.get('1039057532062277663');//투표3
	const channel9 = client.channels.cache.get('1039057500374310932');//투표4
	const channel99 = client.channels.cache.get('1039057641592332318');//투표5
	const channel88 = client.channels.cache.get('1027030645534380072');//수다
	await channel5.send('2차 조사가 모두 끝났습니다. \n토론시간을 가지신후 투표해 주세요 투표는 투표소채널에서 ```!투표 캐릭터이름```이라고 쳐주세요. \n각자 치시면 됩니다.(비밀투표)')
	await channel5.send(dlckk+"까지 토론 하시면 됩니다. \n투표 동점이라면 범인승리 입니다. \n재투표는 없습니다.")
	await channel5.send('플레이 시작부터 투표종료시까지 플레이 시간이 기록되며 **영구히** 남습니다. \n일부러 늘린 오랜토론 시간은 검거하여도 **영광치못한 기록**으로 남게될것입니다.')
	
	channel6.send('>>> 투표 방법입니다. 이곳에입력 하시면 됩니다.\n아랑                     윤정남\n덕수                     사카모토\n유메\n\n명령어는 **!투표 유관순**입니다.')
	channel7.send('>>> 투표 방법입니다. 이곳에입력 하시면 됩니다.\n아랑                     윤정남\n덕수                     사카모토\n유메\n\n명령어는 **!투표 유관순**입니다.')
	channel8.send('>>> 투표 방법입니다. 이곳에입력 하시면 됩니다.\n아랑                     윤정남\n덕수                     사카모토\n유메\n\n명령어는 **!투표 유관순**입니다.')
	channel9.send('>>> 투표 방법입니다. 이곳에입력 하시면 됩니다.\n아랑                     윤정남\n덕수                     사카모토\n유메\n\n명령어는 **!투표 유관순**입니다.')
	channel99.send('>>> 투표 방법입니다. 이곳에입력 하시면 됩니다.\n아랑                     윤정남\n덕수                     사카모토\n유메\n\n명령어는 **!투표 유관순**입니다.')
	channel6.send('투표는 한번만 가능합니다. 신중하게 투표해 주세요!')
	channel7.send('투표는 한번만 가능합니다. 신중하게 투표해 주세요!')
	channel8.send('투표는 한번만 가능합니다. 신중하게 투표해 주세요!')
	channel9.send('투표는 한번만 가능합니다. 신중하게 투표해 주세요!')
	channel99.send('투표는 한번만 가능합니다. 신중하게 투표해 주세요!')
	
	database = {
		readynum : admin.readynum,
		class1 : admin.class1,
		player1 : admin.player1,
		class2 : admin.class2,
		player2 : admin.player2,
		class3 : admin.class3,
		player3 : admin.player3,
		class4 : admin.class4,
		player4 : admin.player4,
		class5 : admin.class5,
		player5 : admin.player5,
		class6 : admin.class6,
		player6 : admin.player6,
		playerid1 : admin.playerid1,
		playerid2 : admin.playerid2,
		playerid3 : admin.playerid3,
		playerid4 : admin.playerid4,
		playerid5 : admin.playerid5,
		playerid6 : admin.playerid6,
        round : (admin.round *= 0) +5 ,
		starttime : admin.starttime,
		endtime : admin.endtime,
		vpoint : admin.vpoint + 1
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));

	 voting = {
		votenum : 0,
		player1 : admin.class1,
		vote1 : 0,
		vote2 : 0,
		player2 : admin.class2,
		vote3 : 0,
		player3 : admin.class3,
		vote4 : 0,
		player4 : admin.class4,
		vote5 : 0,
		player5 : admin.class5,
		vote6 : 0,
		player6 : admin.class6,
		vchance1 : 1,
		vchance2 : 1,
		vchance3 : 1,
		vchance4 : 1,
		vchance5 : 1,
		vchance6 : 1,
	
		
	   
	 }
	fs.writeFileSync(vfilePath, JSON.stringify(voting));
	await today1.setMinutes(today1.getMinutes() - 15);
}
if(admin.round == 5 && admin.vpoint == 0 && admin.readynum == totalplayer && vote.votenum == totalplayer && totalplayer == 5){////5인 투표종료
	
	await today.setMinutes(today.getMinutes() - 15);
	var dlck = "" + today.getFullYear()+"년" + today.getMonth()+"월" + today.getDate()+"일" + today.getHours()+"시" + today.getMinutes()+"분";
	var cd1 = admin.playerid1
	var cd2 = admin.playerid2
	var cd3 = admin.playerid3
	var cd4 = admin.playerid4
	var cd5 = admin.playerid5
	var cd6 = admin.playerid6
	const channel1 = client.channels.cache.get(chclue1);//1차증거
    const channel2 = client.channels.cache.get(chclue2);//2차증거
    const channel3 = client.channels.cache.get(chclue3);//추가증거
    const channel4 = client.channels.cache.get(chclue4);//
    const channel5 = client.channels.cache.get(chclue5);//
    const channel6 = client.channels.cache.get(note1);//추리노트
	console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
	await channel6.send('투표가 모두 끝났습니다.')
	await channel6.send('결과 발표와 동시 모든 용의자는 관전자로 바뀝니다. 결과는 기록채널에서 확인 가능하며 사건의 전말 채널이 열립니다.')
	if(vote.vote1 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/hanho.mp3')///결과발표 멘트 아랑 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
console.log('아랑')	
}
	if(vote.vote1 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/hanho.mp3')///결과발표 윤정남 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
console.log('윤정남')	
}
	else if(vote.vote3 >= 3){
		console.log('덕수')	
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/suho.mp3')///결과발표 멘트 덕수 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
	}
	else if(vote.vote4 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('사카모토')	
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/ojung.mp3')///결과발표 멘트 사카모토 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
	}
	else if(vote.vote5 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('유메')	
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/gack.mp3')///결과발표 멘트 유메 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
	}
	else if(vote.vote1 == vote.vote5 == 2 ||vote.vote1 == vote.vote4 == 2 ||vote.vote1 == vote.vote3 == 2 ||vote.vote1 == vote.vote2 == 2 ||vote.vote2 == vote.vote3 == 2 || vote.vote2 == vote.vote4 == 2 || vote.vote2 == vote.vote5 == 2 || vote.vote3 == vote.vote4 == 2 || vote.vote3 == vote.vote5 == 2 || vote.vote4 == vote.vote5 == 2 ){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('동률')	
		const connection = joinVoiceChannel({
			channelId: vplay,
			guildId: message.guildId,
			adapterCreator: message.guild.voiceAdapterCreator
			
		})
		
		
		const player = createAudioPlayer()
		const resource = createAudioResource('./music/dong.mp3')///결과발표 멘트 이외
		
		
		player.play(resource, {seek: 0, volume: 1.0})
		connection.subscribe(player);
		
		player.on(AudioPlayerStatus.Idle, () => {
		  connection.destroy();
		
		});
	}
	else {
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('동률')	
		const connection = joinVoiceChannel({
			channelId: vplay,
			guildId: message.guildId,
			adapterCreator: message.guild.voiceAdapterCreator
			
		})
		
		
		const player = createAudioPlayer()
		const resource = createAudioResource('./music/dong.mp3')///결과발표 멘트 이외
		
		
		player.play(resource, {seek: 0, volume: 1.0})
		connection.subscribe(player);
		
		player.on(AudioPlayerStatus.Idle, () => {
		  connection.destroy();
		
		});
	}

	
console.log('1')

	await message.guild.members.cache.get(cd1).roles.add(observer).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
	console.log('1')	
	await message.guild.members.cache.get(cd1).roles.remove(playcode).catch(console.warn = () => {});
	console.log('2')	
	await message.guild.members.cache.get(cd2).roles.add(observer).catch(console.warn = () => {});
	await wait(1000)
	console.log('3')	
	await message.guild.members.cache.get(cd2).roles.remove(playcode1).catch(console.warn = () => {});
	console.log('4')	
	await message.guild.members.cache.get(cd3).roles.add(observer).catch(console.warn = () => {});
	console.log('5')	
	await message.guild.members.cache.get(cd3).roles.remove(playcode2).catch(console.warn = () => {});
	console.log('6')	
	await message.guild.members.cache.get(cd4).roles.add(observer).catch(console.warn = () => {});
	console.log('7')	
	await message.guild.members.cache.get(cd4).roles.remove(playcode3).catch(console.warn = () => {});
	console.log('8')	
	await message.guild.members.cache.get(cd5).roles.add(observer).catch(console.warn = () => {});
	console.log('9')	
	await message.guild.members.cache.get(cd5).roles.remove(playcode4).catch(console.warn = () => {});
	console.log('10')

const nick0 = message.guild.members.cache.get(admin.playerid1)
await nick0.setNickname("-관전."+admin.player1)
const nick1 = message.guild.members.cache.get(admin.playerid2)
await nick1.setNickname("-관전."+admin.player2)
const nick2 = message.guild.members.cache.get(admin.playerid3)
await nick2.setNickname("-관전."+admin.player3)
const nick3 = message.guild.members.cache.get(admin.playerid4)
await nick3.setNickname("-관전."+admin.player4)
const nick4 = message.guild.members.cache.get(admin.playerid5)
await nick4.setNickname("-관전."+admin.player5)

		database = {
			readynum : admin.readynum,
			class1 : admin.class1,
			player1 : admin.player1,
			class2 : admin.class2,
			player2 : admin.player2,
			class3 : admin.class3,
			player3 : admin.player3,
			class4 : admin.class4,
			player4 : admin.player4,
			class5 : admin.class5,
			player5 : admin.player5,
			class6 : admin.class6,
			player6 : admin.player6,
			playerid1 : admin.playerid1,
			playerid2 : admin.playerid2,
			playerid3 : admin.playerid3,
			playerid4 : admin.playerid4,
			playerid5 : admin.playerid5,
			playerid6 : admin.playerid6,
			round : (admin.round *= 0) +6,
			starttime : admin.starttime,
			endtime : new Date().toISOString(),
			vpoint : admin.vpoint
		 }
		 fs.writeFileSync(dfilePath, JSON.stringify(database));

		 var rufrhk = ""
		 if(vote.vote2 >= 3)rufrhk = "검거 성공"
		 if(vote.vote2 <= 2)rufrhk = "검거 실패"
		 const dday = new Date();
var daiy = dday.getHours() + "시" + dday.getMinutes() + "분, " + dday.toDateString();
		 const playrecord = new EmbedBuilder()
		 .setColor(0x0099FF)
		 .setTitle('삭월의 밤')
		 .setAuthor({ name: pnum.title1+" "+pnum.playnum+" 차", iconURL: 'https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png'})
		 .setDescription('시간은삭월의밤, 붉은 그림자')
		 .setThumbnail('https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png')
		 .addFields(
		   { name: `${admin.starttime}시작`, value: daiy+"끝" },
		   { name: '\u200B', value: '\u200B' },
		   { name: '검거결과', value: rufrhk },
		   { name: '\u200B', value: '\u200B' },
		   { name: admin.class1+"역", value: admin.player1+"님", inline: true },
		   { name: admin.class2+"역", value: admin.player2+"님", inline: true },
		 )
		 
		   .addFields(
		   { name: admin.class3+"역", value: admin.player3+"님", inline: true },
		   { name: admin.class4+"역", value: admin.player4+"님", inline: true },
		   )
		   .addFields(
		   { name: admin.class5+"역", value: admin.player5+"님", inline: true },
		   { name: admin.class6+"역", value: admin.player6+"님", inline: true },
		   { name: '\u200B', value: '\u200B' },
		   { name: admin.class1+"님의 득표", value: vote.vote1+"표", inline: true },
		   { name: admin.class2+"님의 득표", value: vote.vote2+"표", inline: true },
		   )
		   .addFields(
		   { name: admin.class3+"님의 득표", value: vote.vote3+"표", inline: true },
		   { name: admin.class4+"님의 득표", value: vote.vote4+"표", inline: true },
		   )
		   .addFields(
		   { name: admin.class5+"님의 득표", value: vote.vote5+"표", inline: true },
		   { name: admin.class6+"님의 득표", value: vote.vote6+"표", inline: true },
		 )
		 .setFooter({ text: '가베당에 방문해 주셔서 감사합니다', iconURL: 'https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png' });
		 const channel77 = client.channels.cache.get(record);
	   await channel77.send({ embeds: [playrecord] })////특정채널 메시지
	   client.user.setActivity("만월의 밤", {
		type: ActivityType.Playing,
		  });
		  await wait(500)
	   message.guild.members.cache.get('1013329595082231811').setNickname('만월의 밤')
	   console.log('끝나서 리셋')
	   database = {
		 readynum : 0,
		 class1 : "미지정",
		 player1 : "미지정",
		 class2 : "미지정",
		 player2 : "미지정",
		 class3 : "미지정",
		 player3 : "미지정",
		 class4 : "미지정",
		 player4 : "미지정",
		 class5 : "미지정",
		 player5 : "미지정",
		 class6 : "미지정",
		 player6 : "미지정",
		 playerid1 : "미지정",
		 playerid2 : "미지정",
		 playerid3 : "미지정",
		 playerid4 : "미지정",
		 playerid5 : "미지정",
		 playerid6 : "미지정",
		 round : 0,
		 starttime : 0,
		 endtime : 0,
		 vpoint : 0
		
	  }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 voting = {
		votenum : 0,
		player1 : admin.class1,
		vote1 : 0,
		vote2 : 0,
		player2 : admin.class2,
		vote3 : 0,
		player3 : admin.class3,
		vote4 : 0,
		player4 : admin.class4,
		vote5 : 0,
		player5 : admin.class5,
		vote6 : 0,
		player6 : admin.class6,
		vchance1 : 1,
		vchance2 : 1,
		vchance3 : 1,
		vchance4 : 1,
		vchance5 : 1,
		vchance6 : 1,
	
		
	   
	 }
	fs.writeFileSync(vfilePath, JSON.stringify(voting));
	const channel10 = client.channels.cache.get('1039057454098559016');//투표1
	const channel7 = client.channels.cache.get('1039057500374310932');//투표2
	const channel8 = client.channels.cache.get('1039057532062277663');//투표3
	const channel9 = client.channels.cache.get('1039057596918800424');//투표4
	const channel99 = client.channels.cache.get('1039057641592332318');//투표5
	const channel88 = client.channels.cache.get('1039061038819188757');//수다
///채널내 모든메시지 삭제
let fetched1;
let fetched2;
let fetched3;
let fetched4;
let fetched5;
let fetched6;
let fetched7;
let fetched8;
let fetched9;
let fetched10;
let fetched99;
let fetched88;
console.log('0')
do {

	fetched88 = await channel88.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel88.bulkDelete(fetched88).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched88.size >= 2);///투표3
do {

	fetched99 = await channel99.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel99.bulkDelete(fetched99).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched99.size >= 2);///투표3
do {

	fetched9 = await channel9.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel9.bulkDelete(fetched9).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched9.size >= 2);///투표3
do {

	fetched8 = await channel8.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel8.bulkDelete(fetched8).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched8.size >= 2);///투표3
do {

	fetched7 = await channel7.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel7.bulkDelete(fetched7).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched7.size >= 2);///투표2
do {

	fetched10 = await channel10.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel10.bulkDelete(fetched10).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched10.size >= 2);///투표1
do {

  fetched1 = await channel1.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel1.bulkDelete(fetched1).catch(console.warn = () => {});
  console.log('1')
}
while(fetched1.size >= 2);//1차증거

do {
  await wait(1000)
  fetched2 = await channel2.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel2.bulkDelete(fetched2).catch(console.warn = () => {});
  console.log('2')
}
while(fetched2.size >= 2);//2차증거
do {
  await wait(1000)
  fetched3 = await channel3.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel3.bulkDelete(fetched3).catch(console.warn = () => {});
  console.log('3')
}
while(fetched3.size >= 2);//추가증거
// do {
//   await wait(1000)
//   fetched4 = await channel4.messages.fetch({limit: 99}).catch(console.warn = () => {});
//   await channel4.bulkDelete(fetched4).catch(console.warn = () => {});
//   console.log('4')
// }
// while(fetched4.size >= 2);
// do {
//   await wait(1000)
//   fetched5 = await channel5.messages.fetch({limit: 99}).catch(console.warn = () => {});
//   await channel5.bulkDelete(fetched5).catch(console.warn = () => {});
//   console.log('5')
// }
// while(fetched5.size >= 2);
do {
  await wait(1000)
  fetched6 = await channel6.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel6.bulkDelete(fetched6).catch(console.warn = () => {});
  console.log('6')
}
while(fetched6.size >= 2);//추리노트

console.log('끝')
   client.user.setAvatar(botstan);
		
	   

}
if(admin.round == 5 && admin.vpoint == 0 && admin.readynum == totalplayer && vote.votenum == totalplayer && totalplayer == 6){////6인 투표종료
	
	await today.setMinutes(today.getMinutes() - 15);
	var dlck = "" + today.getFullYear()+"년" + today.getMonth()+"월" + today.getDate()+"일" + today.getHours()+"시" + today.getMinutes()+"분";
	var cd1 = admin.playerid1
	var cd2 = admin.playerid2
	var cd3 = admin.playerid3
	var cd4 = admin.playerid4
	var cd5 = admin.playerid5
	var cd6 = admin.playerid6
	const channel1 = client.channels.cache.get(chclue1);//1차증거
    const channel2 = client.channels.cache.get(chclue2);//2차증거
    const channel3 = client.channels.cache.get(chclue3);//추가증거
    const channel4 = client.channels.cache.get(chclue4);//
    const channel5 = client.channels.cache.get(chclue5);//
    const channel6 = client.channels.cache.get(note1);//추리노트
	console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
	await channel6.send('투표가 모두 끝났습니다.')
	await channel6.send('결과 발표와 동시 모든 용의자는 관전자로 바뀝니다. 결과는 기록채널에서 확인 가능하며 사건의 전말 채널이 열립니다.')
	if(vote.vote1 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/hanho.mp3')///결과발표 멘트 아랑 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
console.log('아랑')	
}
	if(vote.vote1 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/hanho.mp3')///결과발표 윤정남 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
console.log('윤정남')	
}
	else if(vote.vote3 >= 3){
		console.log('덕수')	
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/suho.mp3')///결과발표 멘트 덕수 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
	}
	else if(vote.vote4 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('사카모토')	
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/ojung.mp3')///결과발표 멘트 사카모토 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
	}
	else if(vote.vote5 >= 3){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('유메')	
		const connection = joinVoiceChannel({
		channelId: vplay,
		guildId: message.guildId,
		adapterCreator: message.guild.voiceAdapterCreator
		
	})
	
	
	const player = createAudioPlayer()
	const resource = createAudioResource('./music/gack.mp3')///결과발표 멘트 유메 다득표
	
	
	player.play(resource, {seek: 0, volume: 1.0})
	connection.subscribe(player);
	
	player.on(AudioPlayerStatus.Idle, () => {
	  connection.destroy();
	
	});
	}
	else if(vote.vote1 == vote.vote5 == 2 ||vote.vote1 == vote.vote4 == 2 ||vote.vote1 == vote.vote3 == 2 ||vote.vote1 == vote.vote2 == 2 ||vote.vote2 == vote.vote3 == 2 || vote.vote2 == vote.vote4 == 2 || vote.vote2 == vote.vote5 == 2 || vote.vote3 == vote.vote4 == 2 || vote.vote3 == vote.vote5 == 2 || vote.vote4 == vote.vote5 == 2 ){
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('동률')	
		const connection = joinVoiceChannel({
			channelId: vplay,
			guildId: message.guildId,
			adapterCreator: message.guild.voiceAdapterCreator
			
		})
		
		
		const player = createAudioPlayer()
		const resource = createAudioResource('./music/dong.mp3')///결과발표 멘트 이외
		
		
		player.play(resource, {seek: 0, volume: 1.0})
		connection.subscribe(player);
		
		player.on(AudioPlayerStatus.Idle, () => {
		  connection.destroy();
		
		});
	}
	else {
		console.log(vote.vote1)
		console.log(vote.vote2)
		console.log(vote.vote3)
		console.log(vote.vote4)
		console.log(vote.vote5)
		console.log('동률')	
		const connection = joinVoiceChannel({
			channelId: vplay,
			guildId: message.guildId,
			adapterCreator: message.guild.voiceAdapterCreator
			
		})
		
		
		const player = createAudioPlayer()
		const resource = createAudioResource('./music/dong.mp3')///결과발표 멘트 이외
		
		
		player.play(resource, {seek: 0, volume: 1.0})
		connection.subscribe(player);
		
		player.on(AudioPlayerStatus.Idle, () => {
		  connection.destroy();
		
		});
	}

	
console.log('1')

	await message.guild.members.cache.get(cd1).roles.add(observer).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
	console.log('1')	
	await message.guild.members.cache.get(cd1).roles.remove(playcode).catch(console.warn = () => {});
	console.log('2')	
	await message.guild.members.cache.get(cd2).roles.add(observer).catch(console.warn = () => {});
	await wait(1000)
	console.log('3')	
	await message.guild.members.cache.get(cd2).roles.remove(playcode1).catch(console.warn = () => {});
	console.log('4')	
	await message.guild.members.cache.get(cd3).roles.add(observer).catch(console.warn = () => {});
	console.log('5')	
	await message.guild.members.cache.get(cd3).roles.remove(playcode2).catch(console.warn = () => {});
	console.log('6')	
	await message.guild.members.cache.get(cd4).roles.add(observer).catch(console.warn = () => {});
	console.log('7')	
	await message.guild.members.cache.get(cd4).roles.remove(playcode3).catch(console.warn = () => {});
	console.log('8')	
	await message.guild.members.cache.get(cd5).roles.add(observer).catch(console.warn = () => {});
	console.log('9')	
	await message.guild.members.cache.get(cd5).roles.remove(playcode4).catch(console.warn = () => {});
	console.log('10')

const nick0 = message.guild.members.cache.get(admin.playerid1)
await nick0.setNickname("-관전."+admin.player1)
const nick1 = message.guild.members.cache.get(admin.playerid2)
await nick1.setNickname("-관전."+admin.player2)
const nick2 = message.guild.members.cache.get(admin.playerid3)
await nick2.setNickname("-관전."+admin.player3)
const nick3 = message.guild.members.cache.get(admin.playerid4)
await nick3.setNickname("-관전."+admin.player4)
const nick4 = message.guild.members.cache.get(admin.playerid5)
await nick4.setNickname("-관전."+admin.player5)

		database = {
			readynum : admin.readynum,
			class1 : admin.class1,
			player1 : admin.player1,
			class2 : admin.class2,
			player2 : admin.player2,
			class3 : admin.class3,
			player3 : admin.player3,
			class4 : admin.class4,
			player4 : admin.player4,
			class5 : admin.class5,
			player5 : admin.player5,
			class6 : admin.class6,
			player6 : admin.player6,
			playerid1 : admin.playerid1,
			playerid2 : admin.playerid2,
			playerid3 : admin.playerid3,
			playerid4 : admin.playerid4,
			playerid5 : admin.playerid5,
			playerid6 : admin.playerid6,
			round : (admin.round *= 0) +6,
			starttime : admin.starttime,
			endtime : new Date().toISOString(),
			vpoint : admin.vpoint
		 }
		 fs.writeFileSync(dfilePath, JSON.stringify(database));

		 var rufrhk = ""
		 if(vote.vote2 >= 3)rufrhk = "검거 성공"
		 if(vote.vote2 <= 2)rufrhk = "검거 실패"
		 const dday = new Date();
var daiy = dday.getHours() + "시" + dday.getMinutes() + "분, " + dday.toDateString();
		 const playrecord = new EmbedBuilder()
		 .setColor(0x0099FF)
		 .setTitle('삭월의 밤')
		 .setAuthor({ name: pnum.title1+" "+pnum.playnum+" 차", iconURL: 'https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png'})
		 .setDescription('시간은삭월의밤, 붉은 그림자')
		 .setThumbnail('https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png')
		 .addFields(
		   { name: `${admin.starttime}시작`, value: daiy+"끝" },
		   { name: '\u200B', value: '\u200B' },
		   { name: '검거결과', value: rufrhk },
		   { name: '\u200B', value: '\u200B' },
		   { name: admin.class1+"역", value: admin.player1+"님", inline: true },
		   { name: admin.class2+"역", value: admin.player2+"님", inline: true },
		 )
		 
		   .addFields(
		   { name: admin.class3+"역", value: admin.player3+"님", inline: true },
		   { name: admin.class4+"역", value: admin.player4+"님", inline: true },
		   )
		   .addFields(
		   { name: admin.class5+"역", value: admin.player5+"님", inline: true },
		   { name: admin.class6+"역", value: admin.player6+"님", inline: true },
		   { name: '\u200B', value: '\u200B' },
		   { name: admin.class1+"님의 득표", value: vote.vote1+"표", inline: true },
		   { name: admin.class2+"님의 득표", value: vote.vote2+"표", inline: true },
		   )
		   .addFields(
		   { name: admin.class3+"님의 득표", value: vote.vote3+"표", inline: true },
		   { name: admin.class4+"님의 득표", value: vote.vote4+"표", inline: true },
		   )
		   .addFields(
		   { name: admin.class5+"님의 득표", value: vote.vote5+"표", inline: true },
		   { name: admin.class6+"님의 득표", value: vote.vote6+"표", inline: true },
		 )
		 .setFooter({ text: '가베당에 방문해 주셔서 감사합니다', iconURL: 'https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png' });
		 const channel77 = client.channels.cache.get(record);
	   await channel77.send({ embeds: [playrecord] })////특정채널 메시지
	   client.user.setActivity("만월의 밤", {
		type: ActivityType.Playing,
		  });
		  await wait(500)
	   message.guild.members.cache.get('1013329595082231811').setNickname('만월의 밤')
	   console.log('끝나서 리셋')
	   database = {
		 readynum : 0,
		 class1 : "미지정",
		 player1 : "미지정",
		 class2 : "미지정",
		 player2 : "미지정",
		 class3 : "미지정",
		 player3 : "미지정",
		 class4 : "미지정",
		 player4 : "미지정",
		 class5 : "미지정",
		 player5 : "미지정",
		 class6 : "미지정",
		 player6 : "미지정",
		 playerid1 : "미지정",
		 playerid2 : "미지정",
		 playerid3 : "미지정",
		 playerid4 : "미지정",
		 playerid5 : "미지정",
		 playerid6 : "미지정",
		 round : 0,
		 starttime : 0,
		 endtime : 0,
		 vpoint : 0
		
	  }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 voting = {
		votenum : 0,
		player1 : admin.class1,
		vote1 : 0,
		vote2 : 0,
		player2 : admin.class2,
		vote3 : 0,
		player3 : admin.class3,
		vote4 : 0,
		player4 : admin.class4,
		vote5 : 0,
		player5 : admin.class5,
		vote6 : 0,
		player6 : admin.class6,
		vchance1 : 1,
		vchance2 : 1,
		vchance3 : 1,
		vchance4 : 1,
		vchance5 : 1,
		vchance6 : 1,
	
		
	   
	 }
	fs.writeFileSync(vfilePath, JSON.stringify(voting));
	const channel10 = client.channels.cache.get('1039057454098559016');//투표1
	const channel7 = client.channels.cache.get('1039057500374310932');//투표2
	const channel8 = client.channels.cache.get('1039057532062277663');//투표3
	const channel9 = client.channels.cache.get('1039057596918800424');//투표4
	const channel99 = client.channels.cache.get('1039057641592332318');//투표5
	const channel88 = client.channels.cache.get('1039061038819188757');//수다
///채널내 모든메시지 삭제
let fetched1;
let fetched2;
let fetched3;
let fetched4;
let fetched5;
let fetched6;
let fetched7;
let fetched8;
let fetched9;
let fetched10;
let fetched99;
let fetched88;
console.log('0')
do {

	fetched88 = await channel88.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel88.bulkDelete(fetched88).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched88.size >= 2);///투표3
do {

	fetched99 = await channel99.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel99.bulkDelete(fetched99).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched99.size >= 2);///투표3
do {

	fetched9 = await channel9.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel9.bulkDelete(fetched9).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched9.size >= 2);///투표3
do {

	fetched8 = await channel8.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel8.bulkDelete(fetched8).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched8.size >= 2);///투표3
do {

	fetched7 = await channel7.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel7.bulkDelete(fetched7).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched7.size >= 2);///투표2
do {

	fetched10 = await channel10.messages.fetch({limit: 99}).catch(console.warn = () => {});
	await channel10.bulkDelete(fetched10).catch(console.warn = () => {});
	console.log('1')
  }
  while(fetched10.size >= 2);///투표1
do {

  fetched1 = await channel1.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel1.bulkDelete(fetched1).catch(console.warn = () => {});
  console.log('1')
}
while(fetched1.size >= 2);//1차증거

do {
  await wait(1000)
  fetched2 = await channel2.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel2.bulkDelete(fetched2).catch(console.warn = () => {});
  console.log('2')
}
while(fetched2.size >= 2);//2차증거
do {
  await wait(1000)
  fetched3 = await channel3.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel3.bulkDelete(fetched3).catch(console.warn = () => {});
  console.log('3')
}
while(fetched3.size >= 2);//추가증거
// do {
//   await wait(1000)
//   fetched4 = await channel4.messages.fetch({limit: 99}).catch(console.warn = () => {});
//   await channel4.bulkDelete(fetched4).catch(console.warn = () => {});
//   console.log('4')
// }
// while(fetched4.size >= 2);
// do {
//   await wait(1000)
//   fetched5 = await channel5.messages.fetch({limit: 99}).catch(console.warn = () => {});
//   await channel5.bulkDelete(fetched5).catch(console.warn = () => {});
//   console.log('5')
// }
// while(fetched5.size >= 2);
do {
  await wait(1000)
  fetched6 = await channel6.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel6.bulkDelete(fetched6).catch(console.warn = () => {});
  console.log('6')
}
while(fetched6.size >= 2);//추리노트

console.log('끝')
   client.user.setAvatar(botstan);
}

}

catch(error){

console.error(error);
}
});



client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);


	if (!command) return;



	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
//////////////////////////////////초기입장 멘트/
///////////////


client.on('guildMemberAdd', async member => {
	await wait(1000);
	member.guild.channels.cache.find(i => i.name === '역할받기')
	const channel44 = client.channels.cache.get('1022085158960115795');//관전방
	channel44.send('**본사건은 음성이 나오니 만월의 밤 소리조절을 부탁드립니다.!!!!**')
	channel44.send('>>> 안녕하세요, 이 곳은 역할을 받는 곳입니다.\n'+character1+'                     '+character2+'\n'+character3+'                     '+character4+'\n'+character5+'\n\n명령어는 **!역할 김구**입니다.')
	})


//Welcome & goodbye messages end\\
//////////////
/////////////
client.login(token);
