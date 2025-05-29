import './App.css'
import Header from './header'
import Intro from './Intro'
import Projects from './projects'
import Apropros from './Apropros'
import AboutPage from './components/skills'
import Contact from './contact'
function App() {

  return (
    <div className='flex w-full h-full justify-center font-[arial]'>
      <div className='max-w-[60vw]'>
        <Header />
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
