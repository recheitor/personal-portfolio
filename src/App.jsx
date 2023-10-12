import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [language, setLanguage] = useState('ENG')
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap" rel="stylesheet" />
      <Navigation language={language} setLanguage={setLanguage} />
      <Container>
        <AppRoutes language={language} />

      </Container>
      <Footer />
    </>
  )
}

export default App
