import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./assets/scss/main.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mult from './pages/Mult.jsx';
import Brain from './pages/Brain.jsx';
import User from './pages/User.jsx';
import MultPlayer from './pages/MultPlayer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/multfilm' element={<Mult />}/>
      <Route path='/bilimdon' element={<Brain />}/>
      <Route path='/user' element={<User />}/>
      <Route path="/mult/:id" element={<MultPlayer />} />
    </Routes>
  </BrowserRouter>
  
)
