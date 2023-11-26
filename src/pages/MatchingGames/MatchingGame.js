import {Container, Row, Col, Button} from 'reactstrap';

const MatchingGame = () => {
  return (
    <Container>
        <h1>Matching Game</h1>
        <h3>Target Sounds</h3>
        <Row>
            <Col>
                <Button href="/KMatching">/k/</Button>
            </Col>
            <Col>
                <Button href="/GMatching">/g/</Button>
            </Col>
            <Col>
                <Button>/f/</Button>
            </Col>
            <Col>
                <Button>/v/</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button>/s/</Button>
            </Col>
            <Col>
                <Button>/z/</Button>
            </Col>
            <Col>
                <Button>/l/</Button>
            </Col>
            <Col>
                <Button>/r/</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button>/s/-blends</Button>
            </Col>
            <Col>
                <Button>/l/-blends</Button>
            </Col>
            <Col>
                <Button>/r/-blends</Button>
            </Col>
            <Col>
                <Button>Mixed</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default MatchingGame