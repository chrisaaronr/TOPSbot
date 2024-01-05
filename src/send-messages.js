const {Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
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
        id: '1192581060521894020',
        label: 'Blue'
    },
    {
        id: '1192581411996192809',
        label: 'Green'
    },
    {
        id: '1192581703852625941',
        label: 'Pink'
    },
    {
        id: '1192583919334342656',
        label: 'Yellow'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1192588712819818527');
        if (!channel) return;

        const row = new ActionRowBuilder(); 

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        });

        await channel.send({
            content: 'Claim or remove a Member Role Color below:',
            components: [row]
        });
        process.exit();
    } catch (error) {
        console.log(error)
    }
});

client.login(token);

