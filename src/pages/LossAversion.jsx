import { useState } from 'react'
import './LossAversion.css'

import HighlightedText from '../components/HighlightedText'
import Roulette from '../components/Roulette'

// https://www.npmjs.com/package/react-custom-roulette
// https://stackoverflow.com/questions/67941474/react-custom-roulette-how-to-show-the-roulette-number

// Esperanza: 5.4
const WINNING_OPTIONS = [
  { option: '3', style: { backgroundColor: 'white' }  },
  { option: '5', style: { backgroundColor: 'white' }  },
  { option: '8', style: { backgroundColor: 'white' }  },
  { option: '9', style: { backgroundColor: 'white' }  },
  { option: '2', style: { backgroundColor: 'white' }  },
]

// Esperanza: 5.48
const LOSING_OPTIONS = [
  { option: '-20', optionSize: 2, style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '21', style: { backgroundColor: 'white' }  },
  { option: '-20', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '35', style: { backgroundColor: 'white' } },
  { option: '32', style: { backgroundColor: 'white' }  },
  { option: '14', style: { backgroundColor: 'white' }  },
]

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function LossAversion() {
  const [score, setScore] = useState(100)
  const [data] = useState(shuffleArray([WINNING_OPTIONS, LOSING_OPTIONS]))

  const changeScore = result => {
    setScore(score + Number(result))
  }

  return (
    <div>
      <HighlightedText text={score}/>
      <button onClick={() => setScore(score+1)}>Reset</button>
      <Roulette key='1' data={data[0]} onResult={changeScore}/>,
      <Roulette key='2' data={data[1]} onResult={changeScore}/>
    </div>
  )
}

export default LossAversion
