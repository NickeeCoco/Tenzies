import {useState} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(createNewDice())

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

  
  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      {...die}
      holdDice={() => holdDice(die.id)}
    />
  )

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
  
  return (
    <main>
      <div className="diceContainer">
        {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
