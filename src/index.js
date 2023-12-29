const {Client, IntentsBitField, EmbedBuilder } = require('discord.js');
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

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`)
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    
    if (message.content === 'hello!') {
        message.reply('oh, hello!')
    }
});

//Slash Commands - Interactions
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('oh, hey!')
    }

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value; 

        interaction.reply(`The sum is ${num1 + num2}.`);
    }

    if (interaction.commandName === 'live') {
        const activity = interaction.options.get('activity').value;

        const liveEmbed = new EmbedBuilder()
            .setColor('Random')
            .setTitle("TOPSilog_ is Now LIVE!")
            .setURL('https://www.twitch.tv/topsilog_')
            .setDescription('Hey, everyone! Tops is now live! Come hang out with us!')
            .setThumbnail('https://i.imgur.com/R6qLfeUt.png')
            .addFields(
                { name: 'What Are We Doing Today?', value: activity },
            );


        interaction.channel.send({ embeds: [liveEmbed]});
    }
});



client.login(token);