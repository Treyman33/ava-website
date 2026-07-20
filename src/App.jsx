import { Routes, Route } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react'

import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Lessons from './pages/Lessons.jsx'
import Testimonials from './pages/Testimonials.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App