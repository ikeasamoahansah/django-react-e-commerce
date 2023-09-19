import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import './index.css'
import {AuthProvider} from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
)
