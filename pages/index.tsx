import QuestionComponent from "../components/Question.component";
import QuestionModel from "../model/QuestionModel";
import AnswerModel from "../model/AnswerModel";
import { useEffect, useRef, useState } from "react";
import ButtonComponent from "../components/Button.componet";
import QuestionaryComponent from "../components/Questionary.component";


export default function Home() {
    const question = new QuestionModel(1, 'Qual é o melhor jogador do mundo?', [
        AnswerModel.error('Maradona'),
        AnswerModel.error('Garrincha'),
        AnswerModel.error('Neymar'),
        AnswerModel.correct('Pelé')
    ])

    const [idQuestion, setIdQuestion] = useState<number[]>([])
    const [quest, setQuest] = useState(question)
    const questRef = useRef < QuestionModel > ();

    const _BASE_URL = 'http://localhost:3000/api'

    async function loadQuestionIds() {
        const resp = await fetch(`${_BASE_URL}/quiz`)
        const idsQuestion = await resp.json()
        setIdQuestion(idsQuestion)
    }

    async function loadQuestion(id: number) {
        const resp = await fetch(`${_BASE_URL}/question/${id}`)
        const json = await resp.json()
        console.log('json', json);
    }

    useEffect(() => {
        idQuestion.length > 0 && loadQuestion(idQuestion[0])
    }, [idQuestion])

    useEffect(() => {
        loadQuestionIds()
    }, [])

    useEffect(() => {
        questRef.current = quest
    }, [quest])

    function onAnswer(indice: number) {
        setQuest(question.respondWith(indice))
    }

    function timeEnd() {
        if (questRef.current.notAnswer) {
            setQuest(questRef.current.respondWith(-1))
        }
    }

    function answered(questionModel: QuestionModel) {

    }

    function send() {

    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh '
        }}>

            < QuestionaryComponent
                questionModel={quest}
                questionEnd={false}
                answered={answered}
                send={send}
            />

        </div>
    )
}
