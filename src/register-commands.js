const { REST, Routes } = require('discord.js');
require('dotenv').config()

let token = process.env.TOKEN;
let client_ID = process.env.CLIENT_ID;
let guild_ID = process.env.GUILD_ID;


const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    },
];

const rest = new REST ({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(client_ID, guild_ID),
            { body: commands }
        )

        console.log('Slash commands were registered successfully!')
        
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }
})();