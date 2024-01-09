import { Container, Row, Col, Button } from 'reactstrap';
import './styles.css';

const buttonData = [
  { label: '/k/', href: '/KMatching'},
  { label: '/g/', href: '/GMatching' },
  { label: '/f/', href: '/FMatching'},
  { label: '/v/', href: '/VMatching'},
  { label: '/s/', href: '/SMatching'},
  { label: '/z/', href: '/ZMatching'},
  { label: '/l/', href: '/LMatching'},
  { label: '/r/', href: './RMatching'},
  { label: '/s/-blends', href: './SBlendsMatching'},
  { label: '/l/-blends', href: './LBlendsMatching'},
  { label: '/r/-blends', href: './RBlendsMatching'},
  { label: 'Vocalic /r/', href: './VocalicRMatching'},
];

const MatchingGame = () => {
  return (
    <div>
      <h1>Matching Game</h1>
      <h3>Target Sounds</h3>
      <Container className="container">
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
