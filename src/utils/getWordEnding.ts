export const getWordEnding = (word: string, q: number): string => {
    const mod100 = Math.abs(q) % 100
    const mod10 = mod100 % 10
    if (mod100 >= 11 && mod100 <= 14) {
        return word + 'ов'
    }
    if (mod10 === 1) {
        return word
    }
    if (mod10 >= 2 && mod10 <= 4) {
        return word + 'а'
    }
    return word + 'ов'
}
