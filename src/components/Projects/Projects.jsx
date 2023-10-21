import { Col, Row, } from 'react-bootstrap'
import './Projects.css'

const Projects = ({ language }) => {

    return (
        <>
            <Row className='justify-content-center' role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                <Col xs='12' lg='12' className='projects-card'>
                    <Row className='justify-content-center mt-2'>
                        <Col xs='12' lg='10' className=' text-center'>
                            <h3 role="heading" aria-level="1">
                                {language === 'ENG' ? 'My ' : 'Mis '}
                                <span>{language === 'ENG' ? 'Projects' : 'Proyectos'}</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly mt-2 mb-4' role="list">
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <h4>COMPI ROOMS</h4>
                            <a href="https://compirooms.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini3/czuemis1mfinxmuhgpbs.jpg" alt="COMPI ROOMS Project screenshot" role="img" aria-label="COMPI ROOMS Project Screenshot" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>

                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <h4>ONLY PIZZAS</h4>
                            <a href="https://onlypizzas.fly.dev/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini5/uiriutfupwqjhlgwejf7.jpg" alt="ONLY PIZZAS Project screenshot" role="img" aria-label="ONLY PIZZAS Project Screenshot" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <h4>JUMPER TRAVELER</h4>
                            <a href="https://recheitor.github.io/M1Project/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini6/otd2rhxmrgor55qrmtyg.jpg" alt="JUMPER TRAVELER Project screenshot" role="img" aria-label="JUMPER TRAVELER Project Screenshot" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>HTML - CSS - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <h4>INSTRUSTERIL</h4>
                            <a href="https://www.instrusteril.es" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/kjx5i1i6bk8jd8ro9og0" alt="JUMPER TRAVELER Project screenshot" role="img" aria-label="JUMPER TRAVELER Project Screenshot" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>HTML - CSS - ReactJS</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Projects