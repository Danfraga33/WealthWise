import React from 'react';

const questionaire = () => {
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
			d: 'Helicopters Terminals Motorboats Lamborginis',
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
	return (
		<div class="quiz-container" id="quiz">
			<div class="quiz-header">
				<h2 id="question">question text</h2>
				<ul>
					<li>
						<input type="radio" name="answer" id="a" class="answer" />
						<label htmlFor="a" id="a_text">
							question
						</label>
					</li>
					<li>
						<input type="radio" name="answer" id="b" class="answer" />
						<label htmlFor="b" id="b_text">
							question
						</label>
					</li>
					<li>
						<input type="radio" name="answer" id="c" class="answer" />
						<label htmlFor="c" id="c_text">
							question
						</label>
					</li>
					<li>
						<input type="radio" name="answer" id="d" class="answer" />
						<label htmlFor="d" id="d_text">
							question
						</label>
					</li>
				</ul>
			</div>
			<button id="submit"></button>
		</div>
	);
};

export default questionaire;
