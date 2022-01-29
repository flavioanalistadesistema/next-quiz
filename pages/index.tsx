import QuestionComponent from "../components/Question.component";
import QuestionModel from "../model/QuestionModel";
import AnswerModel from "../model/AnswerModel";
import {useState} from "react";


export default function Home() {
    const question = new QuestionModel(1, 'Qual é o melhor jogador do mundo?', [
        AnswerModel.error('Maradona'),
        AnswerModel.error('Garrincha'),
        AnswerModel.error('Neymar'),
        AnswerModel.correct('Pelé')
    ])

    const [quest, setQuest] = useState(question)

    function onAnswer(indice: number) {
        console.log(question.respondWith(indice), 'respCom')
        setQuest(question.respondWith(indice))
    }

    function timeEnd() {
        if (!question.notAnswer) {
            setQuest(question.respondWith(-1))
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh '
        }}>
            <QuestionComponent value={quest} onAnswer={onAnswer} timeEnd={timeEnd}/>
        </div>
    )
}
