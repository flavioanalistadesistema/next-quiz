export default class AnswerModel {
    #price: string
    #correct: boolean
    #revealed: boolean

    constructor(price: string, correct: boolean, revealed = false) {
        this.#price = price
        this.#correct = correct
        this.#revealed = revealed
    }

    get price(): string {
        return this.#price;
    }

    get correct(): boolean {
        return this.#correct;
    }

    get revealed(): boolean {
        return this.#revealed;
    }
}