import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { GradientTealBlue } from '@visx/gradient';
import letterFrequency, {
	LetterFrequency,
} from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';

import React from 'react';

const index = () => {
	return (
		<div>
			<SideBar>
				<Header />
				<div className="min-h-screen bg-gray-100 p-4 ">
					Side Hustle
					<div className="grid grid-cols-3 w-100 text-center">
						<div>1</div>
						<div>2</div>
						<div>3</div>
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default Sidehustle;
