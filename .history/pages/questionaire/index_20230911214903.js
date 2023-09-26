import React, { useState } from 'react';
import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" />
			</Head>

			<main className="box-border">
				<div className="flex flex-col">
					<div className="bg-gradient-to-br from-blue-200 to-gray-100 font-poppins flex items-center justify-center h-screen m-0 overflow-hidden">
						<div className="bg-white rounded-lg shadow-md p-1 w-96 overflow-hidden">
							<div className="p-[4rem]">
								{currentQuiz < quizData.length ? (
									<div className="quiz-question">
										<h1 className="p-[1rem] text-[1.125em] md:text-[1.875em] text-center m-0">
											{quizData[currentQuiz].question}
										</h1>
										<ul className="p-0 list-none">
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('a')}
											>
												<input
													name="answer"
													type="radio"
													id="a"
													className="cursor-pointer"
												/>
												<span className="ml-2">
													<label htmlFor="a">{quizData[currentQuiz].a}</label>
												</span>
											</li>
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('b')}
											>
												<input name="answer" type="radio" id="b" />
												<span className="ml-2">
													<label htmlFor="b">{quizData[currentQuiz].b}</label>
												</span>
											</li>
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('c')}
											>
												<input name="answer" type="radio" id="c" />
												<span className="ml-2">
													<label htmlFor="c">{quizData[currentQuiz].c}</label>
												</span>
											</li>
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('d')}
											>
												<input name="answer" type="radio" id="d" />
												<span className="ml-2">
													<label htmlFor="d">{quizData[currentQuiz].d}</label>
												</span>
											</li>
										</ul>
										<button
											className="bg-purple-700 text-white border-none block w-full cursor-pointer text-lg font-semibold py-3 hover:bg-purple-900 focus:outline-none focus:bg-brown-900 rounded-3xl "
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
							<Link href="/">
								<button className="italic">⬅️ Go Back to Dashboard </button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default QuizApp;
