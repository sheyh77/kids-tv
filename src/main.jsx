import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./assets/scss/main.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mult from './pages/Mult.jsx';
import Brain from './pages/Brain.jsx';
import User from './pages/User.jsx';
import MultPlayer from './pages/MultPlayer.jsx';
import BrainMult from "./pages/BrainRoute/BrainMult.jsx";
import Letter from "./pages/BrainRoute/Letter.jsx";
import Animal from "./pages/BrainRoute/Animal.jsx";
import Nums from "./pages/BrainRoute/Nums.jsx";
import LanguageProvider from './context/LanguageContext.jsx';
import ColorProvider from './context/ColorContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ColorProvider>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/multfilm' element={<Mult />} />
          <Route path='/bilimdon' element={<Brain />} />
          <Route path='/user' element={<User />} />
          <Route path="/mult/:id" element={<MultPlayer />} />
          <Route path="/bilimdon/brainmult" element={<BrainMult />} />
          <Route path="/bilimdon/harflar" element={<Letter />} />
          <Route path="/bilimdon/hayvonlar" element={<Animal />} />
          <Route path="/bilimdon/raqamlar" element={<Nums />} />
        </Routes>
      </LanguageProvider>
    </ColorProvider>
  </BrowserRouter>

)
