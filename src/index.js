const {Client, IntentsBitField, EmbedBuilder, ButtonBuilder, ButtonInteraction } = require('discord.js');
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
    };

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value; 

        interaction.reply(`The sum is ${num1 + num2}.`);
    };

    if (interaction.commandName === 'live') {
        const activity = interaction.options.get('activity').value;

        const liveEmbed = new EmbedBuilder()
            .setColor('Random')
            .setTitle("TOPSilog_ is Now LIVE!")
            .setURL('https://www.twitch.tv/topsilog_')
            .setAuthor({ name: 'BOTSilog'})
            .setDescription('Hey, everyone! Tops is live! Come hang out with us!')
            .setThumbnail('https://i.imgur.com/4iwovl4.jpg')
            .addFields(
                { name: 'Games', value: activity },
            );

        interaction.channel.send('BOTSilog here! @everyone')
        interaction.channel.send({ embeds: [liveEmbed]});
    };
});

//Interaction - Claim or remove roles
client.on('interactionCreate', async (interaction) => {
    try {
        if (!interaction .isButton()) return;
        await interaction.deferReply({ ephemeral: true });

        const role = interaction.guild.roles.cache.get(interaction.customeId);
        if (!role) {
            interaction.editReply({
            content: "Oh.  I could not find that role.",
        })
        return;
        }

        const hasRole = interaction.member.roles.cache.has(role.id);

        if (hasRole) {
            await interaction.member.roles.remove(role);
            await interaction.editReply(`The role ${role} has been removed.`);
            return;
        }

        await interaction.member.roles.add(role);
        await interaction.editReply(`The role ${role} has been added.`);

    } catch (error) {
        console.log(error);
    }
});


client.login(token);