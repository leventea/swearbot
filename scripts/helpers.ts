import { REST } from 'discord.js';
import { Command, getCommands } from '../src/commands';
import { cfg } from '../src/config';

export function getRest(): REST {
	return new REST({ version: '10' }).setToken(cfg.token);
}

export async function getCommandsJson() {
	return (await getCommands()).map((cmd: Command) => cmd.data.toJSON());
}
