import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = ({ language, setLanguage }) => {

    const handleLanguageEspClick = () => setLanguage('ESP')
    const handleLanguageEngClick = () => setLanguage('ENG')


    return (
        <>

            <Row className='navi justify-content-between align-items-center'>
                <Col xs='2' lg='4' >
                    <div className='nav-my-name'>
                        <a href="#intro-blank-section"> <h3>A.Reche</h3></a>
                    </div>
                </Col>
                <Col xs='8' lg='6' >
                    <Row className='nav-sections justify-content-end me-3'>
                        <Col xs='3' lg='3' className='text-center p-0'>
                            <a href="#about-me-section">{language === 'ENG' ? 'ABOUT' : 'SOBRE MÍ'}</a>
                        </Col>
                        <Col xs='3' lg='3' className='p-0' >
                            <a href="#projects-section">{language === 'ENG' ? 'PROJECTS' : 'PROYECTOS'}</a>
                        </Col>
                        <Col xs='3' lg='3' className='p-0' >
                            <a href="#contact-me-section">{language === 'ENG' ? 'CONTACT' : 'CONTACTO'}</a>
                        </Col>
                    </Row>
                </Col>
                <Col xs='2' lg='2' className='nav-language d-flex align-items-center justify-content-center' >
                    <Link onClick={handleLanguageEspClick}>ESP</Link>
                    <Link className='me-1 ms-1'> · </Link>
                    <Link onClick={handleLanguageEngClick}>ENG</Link>
                </Col>
            </Row >







        </>
    )
}

export default Navigation