import './App.css'
import Intro from './Intro'
import Projects from './projects'
import Apropros from './Apropros'
import AboutPage from './components/skills'
import Contact from './contact'
import BottomHeader from './BottomHeader'
import Header from './Header'
function App() {

  return (
    <div className=' w-full h-full justify-center'>
      <Header />
      <Intro />
      <Apropros />
      <Projects />
      <AboutPage />
      <Contact />
      <BottomHeader/>
    </div>
  )
}

export default App
