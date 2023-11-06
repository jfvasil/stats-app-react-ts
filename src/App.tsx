import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Calculation from './pages/Calculation'
import Results from './pages/Results'
import Profile from './pages/Profile'
import 'tailwindcss/tailwind.css'


function App() {

  return (
  <Routes>

  <Route path='/' element={<Layout />}>
    <Route path='/' element={<Landing />} />
    <Route path='calculation' element={<Calculation />} />
    <Route path='results' element={<Results />} />
    <Route path='profile' element={<Profile />} />

  </Route>
</Routes>


  )
}

export default App
