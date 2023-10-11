import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Projects.css'


const Projects = () => {


    return (
        <>
            <Row className='justify-content-center'>
                <Col xs='12' lg='12' className='projects-card'>
                    <Row className='justify-content-center mt-2'>
                        <Col xs='12' lg='10' className=' text-center'>
                            <h3>My <span>Projects</span></h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly mt-2 mb-4'>
                        <Col xs='10' lg='3' className='projects-card-mini text-center mt-2'>
                            <h4>COMPI ROOMS</h4>
                            <a href="https://compirooms.netlify.app/" target="_blank"><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697036164/czuemis1mfinxmuhgpbs.jpg" alt="Project screenshot" /></a>
                            <h4>Developed with:</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>

                        <Col xs='10' lg='3' className='projects-card-mini text-center mt-2'>
                            <h4>ONLY PIZZAS</h4>
                            <a href="https://onlypizzas.fly.dev/" target="_blank"><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697036131/uiriutfupwqjhlgwejf7.jpg" alt="Project screenshot" /></a>
                            <h4>Developed with:</h4>
                            <h5>ExpressJS - MongoDB - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='3' className='projects-card-mini text-center mt-2'>
                            <h4>JUMPER TRAVELER</h4>
                            <a href="https://recheitor.github.io/M1Project/" target="_blank">  <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697036184/otd2rhxmrgor55qrmtyg.jpg" alt="Project screenshot" /></a>
                            <h4>Developed with:</h4>
                            <h5>HTML - CSS - NodeJS</h5>
                        </Col>
                    </Row>
                </Col >
            </Row >
        </>
    )
}

export default Projects