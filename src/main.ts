import { Client, Events, GatewayIntentBits, Interaction } from 'discord.js';
import { Command, getCommands } from './commands';
import { cfg } from './config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
let commands: Map<string, Command> = new Map<string, Command>();

client.once(Events.ClientReady, async c => {
    (await getCommands()).forEach((cmd: Command) => { 
        commands.set(cmd.data.name, cmd);
    });

    console.log(`Loaded ${commands.size} command(s).`);
    console.log(`Bot ready.\nInvite link: https://discord.com/oauth2/authorize/?permissions=-2147481600&scope=bot&client_id=${cfg.clientId}`);
});

client.on(Events.InteractionCreate, async (i: Interaction) => {
    if (!i.isChatInputCommand()) return; 
 
    const cmd = commands.get(i.commandName);
    if (!cmd) {
        console.error(`No command with name ${i.commandName} found.`);
        return;
    }
   
    try {
        await cmd.execute(i);
    } catch (ex) {
        console.error(ex);
    }
});

client.login(cfg.token);