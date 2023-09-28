import React from 'react';

const Hero = () => {
	return (
		<div
			className="w-screen h-screen text-white"
			style={{
				background:
					'linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)',
			}}
		>
			<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
				{/* <img
					className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
					alt="hero"
					src="climbingMountain.jpg"
				/> */}
				<div className="text-center lg:w-5/12 w-full">
					<h1 className="my-4 text-5xl font-bold leading-tight">
						Achieving non-ambiguous Finanical Freedom
					</h1>
					<p className="text-2xl mb-8">
						Tracking your networth to financial Freedom
					</p>
					<div className="flex justify-center mx-auto">
						<button className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
							Education
						</button>
						<button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
							Dashboard
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

{
	/* // import React from 'react';
// import HeroChart from './HeroChart';
// import Head from 'next/head';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });
// const Hero = () => {
// 	return (
// 		<>
// 			<Head></Head>
// 			<section className=" bg-black text-green-500 py-16 pb-20  ">
// 				<div
// 					className="bg-cover bg-center "
// 					style={{ backgroundImage: 'url("/black.jpg")' }}
// 				>
// 					<div
// 						className="flex flex-col justify-center items-center container mx-auto text-center min-h-screen "
// 						style={inter.style}
// 					>
// 						<h1 className="text-3xl">
// 							WealthWise <br />
// 							Navigator
// 						</h1>
// 						<div className="m-auto w-1/2 pt-5">
// 							<HeroChart />
// 						</div>
// 						<h1 className="text-3xl font-serif p-5 ">WealthWise Navigator</h1>

// 						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 ">
// 							Building your Fortress of Solitude
// 						</h1>
// 						<p className="text-xl md:text-2xl mb-8">
// 							Discover amazing features and services we offer.
// 						</p>
// 						<a
// 							href="#cta"
// 							className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
// 						>
// 							Explore
// 						</a>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default Hero; */
}
