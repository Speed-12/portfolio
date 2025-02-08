import './App.css'
import Header from './header'
import About from './about'
import Projects from './projects'
import Apropros from './Apropros'
import AboutPage from './aboutPage'
import Contact from './contact'
function App() {

  return (
    <div className=' w-full h-full justify-center'>
      <Header />
      <About />
      <Apropros />
      <Projects />
      <AboutPage />
      <Contact />
    </div>
  )
}

export default App
