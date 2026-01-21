import Navbar from './components/Navbar'
import About from './components/About'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <section id="home">
          <About />
        </section>
      
        <section id= "cards" className="cards-section">
          <Card1 />
          <Card2 />
        </section>
      </main>
    </>
  )
}

export default App
