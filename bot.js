//require('dotenv').config()

Discord = require('discord.js');
client = new Discord.Client();

var loopChannel;
var loopCount = 154840;
var tid;

function loop()
{
	loopChannel.send(loopCount.toString());
	loopCount++;
}
	
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	Channel = msg.channel
	if (Channel.guild != null)
		console.log(`${msg.author.username} said "${msg.content}" in ${msg.channel.name} of ${msg.channel.guild.name}`)
	else if (Channel.type == "dm")
		console.log(`${msg.author.username} DMed "${msg.content}"`)
	else
		console.log('group chat?')

	if (msg.content === 'count5648548')
	{
		loopChannel = Channel;
		msg.reply('ok fine retard');
		tid = setInterval(loop, 1500);
	}
	else if (msg.content === 'stop5648548')
	{
		clearTimeout(tid);
	}
	else if (msg.content === 'ping') 
		msg.reply('pong');
});

client.login(process.env.AUTH_TOKEN);