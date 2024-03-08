import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Menu() {

  const navigate = useNavigate()

  function reset() {
    localStorage.clear()
  }

  function respuestas() {
    navigate('/respuestas')
  }

  return (
    <div>
      <h1>Sesgos cognitivos</h1>
      <ul>
        <li><Link to="actividad-1">Actividad 1</Link></li>
        <li><Link to="actividad-2">Actividad 2</Link></li>
        <li><Link to="actividad-3">Actividad 3</Link></li>
      </ul>
      <button className="reset" onClick={reset}>Resetear</button>
      <button className="reset" onClick={respuestas}>Respuestas</button>
    </div>
  )
}

export default Menu
