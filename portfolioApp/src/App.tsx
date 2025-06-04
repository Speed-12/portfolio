import './App.css'
import Intro from './Intro'
import Projects from './projects'
import Apropros from './Apropros'
import AboutPage from './components/skills'
import Contact from './contact'
import { Header } from './HeaderA'
function App() {

  return (
    <div className='flex w-full h-full justify-center font-[arial]'>
      <div className='md:w-[60vw]'>
        <Header></Header>
        <Intro />
        <Apropros />
        <Projects />
        <AboutPage />
        <Contact />
      </div>
    </div>
  )
}

export default App
