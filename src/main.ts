import { Client, Events, GatewayIntentBits } from 'discord.js';
import { cfg } from './config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log("Bot ready");
});

client.login(cfg.token);