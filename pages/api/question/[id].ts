import QuestionModel from "../../../model/QuestionModel";

export default (req, res) => {
    const id = req.query.id;
    res.status(200).json(QuestionModel[0])
}