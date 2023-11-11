import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
//  import * as dotenv from 'dotenv'


// dotenv.config({path: '/env'})


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN || ''}
    clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID || ''}
    authorizationParams={{
      redirect_uri: 'http://localhost:5173'
    }}>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
      </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>
)
