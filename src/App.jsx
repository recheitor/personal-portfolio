import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap" rel="stylesheet" />
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
