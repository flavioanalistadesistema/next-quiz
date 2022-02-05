import styles from '../styles/Question.module.css';
import QuestionModel from "../model/QuestionModel";
import StatementComponent from "./Statement.component";
import AnswerComponent from "./Answer.component";
import Time from "./Time.component";

const letter = [
    {value: 'A', color: '#F2CB66'},
    {value: 'B', color: '#F266BA'},
    {value: 'C', color: '#85D4F2'},
    {value: 'D', color: '#BCE596'}
]

interface QuestionProps {
    value: QuestionModel
    responseTime?: number
    onAnswer: (indice: number) => void
    timeEnd: () => void
}

export default function QuestionComponent(props: QuestionProps) {
    const question = props.value

    function render() {
        return question.resp.map((resp, i) => {
            return (
                <AnswerComponent
                    key={i}
                    value={resp}
                    indice={i}
                    letter={letter[i].value}
                    backGroundColor={letter[i].color}
                    onAnswer={props.onAnswer}
                />
            )
        })
    }

    return (
        <div className={styles.question}>
            <StatementComponent text={question.enunciado} />
            <Time duracao={props.responseTime ?? 10} timeEnd={props.timeEnd} />
            {render()}
        </div>
    )
}