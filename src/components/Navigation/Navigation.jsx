import { Col, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react'


const Navigation = ({ language, setLanguage }) => {

    const handleLanguageEspClick = () => {
        setLanguage('ESP')
        closeMenu()
    }
    const handleLanguageEngClick = () => {
        setLanguage('ENG')
        closeMenu()
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <Row className='navi justify-content-between align-items-center' role="navigation" aria-label={language === 'ENG' ? 'Main Navigation' : 'Navegación Principal'}>
                <Col xs='2' lg='3'>
                    <div className='nav-head'>
                        <a href="#intro-blank-section"> <h3>A.Reche</h3></a>
                    </div>
                </Col>
                <Col xs='8' lg='6'>
                    <Row className='nav-sections justify-content-around me-3' role="menubar">
                        <Col xs='3' lg='4' className='text-center p-0'>
                            <a href="#about-me-section" role="menuitem">{language === 'ENG' ? 'ABOUT ME' : 'SOBRE MÍ'}</a>
                        </Col>
                        <Col xs='3' lg='4' className='text-center p-0'>
                            <a href="#projects-section" role="menuitem">{language === 'ENG' ? 'PROJECTS' : 'PROYECTOS'}</a>
                        </Col>
                        <Col xs='3' lg='4' className='text-center p-0'>
                            <a href="#contact-me-section" role="menuitem">{language === 'ENG' ? 'CONTACT' : 'CONTACTO'}</a>
                        </Col>
                    </Row>
                </Col>
                <Col xs='2' lg='1' className='logo-contact text-end'>
                    <a href='https://github.com/recheitor' target='_blank'><img className='me-2' src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                    <a href='https://www.linkedin.com/in/alejandro-reche-costa/' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/qktqnj646lv6ix3uwafy" alt="LinkedIn Icon" role="img" aria-label="LinkedIn Profile" /></a>
                </Col>
                <Col xs='2' lg='1' className='nav-language d-flex align-items-center justify-content-center' >
                    <Link style={{ textDecoration: 'none', fontSize: '0.9em', color: '#C490D1' }} onClick={language === 'ENG' ? (() => handleLanguageEspClick()) : (() => handleLanguageEngClick())} role="button">
                        {language === 'ENG' ? 'SPA' : 'ENG'}
                    </Link>
                </Col>
            </Row>

            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} role="checkbox" aria-label="Menu Icon" />
            <label class="navi-label" for="menu-icon" role="presentation" aria-expanded="false" aria-label="Menu Hamburger" />


            <nav className="nav" role="navigation" aria-label={language === 'ENG' ? 'Mobile Navigation' : 'Navegación Móvil'}>
                <ul>
                    <li>
                        <a href="#about-me-section" style={{ textDecoration: 'none' }} onClick={closeMenu} role="menuitem">
                            {language === 'ENG' ? 'ABOUT ME' : 'SOBRE MÍ'}
                        </a>
                    </li>
                    <li>
                        <a href="#projects-section" style={{ textDecoration: 'none' }} onClick={closeMenu} role="menuitem">
                            {language === 'ENG' ? 'MY PROJECTS' : 'MIS PROYECTOS'}
                        </a>
                    </li>
                    <li>
                        <a href="#contact-me-section" style={{ textDecoration: 'none' }} onClick={closeMenu} role="menuitem">
                            {language === 'ENG' ? 'CONTACT' : 'CONTACTO'}
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/recheitor' target='_blank' onClick={closeMenu} role="menuitem">
                            <img className='logo-contact-mini' src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/alejandro-reche-costa/' target='_blank' role="menuitem">
                            <img className='logo-contact-mini' src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/qktqnj646lv6ix3uwafy" alt="LinkedIn Icon" role="img" aria-label="LinkedIn Profile" />
                        </a>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', fontSize: '0.9em', color: '#C490D1' }} onClick={language === 'ENG' ? (() => handleLanguageEspClick()) : (() => handleLanguageEngClick())} role="button">
                            {language === 'ENG' ? 'SPANISH VERSION' : 'ENGLISH VERSION'}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay" role="presentation"></div>
        </>
    )
}

export default Navigation