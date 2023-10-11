import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Projects.css'


const Projects = () => {


    return (
        <>


            <Row className='justify-content-center'>
                <Col xs='11' lg='12' className='projects-card'>
                    <Row className='justify-content-center mt-2'>
                        <Col xs='11' lg='10' className=' text-center'>
                            <h3>My <span>Projects</span></h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-2'>
                        <Col xs='11' lg='10' className='projects-card-mini text-center'>
                            JUMPER TRAVELER
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs='11' lg='10' className='text-center'>
                            UNO
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs='11' lg='10' className='text-center'>
                            UNO
                        </Col>
                    </Row>
                </Col >

            </Row >


        </>
    )
}

export default Projects