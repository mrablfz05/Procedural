import fs from 'fs'
import { parseCards } from "./cardParser.js"

export const processFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8')
        return parseCards(data)
    } catch (err) {
        console.error('Error while reading file!', err)
        return []
    }
}