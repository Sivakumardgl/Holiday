import './App.css';
import'./index.css';
import Home from './Components/Home';
import About from './Components/About';

import {Routes,Route } from 'react-router-dom';
import Order from './Components/Order';
import User from './Components/User';
import Navbar from './Components/Navbar';
import Signu from './Components/Signu';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/oreder'>Order</Link></li>
        <li><Link to='/user'>User</Link></li>
        </ul> */}
        
      
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/oreder' element= {<Order/>}/>
        <Route path='/user' element={<User/>}/>
       <Route path='/signup' element={<Signu/>}/>
       <Route path='/login' element={<Login/>}/>
        
        </Routes>
    
     
     
    </div>
  );
}

export default App;
