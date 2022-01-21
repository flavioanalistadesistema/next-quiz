import QuestionModel from "../../model/QuestionModel";
import AnswerModel from "../../model/AnswerModel";

const question: QuestionModel[] = [
    new QuestionModel(1, 'Qual bicho transmite doença de chagas?', [
        AnswerModel.error('Abelha'),
        AnswerModel.error('formiga'),
        AnswerModel.error('mosquito'),
        AnswerModel.correct('barbeiro')
    ]),
    new QuestionModel(2, 'Qual fruto é conhecido no norte e nordeste pelo nome "jerimum"?', [
        AnswerModel.error('Caju'),
        AnswerModel.error('Coco'),
        AnswerModel.error('Caju'),
        AnswerModel.correct('Abobora')
    ])
]

export default question