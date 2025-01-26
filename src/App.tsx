import './App.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { Separator } from '@/components/ui/separator';
import { BrowserRouter, Routes, Route } from "react-router";
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkTheme } = useTheme();

  return (
      <div className={`App ml-8 mr-8 ${isDarkTheme ? 'dark' : ''}`}>
        <BrowserRouter>
          <Header />
          <Separator />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/resume" element={<h1>Resume</h1>} />
          </Routes>
          <Separator />
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
