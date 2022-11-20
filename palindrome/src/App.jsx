import reactLogo from './assets/react.svg'
import './App.css'
import {useState} from 'react'
import PhraseInput from './components/PhraseInput.jsx'
import PallChecker from './components/PallChecker.jsx'
import ResultPrinter from './components/ResultPrinter.jsx'
function App() {
  const [IP, setIP] = useState("") //IP is the user inputted phrase to be evaluated
  const [isPall, setIsPall] = useState(false)

  const resultWriter = () => {
    
  }

  return (
    <div className="App">
      <h1> Destin's Palindromic Boi</h1>
      <PhraseInput setIP={setIP}/>
      <PallChecker IP={IP} setIsPall = {setIsPall}/>
      <ResultPrinter IP={IP} isPall={isPall}/>
    </div>
  )
}

export default App
