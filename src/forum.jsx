import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FarmerForum from './FarmerForum.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />

    <FarmerForum />

    <Footer />
    

  </StrictMode>
)