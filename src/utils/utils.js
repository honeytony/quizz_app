function getRandom() {
    return Math.random() - 0.5;
}
const prepareQuestions = (question) => {
    let newQuestion = [];
    question.answers.forEach((answer) => {
        answer.choosed = false;
    });

    return newQuestion;
};

const prepareAnswers = (answers) => {
    let newAnswer = answers;
    newAnswer.forEach((el) => {
        el.choosed = false;
    });
    return newAnswer;
};

const clearForChooseQuestions = (questions) => {
    let newQuestions = [];
    questions.forEach((element) => {
        element.choosed = false;
        newQuestions.push(element);
    });

    return newQuestions;
};
module.exports = { getRandom, prepareAnswers, prepareQuestions };
