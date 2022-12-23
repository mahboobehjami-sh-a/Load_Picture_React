import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'


function App() {
  return (
    <div className="App">
      <row>
        <Card className='col-10 m-5'>
          <Card.Img src="#">

          </Card.Img>
          <Card.Body>
            <Card.Title>
              title
            </Card.Title>
          </Card.Body>
        </Card>

      </row>
    </div>
  );
}

export default App;
