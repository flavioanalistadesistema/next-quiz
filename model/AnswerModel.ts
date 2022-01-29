export default class AnswerModel {
    #value: string
    #correct: boolean
    #revealed: boolean

    constructor(value: string, correct: boolean, revealed = false) {
        this.#value = value
        this.#correct = correct
        this.#revealed = revealed
    }

    static correct(value) {
        return new AnswerModel(value, true)
    }

    static error(value) {
        return new AnswerModel(value, false)
    }

    get value(): string {
        return this.#value;
    }

    get correct(): boolean {
        return this.#correct;
    }

    get revealed(): boolean {
        return this.#revealed;
    }

    reveal(): AnswerModel {
        return new AnswerModel(this.value, this.#correct, true);
    }

    toObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed
        }
    }
}