import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'


const Qualities = () => {


    return (
        <>


            <Row className='background-blur'>
                <Col xs='12' lg='12'>
                    <Row className='qualities-title justify-content-center'>
                        <Col xs='10' lg='6' className='qualities-title-bottom text-center'>
                            <h2>This are some</h2>
                            <h2>of my <span>qualities</span></h2>
                        </Col>
                    </Row>
                    <Row className='qualities justify-content-evenly' >
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/zok1mfwdyrudnmmwmk08.png" alt="" />
                            <h4>Teamwork</h4>
                        </Col >
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/n2rrjxqyxe9j4imgzrn2.png" alt="" />
                            <h4>Problem-solving</h4>
                        </Col>
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/auyikyqsqrcbm1efla3c.png" alt="" />
                            <h4>Time Management</h4>
                        </Col>
                        <Col xs='5' lg='2' className='qualities-card text-center'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697020804/pd9kyv0o3jxqe9bo9bnm.png" alt="" />
                            <h4>Communication Skills</h4>
                        </Col>
                    </Row >
                </Col>
            </Row >



        </>
    )
}

export default Qualities