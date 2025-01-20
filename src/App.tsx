import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import { Separator } from '@/components/ui/separator';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {

  return (
    <div className="App ml-8 mr-8">

      <BrowserRouter>
        <Header />
        <Separator />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/resume" element={<h1>Resume</h1>} />
        </Routes>
        <Separator />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
