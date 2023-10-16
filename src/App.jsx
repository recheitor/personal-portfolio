import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [language, setLanguage] = useState('ENG')

  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    if (document.readyState === 'complete') {

      setLoaded(true);
    } else {
      const handleLoad = () => {
        setLoaded(true);
      };
      window.addEventListener('load', handleLoad);

      const linkElement = document.createElement('link');
      linkElement.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap';
      linkElement.rel = 'stylesheet';

      document.head.appendChild(linkElement);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);




  return (
    <>
      {loaded && (
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
