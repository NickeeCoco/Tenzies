import {useState, useEffect} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(createNewDice())
  const [tenzies, setTenzies] = useState(false)

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function createNewDice() {
    const newDice = []

    for(let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6)
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }
  
  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }))
  }

  useEffect(() => {
    const firstValue = dice[0].value
    
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === firstValue)
    
    if(allHeld && allSameValue) {
      setTenzies(true)
    }
    
  }, [dice])

  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      {...die}
      holdDice={() => holdDice(die.id)}
    />
  )

  
  
  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
