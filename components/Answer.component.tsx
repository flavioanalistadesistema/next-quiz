import styles from '../styles/AnswerComponent.module.css';
import AnswerModel from "../model/AnswerModel";

interface AnswerComponentProps {
    value: AnswerModel
    indice: number
    letter: string
    backGroundColor: string

}
export default function AnswerComponent(props: AnswerComponentProps) {
    const value = props.value

    return (
        <div className={styles.answer}>
            <div className={styles.content_answer}>
                <div className={styles.front}>
                    <div className={styles.letter} style={{backgroundColor: props.backGroundColor}}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {value.price}
                    </div>
                </div>
                <div className={styles.verse}></div>
            </div>
        </div>
    )
}