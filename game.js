const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "De quem é a famosa frase: Penso, logo existo?",
        choice1: "Platão",
        choice2: "Galileu Galilei",
        choice3: "Descartes",
        choice4: "Sócrates",
        answer: 3,
    },
    {
        question: "De onde é a invenção do chuveiro elétrico?",
        choice1: "França",
        choice2: "Inglaterra",
        choice3: "Brasil",
        choice4: "Austrália",
        answer: 3,
    },
    {
        question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
        choice1: "113",
        choice2: "109",
        choice3: "108",
        choice4: "118",
        answer: 4,
    },
    {
        question: "O que a palavra legend significa em português?",
        choice1: "Legenda",
        choice2: "Lenda",
        choice3: "Conto",
        choice4: "Legendário",
        answer: 2,
    },
    {
        question: "Qual o número mínimo de jogadores numa partida de futebol?",
        choice1: "8",
        choice2: "5",
        choice3: "9",
        choice4: "7",
        answer: 4,
    },
    {
        question: "Em que período da pré-história o fogo foi descoberto?",
        choice1: "Neolítico",
        choice2: "Paleolítico",
        choice3: "Idade dos Metais",
        choice4: "Período da Pedra Polida",
        answer: 2,
    },
    {
        question: "Quem é o autor de “O Príncipe”?",
        choice1: "Maquiavel",
        choice2: "Montesquieu",
        choice3: "Antoine de Saint-Exupéry",
        choice4: "Thomas Hobbes",
        answer: 3,
    },
    {
        question: "Em que ano o primeiro homem pisou na Lua?",
        choice1: "1961",
        choice2: "1969",
        choice3: "1971",
        choice4: "1968",
        answer: 2,
    },
    {
        question: "Quantos graus são necessários para que dois ângulos sejam complementares?",
        choice1: "45",
        choice2: "60",
        choice3: "90",
        choice4: "180",
        answer: 3,
    },
    {
        question: "Quem pintou o teto da capela sistina?",
        choice1: "Michelangelo",
        choice2: "Leonardo da Vinci",
        choice3: "Rafael",
        choice4: "Sandro Botticelli",
        answer: 1,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter: 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}
