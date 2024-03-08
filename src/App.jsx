import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Menu from './pages/Menu'
import Anchoring from './pages/Anchoring'
import LossAversion from './pages/LossAversion'
import Confirmation from './pages/Confirmation'

const routes = [
  { path: '/', element: <Menu />},
  { path: 'actividad-1', element: <Anchoring /> },
  { path: 'actividad-2', element: <LossAversion /> },
  { path: 'actividad-3', element: <Confirmation /> },
]

const router = createBrowserRouter([{
  element: <Layout />,
  children: routes,
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
