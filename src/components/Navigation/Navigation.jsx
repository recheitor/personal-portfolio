import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {





    return (
        <>

            <Row className='navi justify-content-between align-items-center'>
                <Col xs='4' lg='4'>
                    <div className='nav-my-name'>
                        <a href="#intro-section"> <h3>A.Reche</h3></a>
                    </div>
                </Col>
                <Col xs='6' lg='6' >
                    <Row className='nav-sections justify-content-around'>
                        <Col xs='3' lg='3' className='me-2'>
                            <a href="#about-me-section">About me</a>
                        </Col>
                        <Col xs='3' lg='3' >
                            <a href="#projects-section">Projects</a>
                        </Col>
                        <Col xs='3' lg='3' className=' ms-2'>
                            <a href="#contact-me-section">Contact me</a>
                        </Col>
                    </Row>
                </Col>
                <Col xs='2' lg='2' className='nav-language text-end' >
                    <Link to={'#'}>🇪🇸</Link>
                    <Link className='me-3' to={'#'}>🇺🇸</Link>
                </Col>
            </Row >







        </>
    )
}

export default Navigation