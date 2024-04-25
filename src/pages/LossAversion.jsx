import { useState } from 'react'
import { ReactSession }  from 'react-client-session'
import { useNavigate } from 'react-router-dom'

import './LossAversion.css'

import HighlightedText from '../components/HighlightedText'
import Roulette from '../components/Roulette'

// https://www.npmjs.com/package/react-custom-roulette
// https://stackoverflow.com/questions/67941474/react-custom-roulette-how-to-show-the-roulette-number

// Esperanza: 5.4
const SECURE_OPTIONS = [
  { option: '3', style: { backgroundColor: '#99FB99' }  },
  { option: '5', style: { backgroundColor: '#99FB99' }  },
  { option: '8', style: { backgroundColor: 'Lime' }  },
  { option: '9', style: { backgroundColor: 'Lime' }  },
  { option: '2', style: { backgroundColor: '#CCFFCC' }  },
]

// Esperanza: 5.43
const RISK_OPTIONS = [
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
  return array.sort(() => Math.random() - 0.5)
}

function LossAversion() {
  const [score, setScore] = useState(100)
  const [data] = useState(shuffleArray([SECURE_OPTIONS, RISK_OPTIONS]))
  const [turning, setTurning] = useState(false)

  const navigate = useNavigate()

  function turn(data) {
    console.log('turn')
    setTurning(true)
    const type = data === SECURE_OPTIONS ? 'roulete-safe' : 'roulete-risky'
    const current = Number(ReactSession.get(type)) || 0
    ReactSession.set(type, current + 1)
  }

  function onResult(result) {
    console.log('result', result)
    setScore(score + Number(result))
    setTurning(false)
  }

  function returnToMenu() {
    console.log('return')
    navigate('/')
  }


  return (
    <div className='loss-aversion'>
      <HighlightedText text={score}/>
      <Roulette key='1'
        data={data[0]}
        onTurn={() => turn(data[0])}
        onResult={onResult}
        enabled={!turning}
      />
      <Roulette key='2'
        data={data[1]}
        onTurn={() => turn(data[1])}
        onResult={onResult}
        enabled={!turning}
      />

      <button
        className="btn btn-success return"
        onClick={returnToMenu}
      >
        Volver al menú
      </button>
    </div>
  )
}

export default LossAversion
