//Require discord.js Package
const Discord = require('discord.js');


const bot = new Discord.Client();
//const prefix = '!';

const token = '';

bot.on('ready', () => {
    console.log('Online and ready!');
});

bot.on('message', msg => {
    if (msg.content === 'HEY') {
        msg.reply('vex is dova\'s baby boy');
    }
});

bot.on('message', message => {
    if (message.content === 'howdy!') {
        let user = message.author;
        message.channel.send(`Howdy there, ${user}!`);
    }
});

bot.login(token);
