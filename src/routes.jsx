import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'

const Routers = () => {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>      
      <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default Routers