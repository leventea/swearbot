import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { getRandomSwear } from '../generator';

export default {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Returns a random insult'),
    async execute(i: ChatInputCommandInteraction) {
        i.reply(getRandomSwear());
    }
}