import React from "react";
// import {Card} from 'react-bootstrap';
// import {CardGroup} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
//import CardDeck from 'react-bootstrap/CardDeck'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Get everything out of twitter</h1>

        <Container>
          <Row>
            <Col xs="6">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Search</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Link to="/userSearch">
                    <Button variant="primary">User Search</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Get random</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Link to="/randomTweetShowcase">
                    <Button variant="primary">Random Tweet Showcase</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
