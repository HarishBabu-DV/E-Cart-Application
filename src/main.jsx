
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { MenuItem } from './components/ui/navbar-menu'
import { Header } from './components/Header'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header /> 
    <App />
  </BrowserRouter>
  
)
