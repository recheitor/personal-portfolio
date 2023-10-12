
import { Link } from 'react-router-dom'
import './Contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const Contact = ({ language }) => {
    const [state, handleSubmit] = useForm("xzblydjk");
    const [hasContacted, setHasContacted] = useState(undefined)
    if (!hasContacted && state.succeeded) {
        setHasContacted(
            language === 'ENG' ?
                'Message succesfully sent. I will contact you as soon as possible :)'
                :
                'Se ha enviado tu mensaje. Te contactaré lo antes posible :)'
        )
    }

    return (

        <Row className='contact-card justify-content-center contactForm'>
            <Col md='7' xs='11' className='text-center'>

                <div className="card-3d-wrap">
                    {language === 'ENG' ? <h3><span>Contact </span>me</h3> : <h3><span>Contáctame </span></h3>}

                    {
                        !state.succeeded ?
                            <form onSubmit={handleSubmit} className='form-group'>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-style "
                                    placeholder={language === 'ENG' ? 'Your email' : 'Tu email'}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    style={{ overflow: 'hidden', paddingBottom: '170px' }}
                                    className="form-style mt-3"
                                    placeholder={language === 'ENG' ? 'How can I help you?' : '¿En que te puedo ayudar?'}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting} className="btn mt-4 mb-2">
                                    {language === 'ENG' ? 'Submit' : 'Enviar'}
                                </button>
                            </form>
                            :
                            <div className='form-style pt-2 pb-5'>{hasContacted}</div>
                    }

                </div>
            </Col>

        </Row >



    )
}




export default Contact
