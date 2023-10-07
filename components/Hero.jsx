import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import HeroChart from './HeroChart';

const Hero = () => {
	return (
		<div className="w-screen h-screen text-white">
			<div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
				<img
					src="/BlackWithLighFromTopRight.jpg"
					alt="Hero"
					className="absolute"
					style={{ height: '100%', width: '100%' }}
				/>
				{/* <Logo /> */}
				<div className="flex flex-col justify-center w-full items-center px-8">
					<Image
						src="/WealthWave.png"
						height={250}
						width={275}
						alt="Logo"
						className="z-10"
					/>

					{/* <HeroChart /> */}
					{/* <HeroChart /> */}
					<div className="relative z-10 text-white text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
						<p>
							Measuring your net worth is not just a financial calculation; it's
							a powerful compass on the journey to financial freedom.
						</p>
						<div className="inline-block text-lg mt-2 items-center px-8 py-1 rounded-lg border">
							<Link href="/Dashboard" className="underline pt-2 block">
								Dashboard
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
