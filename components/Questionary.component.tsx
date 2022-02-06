import styles from '../styles/Questionary.module.css'
import QuestionModel from "../model/QuestionModel";
import ButtonComponent from "./Button.componet";
import QuestionComponent from "./Question.component";

interface QuestionaryPropos {
    questionModel: QuestionModel
    questionEnd: Boolean
    answered: (quest: QuestionModel) => void
    send: () => void
}

export default function QuestionaryComponent(props: QuestionaryPropos) {

    function answerProvided(indice: number) {
        if (props.questionModel.notAnswer) {
            props.answered(props.questionModel.respondWith(indice))
        }
    }

    return (
        <div className={styles.questionary}>
            < QuestionComponent
                value={props.questionModel}
                responseTime={5}
                onAnswer={answerProvided}
                timeEnd={props.send}/>

            < ButtonComponent
                onClick={props.send}
                text={props.questionEnd ? 'Finalizar' : 'Próximo'}/>

        </div>
    )
}