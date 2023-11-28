import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';

const buttonData = [
  { label: '/k/', href: '/KMatching'},
  { label: '/g/', href: '/GMatching' },
  { label: '/f/'},
  { label: '/v/'},
  { label: '/s/'},
  { label: '/z/'},
  { label: '/l/'},
  { label: '/r/'},
  { label: '/s/-blends'},
  { label: '/l/-blends'},
  { label: '/r/-blends'},
  { label: 'Mixed'},
];

const MatchingGame = () => {
  return (
    <div>
      <h1>Matching Game</h1>
      <h3>Target Sounds</h3>
      <Container>
        <Row>
            {buttonData.map((button, index) => (
            <Col xs="3" key={index}>
              <Button className="targetBtn" href={button.href}>
                {button.label}
              </Button>
            </Col>
         
        ))}
         </Row>
      </Container>
    </div>
  );
};

export default MatchingGame;
