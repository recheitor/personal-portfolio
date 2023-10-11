import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('ENG')
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap" rel="stylesheet" />
      <Navigation language={language} setLanguage={setLanguage} />
      <AppRoutes language={language} />
      <Footer />
    </>
  )
}

export default App
