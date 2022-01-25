import QuestionData from "../QuestionData";

export default (req, res) => {
    const idSelect = +req.query.id;
    const validationQuestion = QuestionData.filter(question => question.id === idSelect);

    if (validationQuestion.length === 1 ) {
        const questionSelect = validationQuestion[0].shuffleAnswers();
        res.status(200).json(questionSelect.toObject());
    } else {
        res.status(204).send();
    }
}