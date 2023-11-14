import './App.css';
import Register from "./Pages/Register";
import Login from './Pages/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channels from './Pages/Channels';
import SingleChannel from './Pages/SingleChannel';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/chats/channels' element={<Channels/>}/>
        <Route path='/chats/channel/:channelId' element={<SingleChannel/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
