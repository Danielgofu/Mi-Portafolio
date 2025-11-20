import './App.css'
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import TextType from './components/TextType.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero>
        <TextType 
          text={["< Hola soy Daniel Gómez ", "< Bienvenido a mi portafolio "]}
          typingSpeed={40}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="/>"
        />
      </Hero>
      <Projects />
      <Contact />
    </>
  )
}

export default App
