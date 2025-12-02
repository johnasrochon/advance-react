import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

export default function App(){
 return(<Router>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/catalog' element={<Catalog/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/admin' element={<Admin/>}/>
   </Routes>
 </Router>);
}