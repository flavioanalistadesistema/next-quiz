import QuestionModel from "../model/QuestionModel";
import { useEffect, useRef, useState } from "react";
import QuestionaryComponent from "../components/Questionary.component";
import { useRouter } from "next/router";

const _BASE_URL = 'http://localhost:3000/api'

export default function Home() {
    const router = useRouter();

    const [idQuestion, setIdQuestion ] = useState<number[]>([])
    const [quest, setQuest] = useState<QuestionModel>()
    const [answerRigth, setAnswerRigth] = useState<number>(0)

    async function loadQuestionIds() {
        const resp = await fetch(`${_BASE_URL}/quiz`)
        const idsQuestion = await resp.json()
        setIdQuestion(idsQuestion)
    }

    async function loadQuest(id) {
        const resp = await fetch(`${_BASE_URL}/question/${id}`)
        const obj = await resp.json()
        setQuest(QuestionModel.createadUsingObject(obj))
    }

    useEffect(() => {
        loadQuestionIds()
    }, [])

    useEffect(() => {
        idQuestion.length > 0 && loadQuest(idQuestion[0])
    }, [idQuestion])

    function questionAnswered(questionAnswered: QuestionModel) {
        setQuest(questionAnswered)
        const correct = questionAnswered.correct
        setAnswerRigth(answerRigth +  (correct ? 1 : 0))
    }

    function nextIdQuestion() {
        if(quest) {
            const nextIndice = idQuestion.indexOf(quest.id) + 1;
            return idQuestion[nextIndice];
        }
    }

    function goToNextStep() {
        const newId = nextIdQuestion();
        newId ? loadQuest(newId) : finalize();
    }

    function finalize() {
        router.push({
            pathname: "/result",
            query: {
                questions: idQuestion.length,
                correct: answerRigth
            }
        })
    }

    return (
            < QuestionaryComponent
                questionModel={quest}
                questionEnd={nextIdQuestion() === undefined}
                answered={questionAnswered}
                send={goToNextStep}
            />
    )
}
