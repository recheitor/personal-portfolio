import Background from '../../components/Background/Background'
import Intro from '../../components/Intro/Intro'
import Projects from '../../components/Projects/Projects'
import Qualities from '../../components/Qualities/Qualities'
import './HomePage.css'
import { Col, Container, Row } from 'react-bootstrap'
const HomePage = () => {

    return (
        <>

            <Row className='justify-content-center'>
                <Col xs='12' lg='12'>
                    <section id='intro-blank-section'>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section className='intro'>
                        <Intro />
                    </section>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='12' lg='10'>
                    <section id="about-me-section" >
                        <Qualities />
                        <Background />
                    </section>
                </Col>
            </Row >
            <Row>
                <Col xs='12' lg='12'>
                    <section id="projects-section">
                        <Projects />
                    </section>
                </Col>
            </Row >

        </>
    )
}

export default HomePage