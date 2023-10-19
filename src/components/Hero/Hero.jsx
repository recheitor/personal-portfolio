import { Col, Row, } from 'react-bootstrap'
import './Hero.css'

const Hero = ({ language }) => {

    return (
        <>
            <Row className='hero justify-content-center align-items-center' role="banner" aria-label={language === 'ENG' ? 'Hero Section' : 'Sección del héroe'}>
                <Col xs='8' lg='7' className='d-flex flex-column align-items-center text-center'>
                    <h2 role="heading" aria-level="1">
                        {language === 'ENG' ? 'Hey! I am' : '¡Hola! Soy'}
                    </h2>
                    <div>
                        <h3 role="heading" aria-level="2">
                            Alejandro Reche
                        </h3>
                    </div>
                    <h4 role="heading" aria-level="3">
                        {language === 'ENG' ? "I'm a Full Stack Web Developer" : "Soy Desarrollador Web Full Stack"}
                    </h4>
                    <div id="about-me-section">
                    </div>
                </Col>
                <Col xs='4' lg='5' className='ps-0'>
                    <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/w2ae0zisgga9v8wasp9m" alt="Alejandro Reche's Photo" role="img" aria-label="Alejandro Reche's Photo" />
                </Col>
            </Row>
        </>
    )
}

export default Hero