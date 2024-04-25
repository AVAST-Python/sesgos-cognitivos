import { ReactSession }  from 'react-client-session'
import { Link } from 'react-router-dom'

function Respuestas() {

  const anchoringMode = ReactSession.get("anchoring-mode") || 'sin datos'
  const anchoringResponse = ReactSession.set("anchoring-response") || 'sin datos'

  const rouleteSafe = ReactSession.get('roulete-safe') || 0
  const rouleteRisky = ReactSession.get('roulete-risky') || 0

  return (
    <div>
      <h1>Resultados:</h1>
      <ul>
        <li>Anchoring: {anchoringMode} / {anchoringResponse} </li>
        <li>Ruleta. Segura: {rouleteSafe} Arriesgada: {rouleteRisky}</li>
      </ul>

      <Link to="/">
        <button className="btn btn-success return">Volver al menú</button>
      </Link>
    </div>
  )
}

export default Respuestas
