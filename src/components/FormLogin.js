import React from 'react';
import { Form, Container, Card, Row, Col } from 'react-bootstrap';
import './css/FormStyle.css';
import InputLogin from './InputLogin';
import ButtonLogin  from './ButtonLogin';

export default function FormLogin(){
    return (
        <div>
            <Container className='body' >
                <h2 className='judul'><b>LINOV ESS</b></h2>
                <hr className='garis' />

                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    
                    </Col>
                    <Col md="auto">
                        <Card className='Card'>
                            <Form className='form'>
                                <h4 className='judulLogin'><u>Login</u></h4>
                                <InputLogin />
                                <ButtonLogin />
                            </Form>
                        </Card>
                    </Col>
                    <Col xs lg="2">
                        
                    </Col>
                </Row>

            </Container>
        </div>
    );
}