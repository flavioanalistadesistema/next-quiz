import AnswerModel from "./AnswerModel";

export default class QuestionModel {
    #id: number
    #enunciado: string
    #resp: AnswerModel[]
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

    get answered() {
        for(let resp of this.#resp) {
            if(resp.revealed) return true
        }
        return false
    }
}