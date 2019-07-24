const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTg0MjQ4NzgwMzA0NDE2ODA4.XTh_MA.xtDN7ebwYSaLlbLjMIUK2k42mVg);//where BOT_TOKEN is the token of our bot
