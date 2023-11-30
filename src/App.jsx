import { useState } from 'react'
import './App.css'
import Page from './template/Page';
import Home from "./componentes/Home";
import About from './componentes/About';
import Dashboard from './componentes/Dashboard';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Page />
      <Routes>
          <Route />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
