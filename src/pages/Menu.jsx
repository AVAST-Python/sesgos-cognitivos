import { Link, useNavigate } from 'react-router-dom'
import './Menu.css'

function Menu() {

  const navigate = useNavigate()

  function reset() {
    localStorage.clear()
  }

  function respuestas() {
    navigate('/respuestas')
  }

  return (
    <div className="menu">
      <h1>Cómo funciona el cerebro</h1>
      <div className="activities">
        <Link to="actividad-1">
          <button className="btn btn-primary ">
            Actividad 1
          </button>
        </Link>
        <Link to="actividad-2">
          <button className="btn btn-primary ">
            Actividad 2
          </button>
        </Link>
        <Link to="actividad-3">
          <button className="btn btn-primary ">
            Actividad 3
          </button>
        </Link>
      </div>
      <button className="btn btn-success respuestas" onClick={respuestas}>Respuestas</button>
      <button className="btn reset" onClick={reset}>Resetear</button>
    </div>
  )
}

export default Menu
