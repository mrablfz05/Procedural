import { processFile } from "./modules/fileProcessor.js"
import { winningNumbersArray } from "./modules/cardParser.js"
import { sumRandomWinningNumbers } from "./modules/randomSum.js"

const solution = () => {
    const filePath = 'problem.txt'
    processFile(filePath)

    console.log('All Winning Numbers:', winningNumbersArray)
    console.log('Random Sum of Winning Numbers:', sumRandomWinningNumbers())
}

solution()
