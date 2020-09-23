const myQuestions = [
    {
        question:'What is the capital city of France?',
        answers: {
            a: 'Rome',
            b: 'Berlin',
            c: 'Paris',
     

        },
        correctAnswer: 'c',
    },
        {
            question: 'What is the capital city of Vietnam?',
            answers: {
                a: 'Saigon',
                b: 'Ho-chi Minh City',
                c: 'Vientiane',
            },
        
            correctAnswer: 'b',
        },

             {
                 question: 'What is the capital city of Saudi Arabia? ',
                 answers: {
                    a: 'Riyadh',
                    b: 'Jeddah',
                    c: 'Makkah',
              },
           correctAnswer: 'a',
        },
];




let i;
function buildMyQuiz(questionsContainer) {
   
    for(i =0; i< myQuestions.length; i++) {
        let answer= document.createElement('label')
    };




        
     
};

buildMyQuiz()



function showMyResults(resultsContainer){
    let yourAnwer;
    let rightAnswer = 0;
    if (yourAnswer === myQuestions[i].correctAnswer){
        rightAnswer++
    } else {

    }
};
submitButton.addEventListener('click', showMyResults);

const questionsContainer = document.getElementById('questions');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


