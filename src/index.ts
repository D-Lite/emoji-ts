import { emojis } from './data/emoji'

export function getEmojis(name: string) {
    const filteredEmojis = emojis.filter(emoji => emoji.tags.includes(name));
    console.log(filteredEmojis)
    return filteredEmojis
}
