import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="text-center my-5">
                <Row className="justify-content-center">
                        <h5>
                            Less Planning = Less Stress
                        </h5>
                        <p>
                            Subscribe Here for weekly newsletters
                        </p>
                        <div className="form">
                            <Form>
                                <FormGroup className="d-flex">
                                    <Input
                                        name="email"
                                        placeholder="JohnDoe@email.com"
                                        type="email"
                                    />
                                    <Button className="btn">
                                        Submit
                                    </Button>
                                </FormGroup>
                            </Form>
                        </div>
                </Row>
                <hr/>
                <Row className="justify-content-center mt-5">
                        <a>Privacy Policy   |   Terms of Use</a>
                </Row>
                <Row className="justify-content-center">
                    © Little Linguist Resources | All Rights Reserved
                </Row>
            </Container>
            <hr/>
        </footer >
    )
}
export default Footer;