
import { Link } from 'react-router-dom'
import './ContactForm.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'


const ContactForm = ({ setIsAtHomePage }) => {

    useEffect(() => {
        setIsAtHomePage(true);
    }, [])


    return (
        <Container>
            <Row className='mt-5 justify-content-center contactForm'>
                <Col md='7' xs='11' className='text-center'>
                    <div className="card-3d-wrap">
                        <h4>CONTACTAR</h4>
                        <div className="form-group">
                            <input type="email" name="logemail" className="form-style" placeholder="Tu Email para contestarte" id="logemail" autoComplete="off" />
                            <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                            <textarea style={{ overflow: 'hidden', paddingBottom: '170px' }} name="logpass" className="form-style" placeholder="Explícame que necesitas!" id="logpass" autoComplete="off"></textarea>
                            <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <Link to='/' className="btn mt-4 mb-2">Enviar</Link>
                    </div>
                </Col>

            </Row >
        </Container >



    )
}




export default ContactForm
