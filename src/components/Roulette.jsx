import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

function weightedRandomSelection(options) {
  const totalWeight = options.reduce((acc, curr) => acc + (curr.optionSize || 1), 0);
  const randomNumber = Math.random() * totalWeight;

  let accumulatedWeight = 0;
  for (const option of options) {
    accumulatedWeight += option.optionSize || 1;
    if (randomNumber < accumulatedWeight) {
      return option.option;
    }
  }
}


function Roulette(props) {
  const { data, onResult } = props
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = weightedRandomSelection(data)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  return (
    <div>
      <div className="wheel-container">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          spinDuration={0.3}
          disableInitialAnimation={true}
          onStopSpinning={() => {
            setMustSpin(false)
            onResult?.(prizeNumber)
          }}
        />
      </div>
      <button onClick={handleSpinClick}>SPIN</button>
    </div >
  )
}

export default Roulette
