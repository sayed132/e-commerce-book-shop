import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CommonCssProvider } from './Theme/CommonCssContext/CommonCssContext.jsx'
import { ThemeProvider } from './Theme/ThemeContext/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CommonCssProvider>
      <App />
      </CommonCssProvider>
    </ThemeProvider> 
    
  </React.StrictMode>,
)
