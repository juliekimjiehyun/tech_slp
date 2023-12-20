import React from 'react';
import {Container, Row, Col, Button, Badge} from 'reactstrap';
import {useAnimate, motion} from 'framer-motion';
import './styles.css';

export const UseAnimate = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const Home = () => {
  const [scope, animate] = useAnimate()

  const handleAnimate = async () => {
    await animate('#button', { rotate: '360deg' });
  }
  const handleBtnClick = () => {
    window.location.href = "/MatchingGame";
  };

  return (
    <Container>
      <div ref={scope}>
        <Row className="mb-2">
          <Col>
            <h1 style={{fontSize: "3.7rem"}}>Speech Therapy Activities</h1>
            <h3 style={{fontSize: "1.2rem"}}><span>Your virtual materials closet is just a click away!</span></h3>
            <motion.div className="text-center" whileInView={{opacity: 0}}/>
              <div className="container">
              <Button 
                id='button'
                cssModule={{btn: "custom-btn"}} 
                onMouseEnter={() => handleAnimate()}
                onClick={handleBtnClick}
              >
                Get Started ✨
              </Button>
              </div>
          </Col>
        </Row>
        <Row className="p-5 d-flex align-items-center">
          <Col md="4">
            <img className="fadeshow" width="100%" src="/img/home_images/homeBoy.png" alt="boy" />
          </Col>
          <Col md="4">
            <p>
            SLPs, say goodbye to planning stress! Discover <strong>instant, 
            no-prep</strong> resources for all ages and target areas on our site.
            Elevate your sessions effortlessly - because time is of the essence
            in the path to communication success!
            </p>
          </Col>
          <Col md="4">
            <img width="100%" src="/img/home_images/homeGirl.png" alt="girl" />
          </Col>
        </Row>
      </div>
     
      <div className="productPreview">
      <Badge className="bg-transparent">
      <img className="icon" src="/img/home_images/new.png" alt="new icon"/>

        <Row>
          <Col md="3" className="productText">
            <h1 className="productTitle">Products</h1>
            <p>Check out these new additions</p>
          </Col>
          <Col xs="4" md="3">
              <img className="productImg" src="/img/home_images/product1.png" alt="product preview"/>
          </Col>
          <Col xs="4" md="3">
              <img className="productImg" src="/img/home_images/product2.png" alt="product preview"/>
          </Col>
          <Col xs="4" md="3">
              <img className="productImg" src="/img/home_images/product3.png" alt="product preview"/>
          </Col>
        </Row>
        </Badge>
      </div>
      
      <div className="mb-5">
        <Row className="mt-5">
          <h1 className="mt-5">A message from fellow SLPs</h1>
        </Row>
        <Row>
          <Col md="4">
            <img className="testimonialImg" src="/img/home_images/testimonial1.png" alt="testimonial"/>
          </Col>
          <Col md="4">
            <img className="testimonialImg" src="/img/home_images/testimonial2.png" alt="testimonial"/>
          </Col>
          <Col md="4">
            <img className="testimonialImg" src="/img/home_images/testimonial3.png" alt="testimonial"/>
          </Col>
        </Row>
      </div>
    </Container>
    
  )
}

export default Home;