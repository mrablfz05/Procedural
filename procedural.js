import fs from "fs"

function solution() {
    // Procedural instructions step by step:

    // 1. read the file


    fs.readFile('problem.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log('Error while reading file!')
      } else {
        console.log('File Content: ', data)
      }
    })
    // 2. parse the file
    // 3. calculate the sum of cards
    // 4. print output: sum of cards
}

solution()