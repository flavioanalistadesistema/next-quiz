import QuestionModel from "../../model/QuestionModel";
import AnswerModel from "../../model/AnswerModel";

const question: QuestionModel[] = [
    new QuestionModel(1, 'Em qual ano PRAVALER foi fundadda?', [
        AnswerModel.error('2010'),
        AnswerModel.error('1990'),
        AnswerModel.error('1998'),
        AnswerModel.correct('2001')
    ]),
    new QuestionModel(2, 'Qual o principal objetivo da empresa PRAVALER?', [
        AnswerModel.error('Um aluno já ta bom'),
        AnswerModel.error('Dois milhões de alunos'),
        AnswerModel.error('Dez Alunos'),
        AnswerModel.correct('um milhão de alunos')
    ]),
    new QuestionModel(3, 'QUal é o nome do colaborador que é conecido como Maestro?', [
        AnswerModel.error('Flávio Santos'),
        AnswerModel.error('Caue Santos'),
        AnswerModel.error('Fernando Dufour'),
        AnswerModel.correct('Robson Dias')
    ]),
    new QuestionModel(4, 'Qual é o colaborador(a) da nossa equipe, mais velho(a) no PRAVALER?', [
        AnswerModel.error('Flávio Santos'),
        AnswerModel.error('Priscilla Spohr'),
        AnswerModel.error('Thiago Viscardi'),
        AnswerModel.correct('Thiago Pereira')
    ]),
    new QuestionModel(5, 'Qual é o colaborador(a) da nossa equipe, mais novo(a) no PRAVALER?', [
        AnswerModel.error('João Silveira'),
        AnswerModel.error('João Luiz'),
        AnswerModel.error('Cintia Pkubo'),
        AnswerModel.correct('Priscilla Behnke')
    ]),
    new QuestionModel(6, 'Qual colaborador(a) ESPECIALISTA da nossa equipe?', [
        AnswerModel.error('Caio Giasson'),
        AnswerModel.error('João Vicente'),
        AnswerModel.error('Francisco Barroso'),
        AnswerModel.correct('Rafael Noronha')
    ]),
    new QuestionModel(7, 'Qual colaborador(a) TL da nossa equipe?', [
        AnswerModel.error('Matteo Carminato'),
        AnswerModel.error('Rodrigo Araujo'),
        AnswerModel.error('Fernando Dufour'),
        AnswerModel.correct('Caio Giasson')
    ]),
    new QuestionModel(8, 'CEO da empresa?', [
        AnswerModel.error('Luiz Viela'),
        AnswerModel.error('TralCI'),
        AnswerModel.error('Francisco Barroso'),
        AnswerModel.correct('Carlos Furlan')
    ]),
    new QuestionModel(9, 'Qual o melhor presidente para o BRASIL?', [
        AnswerModel.error('LULA'),
        AnswerModel.error('BOLSONARO'),
        AnswerModel.error('TIRIRICA'),
        AnswerModel.correct('Flávio Santos')
    ]),
    new QuestionModel(10, 'Qual funcionário(a) mais bonito(a) da empresa?', [
        AnswerModel.error('Matteo'),
        AnswerModel.error('Maestro'),
        AnswerModel.error('Caio Giasson'),
        AnswerModel.correct('Flávio Santos')
    ]),
    new QuestionModel(11, 'Tech Manager da empresa?', [
        AnswerModel.error('Rafael Noronha'),
        AnswerModel.error('Caio Giasson'),
        AnswerModel.error('João Vicente'),
        AnswerModel.correct('Francisco Barroso')
    ])
]

export default question
