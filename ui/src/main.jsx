import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/clerk-react'

import Home from '@/routes/home.jsx'
import Playground from '@/routes/playground.jsx'

import App from './App.jsx'
import "allotment/dist/style.css"
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ClerkLoading>
        <div>Loading authentication...</div>
      </ClerkLoading>
      <ClerkLoaded>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path=':id' element={<Playground />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ClerkLoaded>
    </ClerkProvider>
  </StrictMode>
)
