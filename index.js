const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return; // Ignore bot messages
    message.reply({
        content: "Hi From Bot",
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!");
});


client.login(
    "MTM1ODc4MTA1MDk2ODQ3MzcwMA.Gl5cBw.2SVtCk3khGqlj0_nj-eaaVxK8mDN1fIIsEr4RM"
);