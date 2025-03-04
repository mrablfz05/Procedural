export class CardParser {
  constructor(data) {
    this.data = data
    this.cards = []
    this.winningNumbersArray = []
    this.parse() // Auto-parse data on initialization
  }

  parse() {
    const splitResult = this.data
      .split('\n')
      .map((line) => line.trim().split('|'))

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
      this.winningNumbersArray.push(...currentWinningNumbers)

      this.cards.push({
        name,
        winningNumbers: currentWinningNumbers,
        allNumbers: allNumbersArray,
      })
    })
  }

  getCards() {
    return this.cards
  }

  getWinningNumbers() {
    return this.winningNumbersArray
  }
}
