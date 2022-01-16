import QuestionData from "./QuestionData";

export default (req, res) => {
    const id = req.query.id;
    res.status(200).json(QuestionData[0].toObject())
}