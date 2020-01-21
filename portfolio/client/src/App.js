import React from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";
import { Container, Row, Col } from "./components/Grid";
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
    <Container>
<Row>
<Col size = "s12">
<CardHolder title= "Skills">

</CardHolder>
</Col>
</Row>
<Row>
<Col size = "s12">
<CardHolder title= "Projects">
<Card title="Fruiti Trutti Trivia" link="https://bigecire.github.io/Fruiti-Trutti-Trivia/" gitHub="https://github.com/BigECire/Fruiti-Trutti-Trivia" image="">

</Card>
<Card title="Starwars RPG" link="https://bigecire.github.io/Starwars-RPG/" gitHub="https://github.com/BigECire/Starwars-RPG" image="">
  
</Card>
<Card title="Coding Hang-Man" link="https://bigecire.github.io/Coding-Hang-Man/" gitHub="https://github.com/BigECire/Coding-Hang-Man" image="">
  
</Card>
</CardHolder>
</Col>
</Row>
    </Container>
    </div>
  );
}

export default App;
