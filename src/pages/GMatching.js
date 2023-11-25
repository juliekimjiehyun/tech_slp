import { useEffect, useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import SingleCard from '../components/SingleCard/SingleCard';

const cardImages = [
    {"src": "/img/g_images/booger.png", matched: false},
    {"src": "/img/g_images/dog.png", matched: false},
    {"src": "/img/g_images/egg.png", matched: false},
    {"src": "/img/g_images/ghost.png", matched: false},
    {"src": "/img/g_images/glue.png", matched: false},
    {"src": "/img/g_images/guitar.png", matched: false},
    {"src": "/img/g_images/hug.png", matched: false},
    {"src": "/img/g_images/ladybug.png", matched: false},
    {"src": "/img/g_images/pig.png", matched: false},
    {"src": "/img/g_images/tiger.png", matched: false},
]
const GMatching = () => {
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
                    <h1>/g/</h1>
                    <button onClick={shuffleCards}>Reset Cards</button>
                </Col>
            </Row>
            <Row xs="5">
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
            <p>Turns: {turns}</p>
        </Container>
  )
}

export default GMatching;