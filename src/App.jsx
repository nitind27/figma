import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TheSchool from './pages/TheSchool'
import Academics from './pages/Academics'
import Gallery from './pages/Gallery'
import SchoolApp from './pages/SchoolApp'
import Facilities from './pages/Facilities'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<About />} />
            <Route path="/about/team" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/the-school" element={<TheSchool />} />
            <Route path="/school-app" element={<SchoolApp />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

