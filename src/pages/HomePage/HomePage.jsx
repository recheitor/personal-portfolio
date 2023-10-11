import Background from '../../components/Background/Background'
import Contact from '../../components/Contact/Contact'
import Intro from '../../components/Intro/Intro'
import Projects from '../../components/Projects/Projects'
import Qualities from '../../components/Qualities/Qualities'
import './HomePage.css'
import { Col, Container, Row } from 'react-bootstrap'
const HomePage = ({ language }) => {

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
                    <section>
                        <Intro language={language} />
                    </section>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='12' lg='10'>
                    <section id="about-me-section" >
                        <Qualities language={language} />
                        <Background language={language} />
                    </section>
                </Col>
            </Row >
            <Row>
                <Col xs='12' lg='12'>
                    <section id="projects-section">
                        <Projects language={language} />
                    </section>
                </Col>
            </Row >
            <Row>
                <Col xs='12' lg='12'>
                    <section id="contact-me-section">
                        <Contact language={language} />
                    </section>
                </Col>
            </Row >

        </>
    )
}

export default HomePage