import { FileProcessor } from './fileProcessor.js'
import { Sum } from './randomSum.js'

// Step 1: Read and parse the file
const fileProcessor = new FileProcessor('./problem.txt')
const parser = fileProcessor.process()

console.log('Parsed Cards:', parser.getCards())
console.log('Winning Numbers:', parser.getWinningNumbers())

// Step 2: Get sum of random winning numbers
const sumInstance = new Sum(parser.getWinningNumbers()) // Pass winning numbers
console.log('Sum of Random Winning Numbers:', sumInstance.getSum())
