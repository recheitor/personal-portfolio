import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {





    return (
        <>

            <Row className='navi justify-content-between align-items-center'>
                <Col xs='2' lg='4'>
                    <div className='nav-my-name'>
                        <a href="#intro-blank-section"> <h3>A.Reche</h3></a>
                    </div>
                </Col>
                <Col xs='6' lg='6' >
                    <Row className='nav-sections justify-content-around'>
                        <Col xs='2' lg='3'>
                            <a href="#about-me-section">ABOUT</a>
                        </Col>
                        <Col xs='3' lg='3' className='me-2' >
                            <a href="#projects-section">PROJECTS</a>
                        </Col>
                        <Col xs='3' lg='3' >
                            <a href="#contact-me-section">CONTACT</a>
                        </Col>
                    </Row>
                </Col>
                <Col xs='2' lg='2' className='nav-language d-flex align-items-center justify-content-center' >
                    <Link to={'#'}>ESP</Link>
                    <Link className='me-1 ms-1'> · </Link>
                    <Link to={'#'}>ENG</Link>
                </Col>
            </Row >







        </>
    )
}

export default Navigation