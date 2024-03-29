import { useEffect, useState } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import SingleCard from '../components/SingleCard/SingleCard';
import './gameStyles.css'

const cardImages = [
    {"src": "/img/l_images/apple.png", matched: false},
    {"src": "/img/l_images/balloons.png", matched: false},
    {"src": "/img/l_images/ladybug.png", matched: false},
    {"src": "/img/l_images/lion.png", matched: false},
    {"src": "/img/l_images/lips.png", matched: false},
    {"src": "/img/l_images/melon.png", matched: false},
    {"src": "/img/l_images/snail.png", matched: false},
    {"src": "/img/l_images/toilet.png", matched: false},
    {"src": "/img/l_images/whale.png", matched: false},
    {"src": "/img/l_images/pencil.png", matched: false},
]

const L_Matching = () => {

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
                <h1>/l/</h1>
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

export default L_Matching;