import { useEffect, useState } from 'react'
import './App.css'
import background from './assets/bg-banner.png'
import Banner from './components/Banner'
import Header from './components/Header'
import PreLoader from './components/PreLoader'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {
  const [isPreload, setIsPreload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreload(false)
    }, 5000)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <div style={{ backgroundImage: `url(${background})` }} className='h-screen w-screen object-fill bg-cover'>
        <div className='bg-black bg-opacity-50 h-full w-full' style={{ boxShadow: 'inset 0 -90px 50px -10px #0f0f0f, inset 0 0 0 1000px rgba(0, 0, 0, .3'}}>
          <Header />
          <Banner />
        </div>
      </div>
      <div className="w-screen h-screen bg-[#0f0f0f]"></div>
      <SkillsSection />
      <ProjectsSection />
      {isPreload && <PreLoader />}
    </div>

  )
}

export default App
