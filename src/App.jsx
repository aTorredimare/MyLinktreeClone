import './App.css';
import { Links } from './components/Links';
import { GymCounter } from './components/GymCounter';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Links />} />
        <Route path='/gymcounter' element={<GymCounter />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
