import {useState} from "react"
import Die from "./Die"

function App() {
  const [numbers, setNumbers] = useState(allNewDice())

  function allNewDice() {
    const randomNumbers = []

    for(let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6)
      randomNumbers.push(number)
    }

    return randomNumbers

  }
  
  const dieElements = numbers.map(number => <Die value={number} />)
  
  return (
    <main>
      <div className="diceContainer">
        {dieElements}
      </div>
    </main>
  )
}

export default App
