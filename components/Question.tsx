import styles from '../styles/Question.module.css';
import QuestionModel from "../model/QuestionModel";
import Statement from "./Statement";

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value
    return (
        <div className={styles.question}>
            <Statement text={question.enunciado} />
        </div>
    )
}