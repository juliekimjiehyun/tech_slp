import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';
import './App.css'

const cardImages = [
    {"src": "/img/k_images/bicycle.png", matched: false },
    {"src": "/img/k_images/book.png", matched: false},
    {"src": "/img/k_images/candy.png", matched: false},
    {"src": "/img/k_images/car.png", matched: false},
    {"src": "/img/k_images/carrot.png", matched: false},
    {"src": "/img/k_images/cat.png", matched: false},
    {"src": "/img/k_images/chicken.png", matched: false},
    {"src": "/img/k_images/cow.png", matched: false},
    {"src": "/img/k_images/duck.png", matched: false},
    {"src": "/img/k_images/fork.png", matched: false},
    {"src": "/img/k_images/helicopter.png", matched: false},
    {"src": "/img/k_images/key.png", matched: false},
    {"src": "/img/k_images/milk.png", matched: false},
    {"src": "/img/k_images/pumpkin.png", matched: false},
    {"src": "/img/k_images/shark.png", matched: false},
    {"src": "/img/k_images/soccer.png", matched: false},
    {"src": "/img/k_images/taco.png", matched: false},
    {"src": "/img/k_images/truck.png", matched: false},
    {"src": "/img/k_images/cactus.png", matched: false},
    {"src": "/img/k_images/cookie.png", matched: false}
]

function App() {
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
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>Reset Cards</button>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard 
                        key={card.id} 
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}

            </div>
            <p>Turns: {turns}</p>
        </div>
    );
}

export default App