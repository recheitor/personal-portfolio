import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [language, setLanguage] = useState('ENG')

  const [font, setFont] = useState(false)

  const loadComponents = async () => {
    await new Promise((resolve) => {
      window.addEventListener('load', () => {
        resolve();
        const linkElement = document.createElement('link');
        linkElement.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap';
        linkElement.rel = 'stylesheet';

        document.head.appendChild(linkElement);
        setFont(true)
      });
    });
  };
  loadComponents();






  return (
    <>
      {font && (
        <>
          <Navigation language={language} setLanguage={setLanguage} />
          <Container>
            <AppRoutes language={language} />
          </Container>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
