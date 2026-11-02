
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Racismo from './pages/Racismo/Racismo'
import Misoginia from './pages/Misoginia/Misoginia'
import Homofobia from './pages/Homofobia/Homofobia'
import Transfobia from './pages/Transfobia/Transfobia'
import './App.css'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = location.hash.substring(1)

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <div className="site-shell">
      <ScrollToHash />

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/racismo" element={<Racismo />} />
          <Route path="/misoginia" element={<Misoginia />} />
          <Route path="/homofobia" element={<Homofobia />} />
          <Route path="/transfobia" element={<Transfobia />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
