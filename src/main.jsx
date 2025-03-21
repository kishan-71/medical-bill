import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
//import App from './pages/test'

createRoot(document.getElementById('root')).render(
  <StrictMode><BrowserRouter basename="/medical-bill/"> <App /> </BrowserRouter></StrictMode>, )

