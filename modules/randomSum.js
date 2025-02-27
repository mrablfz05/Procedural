import { winningNumbersArray } from "./cardParser.js"

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

// Sum a random selection of winning numbers
export const sumRandomWinningNumbers = () => {
    if (winningNumbersArray.length === 0) return 0

    let shuffled = shuffleArray([...winningNumbersArray])
    let count = Math.floor(Math.random() * shuffled.length) + 1
    let selectedNumbers = shuffled.slice(0, count)

    console.log('Randomly Selected Winning Numbers:', selectedNumbers)
    return selectedNumbers.reduce((sum, num) => sum + num, 0)
}