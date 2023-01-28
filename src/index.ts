import { Client, GatewayIntentBits } from 'discord.js';
import setup from './setup';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

async function start() {
  await setup();

  client.on('ready', () => {
    if (!client.user) return;

    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

  client.login(process.env.TOKEN);
}

start();
