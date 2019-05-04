const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTczOTgwMjAyMTEyMjUzOTcz.XMyvKw.h5bKcLcXiNVLbq7CyLbJr1_gvEw';

const PREFIX = '.';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
        break;
    }
})

client.login(process.env.BOT_TOKEN);
