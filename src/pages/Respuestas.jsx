import { ReactSession }  from 'react-client-session'
import { Link } from 'react-router-dom'

function getAnchoring() {
  const anchoringMode = ReactSession.get("anchoring-mode") || 'sin datos'
  const anchoringResponse = ReactSession.get("anchoring-response") || 'sin datos'

  return { anchoringMode, anchoringResponse }
}

function getRoulete() {
  const rouleteSafe = ReactSession.get('roulete-safe') || 0
  const rouleteRisky = ReactSession.get('roulete-risky') || 0

  return { rouleteSafe, rouleteRisky }
}

function Respuestas() {

  const { anchoringMode, anchoringResponse} = getAnchoring()
  const { rouleteSafe, rouleteRisky } = getRoulete()
  const regla = ReactSession.get('regla') || ''

  return (
    <div>
      <h1>Resultados:</h1>
      <ul>
        <li>Anchoring: {anchoringMode} / {anchoringResponse} </li>
        <li>Ruleta. Segura: {rouleteSafe} Arriesgada: {rouleteRisky}</li>
        <li>Regla: {regla} </li>
      </ul>

      <Link to="/">
        <button className="btn btn-success return">Volver al menú</button>
      </Link>
    </div>
  )
}

export default Respuestas
