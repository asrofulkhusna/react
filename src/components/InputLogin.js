import React from 'react';
import { Form } from 'react-bootstrap';
import { FaUserAlt, FaLock } from 'react-icons/fa';

export default function InputLogin() {
    return (
        <div>
            <Form.Group className='input' controlId="formBasicEmail">
                <Form.Label><FaUserAlt /> Username</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className='input' controlId="formBasicPassword">
                <Form.Label><FaLock /> Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
        </div>
    );
}