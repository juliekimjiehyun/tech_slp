import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <h4>
                            Less Planning = Less Stress
                        </h4>
                        <h5>
                            Subscribe Here for weekly newsletters
                        </h5>
                        <Form>
                            <FormGroup>
                                <Label for="subscribeEmail">Email</Label>
                                <Input
                                    id="subscribeEmail"
                                    name="email"
                                    placeholder="JohnDoe@email.com"
                                    type="email"
                                />
                                <Button>
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col>
                        <p>IMG_HERE</p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="footerLogos">
                    </Col>
                </Row>
                <Row className="footerText">
                    <Col>
                        <a>Privacy Policy   |   </a>
                        <a>     Terms of Use</a>
                    </Col>
                </Row>
                <Row className="footerText">
                    <Col>
                    © Little Linguist Resources | All Rights Reserved
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}
export default Footer;