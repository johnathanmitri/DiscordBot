Discord = require('discord.js');
client = new Discord.Client();

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
        if (msg.content === 'ab8')
                console.log(msg.channel.guild.roles)
});

client.login(process.env.AUTH_TOKEN);
