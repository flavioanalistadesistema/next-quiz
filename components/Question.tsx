import styles from '../styles/Question.module.css';
import QuestionModel from "../model/QuestionModel";
import Statement from "./Statement";
import AnswerComponent from "./Answer.component";

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function render() {
        return question.resp.map((resp, i) => {
            return (
                <AnswerComponent
                    key={i}
                    value={resp}
                    indice={i}
                    letter="A"
                    backGroundColor="#F2C866"
                />
            )
        })
    }
    return (
        <div className={styles.question}>
            <Statement text={question.enunciado} />
            {render()}
        </div>
    )
}