const myQuestions = [
    {
        qst:'What is the capital city of France?',
        answerA: 'Rome',
        answerB: 'Berlin',
        answerC:'Paris',
        correctAns: 'Paris'
    },
    {
        qst: 'What is the capital city of Vietnam?',
        answerA: 'Saigon',
        answerB: 'Hanoi',
        answerC: 'Ho-chi Minh City', 
        correctAns: 'Hanoi'
    },

    {
        qst: 'What is the capital city of Saudi Arabia? ',
        answerA: 'Riyadh',
        answerB: 'Jeddah',
        answerC: 'Makkah',
        correctAns: 'Riyadh'
                     
              },  
];


function buildMyQuiz(myQuestions) {
    const questionsContainer = document.getElementById('questions');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

myQuestions.map((question) => {
    const readQuestion = document.createElement('p');
    readQuestion.style.cssText = 'font-weight: bold;';
    const readQuestionText = document.createTextNode(question.qst);
    readQuestion.appendChild(readQuestionText);
    questionsContainer.appendChild(readQuestion);

    const checkAnswerA = document.createElement('button');
    const textAnswerA = document.createTextNode(question.answerA);
    checkAnswerA.appendChild(textAnswerA);
    questionsContainer.appendChild(checkAnswerA);
    

    const checkAnswerB = document.createElement('button');
    const textAnswerB = document.createTextNode(question.answerB);
    checkAnswerB.appendChild(textAnswerB);
    questionsContainer.appendChild(checkAnswerB);

    const checkAnswerC = document.createElement('button');
    const textAnswerC = document.createTextNode(question.answerC);
    checkAnswerC.appendChild(textAnswerC);
    questionsContainer.appendChild(checkAnswerC);

});
};

function showMyResults(){
    let correctCount = 0;
    let userAnswer = button.addEventListener('click');
myQuestions.map((question) =>{
    if (userAnswer === question.correctAns) {
        correctCount++;


    }


})
}
submitButton.addEventListener('click', showMyResults);




