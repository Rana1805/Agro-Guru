import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'


const [page, setPage] = useState('Home');
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    

    <Footer />
    

  </StrictMode>
)
