const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config()

let token = process.env.TOKEN;
let client_ID = process.env.CLIENT_ID; //TopsBot ID
let guild_ID = process.env.GUILD_ID; //Server ID


const commands = [
    //Run Slash Commands
    {
        name: 'hey',
        description: 'Replies with hey!'
    },
    //Slash Command Options
    {
        name:'add',
        description: 'Adds two numbers',
        options: [ 
            {
                name: 'first-number',
                description: 'First number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'Second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ]
    },
    //Slash Command Choices
    {
        name: '',
        description: '',
        options: [
            {
                name: '',
                description: '',
                type: ,
                choices: [
                    {
                        name: '',
                        value: , 
                    },
                    {
                        name: '',
                        value: , 
                    },{
                        name: '',
                        value: , 
                    },
                ],
            }, {}
        ],
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