import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactSession }  from 'react-client-session'

import './Anchoring.css'

const ANCHOR_LOW = 'low'
const ANCHOR_HIGH = 'high'


function Question(props) {
  const { question, onAnswer } = props
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <p>{question}</p>
      <input type="number" onChange={e => setAnswer(e.target.value)} required />
      <button className="btn btn-secondary" onClick={() => onAnswer(answer)}>Responder</button>
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
      <Link to="/">
        <button className="btn btn-primary">Volver al menú</button>
      </Link>
    </div>
  )
}

function Anchoring() {

  const [step, setStep] = useState(1)
  const [mode, setMode] = useState(null)
  const [value, setValue] = useState(null)

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
    setValue(value)
  }

  function submit(e) {
    e.preventDefault()
    if (step === 2) ReactSession.set("anchoring-response", value)
    setStep(step + 1)
  }

  return (
    <div className="anchoring">
      <h1>Test</h1>

      <form onSubmit={submit}>
        { step === 1 && <Step1 mode={mode} onAnswer={nextStep}/> }
        { step === 2 && <Step2 onAnswer={nextStep}/> }
        { step === 3 && <Finished/> }
      </form>
    </div>
  )
}

export default Anchoring
