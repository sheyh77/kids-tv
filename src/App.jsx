import { useContext, useState } from 'react';
import HomePage from "./layout/HomePage";
import Register from "./login/Register";
import { AuthContext } from './context/AuthContext';

function App() {

  const { auth } = useContext(AuthContext)

  return (
    <>
      {auth ? <HomePage /> : <Register />}
    </>
  )
}

export default App
