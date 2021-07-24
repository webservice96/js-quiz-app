const quizData = [{
        question: 'How many things are needed to learn for a full stack developer?',
        a: 'Html, Css',
        b: 'Html, Css, Php, Javascript, Mysql',
        c: 'Php, Java, MongoDB',
        d: 'Ruby, Paython',
        correct: 'b'
    }, {
        question: 'What is the most used programing language?',
        a: 'Java',
        b: 'C',
        c: 'PHP',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'How many days need to learn any programing language?',
        a: '20 Days',
        b: '25 Days',
        c: '6 Month',
        d: '1 Year',
        correct: 'c'
    },
    {
        question: 'Where is the Fiverr Head Office?',
        a: 'Bangladesh',
        b: 'USA',
        c: 'Israel',
        d: 'India',
        correct: 'c'
    },
    {
        question: 'When did Github Start their Service?',
        a: 'Feb 2008',
        b: 'Feb 1989',
        c: 'Jun 2012',
        d: 'Aug 2020',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '2008',
        b: '2000',
        c: '2012',
        d: 'None of the above',
        e: 'Jan 1999',
        correct: 'd'
    }
];

const questionEl = document.querySelector('#question');

// label elements
var qa_text = document.querySelector('.qa_text');
var qb_text = document.querySelector('.qb_text');
var qc_text = document.querySelector('.qc_text');
var qd_text = document.querySelector('.qd_text');
var qe_text = document.querySelector('.qe_text');
var qf_text = document.querySelector('.qf_text');

const answerELs = document.querySelectorAll('.answer');

// submit btn
var submit = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectedAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    qa_text.innerHTML = currentQuizData.a ? currentQuizData.a : document.querySelector('.q-box-1').style.display = 'none';
    qb_text.innerHTML = currentQuizData.b ? currentQuizData.b : document.querySelector('.q-box-2').style.display = 'none';
    qc_text.innerHTML = currentQuizData.c ? currentQuizData.c : document.querySelector('.q-box-3').style.display = 'none';
    qd_text.innerHTML = currentQuizData.d ? currentQuizData.d : document.querySelector('.q-box-4').style.display = 'none';
    qe_text.innerHTML = currentQuizData.e ? currentQuizData.e : document.querySelector('.q-box-5').style.display = 'none';
    qf_text.innerHTML = currentQuizData.f ? currentQuizData.f : document.querySelector('.q-box-6').style.display = 'none';
}

function getSelected() {
    let answer = undefined;
    answerELs.forEach(answerEL => {
        if (answerEL.checked) {
            answer = answerEL.id;
        }
    });
    return answer;
}

function deselectedAnswer() {
    answerELs.forEach(answerEL => {
        answerEL.checked = false;
    });
}

submit.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: show result
            Swal.fire({
                title: `${score}/${quizData.length}`,
                icon: 'success',
                html: 'Your Score!',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Reload!',
                cancelButtonText: 'Ok',
                cancelButtonAriaLabel: 'Thumbs down'
            });
            var reload = document.querySelector('.swal2-confirm');
            reload.addEventListener('click', () => {
                location.reload();
            });
        }
    }
});