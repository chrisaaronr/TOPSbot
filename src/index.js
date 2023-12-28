const {Client, IntentsBitField } = require('discord.js');
require('dotenv').config()

let token = process.env.TOKEN;


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`)
});

client.on('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply('Oh, hey!')
    }
})


client.login(token);