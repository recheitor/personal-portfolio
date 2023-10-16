import { lazy, Suspense } from 'react';
import './HomePage.css';
import { Col, Row } from 'react-bootstrap';

const Hero = lazy(() => import('../../components/Hero/Hero'));
const Qualities = lazy(() => import('../../components/Qualities/Qualities'));
const Background = lazy(() => import('../../components/Background/Background'));
const Projects = lazy(() => import('../../components/Projects/Projects'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

const HomePage = ({ language }) => {
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
                        <Suspense fallback={<div>Loading...</div>}>
                            <Hero language={language} />
                        </Suspense>
                    </section>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='12' lg='10'>
                    <section>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Qualities language={language} />
                            <Background language={language} />
                        </Suspense>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section id="projects-section" role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Projects language={language} />
                        </Suspense>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section id="contact-me-section" role="region" aria-label={language === 'ENG' ? 'Contact Me Section' : 'Sección de Contacto'}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Contact language={language} />
                        </Suspense>
                    </section>
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
