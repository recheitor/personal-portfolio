import { useEffect, useState } from 'react'
import Background from '../../components/Background/Background'
import Contact from '../../components/Contact/Contact'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Qualities from '../../components/Qualities/Qualities'
import './HomePage.css'
import { Col, Row } from 'react-bootstrap'
const HomePage = ({ language }) => {

    // const [componentsLoaded, setComponentsLoaded] = useState({
    //     qualities: false,
    //     background: false,
    //     projects: false,
    //     contact: false,
    // });



    // const loadComponents = async () => {
    //     await new Promise((resolve) => {
    //         window.addEventListener('load', () => {
    //             resolve();
    //             setComponentsLoaded({ qualities: true, background: true, projects: true, contact: true });
    //         });
    //     });
    // };

    // loadComponents();








    return (
        <>
            <Row className='justify-content-center' role="region" aria-label={language === 'ENG' ? 'Homepage' : 'Página de inicio'}>
                <Col xs='12' lg='12'>
                    <section id='hero-blank-section' role="region" aria-label={language === 'ENG' ? 'Hero Section' : 'Sección de Intro'}>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section role="main">
                        <Hero language={language} />
                    </section>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='12' lg='10'>
                    <section>
                        {componentsLoaded.qualities && (
                            <>
                                <Qualities language={language} />
                                <Background language={language} />
                            </>
                        )}
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section id="projects-section" role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                        {componentsLoaded.projects && <Projects language={language} />}
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section id="contact-me-section" role="region" aria-label={language === 'ENG' ? 'Contact Me Section' : 'Sección de Contacto'}>
                        {componentsLoaded.contact && <Contact language={language} />}
                    </section>
                </Col>
            </Row>


        </>
    )
}

export default HomePage