import React from 'react';
import Link from 'next/link';
import BlackWithLighFromTopRight from '../public/BlackWithLighFromTopRight.jpg';
import Logo from './Logo';
import Image from 'next/image';

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
				<div className="flex flex-col justify-center w-full items-center">
					<Image
						src="/WealthWave.png"
						height={250}
						width={275}
						alt="Logo"
						className="z-10"
					/>
					<Logo />
					<div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
						<p>
							Dreams without measurement are like stars without a sky – they
							shine brightly but lack a meaningful place to guide us.
						</p>
						<Link href="/Dashboard" className="underline pt-2 block">
							Begin
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
