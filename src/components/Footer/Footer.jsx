import { Link } from 'react-router-dom'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {

    return (
        <>

            <Row className='justify-content-end' style={{ paddingTop: '300px' }}>
                <Col >
                    <Link to="https://api.whatsapp.com/send?phone=694474652" className="whatsapp-logo">
                        <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1696533913/f62tsjzwpi7uc3hyvrqy.png" alt="" />
                    </Link>

                </Col>
            </Row>
            <div className="footer align-items-center justify-content-center">
                <p className='company-name'>© 2023 A.Reche</p>
            </div>

        </>
    )
}

export default Footer