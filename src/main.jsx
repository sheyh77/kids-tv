import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./assets/scss/main.scss";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mult from './pages/Mult.jsx';
import User from './pages/User.jsx';
import MultPlayer from './pages/MultPlayer.jsx';
import LanguageProvider from './context/LanguageContext.jsx';
import ColorProvider from './context/ColorContext.jsx';
import Settings from './pages/Settings.jsx';
import Register from './login/Register.jsx';
import Login from './login/Login.jsx';
import AuthProvider from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/multfilm' element={<Mult />} />
          <Route path='/user' element={<User />} />
          <Route path='/settings' element={<Settings />} />
          <Route path="/mult/:id" element={<MultPlayer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LanguageProvider>
    </AuthProvider>
  </BrowserRouter>

)
