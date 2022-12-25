import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function App() {

  const [picture, setPicture] = useState([])
  useEffect(() => {

    var headersapi = {
      method: 'GET',
      // mode: 'cors',
      // credentials: 'include',
      // withCredentials: true,
      // crossorigin: true,
      // mode: 'cors',
      Headers: {
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true
      },
    }


    const loadpicture = async () => {
      var pictureData = await fetch('https://random-d.uk/api/random', headersapi)
        .then(Response =>
          Response.json())
        .then(data => {
          setPicture(data)
        })
    }
    loadpicture()
  })


  return (
    <div className="App">
      <Container>
        <Row className="center">
          <Card className='col-10 m-5 bg-info'>
            <Card.Img className='p-5 ' src={picture.url} />
            <Card.Body>
              <Card.Title>
                {picture.message}
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
