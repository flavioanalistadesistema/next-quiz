import styles from '../styles/AnswerComponent.module.css';
import AnswerModel from "../model/AnswerModel";

interface AnswerComponentProps {
    value: AnswerModel
    indice: number
    letter: string
    backGroundColor: string
    onAnswer: (indice: number) => void
}

export default function AnswerComponent(props: AnswerComponentProps) {
    const value = props.value

    return (
        <div className={styles.answer}
            onClick={() => props.onAnswer(props.indice)}>
            <div className={styles.content_answer}>
                {!value.revealed ? (
                    <div className={styles.front}>
                        <div className={styles.letter} style={{backgroundColor: props.backGroundColor}}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {value.value}
                        </div>
                    </div>
                ) : (
                    <div className={styles.verse}>
                        {value.correct ? (
                            <div className={styles.correct}>
                                <div>Sua resposta certa é ....</div>
                                <div className={styles.value}>{value.value}</div>
                            </div>
                        ) : (
                            <div className={styles.error}>
                                <div>A resposta selecionada esta errada...</div>
                                <div className={styles.value}>{value.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}