import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Anchoring.css'

const ANCHOR_LOW = 'low'
const ANCHOR_HIGH = 'high'

import { ReactSession }  from 'react-client-session'

function Question(props) {
  const { question, onAnswer } = props
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <p>{question}</p>
      <input type="text" onChange={e => setAnswer(e.target.value)} required />
      <button onClick={() => onAnswer(answer)}>Responder</button>
    </div>
  )
}

function AnchoringQuestionHigh({onAnswer}) {
  return (
    <Question
      question="¿Cuánto es la mitad de 50.000.000"
      onAnswer={onAnswer}
    />
  )
}

function AnchoringQuestionLow({onAnswer}) {
  return (
    <Question
      question="¿Cuánto es (5+3)/2-1?"
      onAnswer={onAnswer}
    />
  )
}

function TestQuestion({onAnswer}) {
  return (
    <Question
      question="¿Qué porcentaje de los países de África pertenecen a la ONU?"
      onAnswer={onAnswer}
    />
  )
}

function Step1({mode, onAnswer}) {
  return (
    <>
    { mode === ANCHOR_HIGH ?
        <AnchoringQuestionHigh onAnswer={onAnswer}/> :
        <AnchoringQuestionLow onAnswer={onAnswer}/>}
    </>
  )
}

function Step2({onAnswer}) {
  return (
    <TestQuestion onAnswer={onAnswer}/>
  )
}

function Finished() {
  return (
    <div>
      <p>Has terminado el test</p>
      <Link to="/">Volver al menú</Link>
    </div>
  )
}

function Anchoring() {

  const [step, setStep] = useState(1)
  const [mode, setMode] = useState(null)

  useEffect(() => {
    let mode = ReactSession.get("anchoring-mode")
    if(!mode) {
      const random = Math.floor(Math.random() * 2)
      mode = random === 0 ? ANCHOR_LOW : ANCHOR_HIGH
    }

    setMode(mode)
    ReactSession.set("anchoring-mode", mode)
  }, [])

  function nextStep(value) {
    if (step === 2) ReactSession.set("anchoring-response", value)
    console.log(value)
    setStep(step + 1)
  }

  return (
    <div>
      { step === 1 && <Step1 mode={mode} onAnswer={nextStep}/> }
      { step === 2 && <Step2 onAnswer={nextStep}/> }
      { step === 3 && <Finished/> }
    </div>
  )
}

export default Anchoring
