import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'


const Qualities = ({ language }) => {


    return (
        <>


            <Row className='background-blur'>
                <Col xs='12' lg='12'>
                    <Row className='qualities-title justify-content-center'>
                        <Col xs='10' lg='6' className='qualities-title-bottom text-center'>
                            {language === 'ENG' ? <h2>This are my<br /> top <span>qualities</span></h2> : <h2>Estas son algunas<br />de mis <span>cualidades</span></h2>}


                        </Col>
                    </Row>
                    <Row className='qualities justify-content-evenly' >
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/zok1mfwdyrudnmmwmk08.png" alt="" />
                            {language === 'ENG' ? <h4>Teamwork</h4> : <h4>Trabajo en equipo</h4>}

                        </Col >
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/n2rrjxqyxe9j4imgzrn2.png" alt="" />

                            {language === 'ENG' ? <h4>Problem-solving</h4> : <h4>Resolución de problemas</h4>}
                        </Col>
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/auyikyqsqrcbm1efla3c.png" alt="" />
                            {language === 'ENG' ? <h4>Time Management</h4> : <h4>Gestión del tiempo</h4>}
                        </Col>
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/pd9kyv0o3jxqe9bo9bnm.png" alt="" />

                            {language === 'ENG' ? <h4>Communication Skills</h4> : <h4>Buena comunicación</h4>}
                        </Col>
                    </Row >
                </Col>
            </Row >



        </>
    )
}

export default Qualities