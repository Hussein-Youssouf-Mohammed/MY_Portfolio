import  './app.css'
import Navbar from './components/navbar/Navbar'
import About from './components/inter/About'
import Work from './components/work/Works'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
function App() {
  return (
    <div>
       <Navbar/>
      <div className='sections'>
         <About/>
         <Skills/>
         <Work/>
         <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
export default App