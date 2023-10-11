import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'


const Qualities = () => {


    return (
        <>

            <Container className='background-blur'>

                <Row className='justify-content-end' style={{ paddingTop: '300px' }}>
                    <Col >
                        <Link to="https://api.whatsapp.com/send?phone=694474652" className="whatsapp-logo">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1696533913/f62tsjzwpi7uc3hyvrqy.png" alt="" />
                        </Link>

                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Qualities