import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './css/Home.css';
import { FaRegEdit, FaRegTrashAlt, FaRegPlusSquare } from 'react-icons/fa';

export default class Home extends Component {
  state = {
    todos: [],
    testPost: {
      "idTiket": "692931f7-21f6-4fcc-8cdf-51ebccd4d8ee",
      "judulTiket": "Test add ticket lagi4",
      "idPic": { "idPic": "692931f7-21f6-4fcc-8cdf-51ebccd4d8ee" },
      "level": "standart",
      "status": "open",
      "detailTiket": [{
        "pengirim": "Agen",
        "penerima": "Pic",
        "pesan": "test",
        "idgambar": ""
      }]
    }
  }

  

  // get data
  componentDidMount() {
    fetch('http://149.129.249.109:8080/Ticketing/tiket')
      .then(res => res.json())
      .then((data) => {
        this.setState({ todos: data })
      })
  }

  render() {
    console.log(this.state.todos);

    return (

      <div className="bodyHome">
        <Navbar />
        <div className="col-xs-12, container">
          {/* <Jumbotron className="headjumbot">
            <h2 className="jumbot">Hello, Selamat Siang.</h2>
            <p>
              Anda sekarang tidak perlu repot-repot pergi keluar rumah hanya untuk membeli tiket.
                </p>
            <p>
              <Button variant="primary" className="jumbot">Order Now</Button>
            </p>

            <Figure className="foto">
              <Figure.Image className="imagee"
                width={100}
                height={120}
                alt="171x180"
                src={foto}
              />
              <Figure.Caption>
                <p><b>Admin</b> : <u className="chat">Wahyu Romadhon</u></p>
              </Figure.Caption>
            </Figure>
          </Jumbotron> */}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th cellSpacing="0" colSpan="7"><Button variant="info btn-block"><Link to="/home/:addData"><FaRegPlusSquare /> Add Data</Link></Button></th>
              </tr>
              <tr>
                <th>Status</th>
                <th>Judul</th>
                <th>Level</th>
                <th>Email</th>
                <th>Alamat</th>
                <th colSpan="2" className="action">Action</th>
              </tr>
            </thead>
            {this.state.todos.map((todo) => (
              <tbody>
                <tr>
                  <td>{todo.status}</td>
                  <td>{todo.judulTiket}</td>
                  <td>{todo.level}</td>
                  <td>{todo.idPic.email}</td>
                  <td>{todo.idPic.account.alamat}</td>
                  <td><Button variant="success" className="action"><FaRegEdit /> Edit</Button></td>
                  <td><Button variant="danger" className="action"><FaRegTrashAlt /> Delete</Button></td>
                </tr>
              </tbody>

            ))}
          </Table>
        </div>
      </div>
    );
  }

}