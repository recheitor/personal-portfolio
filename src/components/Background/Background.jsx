import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Background.css'


const Background = () => {


    return (
        <>



            <Row className='justify-content-center'>
                <Col xs='12' lg='8'>
                    <Row className='justify-content-center background-title background-card align-items-center'>
                        <Col xs='6' lg='5'>
                            <Row>
                                <Col xs='12' lg='12' className='background-card-mini'>
                                    <Row className='justify-content-center'>
                                        <Col xs='8' lg='8' className='text-center d-flex align-items-center justify-content-center'>
                                            <h4>Zimvie - CNC Programmer</h4>
                                        </Col>
                                        <Col xs='4' lg='2' className='text-center d-flex align-items-center justify-content-center'>
                                            <input type="checkbox" id="rotate-checkbox" />
                                            <label for="rotate-checkbox" class="rotate-label">
                                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697025561/d25mmkai40yr9fzu7h0r.webp" alt="Rotating Image" />
                                            </label>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs='12' lg='12' className='background-card-mini'>
                                    <Row className='justify-content-center'>
                                        <Col xs='8' lg='8' className='text-center d-flex align-items-center justify-content-center'>
                                            <h4>IronHack - Web Development</h4>
                                        </Col>
                                        <Col xs='4' lg='2' className='text-center d-flex align-items-center justify-content-center'>
                                            <input type="checkbox" id="rotate-checkbox2" />
                                            <label for="rotate-checkbox2" class="rotate-label">
                                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697025561/d25mmkai40yr9fzu7h0r.webp" alt="Rotating Image" />
                                            </label>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs='12' lg='12' className='background-card-mini'>
                                    <Row className='justify-content-center'>
                                        <Col xs='8' lg='8' className='text-center d-flex align-items-center justify-content-center'>
                                            <h4>Coursera - Web Development</h4>
                                        </Col>
                                        <Col xs='4' lg='2' className='text-center d-flex align-items-center justify-content-center'>
                                            <input type="checkbox" id="rotate-checkbox3" />
                                            <label for="rotate-checkbox3" class="rotate-label">
                                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697025561/d25mmkai40yr9fzu7h0r.webp" alt="Rotating Image" />
                                            </label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs='5' lg='5' className='text-end'>
                            <h3>Some <span>academic</span> background and <span>career</span> experience</h3>
                        </Col>
                    </Row >


                </Col >


            </Row >


        </>
    )
}

export default Background