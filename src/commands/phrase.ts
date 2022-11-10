import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { getPhrase } from '../generator';
import { rnd } from '../util';

export default {
    data: new SlashCommandBuilder()
        .setName('phrase')
        .setDescription('Generates a random phrase')
        .addNumberOption(opt => 
            opt.setName("words")
               .setDescription("Number of swears")
               .setMinValue(1)),
    async execute(i: ChatInputCommandInteraction) {
        let words = i.options.getNumber('words', false) ?? rnd(2, 6);
        i.reply(getPhrase(words));
    }
}