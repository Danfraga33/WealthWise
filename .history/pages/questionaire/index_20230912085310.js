import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const quizData = [
	{
		question:
			'Imagine your dream home in your financial free life. Where would it be?',
		a: 'A fancy penthouse in a bustling city ',
		b: 'A cozy house in the suburbs',
		c: 'A charming cottage in the countryside',
		d: 'A beachfront villa on a tropical island',
		increase: 'a',
		constant: 'b',
		slightDecrease: 'c',
		slightIncrease: 'd',
	},
	{
		question:
			"Picture your future financial free self. What's your ideal lifestyle like?",
		a: 'Living it up with extravagance',
		b: 'Enjoying comfort with occasional splurges',
		c: 'Embracing minimalism and frugality',
		d: 'Exploring new passions and interests',
		increase: 'a',
		constant: 'b',
		slightDecrease: 'c',
		slightIncrease: 'd',
	},
	{
		question:
			"You've got all the time and money you need. How often are you off on adventures?",
		a: 'Jet-setting for luxury vacations',
		b: 'Going on relaxing getaways now and then',
		c: 'Staying home and taking it easy',
		d: 'Traveling frequently to discover the world',
		increase: 'a',
		constant: 'b',
		slightDecrease: 'c',
		slightIncrease: 'd',
	},
	{
		question:
			'Your financial free life is here! How much of a financial cushion do you want?',
		a: 'Fine dining and top-notch shows',
		b: 'Casual outings with some cultural experiences',
		c: 'Cooking at home and enjoying free activities',
		d: 'Exploring gourmet dining and unique entertainment',
		increase: 'a',
		constant: 'b',
		slightDecrease: 'c',
		slightIncrease: 'd',
	},
	{
		question:
			'Your financial free life is here! How much of a financial cushion do you want?',
		a: 'I want stacks for any unexpected expenses',
		b: 'A comfortable safety net will do',
		c: "I'll roll the dice and take more risks",
		d: ' I want some extra security, just in case',
		increase: 'a',
		constant: 'b',
		slightDecrease: 'c',
		slightIncrease: 'd',
	},

	// RULES
	// TARGETING TARGET AMOUNT: 1.5 MILLION
	// A: +750K
	// B: CONSTANT
	// C: -250K
	// D: +500K
];

function QuizApp() {
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [score, setScore] = useState(1500000);
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	const handleAnswerClick = (answer) => {
		setSelectedAnswer(answer);
	};

	const handleNextQuestion = () => {
		if (selectedAnswer === quizData[currentQuiz].increase) {
			setScore((prevValue) => prevValue + 750000);
		} else if (selectedAnswer === quizData[currentQuiz].slightIncrease) {
			setScore((prevValue) => prevValue + 250000);
		} else if (selectedAnswer === quizData[currentQuiz].constant) {
			setScore((prevValue) => prevValue + 0);
		} else if (selectedAnswer === quizData[currentQuiz].slightDecrease) {
			setScore((prevValue) => prevValue - 250000);
		} else {
			return prevValue; // Handle the case where none of the conditions match
		}

		setSelectedAnswer(null);
		setCurrentQuiz(currentQuiz + 1);
	};

	const restartQuiz = () => {
		setCurrentQuiz(0);
		setScore(1500000);
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
							<div
								className="md:p-[2rem] md:pl-[4rem] md:pr-[4rem]
							md:p-2rem"
							>
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
												<input name="answer" type="radio" id="a" />
												<span className="ml-2">
													<label htmlFor="a" className="cursor-pointer">
														{quizData[currentQuiz].a}
													</label>
												</span>
											</li>
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('b')}
											>
												<input name="answer" type="radio" id="b" />
												<span className="ml-2">
													<label htmlFor="b" className="cursor-pointer">
														{quizData[currentQuiz].b}
													</label>
												</span>
											</li>
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('c')}
											>
												<input name="answer" type="radio" id="c" />
												<span className="ml-2">
													<label htmlFor="c" className="cursor-pointer">
														{quizData[currentQuiz].c}
													</label>
												</span>
											</li>
											<li
												className="text-xl my-4"
												onClick={() => handleAnswerClick('d')}
											>
												<input name="answer" type="radio" id="d" />
												<span className="ml-2">
													<label htmlFor="d" className="cursor-pointer">
														{quizData[currentQuiz].d}
													</label>
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
										<h2>Recommended Target: ${score}</h2>
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
