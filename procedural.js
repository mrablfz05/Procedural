import fs from "fs"

const solution = () => {
    // Procedural instructions step by step:

    // 1. read the file
    let readedData = ''

    
    const processFile = () => {
        fs.readFile('problem.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log('Error while reading file!')
            } else {
                readedData = data
                // console.log(readedData)
                splitData(data)
            }
        })
    }
    processFile()
    
    // 2. parse the file
    
    const splitData = (data) => {
        const splitResult = data.split('\n')
        console.log('Split Data:', splitResult)
    }

















    // 3. calculate the sum of cards
    // 4. print output: sum of cards
}

solution()