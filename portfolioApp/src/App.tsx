import './App.css'
import Header from './header'
import About from './about'
import Projects from './projects'
import Apropros from './Apropros'

function App() {

  return (
    <div className='bg-[#f1faee] w-full h-full justify-center'>
      <Header />
      <About />
      <Apropros/>
      <Projects></Projects>
    </div>
  )
}

export default App
