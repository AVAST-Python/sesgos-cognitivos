import { useState } from 'react'
import { Link } from 'react-router-dom'

import './LossAversion.css'

import HighlightedText from '../components/HighlightedText'
import Roulette from '../components/Roulette'

// https://www.npmjs.com/package/react-custom-roulette
// https://stackoverflow.com/questions/67941474/react-custom-roulette-how-to-show-the-roulette-number

// Esperanza: 5.4
const WINNING_OPTIONS = [
  { option: '3', style: { backgroundColor: '#99FB99' }  },
  { option: '5', style: { backgroundColor: '#99FB99' }  },
  { option: '8', style: { backgroundColor: 'Lime' }  },
  { option: '9', style: { backgroundColor: 'Lime' }  },
  { option: '2', style: { backgroundColor: '#CCFFCC' }  },
]

// Esperanza: 5.43
const LOSING_OPTIONS = [
  { option: '-1', style: { backgroundColor: '#FFCECE', textColor: 'black' } },
  { option: '21', style: { backgroundColor: '#CCFFCC' }  },
  { option: '-6', style: { backgroundColor: '#E80022', textColor: 'white' } },
  { option: '35', style: { backgroundColor: 'Lime' } },
  { option: '-4', style: { backgroundColor: 'Red', textColor: 'white' } },
  { option: '-5', style: { backgroundColor: 'red', textColor: 'white' } },
]


// Good
// const LOSING_OPTIONS = [
//   { option: '-10', optionSize: 2, style: { backgroundColor: 'red', textColor: 'white' } },
//   { option: '21', style: { backgroundColor: 'Lime' }  },
//   { option: '-5', style: { backgroundColor: '#FF4545', textColor: 'white' } },
//   { option: '19', style: { backgroundColor: '#CCFFCC' } },
//   { option: '15', style: { backgroundColor: '#CCFFCC' }  },
//   { option: '8', style: { backgroundColor: '#F0FFF0' }  },
// ]


function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function LossAversion() {
  const [score, setScore] = useState(100)
  const [turning, setTurning] = useState(false)
  const [data] = useState(shuffleArray([WINNING_OPTIONS, LOSING_OPTIONS]))

  function startTurning() {
    setTurning(true)
  }

  const changeScore = result => {
    setScore(score + Number(result))
    setTurning(false)
  }

  return (
    <div>
      <HighlightedText text={score}/>
      <Roulette key='1' disabled={turning} data={data[0]} onTurn={startTurning} onResult={changeScore}/>
      <Roulette key='2' disabled={turning} data={data[1]} onTurn={startTurning} onResult={changeScore}/>

      <Link to="/">
        <button className="btn btn-success return">Volver al menú</button>
      </Link>
    </div>
  )
}

export default LossAversion
