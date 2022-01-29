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

    get notAnswer() {
        return !this.answered
    }

    get answered() {
        for(let resp of this.#resp) {
            if(resp.revealed) return true
        } return false
    }

    respondWith(indice: number): QuestionModel {
        const correct = this.#resp[indice]?.correct;
        const answer = this.#resp.map((resp, i) => {
            const answerSelect = indice === i;
            const answerRevealed = answerSelect || resp.correct
            return answerRevealed ? resp.reveal() : resp
        })
        return new QuestionModel(this.#id, this.#enunciado, answer, correct);
    }

    shuffleAnswers(): QuestionModel {
        let shuffleAnswers = shuffle(this.#resp);
        return new QuestionModel(this.#id, this.#enunciado, shuffleAnswers, this.#correct);
    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.answered,
            correct: this.#correct,
            resp: this.#resp.map((response) => response.toObject())
        }
    }
}