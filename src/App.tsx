import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CharacterBuilder from './pages/CharacterBuilder'
import Test from './pages/Test'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder/*" element={<CharacterBuilder />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}