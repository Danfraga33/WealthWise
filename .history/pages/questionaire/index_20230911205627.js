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
		<div className="bg-gradient-to-br from-blue-200 to-gray-100 font-poppins flex items-center justify-center h-screen m-0 overflow-hidden">
			<div className="bg-white rounded-lg shadow-md p-6 w-96 overflow-hidden">
				<div className="p-[10px]">
					{currentQuiz < quizData.length ? (
						<div className="quiz-question">
							<h2 className="p-[1rem] text-center m-0">
								{quizData[currentQuiz].question}
							</h2>
							<ul className="p-0 list-none">
								<li
									className="text-lg my-4"
									onClick={() => handleAnswerClick('a')}
								>
									{quizData[currentQuiz].a}
								</li>
								<li
									className="text-lg my-4"
									onClick={() => handleAnswerClick('b')}
								>
									{quizData[currentQuiz].b}
								</li>
								<li
									className="text-lg my-4"
									onClick={() => handleAnswerClick('c')}
								>
									{quizData[currentQuiz].c}
								</li>
								<li
									className="text-lg my-4"
									onClick={() => handleAnswerClick('d')}
								>
									{quizData[currentQuiz].d}
								</li>
							</ul>
							<button
								className="bg-purple-700 text-white border-none block w-full cursor-pointer text-lg font-semibold py-3 hover: focus:outline-none focus:bg-brown-900"
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
			</div>
		</div>
	);
}

export default QuizApp;
