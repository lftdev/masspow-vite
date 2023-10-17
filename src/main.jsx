import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { initializeApp } from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF525D'
    },
    secondary: {
      main: '#8d8fe9'
    }
  }
})

initializeApp({
  apiKey: 'AIzaSyAUpUzJ9TQ-r9SwHMdNTP7R5a4_jSpNdFI',
  authDomain: 'masspow-e5c03.firebaseapp.com',
  projectId: 'masspow-e5c03',
  storageBucket: 'masspow-e5c03.appspot.com',
  messagingSenderId: '598577617555',
  appId: '1:598577617555:web:c90041a6183ea00b788b66'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
