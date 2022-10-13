import {useState} from "react"
import Die from "./Die"

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const randomDice = []

    for(let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6)
      randomDice.push({
        value: number,
        isHeld: false
      })
    }

    return randomDice
  }
  
  const diceElements = dice.map(die => <Die value={die.value} />)
  
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
