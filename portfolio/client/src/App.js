import React from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";
import LAndC from "./components/LAndC";
import { Container, Row, Col } from "./components/Grid";
import SkillHolder from "./components/SkillHolder";
import SkillLogo from "./components/SkillLogo";
import ReactImage from "./images/logo192.png";
import Fruit from "./images/Fruit.jpg";
import StarWars from "./images/StarWars.png";
import Hangman from "./images/Hangman.png";
import MongoDB from "./images/MongoDB.png";
import Html5 from "./images/html5.png";
import CSS3 from "./images/css3.png";
import MySQL from "./images/MySQL.png";
import JavaScript from "./images/javascript.png";
import Nodejs from "./images/nodejs.png";
import Firebase from "./images/firebase.png";
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
        {/* HTML, CSS, JavaScript, jQuery */}
        <Row>
          <Col size="s12">
            <CardHolder title="Skills">
              <Col size="s4">
                <SkillHolder>
                  <SkillLogo image={Html5} name="HTML 5" ></SkillLogo>
                  <SkillLogo image={Firebase} name="Firebase" ></SkillLogo>
                  <SkillLogo image={Nodejs} name="Node.js" ></SkillLogo>
                </SkillHolder>
              </Col>
              <Col size="s4">
                <SkillHolder>
                  <SkillLogo image={CSS3} name="CSS 3" ></SkillLogo>
                  <SkillLogo image={MongoDB} name="MongoDB" ></SkillLogo>
                  <SkillLogo image={ReactImage} name="React" ></SkillLogo>
                </SkillHolder>
              </Col>
              <Col size="s4">
                <SkillHolder>
                  <SkillLogo image={JavaScript} name="JavaScript" ></SkillLogo>
                  <SkillLogo image={MySQL} name="MySQL" ></SkillLogo>
                </SkillHolder>
              </Col>
            </CardHolder>
          </Col>
        </Row>
        <Row>
          <Col size="s12">
            <CardHolder title="Projects">
              <Card title="Fruiti Trutti Trivia" link="https://bigecire.github.io/Fruiti-Trutti-Trivia/" gitHub="https://github.com/BigECire/Fruiti-Trutti-Trivia" image={Fruit}>
                This is a fruit themed trivia game.
              </Card>
              <Card title="Starwars RPG" link="https://bigecire.github.io/Starwars-RPG/" gitHub="https://github.com/BigECire/Starwars-RPG" image={StarWars}>
                This is a game that allows you to play within the StarWars empire.
              </Card>
              <Card title="Coding Hang-Man" link="https://bigecire.github.io/Coding-Hang-Man/" gitHub="https://github.com/BigECire/Coding-Hang-Man" image={Hangman}>
                This is a game inspired by the original Hang Man. It’s a coding Hang Man.
              </Card>
            </CardHolder>
          </Col>
        </Row>
        <Row>
          <Col size="s12">
            <CardHolder title="My Links and Contacts">
              <LAndC></LAndC>
            </CardHolder>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
