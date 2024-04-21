import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScrollY = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY)
  }

  useEffect(() => {
    handleScrollY();
    window.addEventListener('scroll', handleScrollY)
    return () => {
        window.removeEventListener('scroll', handleScrollY)
    }
  }, [])

  return (
    <header className={`${scrollY < 50 ? 'bg-transparent' :  'bg-black'} bg-opacity-50 fixed top-0 left-0 right-0 z-10`}>
        <div className="container mx-auto px-20 py-5 flex flex-row justify-between items-center">
          <div>
            <p className="text-white text-3xl font-bold">NgHAO</p>
          </div>
          <div className='flex gap-x-6 items-center'>
            <ul className="flex gap-x-6 text-lg font-semibold text-white">
              <li>Home</li>
              <li>Experience</li>
              <li>Skills</li>
              <li>Projects</li>
            </ul>

            <ul className="flex gap-3 text-white">
              <li>
                <span className="text-xl cursor-pointer"><BsFacebook /></span>
              </li>
              <li>
                <span className="text-xl cursor-pointer">
                  <FaGithub />
                </span>
              </li>
            </ul>
            <motion.button
            className="text-white relative duration-75 px-5 py-2.5 inline-flex items-center border-2 border-white justify-center overflow-hidden text-sm font-medium rounded-lg hover:bg-gradient-to-br from-purple-500 to-pink-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                Let's Connect
            </motion.button>
          </div>
        </div>
      </header>
  )
}
