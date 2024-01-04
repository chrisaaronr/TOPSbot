const {Client, IntentsBitField } = require('discord.js');
require('dotenv').config();

let token = process.env.TOKEN;


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

//Claim and drop roles with button
const roles = [
    {
        id: 
    }
]

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is ready to give or take roles!`)
});

client.login(token);

