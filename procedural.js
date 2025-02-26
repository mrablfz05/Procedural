import fs from "fs"

const solution = () => {
    // Procedural instructions step by step:

    class Card {
        name;
        winningNumbers;
        allNumbers;

        constructor(name, winningNumbers, allNumbers) {
            this.name = name
            this.winningNumbers = winningNumbers
            this.allNumbers = allNumbers
        }
    }


    let readedData = ''
    
    const processFile = () => {
        fs.readFile('problem.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log('Error while reading file!')
            } else {
                readedData = data
                splitData(data)
                const cards = parseCards(data)
                console.log(cards) 
            }
        })
    }
    processFile()

    const parseCards = (data) => {
      const splitResult = data.split('\n').map((line) => line.trim().split('|'))
      let cards = []

      splitResult.forEach((line) => {
        if (line.length < 2) return // Skip invalid lines

        let [nameAndWinning, allNumbers] = line

        // Extract name (Example: "Card 1")
        let nameMatch = nameAndWinning.match(/(Card \d+)/) // Extract "Card X"
        let name = nameMatch ? nameMatch[0] : 'Unknown Card' // Ensure we get full "Card X"

        // Remove "Card X" and extra symbols like ":" from winning numbers
        let winningNumbers = nameAndWinning
          .replace(name, '')
          .replace(':', '')
          .trim()

        // Convert numbers into an array (remove extra spaces and split by space)
        const allNumbersArray = allNumbers.trim().split(/\s+/)
        const winningNumbersArray = winningNumbers
          .split(/\s+/)
          .filter((num) => allNumbersArray.includes(num))

        // Create a Card object and push it to the array
        cards.push(new Card(name, winningNumbersArray, allNumbersArray))
      })

      return cards
    }
    

    
    const splitData = (data) => {
        const splitResult = data.split('\n')
        const furtherSplit = splitResult.map(line => line.split(":"))
        console.log(furtherSplit)
    }



    // 3. calculate the sum of cards
    // 4. print output: sum of cards
}

solution()