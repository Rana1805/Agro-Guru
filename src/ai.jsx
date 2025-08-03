import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />

    <div class="flex flex-col h-130 bg-gray-100">
  <div class="flex-1 overflow-y-auto p-4 space-y-4">
    <div class="flex items-start space-x-2">
      <img src="ai.png" alt="" class="w-8 h-8 rounded-full" />
      <div class="bg-gray-200 p-3 rounded-lg max-w-xs">
        <p class="text-gray-800 text-sm">Hello! How can I help you today?</p>
      </div>
    </div>
    
  </div>

  <div class="bg-white p-4 flex space-x-2">
    <input type="text" class="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Type your message..." />
    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Send</button>
  </div>
  </div>


    <Footer />
    

  </StrictMode>
)