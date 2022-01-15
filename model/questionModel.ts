export default class QuestionModel {
    #id: number
    #enunciado: string
    #resp: any[]
    #correct: boolean

    constructor(id: number, enunciado: string, resp: any[], correct: false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#resp = resp
        this.#correct = correct
    }

    get id(): number {
        return this.#id;
    }

    get enunciado(): string {
        return this.#enunciado;
    }

    get resp(): any[] {
        return this.#resp;
    }

    get correct(): boolean {
        return this.#correct;
    }
}