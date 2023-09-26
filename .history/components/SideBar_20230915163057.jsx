import React from 'react';
import Link from 'next/link';
import { RxDashboard, RxPerson } from 'react-icons/rx';

import { FiSettings } from 'react-icons/fi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { FaUncharted } from 'react-icons/fa';

import Portfolio from '@/pages/Portfolio';

const SideBar = ({ children }) => {
	// console.log([]);
	return (
		<>
			<div className="flex">
				<div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between shadow-md">
					<div className="flex flex-col items-center">
						<Link href="/">
							<div className="bg-purple-800 text-white p-2 rounded-lg inline-block">
								<FaUncharted size={25} />
							</div>
						</Link>
						<span className="border-b-[1px] border-gray-200 w-full p-2"></span>
						<Link href="/">
							<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block shadow-md">
								<RxDashboard size={20} />
							</div>
						</Link>
						<Link href="/Portfolio">
							<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block shadow-md">
								<AiFillFolderOpen size={20} />
							</div>
						</Link>
						{/* <Link href="/Customers">
							<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block">
								<RxPerson size={20} />
							</div>
						</Link> */}

						<Link href="/Settings">
							<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block shadow-md">
								<FiSettings size={20} />
							</div>
						</Link>
					</div>
				</div>

				<main className="ml-20 w-full">{children}</main>
			</div>
		</>
	);
};

export default SideBar;
