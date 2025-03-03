export let winningNumbersArray = []

export const parseCards = (data) => {
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

        cards.push({
            name,
            winningNumbers: currentWinningNumbers,
            allNumbers: allNumbersArray,
        })
    })

  return cards
}