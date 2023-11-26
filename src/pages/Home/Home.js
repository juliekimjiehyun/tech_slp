import React from 'react';
import {Container, Button} from 'reactstrap';
import './styles.css';

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Speech Therapy Activities</h1>
        <h3>Just a click away!</h3>
        <p>
        SLPs, say goodbye to planning stress! Discover instant, 
        no-prep resources for all ages and target areas on our site.
        Elevate your sessions effortlessly - because time is of the essence
        in the path to communication success!
        </p>
        <Button href="/MatchingGame">Get Started</Button>
      </div>
      <div>
        <h2>New Resources</h2>
        <p>Check out this week's new games!</p>
      </div>
      <div>
        <h2>Testimonials</h2>
        <p>Reviews from fellow SLPs</p>
      </div>
    </Container>
    
  )
}

export default Home;