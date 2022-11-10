import wordlist from '../res/dirty-words.json';
import { rnd } from './util';

export function getRandomSwear(): string {
    let i = rnd(0, wordlist.length);
    return wordlist[i];
}

export function getPhrase(words: number): string {
    let str = "Te ";

    [...Array(words).keys()].forEach(i => {
        str += `${getRandomSwear().toLowerCase()}${i != words - 1 ? ', ' : ''}`;
    });

    return `${str}!`;
}
