import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactSession }  from 'react-client-session'

import './Confirmation.css'


function rule(numbers) {
  const nums = numbers.map(n => parseInt(n))
  // Todos ascendentes
  const isAsc = nums[0] < nums[1] && nums[1] < nums[2]
  // La suma es par
  // const sum = nums.reduce((a, b) => a + b, 0)
  // const isEven = sum % 2 === 0

  return isAsc // && isEven
}

function Respuesta(props){
  const { correcto } = props
  let className = ''
  if(correcto === true) className = 'correcta'
  if(correcto === false) className = 'incorrecta'

  return (
    <div className={'respuesta ' + className}>
      { correcto === true && 'Sigue la regla' }
      { correcto === false && 'NO sigue la regla' }
    </div>
  )
}


function Regla() {
  const [answer, setAnswer] = useState(ReactSession.get("regla") || '')

  function changeContent(e){
    setAnswer(e.target.value)
    ReactSession.set("regla", e.target.value)
  }

  return (
    <div>
      {/* <input type="text" value={answer} onChange={changeContent} required /> */}

      <textarea
        value={answer}
        onChange={changeContent}
        placeholder="Introducte la regla aquí..."
        rows="2"
        cols="0"
      />
    </div>
  )
}

function Confirmation() {

  const [numbers, setNumbers] = useState(['','',''])
  const [correcto, setCorrecto] = useState(null)

  function check(e){
    e.preventDefault()
    setCorrecto(rule(numbers))
  }

  function setNumber(n) {
    return e => {
      setCorrecto(null)
      const newNumbers = [...numbers]
      newNumbers[n] = e.target.value
      setNumbers(newNumbers)
    }
  }

  return (
    <div className="confirmation">
      <h1>Averigua la regla</h1>
      <form onSubmit={check}>

          <input type="number" value={numbers[0]} onChange={setNumber(0)} required/>

          <input type="number" value={numbers[1]} onChange={setNumber(1)} required/>

          <input type="number" value={numbers[2]} onChange={setNumber(2)} required/>

        <button className="btn btn-primary">Test</button>
      </form>
      <Respuesta correcto={correcto} />

      <Regla />

      <Link to="/">
        <button className="btn btn-success return">Volver al menú</button>
      </Link>
    </div>
  )
}

export default Confirmation
