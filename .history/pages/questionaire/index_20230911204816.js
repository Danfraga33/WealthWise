import React, { useState } from 'react';
import { Fragment } from 'react';

const quizData = [
	{
		question: 'Which language runs in a web browser?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'What does CSS stand for?',
		a: 'Central Style Sheets',
		b: 'Cascading Style Sheets',
		c: 'Cascading Simple Sheets',
		d: 'Cars SUVs Sailboats',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Hypertext Markdown Language',
		c: 'Hyperloop Machine Language',
		d: 'Helicopters Terminals Motorboats Lamborghinis',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
];

function QuizApp() {
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [score, setScore] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	const handleAnswerClick = (answer) => {
		setSelectedAnswer(answer);
	};

	const handleNextQuestion = () => {
		if (selectedAnswer === quizData[currentQuiz].correct) {
			setScore(score + 1);
		}

		setSelectedAnswer(null);
		setCurrentQuiz(currentQuiz + 1);
	};

	const restartQuiz = () => {
		setCurrentQuiz(0);
		setScore(0);
		setSelectedAnswer(null);
	};

	return (
		<Fragment className="bg-gradient-to-br from-blue-200 to-gray-100 font-poppins flex items-center justify-center h-screen m-0 overflow-hidden">
			<div className="quiz-container">
				{currentQuiz < quizData.length ? (
					<div className="quiz-question">
						<h2>{quizData[currentQuiz].question}</h2>
						<ul className="answer-options">
							<li onClick={() => handleAnswerClick('a')}>
								{quizData[currentQuiz].a}
							</li>
							<li onClick={() => handleAnswerClick('b')}>
								{quizData[currentQuiz].b}
							</li>
							<li onClick={() => handleAnswerClick('c')}>
								{quizData[currentQuiz].c}
							</li>
							<li onClick={() => handleAnswerClick('d')}>
								{quizData[currentQuiz].d}
							</li>
						</ul>
						<button
							className="submit-button"
							onClick={handleNextQuestion}
							disabled={!selectedAnswer}
						>
							Next
						</button>
					</div>
				) : (
					<div className="quiz-result">
						<h2>
							You answered {score}/{quizData.length} questions correctly
						</h2>
						<button className="restart-button" onClick={restartQuiz}>
							Restart
						</button>
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default QuizApp;
