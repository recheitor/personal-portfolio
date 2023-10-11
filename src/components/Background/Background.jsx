import { Col, Row, } from 'react-bootstrap'
import './Background.css'
import { useEffect } from 'react'


const Background = () => {

    useEffect(() => {
        const checkbox = document.getElementById('rotate-checkbox');
        const additionalInfo = document.getElementById('additional-info');
        const checkbox2 = document.getElementById('rotate-checkbox2');
        const additionalInfo2 = document.getElementById('additional-info2');
        const checkbox3 = document.getElementById('rotate-checkbox3');
        const additionalInfo3 = document.getElementById('additional-info3');


        checkbox.addEventListener('change', function () {
            if (this.checked) {
                additionalInfo.style.maxHeight = additionalInfo.scrollHeight + "px";
                additionalInfo.style.opacity = 1;
                additionalInfo.style.visibility = 'visible';
            } else {
                additionalInfo.style.maxHeight = null;
                additionalInfo.style.opacity = 0;
                additionalInfo.style.visibility = 'hidden';
            }
        });

        checkbox2.addEventListener('change', function () {
            if (this.checked) {
                additionalInfo2.style.maxHeight = additionalInfo2.scrollHeight + "px";
                additionalInfo2.style.opacity = 1;
                additionalInfo2.style.visibility = 'visible';

            } else {
                additionalInfo2.style.maxHeight = null;
                additionalInfo2.style.opacity = 0;
                additionalInfo2.style.visibility = 'hidden';
            }
        });
        checkbox3.addEventListener('change', function () {
            if (this.checked) {
                additionalInfo3.style.maxHeight = additionalInfo3.scrollHeight + "px";
                additionalInfo3.style.opacity = 1;
                additionalInfo3.style.visibility = 'visible';

            } else {
                additionalInfo3.style.maxHeight = null;
                additionalInfo3.style.opacity = 0;
                additionalInfo3.style.visibility = 'hidden';
            }
        });
    }, [])



    return (
        <>



            <Row className='justify-content-center mb-5'>
                <Col xs='12' lg='12'>
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
                                            <label htmlFor="rotate-checkbox" className="rotate-label">
                                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697025561/d25mmkai40yr9fzu7h0r.webp" alt="Rotating Image" />
                                            </label>
                                        </Col>
                                        <Col xs='12' lg='12' className='text-center d-flex align-items-center justify-content-center'>
                                            <div className="additional-info" id="additional-info">
                                                <p>13 years G-Code experience</p>
                                            </div>
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
                                            <label htmlFor="rotate-checkbox2" className="rotate-label">
                                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697025561/d25mmkai40yr9fzu7h0r.webp" alt="Rotating Image" />
                                            </label>
                                        </Col>
                                        <Col xs='12' lg='12' className='text-center d-flex align-items-center justify-content-center'>
                                            <div className="additional-info2" id="additional-info2">
                                                <p>360h JavaScript MERN bootcamp</p>
                                            </div>
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
                                            <label htmlFor="rotate-checkbox3" className="rotate-label">
                                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697025561/d25mmkai40yr9fzu7h0r.webp" alt="Rotating Image" />
                                            </label>
                                        </Col>
                                        <Col xs='12' lg='12' className='text-center d-flex align-items-center justify-content-center'>
                                            <div className="additional-info3" id="additional-info3">
                                                <p>192h Full Stack - Python</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs='4' lg='5' className='text-end ms-4'>
                            <h3>Some <span>academic</span> background and <span>career</span> experience</h3>
                        </Col>
                    </Row >


                </Col >


            </Row >


        </>
    )
}

export default Background