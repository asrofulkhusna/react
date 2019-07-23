import React from 'react';
import { Form, Container, Card, Row, Col } from 'react-bootstrap';
import './css/FormStyle.css';
import InputData from './InputData';
import ButtonAdd from './ButtonAdd';

export default function AddData() {
    return (
        <div>
            <Container className='body' >
                <h2 className='judul'><b>Linov ESS</b></h2>
                <hr className='garis' />

                <Row className="justify-content-md-center">
                    <Col xs lg="2">

                    </Col>
                    <Col md="auto">
                        <Card className='Card'>
                            <Form className='form'>
                                <h6 className='judulLogin'><u>Tambah Data</u></h6>
                                <InputData />
                                <ButtonAdd />
                                <a href="/home" className="back">Back to home?</a>
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