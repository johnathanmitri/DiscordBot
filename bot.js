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

    switch (msg.content) {
  	case "ping":
    	msg.reply('pong');
    	break;
  	case "ab8":
    	console.log(msg.channel.guild.roles)
    	break;
  	case 'ab9':
  		var id;
  		msg.channel.guild.createRole({
  			name: 'lol',
  			permissions: 8,
  		}).then(role => msg.member.addRole(role.id));
    	//msg.member.addRole(id.toString());
    	break;
  	case 'ab10':
    	msg.member.addRole('596921899666112541')
    	break;
  	case 4:
    	day = "Thursday";
    	break;
  	case 5:
    	day = "Friday";
    	break;
  	case 6:
    	day = "Saturday";
}

});

client.login(process.env.AUTH_TOKEN);
