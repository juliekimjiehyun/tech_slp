import { useEffect, useState } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import SingleCard from '../components/SingleCard/SingleCard';
import './gameStyles.css'

const cardImages = [ 
    {"src": "/img/rBlends_images/bird.png", matched: false},
    {"src": "/img/rBlends_images/bread.png", matched: false},
    {"src": "/img/rBlends_images/crayon.png", matched: false},
    {"src": "/img/rBlends_images/driving.png", matched: false},
    {"src": "/img/rBlends_images/frog.png", matched: false},
    {"src": "/img/rBlends_images/scarf.png", matched: false},
    {"src": "/img/rBlends_images/shark.png", matched: false},
    {"src": "/img/rBlends_images/squirrel.png", matched: false},
    {"src": "/img/rBlends_images/tree.png", matched: false},
    {"src": "/img/rBlends_images/worm.png", matched: false},
]

const RBlends_Matching = () => {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

            setChoiceOne(null)
            setChoiceTwo(null)
            setCards(shuffledCards)
            setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)

            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                        return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    // start a new game automatically
    useEffect(() => {
        shuffleCards()
    }, [])

  return (
    <Container>
        <Row>
            <Col>
                <h1>/r/-Blends</h1>
            </Col>
        </Row>
        <div className="gridSize">
            <Row className="my-5">
                {cards.map(card => (
                    <Col key={card.id} xs="3">
                        <SingleCard 
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                        />
                    </Col>
                ))}
            </Row>
        </div>
        <p>Turns: {turns}</p>
        <Button className="mx-auto d-block mb-5" onClick={shuffleCards}>Reset Cards</Button>
    </Container>
  )
};

export default RBlends_Matching;