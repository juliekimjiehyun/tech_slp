import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';


const ContactForm = () => {
  return (
    <div>
        <Form>
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
            <FormGroup check>
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
            </FormGroup>
            <Button>
              Sign in
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm