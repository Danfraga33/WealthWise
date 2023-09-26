import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { SessionProvider, useSession } from 'next-auth/react';

const SideBar = ({ children }) => {
	const sessionData = useSession();
	const session = sessionData.data;
	return (
		<>
			{!session && (
				<div className="flex">
					<div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
						<div className="flex flex-col items-center">
							<Link href="/">
								<div className="bg-purple-800 text-white p-2 rounded-lg inline-block">
									<AiOutlineLineChart size={25} />
								</div>
							</Link>
							<span className="border-b-[1px] border-gray-200 w-full p-2"></span>
							<Link href="/">
								<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block">
									<RxDashboard size={20} />
								</div>
							</Link>
							<Link href="/Portfolio">
								<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block">
									<AiFillFolderOpen size={20} />
								</div>
							</Link>
							<Link href="/customers">
								<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block">
									<RxPerson size={20} />
								</div>
							</Link>

							<Link href="/">
								<div className="bg-gray-100 hover:bg-gray-200  p-3 my-4 cursor-pointer rounded-lg inline-block">
									<FiSettings size={20} />
								</div>
							</Link>
						</div>
					</div>

					<main className="ml-20 w-full">{children}</main>
				</div>
			)}
		</>
	);
};

export default SideBar;
