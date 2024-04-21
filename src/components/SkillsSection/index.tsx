import "./style.css"
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiFigma, SiMui , SiRedux, SiReactquery, SiDocker  } from "react-icons/si";
import { GrMore,GrDeploy  } from "react-icons/gr";
import { DiBootstrap } from "react-icons/di";
import { FaGithub, FaJira  } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import html from '~/assets/html.svg';
import css from '~/assets/css.svg';
import js from '~/assets/js.svg';
import react from '~/assets/reactjs.svg';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const listSkillCoding = [
  {
    id: 1,
    image: <SiHtml5/>,
  },
  {
    id: 2,
    image: <SiCss3 />
  },
  {
    id: 3,
    image: <BsFiletypeScss/>
  },
  {
    id: 4,
    image: <SiJavascript/>
  },
  {
    id: 5,
    image: <SiTypescript/>
  },
  {
    id: 6,
    image: <SiReact />
  },
  {
    id: 7,
    image: <SiTailwindcss/>
  },
  {
    id: 8,
    image: <SiMui/>
  },
  {
    id: 9,
    image: <DiBootstrap/>
  },
  {
    id: 10,
    image: <SiRedux/>
  },
  {
    id: 11,
    image: <SiReactquery/>
  },
  {
    id: 12,
    image: <SiDocker/>
  },
  {
    id: 13,
    image: <GrMore/>
  }
]

const listImgs = [
  {
    id: 'img-1',
    image: html
  },
  {
    id: 'img-2',
    image: css
  },
  {
    id: 'img-3',
    image: js
  },
  {
    id: 'img-4',
    image: react
  }
]


export default function SkillsSection() {
  const [activeImg, setActiveImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImg < listImgs.length - 1) {
        setActiveImg((prev: number) => ++prev);
      } else {
        setActiveImg(0)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [activeImg])

  return (
    <div className="relative" >
      <div className="w-screen h-screen background-skills-section" >
            <div className="space stars1"></div>
            <div className="space stars2"></div>
            <div className="space stars3"></div>
      </div>
      <div style={{ boxShadow: 'inset 0 90px 50px -10px #0f0f0f' }} className="flex items-center bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 px-40 pt-20">
        <div className="flex justify-between w-full h-full items-center">
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold text-[#ea91bd]">Education</p>
              <div className="mt-2">
                <p className="flex gap-1 items-center text-lg whitespace-nowrap">- Bachelor of Information Technology of HUFLIT University</p>
              </div>
            </div>
            <div className="text-white mt-5">
              <p className="text-xl font-semibold text-[#ea91bd]">Skills Coding</p>
              <div className="flex gap-4 w-[450px] flex-wrap mt-3">
                {
                  listSkillCoding.map((item) => {
                    return <span key={item.id} className="text-5xl">{ item.image}</span>
                  })
                }
              </div>
            </div>
            <div className="text-white mt-5">
              <p className="text-xl font-semibold text-[#ea91bd]">Other</p>
              <div className="flex flex-col mt-2 text-lg">
                <div className="flex items-center gap-2">
                  <span><SiFigma /></span>
                  <p>Implement UI from figma design</p>
                </div>
                <div className="flex items-center gap-2">
                  <span><FaGithub /></span>
                  <p>Source control</p>
                </div>
                <div className="flex items-center gap-2">
                  <span><FaJira /></span>
                  <p>Using Jira to manage tasks</p>
                </div>
                <div className="flex items-center gap-2">
                  <span><GrDeploy /></span>
                  <p>Deploy website to internet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="relative w-full h-full flex justify-center items-center">
            {listImgs.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={`absolute`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  
                ><img src={item.image} className={`${index !== activeImg ? 'opacity-0' : 'opacity-100'} transition-opacity ease-in-out delay-150 duration-300`}/></motion.div>
               )
            })}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
