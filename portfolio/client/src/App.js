import React from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";
import { Container, Row, Col } from "./components/Grid";
import SkillHolder from "./components/SkillHolder";
import SkillLogo from "./components/SkillLogo";
import ReactImage from "./images/logo192.png";
import Fruit from "./images/Fruit.jpg";
import StarWars from "./images/StarWars.png";
import Hangman from "./images/Hangman.png";
import Me from "./images/Me.jpg";
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Container>
        <Row>
          <Col size="s12">
            <CardHolder title="Bio">
            <img src={Me} />
              <p>
                Eric is a recent graduate of Eckerd College with a Bachelor Degree in Physics.  He is a native of Nashville, Tennessee, and was a graduate of Father Ryan High School.  His interests include canoeing, climbing, and coding.  Eric was active in scouting and is an Eagle Scout.  He is a member of Woodland Presbyterian Church where he volunteers in the children’s program.</p>
            </CardHolder>
          </Col>
        </Row>
        <Row>
          <Col size="s12">
            <CardHolder title="Skills">
              <SkillHolder>
                <SkillLogo image = {ReactImage} name = "React" ></SkillLogo>
              </SkillHolder>
            </CardHolder>
          </Col>
        </Row>
        <Row>
          <Col size="s12">
            <CardHolder title="Projects">
              <Card title="Fruiti Trutti Trivia" link="https://bigecire.github.io/Fruiti-Trutti-Trivia/" gitHub="https://github.com/BigECire/Fruiti-Trutti-Trivia" image={Fruit}>

              </Card>
              <Card title="Starwars RPG" link="https://bigecire.github.io/Starwars-RPG/" gitHub="https://github.com/BigECire/Starwars-RPG" image={StarWars}>

              </Card>
              <Card title="Coding Hang-Man" link="https://bigecire.github.io/Coding-Hang-Man/" gitHub="https://github.com/BigECire/Coding-Hang-Man" image={Hangman}>

              </Card>
            </CardHolder>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
