import fs from 'fs'

export class File {

    constructor(filePath) {
        this.filePath = filePath
    }

    readFile() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8')
            return data
            // console.log(data)
        } catch (err) {
            console.error('Error while reading file!', err)
            return []
        }
    }
}

let file = new File('./problem.txt')
console.log(file.readFile())