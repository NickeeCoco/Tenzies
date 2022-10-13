import {useState} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []

    for(let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6)
      newDice.push({
        value: number,
        isHeld: true,
        id: nanoid()
      })
    }
console.log(newDice)
    return newDice
  }
  
  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
        {...die} 
      />
  )
  
  return (
    <main>
      <div className="diceContainer">
        {diceElements}
      </div>
      <button onClick={() => setDice(allNewDice())}>Roll</button>
    </main>
  )
}

export default App
