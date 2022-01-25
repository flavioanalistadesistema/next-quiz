import QuestionData from "../QuestionData";
import {shuffle} from "../../../function/arrays";

export default (req, res) => {
    const questionID = QuestionData.map(question => question.id)
    res.status(200).json(shuffle(questionID))
}