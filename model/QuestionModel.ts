import AnswerModel from "./AnswerModel";
import {shuffle} from "../function/arrays";

export default class QuestionModel {
    #id: number
    #enunciado: string
    #resp: AnswerModel[]
    #correct: boolean

    constructor(id: number, enunciado: string, resp: any[], correct= false) {
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

    shuffleAnswers(): QuestionModel {
        let shuffleAnswers = shuffle(this.#resp);
        return new QuestionModel(this.#id, this.#enunciado, shuffleAnswers, this.#correct);

    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            resp: this.#resp.map((response) => response.toObject()),
            correct: this.#correct
        }
    }
}