import Intro from '../../components/Intro/Intro'
import Projects from '../../components/Projects/Projects'
import './HomePage.css'
import { Col, Container, Row } from 'react-bootstrap'

const HomePage = () => {




    return (
        <>
            <Row className='justify-content-center'>
                <Col xs='12' lg='12'>
                    <section id='intro-section'>
                    </section>

                </Col>
                <Col>
                    <section>
                        <Intro />
                    </section>
                </Col>

            </Row>
            <Row>
                <Col>
                    <section id="projects-section">
                        <Projects />
                    </section>
                </Col>

            </Row>
        </>
    )
}

export default HomePage