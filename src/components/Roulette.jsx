import { useState, useMemo } from 'react'
import { Wheel } from 'react-custom-roulette'

import './Roulette.css'

function weightedRandomSelection(options) {
  const totalWeight = options.reduce((acc, curr) => acc + (curr.optionSize || 1), 0)
  const randomNumber = Math.random() * totalWeight

  let accumulatedWeight = 0
  for (const option of options) {
    accumulatedWeight += option.optionSize || 1
    if (randomNumber < accumulatedWeight) {
      return option
    }
  }


}

function Roulette(props) {
  const { data } = props
  const { onTurn, onResult } = props
  const { enabled } = props
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleSpinClick = () => {
    onTurn?.()
    if (!mustSpin) {
      const newPrizeNumber = weightedRandomSelection(data)
      const foo = data.indexOf(newPrizeNumber)
      setPrizeNumber(foo)
      setMustSpin(true)
    }
  }

  const wheel = useMemo(() => {
    return <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      spinDuration={0.3}
      disableInitialAnimation={true}
      fontSize={30}
      onStopSpinning={() => {
        setMustSpin(false)
        onResult?.(data[prizeNumber].option)
      }}
    />
  }, [data, mustSpin, prizeNumber, onResult])

  return (
    <div className="wheel">
      <div className="wheel-container">
        { wheel }
      </div>
      <button
        className="btn btn-primary"
        onClick={handleSpinClick}
        disabled={!enabled}
      >
          Girar
      </button>
    </div >
  )
}

export default Roulette
