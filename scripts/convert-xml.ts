import { readFileSync, writeFileSync } from 'fs';
import parse from 'xml-parser';

const parsed = parse(readFileSync('./res/DirtyWords.xml').toString());
const array = parsed.root.children.map(x => x.content);

writeFileSync('./res/dirty-words.json', JSON.stringify(array));