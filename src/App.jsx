import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [language, setLanguage] = useState('ENG')


  window.addEventListener('load', () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap';

    const image = new Image();
    image.src = 'https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/dd7wbroh9qsuxrvktijw';
    document.head.appendChild(link);
  });

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
