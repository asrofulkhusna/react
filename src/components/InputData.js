import React from 'react';
import { Form } from 'react-bootstrap';

export default function InputData() {

    return (
        <div>
            <Form.Group className='input' controlId="formBasicEmail">
                <Form.Label>Pesan</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Judul..." />
            </Form.Group>

            <Form.Group className='input' controlId="formBasicEmail">
                <Form.Label>Pesan</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Pesan..." />
            </Form.Group>

            <Form.Group className='input' controlId="formBasicEmail">
                <Form.Label>Level</Form.Label>
                <select className="form-control">
                    <option value="">Select Level</option>
                    <option value="urgent">Urgent</option>
                    <option value="standart">Standart</option>
                </select>
            </Form.Group>
        </div>
    );
}