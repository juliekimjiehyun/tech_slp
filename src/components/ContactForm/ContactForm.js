import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './styles.css';


const ContactForm = () => {
  return (
    <div className="contactBody">
        <Form className="mt-4 mx-5">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="JohnDoe@gmail.com"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="subject">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">
                Message
              </Label>
              <Input
                id="message"
                name="message"
                placeholder="Message"
                type="textarea"
              />
            </FormGroup>
            <FormGroup check className="mb-5">
              <Input
                id="check"
                name="check"
                type="checkbox"
              />
              <Label
                check
                for="check"
              >
                Click to subscribe to our newsletter
              </Label>
              <Button style={{marginLeft: "5%"}}>
              Send
            </Button>
            </FormGroup>
        </Form>
    </div>
  )
}

export default ContactForm