import fs from 'fs'
import { parseCard } from "./cardParser.js"

export const processFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8')
        return parseCard(data)
    } catch (err) {
        console.error('Error while reading file!', err)
        return []
    }
}