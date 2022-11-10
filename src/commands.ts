import { Interaction, SlashCommandBuilder } from "discord.js";
import { readdirSync } from "fs";

export interface Command {
    data: SlashCommandBuilder,
    execute(int: Interaction): Promise<void>;
}

export async function getCommands(): Promise<Array<Command>> {
    const commands = [];
	const commandFiles = readdirSync('./src/commands');

	for (const file of commandFiles) {
		const command = (await import(`./commands/${file}`)).default;
		commands.push(command);
	}

	return commands;
}

