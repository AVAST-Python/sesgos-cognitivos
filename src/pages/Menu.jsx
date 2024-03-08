import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <h1>Sesgos cognitivos</h1>
      <ul>
        <li><Link to="actividad-1">Actividad 1</Link></li>
        <li><Link to="actividad-2">Actividad 2</Link></li>
        <li><Link to="actividad-3">Actividad 3</Link></li>
      </ul>
    </div>
  )
}

export default Menu
