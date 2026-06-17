import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Cashew from './pages/Cashew'
import Enum from './pages/Enum'
import Lab from './pages/Lab'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/cashew" element={<Cashew />} />
          <Route path="/work/enum" element={<Enum />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
