import fs from 'fs'

const solution = () => {

    class Card {
        constructor(name, winningNumbers, allNumbers) {
            this.name = name
            this.winningNumbers = winningNumbers
            this.allNumbers = allNumbers
        }
    }

    let winningNumbersArray = []

    const processFile = () => {
        try {
            const data = fs.readFileSync('problem.txt', 'utf-8')
            return parseCards(data)
        } catch (err) {
            console.error('Error while reading file!', err)
            return []
        }
    }
    processFile()

    const parseCards = (data) => {
        const splitResult = data.split('\n').map((line) => line.trim().split('|'))
        let cards = []

        splitResult.forEach((line) => {
            if (line.length < 2) return // Skip invalid lines

            let [nameAndWinning, allNumbers] = line
            let nameMatch = nameAndWinning.match(/(Card \d+)/)
            let name = nameMatch ? nameMatch[0] : 'Unknown Card'

            let winningNumbers = nameAndWinning
                .replace(name, '')
                .replace(':', '')
                .trim()
            const allNumbersArray = allNumbers.trim().split(/\s+/)

            let currentWinningNumbers = winningNumbers
                .split(/\s+/)
                .filter((num) => allNumbersArray.includes(num))
                .map(Number) // Convert to numbers

            // Collect all winning numbers
            winningNumbersArray.push(...currentWinningNumbers)

            cards.push(new Card(name, currentWinningNumbers, allNumbersArray))
        })

    return cards
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    const sumRandomWinningNumbers = () => {
        if (winningNumbersArray.length === 0) return 0

        // Shuffle without modifying the original array
        let shuffled = shuffleArray([...winningNumbersArray])
            
        // Pick 1 to max elements randomly
        let count = Math.floor(Math.random() * shuffled.length) + 1
        let selectedNumbers = shuffled.slice(0, count)

        console.log('Randomly Selected Winning Numbers:', selectedNumbers)
        return selectedNumbers.reduce((sum, num) => sum + num, 0)
    }

    
    console.log('All Winning Numbers:', winningNumbersArray)
    console.log('Random Sum of Winning Numbers:', sumRandomWinningNumbers())
}

solution()