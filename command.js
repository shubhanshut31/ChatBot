const { REST, Routes } = require("discord.js");



const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(
    "MTM1ODc4MTA1MDk2ODQ3MzcwMA.Gl5cBw.2SVtCk3khGqlj0_nj-eaaVxK8mDN1fIIsEr4RM"
);

(async () => {


try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1358781050968473700"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    consol
    e.error(error);
}
})();
