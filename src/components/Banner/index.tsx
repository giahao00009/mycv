import imgBanner from '~/assets/1.png'
import { motion } from 'framer-motion';
import { IoIosArrowDropright } from "react-icons/io";

export default function Banner() {
    return (
        <div className="flex flex-row px-20 items-center">
            <div className="basis-7/12 mt-20">
                <p className="border border-2 border-white inline-block p-3 text-white bg-black bg-opacity-50 text-xl rounded-lg">Welcome to my Portfolio</p>
                <h1 className='text-white text-6xl font-semibold mt-5'>Hi! I'm <span className="text-7xl text-[#FC6D6D]">Gia Hao.</span></h1>
                <h2 className="mt-2  font-semibold text-[#ea91bd] text-lg">Front End Developer</h2>
                <p className="mt-2 text-[#e5e5e5] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="text-white font-bold mt-5 text-xl flex items-center gap-2">Let's Connect <span className="text-4xl"><IoIosArrowDropright /></span></p>
            </div>
            <motion.div
                className="basis-5/12 mt-20"
                animate={{ y: [0, 10, 0], transition: { duration: 2, repeat: Infinity } }}
            >
                <img src={imgBanner} />
            </motion.div>
        </div>
    )
}
