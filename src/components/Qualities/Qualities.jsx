import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'


const Qualities = ({ language }) => {


    return (
        <>
            <Row className='background-blur' role="region" aria-label={language === 'ENG' ? 'Qualities Section' : 'Sección de Cualidades'}>
                <Col xs='12' lg='12'>
                    <Row className='qualities-title justify-content-center'>
                        <Col xs='12' lg='12' className='qualities-title-bottom text-center'>
                            <h2 role="heading" aria-level="1">
                                {language === 'ENG' ? 'This are my top ' : 'Estas son mis mejores '}
                                <span>{language === 'ENG' ? 'qualities' : 'cualidades'}</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className='qualities justify-content-evenly' role="list">
                        <Col xs='5' lg='2' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/zok1mfwdyrudnmmwmk08.png" alt="Teamwork Icon" role="img" aria-label={language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'} />
                            <h4>{language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'}</h4>
                        </Col>
                        <Col xs='5' md='5' lg='2' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/n2rrjxqyxe9j4imgzrn2.png" alt="Problem-solving Icon" role="img" aria-label={language === 'ENG' ? 'Problem-solving' : 'Resolución de problemas'} />
                            <h4>{language === 'ENG' ? 'Problem-solving' : 'Resolución de problemas'}</h4>
                        </Col>
                        <Col xs='5' md='5' lg='2' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/auyikyqsqrcbm1efla3c.png" alt="Time Management Icon" role="img" aria-label={language === 'ENG' ? 'Time Management' : 'Gestión del tiempo'} />
                            <h4>{language === 'ENG' ? 'Time Management' : 'Gestión del tiempo'}</h4>
                        </Col>
                        <Col xs='5' md='5' lg='2' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/pd9kyv0o3jxqe9bo9bnm.png" alt="Communication Skills Icon" role="img" aria-label={language === 'ENG' ? 'Communication Skills' : 'Buena comunicación'} />
                            <h4>{language === 'ENG' ? 'Communication Skills' : 'Buena comunicación'}</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Qualities