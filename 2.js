// This solution is from Codewars.
class Guess {
    constructor() {
        this.step = 0
        this.answer = []
        this.result = []
    }
    guess(n) {
        if (this.step < 9) {
            if (n) this.answer.push(this.step)
            if (this.step == 8 && this.answer.length < 4) this.answer.push(9)
        } else if (this.step < 12) {
            if (n) this.result.push(this.answer[this.step - 9])
            if (this.step == 11) {
                if (this.result.length == 0) this.result.push(this.answer[3])
                var idx = this.answer.indexOf(this.result[0])
                this.answer.splice(idx, 1)
            }
        } else if (this.step == 12) {
            if (n) this.result.push(this.answer[0])
        } else if (this.step == 13) {
            if (n) this.result.push(this.answer[1])
            if (this.result.length == 1) this.result.push(this.answer[2])
            var idx = this.answer.indexOf(this.result[1])
            this.answer.splice(idx, 1)
        } else if (this.step == 14) {
            if (n) this.result.push(...this.answer)
            else this.result.push(this.answer[1], this.answer[0])
        }
        this.step++
    }
    next() {
        return this.step < 9 ? Array(4).fill(this.step) : //0..8
            this.step < 12 ? [this.answer[this.step - 9]] : //9.10.11
            this.step < 14 ? [-1, this.answer[this.step - 12]] : //12,13
            this.step == 14 ? [-1, -1, this.answer[0]] : //14
            this.result
    }
}

var guess

function game(mt) {
    mt == -1 ? guess = new Guess() : guess.guess(mt)
    return guess.next()
}