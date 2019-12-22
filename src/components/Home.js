import React from 'react';
import {Card} from 'react-bootstrap'; 
import {CardGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom';
import './Home.css'

class Home extends React.Component {
  render(){
    return (
      <div  >
  <h1 className="text-center">Get everything out of twitter</h1>
  {/* <CardGroup> */}
  {/* <Card className="text-center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Search your twitteruser or a certain tweet</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/userSearch"><Button variant="primary">User Search</Button></Link>
  </Card.Body>
</Card> */}
<CardDeck>



<Card className="text-center" bg="light" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>Search</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Link to="/userSearch"><Button variant="primary">User Search</Button></Link>
    </Card.Body>
  </Card>



<Card className="text-center" bg="light" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>Get random</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Link to="/randomTweetShowcase"><Button variant="primary">Random Tweet Showcase</Button></Link>
    </Card.Body>
  </Card>




</CardDeck>


{/* <Card className="text-center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/randomTweetShowcase"><Button variant="primary">Random Tweet Showcase</Button></Link>
  </Card.Body>
</Card> */}

  {/* </CardGroup> */}
  
      </div>
    );
  }
 }

export default Home;

