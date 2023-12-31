import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { quizData } from '@/data/quiz';

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
						<div
							className="bg-white rounded-lg shadow-lg 
					md:p-0 md:w-[50rem] p-[2rem] w-96 overflow-hidden"
						>
							<div
								className="md:p-[2rem] md:pl-[4rem] md:pr-[4rem]
							md:p-2rem"
							>
								{currentQuiz < quizData.length ? (
									<div className="quiz-question">
										<h1 className="p-[1rem] text-[1.125em] md:text-[1.875em] text-center m-0">
											{quizData[currentQuiz].question}
										</h1>
										<ul className="p-0 list-none mb-6">
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
											className="bg-purple-700 mb-3 text-white border-none block w-full cursor-pointer text-lg font-semibold py-3 hover:bg-purple-900 focus:outline-none focus:bg-brown-900 rounded-3xl "
											onClick={handleNextQuestion}
											disabled={!selectedAnswer}
										>
											Next
										</button>
									</div>
								) : (
									<div className="quiz-result">
										<p className="text-center font-semibold text-xl text-blue-700">
											`To achieve financial freedom and live this amazing
											lifestyle, let's keep it simple.
											<br />
											<main>
												There are companies out there that pay you throughout
												the year. If you save ${score}, and invest in these
												companies, paying you about 5% of this amount, you would
												get get paid ${score * 0.05} each year passively, making
												this amazing lifestyle of yours easily obtainable.
											</main>
											<br /> That way, you can enjoy your retirement worry-free
											and with a big smile!`
										</p>
										<div className="pt-2  ">
											<h2>Recommended Target: ${score}</h2>
											<div className="mb-3">
												<button className="bg-green-100 hover:bg-blue-300 rounded-lg mt-2 p-2">
													This Amount Looks Good...
												</button>
												<button
													className="bg-red-100 mt-2 
												hover:bg-red-300 rounded-lg p-2"
												>
													I'll Enter it myself
												</button>
											</div>
										</div>
										<div className="mb-1">
											<button className="restart-button" onClick={restartQuiz}>
												Restart
											</button>
										</div>
									</div>
								)}
							</div>
							<Link href="/Settings">
								<button className="italic ">⬅️ Go Back to Dashboard </button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default QuizApp;
