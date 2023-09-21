import { useState } from 'react';
import './App.css';
import {AuthProvider} from './context/AuthContext'
import Login from './pages/Login';

function App() {

  return (
    <>
      <AuthProvider>
        <Login/>
      </AuthProvider>
    </>
  )
}

export default App
