import Question from "../components/Question";
import QuestionModel from "../model/QuestionModel";
import AnswerModel from "../model/AnswerModel";


export default function Home() {
    const question = new QuestionModel(1, 'QUal é o melhor jogador do mundo?', [
        AnswerModel.error('MAradona'),
        AnswerModel.error('Garrincha'),
        AnswerModel.error('Neymar'),
        AnswerModel.correct('Pelé')
    ])
  return (
    <div>
      <Question value={question} />
    </div>
  )
}
