import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import UserProvider from './context/UserContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>        
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
  
)
