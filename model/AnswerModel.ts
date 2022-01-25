export default class AnswerModel {
    #price: string
    #correct: boolean
    #revealed: boolean

    constructor(price: string, correct: boolean, revealed = false) {
        this.#price = price
        this.#correct = correct
        this.#revealed = revealed
    }

    static correct(value) {
        return new AnswerModel(value, true)
    }

    static error(value) {
        return new AnswerModel(value, false)
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

    reveal(): AnswerModel {
        return new AnswerModel(this.price, this.#correct, true);
    }

    toObject() {
        return {
            price: this.#price,
            correct: this.#correct,
            revealed: this.#revealed
        }
    }
}