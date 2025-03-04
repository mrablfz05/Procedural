// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export class Sum {
    constructor(winningNumbers) {
        this.winningNumbers = winningNumbers
    }

    getSum() {
        if (this.winningNumbers.length === 0) return 0

        let shuffled = shuffleArray([...this.winningNumbers])
        let count = Math.floor(Math.random() * shuffled.length) + 1
        let selectedNumbers = shuffled.slice(0, count)

        console.log('Randomly Selected Winning Numbers:', selectedNumbers)
        return selectedNumbers.reduce((sum, num) => sum + num, 0)
    }
}
