import Question from "../components/Question";
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
        setQuest(question.respondWith(indice))
        console.log(indice)
    }
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh '
    }}>
      <Question value={quest} onAnswer={onAnswer}/>
    </div>
  )
}
