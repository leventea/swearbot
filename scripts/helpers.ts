import { REST } from 'discord.js';
import { readdirSync } from 'node:fs';
import { cfg } from '../src/config';

export function getRest(): REST {
	return new REST({ version: '10' }).setToken(cfg.token);
}

export async function getCommands() {
	const commands = [];
	const commandFiles = readdirSync('./src/commands').filter((x: string) => x.endsWith('.ts'));

	for (const file of commandFiles) {
		const command = (await import(`../src/commands/${file}`)).default;

		commands.push(command.data.toJSON());
	}

	return commands;
}
