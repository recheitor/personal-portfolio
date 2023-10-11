import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Intro.css'


const Intro = () => {


    return (
        <>
            <Row className='intro justify-content-center align-items-center'>
                <Col xs='8' lg='6' className='intro-name d-flex flex-column align-items-center' >
                    <h2>Hi! My name is</h2>
                    <div className='my-name'>
                        <h3>Alejandro Reche</h3>
                    </div>

                </Col>
                <Col xs='4' lg='5'>
                    <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1696999589/nqteiuksm2ybomaom3ks.png" alt="" />
                </Col>
            </Row>


        </>
    )
}

export default Intro