import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import RenovationHighlights from './components/RenovationHighlights'
import BeachExperience from './components/BeachExperience'
import ThingsToDo from './components/ThingsToDo'
import Tours3D from './components/Tours3D'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <RenovationHighlights />
        <BeachExperience />
        <Tours3D />
        <ThingsToDo />
      </main>
      <Footer />
    </div>
  )
}

export default App
