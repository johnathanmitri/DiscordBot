Discord = require('discord.js');
client = new Discord.Client();

var tid = setTimeout(loop, 3000);

loop()
{
	
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

	if (msg.content === 'ping') 
		msg.reply('pong');
});

client.login(process.env.AUTH_TOKEN);