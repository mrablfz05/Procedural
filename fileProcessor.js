import fs from 'fs'
import { CardParser } from './cardParser.js'

export class FileProcessor {
  constructor(filePath) {
    this.filePath = filePath
  }

  process() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8')
      return new CardParser(data) // Create parser object
    } catch (err) {
      console.error('Error while reading file!', err)
      return new CardParser('') // Return empty parser to avoid errors
    }
  }
}
