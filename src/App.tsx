import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Calculation from './pages/Calculation'
import 'tailwindcss/tailwind.css'


function App() {

  return (
  <Routes>

  <Route path='/' element={<Layout />}>
    <Route path='/welcome' element={<Landing />} />
    <Route path='calculation' element={<Calculation />} />

  </Route>
</Routes>


  )
}

export default App
