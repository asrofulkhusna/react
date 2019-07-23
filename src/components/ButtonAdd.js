import React from 'react';
import { Button } from 'react-bootstrap';
import './css/ButtonLogin.css';

export default function ButtonLogin() {
    return (
        <div>
            <Button variant="success" type="submit" href="/home" className="btnLogin">
                Save
            </Button>
        </div>
    );
}