import { useState } from 'react'
import './Confirmation.css'

function rule(numbers) {
  const nums = numbers.map(n => parseInt(n))
  // Todos ascendentes
  const isAsc = nums[0] < nums[1] && nums[1] < nums[2]
  // La suma es par
  const sum = nums.reduce((a, b) => a + b, 0)
  const isEven = sum % 2 === 0

  return isAsc && isEven
}

function Respuesta(props){
  const { correcto } = props
  let className = ''
  if(correcto === true) className = 'correcto'
  if(correcto === false) className = 'incorrecto'

  return (
    <div className={className}>
      { correcto === true && 'Sigue la regla' }
      { correcto === false && 'NO sigue la regla' }
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
    <div>
      <form onSubmit={check}>
        <label>
          Primer número:
          <input type="number" value={numbers[0]} onChange={setNumber(0)} required/>
        </label>
        <label>
          Segundo número:
          <input type="number" value={numbers[1]} onChange={setNumber(1)} required/>
        </label>
        <label>
          Tercer número:
          <input type="number" value={numbers[2]} onChange={setNumber(2)} required/>
        </label>
        <button>Test</button>
      </form>
      <Respuesta correcto={correcto} />
    </div>
  )
}

export default Confirmation
