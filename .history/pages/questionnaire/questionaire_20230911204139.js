import React from 'react';

const questionaire = () => {
	return (
		<div class="quiz-container" id="quiz">
			<div class="quiz-header">
				<h2 id="question">question text</h2>
				<ul>
					<li>
						<input type="radio" name="answer" id="a" class="answer" />
						<label htmlFor="a" id="a_text">
							question{' '}
						</label>
					</li>
					<li>
						<input type="radio" name="answer" id="b" class="answer" />
						<label htmlFor="b" id="b_text">
							question{' '}
						</label>
					</li>
					<li>
						<input type="radio" name="answer" id="c" class="answer" />
						<label htmlFor="c" id="c_text">
							question{' '}
						</label>
					</li>
					<li>
						<input type="radio" name="answer" id="d" class="answer" />
						<label htmlFor="d" id="d_text">
							question{' '}
						</label>
					</li>
				</ul>
			</div>
			<button id="submit"></button>
		</div>
	);
};

export default questionaire;
