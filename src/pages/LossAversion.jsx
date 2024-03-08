import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

// https://www.npmjs.com/package/react-custom-roulette
// https://stackoverflow.com/questions/67941474/react-custom-roulette-how-to-show-the-roulette-number

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]


function LossAversion() {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      console.log(newPrizeNumber)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  return (
    <div>
      Loss aversion activity

      <div className="wheel-container">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          spinDuration={0.3}
          disableInitialAnimation={true}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  )
}

export default LossAversion
