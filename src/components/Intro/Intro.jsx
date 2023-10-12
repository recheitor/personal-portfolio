import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Intro.css'


const Intro = ({ language }) => {


    return (
        <>
            <Row className='intro justify-content-center align-items-center'>
                <Col xs='8' lg='6' className='d-flex flex-column align-items-center' >
                    {language === 'ENG' ? <h2>Hey! My name is</h2> : <h2>¡Hola! Soy</h2>}
                    <div>
                        <h3>Alejandro Reche</h3>
                    </div>

                    {language === 'ENG' ? <h4>I'm a Web Developer Full Stack</h4> : <h4>Soy Desarrollador Web Full Stack</h4>}
                    <div id="about-me-section">
                    </div>


                </Col>
                <Col xs='4' lg='5' className='ps-0'>
                    <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1696999589/nqteiuksm2ybomaom3ks.png" alt="" />
                </Col>
            </Row>


        </>
    )
}

export default Intro