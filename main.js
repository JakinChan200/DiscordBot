const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

//Need fs to get into other javascript files
const fs = require('fs');

//Discord collection that stores all of our commands
client.commands = new Discord.Collection();

//makes sure files are javascript
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('nom nom');
});   

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        //message.channel.send('pong!');
    }
});




client.login('NzU4NDk4MTcyMTQxMDQzNzUz.X2v0eA.8-k0k5WJUU6XKgQ17hC_Z_fh7FA');