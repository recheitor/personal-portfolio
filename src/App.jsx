import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [language, setLanguage] = useState('ENG')

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const linkElement = document.createElement('link');
      linkElement.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap';
      linkElement.rel = 'stylesheet';

      document.head.appendChild(linkElement);
    });
  }, [])





  return (
    <>

      <Navigation language={language} setLanguage={setLanguage} />
      <Container>
        <AppRoutes language={language} />
      </Container>
      <Footer />
    </>
  )
}

export default App
