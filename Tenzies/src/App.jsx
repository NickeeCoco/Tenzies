import {useState} from "react"
import Die from "./Die"

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const randomNumbers = []

    for(let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6)
      randomNumbers.push(number)
    }

    return randomNumbers

  }
  
  const diceElements = dice.map(die => <Die value={die} />)
  
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
