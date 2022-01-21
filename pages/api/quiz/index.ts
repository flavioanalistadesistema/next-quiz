import QuestionData from "../QuestionData";

export default (req, res) => {
    const questionID = QuestionData.map(question => question.id)
    res.status(200).json(questionID)
}